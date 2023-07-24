import { createContext } from "react";
import { action, observable } from "mobx";
import { Constants } from "~/constants";

const themes = ["system", "light", "dark"];

const hexToRgb = (hex: string) => {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
        result[3],
        16,
      )}`
    : null;
};

const lightTheme = {
  "--color-text": "#111111",
  "--color-text-alt": "#202020",
  "--color-bg": "#ffffff",
  "--color-bg-alt": "#fafafa",
  "--color-skeleton": "#d5d5d5",
  "--color-input": "#a0a1b7",
  "--color-input-alt": "#e0e0e0",
  "--color-placeholder": "#a0a1b7",
  "--color-header": "#070828",
  "--color-dark": "#111111",
  "--theme": "#111111",
  "--color-text-rgb": hexToRgb("#111111"),
  "--color-text-alt-rgb": hexToRgb("#202020"),
  "--color-bg-rgb": hexToRgb("#ffffff"),
  "--color-bg-alt-rgb": hexToRgb("#fafafa"),
  "--color-input-rgb": hexToRgb("#a0a1b7"),
  "--scrollbar-track": "#ffffff",
};
const darkTheme = {
  "--color-text": "#fafafa",
  "--color-text-alt": "#e5e5e5",
  "--color-bg": "#111111",
  "--color-bg-alt": "#202020",
  "--color-skeleton": "#555",
  "--color-input": "#e5e5e5",
  "--color-input-alt": "#e5e5e5",
  "--color-placeholder": "#555",
  "--color-header": "#e5e5e5",
  "--color-dark": "#111111",
  "--color-text-rgb": hexToRgb("#fafafa"),
  "--color-text-alt-rgb": hexToRgb("#e5e5e5"),
  "--color-bg-rgb": hexToRgb("#111111"),
  "--color-bg-alt-rgb": hexToRgb("#202020"),
  "--color-input-rgb": hexToRgb("#a0a1b7"),
  "--scrollbar-track": "#000000",
};

export class ThemeStore {
  // @ts-ignore
  @observable theme: string;
  // @ts-ignore
  @observable _theme: string;

  constructor() {
    if (typeof window !== "undefined") {
      const fetchedTheme = localStorage.getItem(Constants.LOCAL_STORAGE.THEME);
      this.theme =
        fetchedTheme && themes.includes(fetchedTheme)
          ? fetchedTheme
          : themes[2];
      this._theme = this.theme;
      this.injectTheme();
    }
  }

  // @ts-ignore
  @action setTheme = (theme: string) => {
    localStorage.setItem(Constants.LOCAL_STORAGE.THEME, theme);
    this.theme = theme;
    this._theme = this.theme;
    this.injectTheme();
  };

  private injectTheme = () => {
    switch (this.theme) {
      case "light":
        applyTheme(lightTheme);
        break;
      case "dark":
        applyTheme(darkTheme);
        break;
      case "system":
        const mq = window.matchMedia("(prefers-color-scheme: dark)");
        applyTheme(mq.matches ? darkTheme : lightTheme);
        this._theme = mq.matches ? "dark" : "light";
        break;
    }

    function applyTheme(theme: any) {
      Object.keys(theme).map((key) => {
        const value = theme[key];
        document.documentElement.style.setProperty(key, value);
      });
    }
  };
}

export default createContext(new ThemeStore());
