import getEnv from "~/utils/env";
import { redirect } from "@remix-run/node";
import { requireAccessToken } from "~/utils/session.server";
import getRecaptchaToken from "~/utils/recaptcha";

const env = getEnv();

if (!env.API_BASE_URL) {
  throw new Error("API_BASE_URL is missing in .env");
}

const API = {
  BASE_URL: env.API_BASE_URL,
  ENDPOINTS: {
    USERS: {
      BASE_URL: () => "/users",
      RESUME_UPLOAD: () => "/upload/resume",
      NOTIFICATIONS: () => "/notifications",
      APPLICATIONS: () => "/applications",
      ACTIVITY: () => "/activity",
    },
    AUTH: {
      BASE_URL: () => "/auth",
      ACCESS_TOKEN: (code: string) => `/google/token?code=${code}`,
      REFRESH_TOKEN: (code: string) => `/google/refresh?refresh_token=${code}}`,
    },
  },
};

export const getUserDetails = async (request: Request): Promise<User> => {
  const accessToken = await requireAccessToken(request);
  const recaptchaToken = await getRecaptchaToken("getUserDetails");

  const res = await fetch(API.BASE_URL + API.ENDPOINTS.USERS.BASE_URL(), {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "X-Recaptcha-Token": recaptchaToken,
    },
  });

  return res.json();
};

export const updateUserDetails = async (request: Request, user: UpdateUser) => {
  const accessToken = await requireAccessToken(request);
  const recaptchaToken = await getRecaptchaToken("updateUserDetails");

  const res = await fetch(API.BASE_URL + API.ENDPOINTS.USERS.BASE_URL(), {
    method: "PUT",
    body: JSON.stringify(user),
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      "X-Recaptcha-Token": recaptchaToken,
    },
  });

  return res.json();
};

export const uploadResume = async (
  request: Request,
  data: AsyncIterable<Uint8Array>
) => {
  const accessToken = await requireAccessToken(request);
  const recaptchaToken = await getRecaptchaToken("uploadResume");

  const formData = new FormData();
  formData.append("resume", data.toString());

  const res = await fetch(
    API.BASE_URL +
      API.ENDPOINTS.USERS.BASE_URL() +
      API.ENDPOINTS.USERS.RESUME_UPLOAD(),
    {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "multipart/form-data",
        "X-Recaptcha-Token": recaptchaToken,
      },
    }
  );

  return res.json();
};

export const getNotifications = async (request: Request) => {
  const accessToken = await requireAccessToken(request);
  const recaptchaToken = await getRecaptchaToken("getNotifications");

  const res = await fetch(
    API.BASE_URL +
      API.ENDPOINTS.USERS.BASE_URL() +
      API.ENDPOINTS.USERS.NOTIFICATIONS(),
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "X-Recaptcha-Token": recaptchaToken,
      },
    }
  );

  return res.json();
};

export const getApplications = async (request: Request) => {
  const accessToken = await requireAccessToken(request);
  const recaptchaToken = await getRecaptchaToken("getApplications");

  const res = await fetch(
    API.BASE_URL +
      API.ENDPOINTS.USERS.BASE_URL() +
      API.ENDPOINTS.USERS.APPLICATIONS(),
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "X-Recaptcha-Token": recaptchaToken,
      },
    }
  );

  return res.json();
};

export const getUserActivity = async (request: Request) => {
  const accessToken = await requireAccessToken(request);
  const recaptchaToken = await getRecaptchaToken("getUserActivity");

  const res = await fetch(
    API.BASE_URL +
      API.ENDPOINTS.USERS.BASE_URL() +
      API.ENDPOINTS.USERS.ACTIVITY(),
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "X-Recaptcha-Token": recaptchaToken,
      },
    }
  );

  return res.json();
};

export const getAccessTokenFromCode = async (request: Request) => {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const recaptchaToken = await getRecaptchaToken("getAccessTokenFromCode");

  if (!code) return redirect("/");

  const res = await fetch(
    API.BASE_URL +
      API.ENDPOINTS.AUTH.BASE_URL() +
      API.ENDPOINTS.AUTH.ACCESS_TOKEN(code),
    {
      method: "POST",
      headers: {
        "X-Recaptcha-Token": recaptchaToken,
      }
    }
  );

  return res.json();
};

export const getAccessTokenFromRefreshToken = async (refreshToken: string) => {
  const res = await fetch(
    API.BASE_URL +
      API.ENDPOINTS.AUTH.BASE_URL() +
      API.ENDPOINTS.AUTH.REFRESH_TOKEN(refreshToken)
  );

  return res.json();
};
