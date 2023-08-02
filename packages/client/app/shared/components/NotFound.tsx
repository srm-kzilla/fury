import notFoundStyles from "~/styles/shared/components/NotFound.css";
import { Link } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: notFoundStyles,
  },
];

type NotFoundProps = {
  code: number;
  description?: string;
  title?: string;
  image?: any;
};

const NotFound = ({ code }: NotFoundProps) => {
  const errors = [
    {
      status: 404,
      description:
        "You must have been looking for something strange to find this page.",
    },
    {
      status: 500,
      description: "Oops! Something broke. Try again in a while.",
    },
    {
      status: 413,
      description:
        "🗄Oops! Looks like the file you uploaded is too large to be stored.",
    },
    {
      status: 409,
      description:
        "Twins? You have already registered with your email address.",
    },
    {
      status: 401,
      description:
        "Beep-bop? The server cannot verify your humanity. Try starting over.",
    },
  ];

  let error = errors.find((err) => err.status === code) || errors[0];

  return (
    <div className="kz-not-found-container">
      <div>
        <img src="/not_found.svg" alt="not found" />
        <div>
          <h1>{error?.description}</h1>
          <h5>
            <Link to="/">
              Take me back to <span>Home</span>.
            </Link>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
