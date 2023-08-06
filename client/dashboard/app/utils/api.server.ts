import getEnv from "~/shared/utils/env";
import { redirect } from "@remix-run/node";
import { requireAccessToken } from "~/utils/session.server";

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
    },
    AUTH: {
      BASE_URL: () => "/auth",
      ACCESS_TOKEN: (code: string) => `/google/token?code=${code}`,
    },
  },
};

export const getUserDetails = async (request: Request): Promise<User> => {
  const accessToken = await requireAccessToken(request);

  const res = await fetch(API.BASE_URL + API.ENDPOINTS.USERS.BASE_URL(), {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return res.json();
};

export const uploadResume = async (
  request: Request,
  data: AsyncIterable<Uint8Array>
) => {
  const accessToken = await requireAccessToken(request);

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
      },
    }
  );

  return res.json();
};

export const getAccessTokenFromCode = async (request: Request) => {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");

  if (!code) return redirect("/");

  const res = await fetch(
    API.BASE_URL +
      API.ENDPOINTS.AUTH.BASE_URL() +
      API.ENDPOINTS.AUTH.ACCESS_TOKEN(code),
    {
      method: "POST",
    }
  );

  return res.json();
};
