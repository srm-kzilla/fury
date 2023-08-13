import { createCookieSessionStorage, redirect } from "@remix-run/node";
import getEnv from "~/utils/env";

const env = getEnv();
const sessionSecret = env.SESSION_SECRET;

if (!sessionSecret) {
  throw new Error("SESSION_SECRET is missing in .env");
}

const { commitSession, getSession, destroySession } =
  createCookieSessionStorage({
    cookie: {
      name: "kz_recruitment_session",
      secure: true,
      secrets: [sessionSecret],
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60,
      httpOnly: true,
    },
  });

export async function createUserSession(
  accessToken: string,
  refreshToken: string,
  expiresIn: string,
  redirectTo: string
) {
  let session = await getSession();

  session.set("access_token", accessToken);
  session.set("refresh_token", refreshToken);
  session.set("expires_in", expiresIn);

  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}

async function getUserSession(request: Request) {
  return getSession(request.headers.get("Cookie"));
}

export async function getAccessToken(request: Request) {
  let session = await getUserSession(request);
  let accessToken = session.get("access_token");

  if (typeof accessToken !== "string") return null;

  return accessToken;
}

export async function requireAccessToken(request: Request) {
  const accessToken = await getAccessToken(request);

  if (!accessToken) {
    throw redirect(`/auth`);
  }

  return accessToken;
}

export async function logout(request: Request) {
  let session = await getUserSession(request);
  return redirect(getEnv().LANDING_PAGE_URL as string, {
    headers: {
      "Set-Cookie": await destroySession(session),
    },
  });
}

export async function createFormSession(request: Request) {
  const session = await getUserSession(request);

  session.set("formSession", {
    domain: null,
    answers: [],
  });

  return redirect("/applications/domain-select", {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}

export async function getFormSession(request: Request): Promise<FormSession> {
  const session = await getUserSession(request);

  return session.get("formSession");
}

export async function updateFormSession(
  request: Request,
  data: any,
  redirectTo: string
) {
  const session = await getUserSession(request);

  const formSession = session.get("formSession");
  if (!formSession) {
    return redirect("/applications/new");
  }

  session.set("formSession", data);

  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}

export async function destroyFormSession(request: Request) {
  const session = await getUserSession(request);

  session.set("formSession", null);

  return redirect("/", {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}
