import notFoundStyles from "~/styles/components/NotFound.css";
import { Form, Link } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: notFoundStyles,
  },
];

type NotFoundProps = {
  code?: number;
  description?: string;
  customError?: string;
  link?: string;
  title?: string;
  image?: any;
};

const NotFound = ({ code, customError, link }: NotFoundProps) => {
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
          <h1>{customError ? customError : error?.description}</h1>
            <h5>
              Something went wrong; please try refreshing the page;
            </h5>
          <Form method="post" action="/logout" className="form">
            <button type="submit">
              <h5>
                <span>Click here</span>
              </h5>
            </button>
            <h5>
              to return to the Home page.
            </h5>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
