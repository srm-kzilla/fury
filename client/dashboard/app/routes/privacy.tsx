import type { LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";

export const loader: LoaderFunction = () =>
  redirect("https://recruitment.srmkzilla.net/privacy-policy");
