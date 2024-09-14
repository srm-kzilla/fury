import headbarStyles from "~/styles/components/Headbar.css";
import type { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: headbarStyles,
  },
];

const Headbar = () => {
  return (
    <div className="kz-headbar">
      <p>
        Dear Freshers, we see you can&apos;t wait. Recruitments are now open!
        :&#41;{" "}
        <a
          href="https://photos.app.goo.gl/FQTcCjWnXgPB5r296"
          className="underline decoration-dashed"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          #2023Wrapped
        </a>
      </p>
    </div>
  );
};

export default Headbar;
