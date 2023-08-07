import { toast } from "~/shared/utils/toast";
import { createUserSession } from "~/utils/session.server";
import { getAccessTokenFromCode } from "~/utils/api.server";
import { json } from "@remix-run/node";
import { useLoaderData, useNavigate } from "@remix-run/react";
import { useEffect } from "react";
import { Loading } from "~/components";
import type { LoaderFunction } from "@remix-run/node";

type LoaderData = {
  error?: string;
};

export const loader: LoaderFunction = async ({ request }) => {
  const data = await getAccessTokenFromCode(request);

  if (data.error) {
    return json({
      error: "Use SRM Email to Register",
    });
  }

  const { access_token, refresh_token, expires_in } = data;

  return createUserSession(
    access_token,
    refresh_token,
    expires_in,
    "/"
  );
};

export default function OAuthProviderCallback() {
  const navigate = useNavigate();
  const { error } = useLoaderData<LoaderData>();

  useEffect(() => {
    toast({
      title: "Not Allowed!",
      theme: "error",
      message: error,
    });

    const timeout = setTimeout(() => navigate("/auth"), 5000);

    return () => clearInterval(timeout);
  }, []);

  return <Loading />;
}
