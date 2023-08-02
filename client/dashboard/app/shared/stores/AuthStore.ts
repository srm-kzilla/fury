import { createContext } from "react";
import { action, computed, observable } from "mobx";
import moment from "moment";
import getEnv from "~/shared/utils/env";

export interface User {
  given_name: string;
  family_name: string;
  email: string;
}

interface Authorization {
  access_token: string;
  provider: string;
  refresh_token: string;
}

const env = getEnv();

export class AuthStore {
  // @ts-ignore
  @observable endTime: number = env.APPLICATION_DEADLINE;
  // @ts-ignore
  @observable timeLeft: number = this.endTime - Date.now();

  // @ts-ignore
  @computed get timeLeftDuration() {
    return moment.duration(this.timeLeft, "milliseconds");
  }

  // @ts-ignore
  @observable user: any | undefined;
  // @ts-ignore
  @observable authorization: Authorization | undefined;
  interval: any;

  constructor() {
    if (typeof window !== "undefined") {
      this.authorization = {
        access_token: localStorage.getItem("access_token") || "",
        provider: localStorage.getItem("provider") || "",
        refresh_token: localStorage.getItem("refresh_token") || "",
      };
    }
  }

  // @ts-ignore
  @action setUser = (user: User | undefined) => {
    this.user = user;
    this.setDeadline();
  };

  setDeadline() {
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      if (!this.user) return clearInterval(this.interval);
      this.timeLeft = this.endTime - Date.now();
    }, 1000);
  }

  // @ts-ignore
  @action setAuthorization = (authorization: Authorization | undefined) => {
    if (!authorization) {
      this.authorization = undefined;
      localStorage.removeItem("access_token");
      localStorage.removeItem("provider");
      localStorage.removeItem("refresh_token");
      return;
    }

    this.authorization = { ...this.authorization, ...authorization };
    localStorage.setItem("access_token", authorization?.access_token);
    localStorage.setItem("provider", authorization?.provider);
    localStorage.setItem("refresh_token", authorization?.refresh_token);
  };
}

export default createContext(new AuthStore());
