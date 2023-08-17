import getEnv from "~/utils/env";
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
      NOTIFICATIONS: () => "/notifications",
      APPLICATIONS: () => "/applications",
      ACTIVITY: () => "/activity",
    },
    APPLICATION: {
      BASE_URL: () => "/application",
      DELETE_DRAFT: (domain: string) => `/${domain}`,
      SUBMIT_APPLICATION: (domain: string) => `/submit/${domain}`
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

  const res = await fetch(API.BASE_URL + API.ENDPOINTS.USERS.BASE_URL(), {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return res.json();
};

export const updateUserDetails = async (request: Request, user: UpdateUser) => {
  const accessToken = await requireAccessToken(request);

  const res = await fetch(API.BASE_URL + API.ENDPOINTS.USERS.BASE_URL(), {
    method: "PUT",
    body: JSON.stringify(user),
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });

  return res.json();
};

export const getNotifications = async (request: Request) => {
  const accessToken = await requireAccessToken(request);

  const res = await fetch(
    API.BASE_URL +
      API.ENDPOINTS.USERS.BASE_URL() +
      API.ENDPOINTS.USERS.NOTIFICATIONS(),
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return res.json();
};

export const getApplications = async (request: Request): Promise<{ applications: Application[] }> => {
  const accessToken = await requireAccessToken(request);

  const res = await fetch(
    API.BASE_URL +
      API.ENDPOINTS.USERS.BASE_URL() +
      API.ENDPOINTS.USERS.APPLICATIONS(),
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return res.json();
};

export const getUserActivity = async (request: Request) => {
  const accessToken = await requireAccessToken(request);

  const res = await fetch(
    API.BASE_URL +
      API.ENDPOINTS.USERS.BASE_URL() +
      API.ENDPOINTS.USERS.ACTIVITY(),
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
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

export const createApplication = async (request: Request, domain: string) => {
  const accessToken = await requireAccessToken(request);

  const res = await fetch(API.BASE_URL + API.ENDPOINTS.APPLICATION.BASE_URL(), {
    method: "POST",
    body: JSON.stringify({
      domain,
    }),
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });

  return res.json();
};

export const updateApplication = async (
  request: Request,
  domain: string,
  answers: Array<Answer>
) => {
  const accessToken = await requireAccessToken(request);

  const res = await fetch(API.BASE_URL + API.ENDPOINTS.APPLICATION.BASE_URL(), {
    method: "PUT",
    body: JSON.stringify({
      type: "draft",
      domain,
      questions: answers,
    }),
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });

  return res.json();
};

export const submitApplication = async (request: Request, domain: string) => {
  const accessToken = await requireAccessToken(request);

  const res = await fetch(
    API.BASE_URL +
      API.ENDPOINTS.APPLICATION.BASE_URL() +
      API.ENDPOINTS.APPLICATION.SUBMIT_APPLICATION(domain),
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    }
  );

  return res.json();
};

export const getDraftApplication = async (request: Request) => {
  const { applications } = await getApplications(request);

  const draftApplication = applications.find(application => application.status === "draft");

  if (!draftApplication) return null;

  return draftApplication;
}

export const deleteDraftApplication = async (
  request: Request,
  domain: string
) => {
  const accessToken = await requireAccessToken(request);

  const res = await fetch(
    API.BASE_URL +
      API.ENDPOINTS.APPLICATION.BASE_URL() +
      API.ENDPOINTS.APPLICATION.DELETE_DRAFT(domain),
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
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
