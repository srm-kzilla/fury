import toast from "~/utils/toast.client";
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
    if (data.error === "only 1st and 2nd years can apply") {
      throw json(
        { message: "Sorry, Only 1st and 2nd years can apply" },
        { status: 400 }
      );
    } else if (data.error === "use srm mail id") {
      throw json({ message: "Use SRM Email to Register" }, { status: 400 });
    } else {
      console.error(data.error);
      console.log(data);
      throw json({ message: "Something went wrong" }, { status: 400 });
    }
  }

  const { access_token, refresh_token, expires_in } = data;

  return createUserSession(access_token, refresh_token, expires_in, "/");
};

export default function OAuthProviderCallback() {
  const navigate = useNavigate();
  const { error } = useLoaderData<LoaderData>();

  useEffect(() => {
    if (error) {
      toast.error(error);
    }

    const timeout = setTimeout(() => navigate("/auth"), 5000);

    return () => clearInterval(timeout);
  }, []);

  return <Loading />;
}
