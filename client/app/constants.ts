import LOGO from "./assets/images/srmkzilla_logo_black.svg";
import SRMKZILLA_LOGO_BLACK from "./assets/images/srmkzilla_logo_black.svg";
import SRMKZILLA_LOGO_WHITE from "./assets/images/srmkzilla_logo_white.svg";
import HERO_COVER from "./assets/images/hero.svg";
import PLACEHOLDER from "./assets/images/placeholder.jpg";
import SRMKZILLA_LOGO_BLACK_MONO from "./assets/images/srmkzilla_logo_black_mono.png";
import NOT_FOUND from "./assets/images/not_found.svg";
import PUSH from "./assets/images/push.svg";
import MASK_PARROT from "./assets/images/mask_parrot.gif";
import SRMKZILLA_LOGO_WHITE_MONO from "./assets/images/srmkzilla_logo_white_mono.png";
import MAIL from "./assets/images/mail.svg";
import LANYARD from "./assets/images/lanyard.png";
import EMPTY from "./assets/images/empty.svg";

export const Assets = {
  LOGO,
  SRMKZILLA_LOGO_BLACK,
  SRMKZILLA_LOGO_WHITE,
  HERO_COVER,
  PLACEHOLDER,
  SRMKZILLA_LOGO_BLACK_MONO,
  SRMKZILLA_LOGO_WHITE_MONO,
  NOT_FOUND,
  PUSH,
  MASK_PARROT,
  MAIL,
  LANYARD,
  EMPTY,
};

export const Constants = {
  LOCAL_STORAGE: {
    THEME: "theme",
    SHOW_COOKIE_PROMPT: "show_cookie_prompt",
  },
};

export const API = {
  BASE_URL: "https://api.srmkzilla.net/v1",
  // BASE_URL: process.env.REACT_APP_BASE_URL,
  ENDPOINTS: {
    USERS: {
      BASE_URL: function () {
        return "/users";
      },
      ACTIVITY: function () {
        return "/activity";
      },
      NOTIFICATIONS: function () {
        return "/notifications";
      },
      PROJECTS: function (slug?: string) {
        return `/projects${slug ? `/${slug}` : ""}`;
      },
      REPOS: function () {
        return "/repos";
      },
      DELETE_PROJECT: function () {
        return "/projects/delete";
      },
      CHECK_IN: function (slug: string) {
        return "/users/projects/checkin";
      },
    },
    AUTH: {
      BASE_URL: function () {
        return "/auth";
      },
      EXCHANGE_TOKEN: function () {
        return `/github/token`;
      },
      USER_INFO: function () {
        return `/github/userinfo`;
      },
      ACCESS_TOKEN: function () {
        return `/google/token`;
      },
    },
    INTERVIEWS: {
      SCHEDULE_INTERVIEW: function () {
        return "/interviews";
      },
      GET_INTERVIEW: function (id: string) {
        return `/interviews/${id}`;
      },
      GET_INTERVIEW_SLOTS: function () {
        return `/interviews/slots`;
      },
    },
    PROJECTS: {
      BASE_URL: function () {
        return "/projects";
      },
      CREATE: function () {
        return "/projects/user/add";
      },
      SUBMIT: function () {
        return "/projects/user/update";
      },
      BLOB: function () {
        return "/blob/upload";
      },
    },
    DATA: {
      SKILLS: function () {
        return "/skills";
      },
    },
    HEADLINE: function () {
      return "/headline";
    },
    APPLICATIONS: {
      BASE_URL: function () {
        return "/applications";
      },
      CREATE: function () {
        return "/add";
      },
      SINGLE_APPLICATION: function (slug: string) {
        return `/get/${slug}`;
      },
    },
  },
};
