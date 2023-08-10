import { logout } from "~/utils/session.server";
import { redirect } from "@remix-run/node";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";

export let action: ActionFunction = ({ request }) => logout(request);

export let loader: LoaderFunction = () => redirect("/");
