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
    APPLICATIONS: {
      BASE_URL: () => "/application",
    },
    AUTH: {
      BASE_URL: () => "/auth",
      ACCESS_TOKEN: (code: string) => `/google/token?code=${code}`,
    },
  },
};;

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

export const getApplications = async (request: Request) => {
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

export const postDraftApplication = async (request: Request, domain: string, answers: Array<Answer>) => {
  const { regNo } = await getUserDetails(request);

  const res = await fetch(
    API.BASE_URL + API.ENDPOINTS.APPLICATIONS.BASE_URL(),
    {
      method: "POST",
      body: JSON.stringify({
        regNo,
        type: "draft",
        application: {
          domain,
          questions: answers
        }
      }),
      headers: {
        "Content-Type": "application/json",
      }
    }
  );

  return res.json();
}

export const postFinalApplication = async (request: Request, domain: string, answers: Array<Answer>) => {
  const { regNo } = await getUserDetails(request);

  const res = await fetch(
    API.BASE_URL + API.ENDPOINTS.APPLICATIONS.BASE_URL(),
    {
      method: "POST",
      body: JSON.stringify({
        regNo,
        type: "draft",
        application: {
          domain,
          questions: answers
        }
      }),
      headers: {
        "Content-Type": "application/json",
      }
    }
  );

  console.log("[res] ", res);

  return null;
}
