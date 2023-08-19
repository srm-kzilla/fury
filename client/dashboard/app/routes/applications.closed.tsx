import { BiHomeAlt } from "react-icons/bi";
import { Link } from "@remix-run/react";
import formClosedStyles from "~/styles/pages/FormClosed.css";
import type {LinksFunction, LoaderFunction} from "@remix-run/node";
import getEnv from "~/utils/env";
import {redirect} from "@remix-run/node";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: formClosedStyles,
  },
];

export const loader: LoaderFunction = () => {
  const env = getEnv();
  const endTime = parseInt(env.APPLICATION_DEADLINE!);

  if (Date.now() < endTime) {
    return redirect("/dashboard");
  }

  return null;
}

export default function FormClosed() {
  return (
    <div className="kz-form-closed">
      <Link to="/" prefetch="viewport">
        <BiHomeAlt size={36} className="home-icon" title="Home" />
      </Link>
      <h1>Bummer! That ship has sailed</h1>
      <p>
        We are not accepting any more applications for #Recruitment2023. Nothing
        to worry about, though. We'd love to see you apply again the next time
        around!
      </p>
    </div>
  );
}
