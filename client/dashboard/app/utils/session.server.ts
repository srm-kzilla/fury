import { createCookieSessionStorage, redirect } from "@remix-run/node";
import getEnv from "~/shared/utils/env";

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

function getUserSession(request: Request) {
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
    throw redirect(`/start`);
  }

  return accessToken;
}

export async function logout(request: Request) {
  let session = await getUserSession(request);
  return redirect("/", {
    headers: {
      "Set-Cookie": await destroySession(session),
    },
  });
}