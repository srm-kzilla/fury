import { requireAccessToken } from "~/utils/session.server";
import { redirect } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async ({ request }) => {
  await requireAccessToken(request);

  return redirect("/dashboard");
};
