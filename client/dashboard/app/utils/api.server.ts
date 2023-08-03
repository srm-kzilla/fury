import getEnv from "~/shared/utils/env";
import { redirect } from "@remix-run/node";

const env = getEnv();

if (!env.API_BASE_URL) {
  throw new Error("API_BASE_URL is missing in .env");
}

const API = {
  BASE_URL: env.API_BASE_URL,
  ENDPOINTS: {
    AUTH: {
      BASE_URL: () => "/auth",
      ACCESS_TOKEN: (code: string) => `/google/token?code=${code}`,
    },
  },
};

export const getAccessTokenFromCode = async (request: Request) => {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");

  if (!code) return redirect("/");

  const res = await fetch(API.BASE_URL + API.ENDPOINTS.AUTH.BASE_URL() + API.ENDPOINTS.AUTH.ACCESS_TOKEN(code), {
      method: "POST"
    }
  );

  return res.json();
};
