import qs from "querystring";
import getEnv from "~/utils/env";
import { redirect } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = ({ request }) => {
  const env = getEnv();
  const url =
    "https://accounts.google.com/o/oauth2/v2/auth?" +
    qs.stringify({
      client_id: env.OAUTH_CLIENT_ID,
      redirect_uri: env.OAUTH_REDIRECT_URI,
      response_type: "code",
      access_type: "offline",
      prompt: "consent",
      scope: [
        "https://www.googleapis.com/auth/userinfo.email",
        "https://www.googleapis.com/auth/userinfo.profile",
      ].join(" "),
    });

  return redirect(url);
};
