import loadingStyles from "~/styles/components/Loading.css";
import type { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: loadingStyles,
  },
];

const Loading = () => {
  return <div className="kz-loading"></div>;
};

export default Loading;
