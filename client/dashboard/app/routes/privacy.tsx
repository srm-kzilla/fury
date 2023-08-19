import type { LoaderFunction, V2_MetaFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import getEnv from "~/utils/env";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Privacy Policy | SRMKZILLA #Recruitments'23" },
    {
      name: "description",
      content: "Privacy policy srmkzilla recruitments'23",
    },
  ];
};

const loader: LoaderFunction = () =>
  redirect(`${getEnv().LANDING_PAGE_URL}/privacy-policy`);
export default loader;
