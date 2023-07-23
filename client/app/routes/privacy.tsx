import { redirect } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = () => redirect("https://gist.github.com/shawshankkumar/faf6f0028e01ae56610dc3b2830a777e");
