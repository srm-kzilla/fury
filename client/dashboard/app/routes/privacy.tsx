import type { LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import getEnv from "~/utils/env";

export const loader: LoaderFunction = () =>
  redirect(`${getEnv().LANDING_PAGE_URL}/privacy-policy`);
