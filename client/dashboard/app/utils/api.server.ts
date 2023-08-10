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

export const getUserAvatar = async (user: {
  _id?: string;
  regNo?: string;
  name: any;
  year?: number;
  email?: string;
  gender?: string | undefined;
  branch?: string | undefined;
  resume?: string | undefined;
  contact?: string | undefined;
  createdAt?: Date;
  application?: Application[];
  socials?: {
    github?: string | undefined;
    linkedin?: string | undefined;
    portfolio?: string | undefined;
  };
}): Promise<string> => {
  try {
    const res = await fetch(
      `https://api.dicebear.com/6.x/notionists-neutral/svg?seed=${user.name}`
    );
    const buffer = await res.arrayBuffer();
    const dataUri = `data:image/svg+xml;base64,${Buffer.from(buffer).toString(
      "base64"
    )}`;

    return dataUri as unknown as Promise<string>;
  } catch (err) {
    console.log(err);
    return "";
  }
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

  return res.status;
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
