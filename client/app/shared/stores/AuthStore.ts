import { createContext } from "react";
import { action, computed, observable } from "mobx";
import moment from "moment";

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

export class AuthStore {
  // @ts-ignore
  @observable timeLeft: number =
    1692489600 - Date.now();

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
      this.timeLeft = 1692489600 - Date.now();
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
