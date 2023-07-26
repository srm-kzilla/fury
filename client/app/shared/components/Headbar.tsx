import headbarStyles from "~/styles/shared/components/Headbar.css";
import Markdown from "markdown-to-jsx";
import type { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: headbarStyles,
  },
];

const Headbar = ({ headline }: { headline?: string }) => {
  return headline ? (
    <div className="kz-headbar">
      <Markdown>{headline}</Markdown>
    </div>
  ) : null;
};

export default Headbar;
