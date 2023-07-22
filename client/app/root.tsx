import {
  isRouteErrorResponse,
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";
import { ReactNode, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import classNames from "classnames";
import rootStyles from "~/styles/index.css";
import appStyles from "~/styles/App.css";
import { Headbar, NotFound } from "~/shared/components";
import { links as navbarLinks } from "~/shared/components/Navbar";
import { links as headbarLinks } from "~/shared/components/Headbar";
import { links as footerLinks } from "~/shared/components/Footer";
import { links as notFoundLinks } from "~/shared/components/NotFound";
import { json } from "@remix-run/node";
import { BiX } from "react-icons/bi";
import { Constants } from "~/constants";
import { APIService } from "~/shared/services/apiService";
import type { LinksFunction, LoaderFunction } from "@remix-run/node";

export const links: LinksFunction = () => {
  return [
    ...navbarLinks(),
    ...headbarLinks(),
    ...footerLinks(),
    ...notFoundLinks(),
    {
      rel: "stylesheet",
      href: rootStyles,
    },
    {
      rel: "stylesheet",
      href: appStyles,
    },
  ];
};

export const loader: LoaderFunction = async () => {
  const { data: { headline }} = await APIService.getInstance().fetchHeadline();

  return json({ headline });
}

function App() {
  const { headline } = useLoaderData<typeof loader>();

  return (
    <>
      <Layout>
        <Headbar headline={headline} />
        <div className="App">
          <Outlet />
          <Cookie />
          <ToastContainer pauseOnFocusLoss={false} />
        </div>
      </Layout>
    </>
  );
}

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        <title>SRMKZILLA Recruitments '23</title>
      </head>
      <body>
      <ScrollRestoration />
      <Scripts />
      <LiveReload />
      {children}
      </body>
      </html>
    </>
  );
}

const Cookie = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (
      localStorage.getItem(Constants.LOCAL_STORAGE.SHOW_COOKIE_PROMPT) ===
      "true"
    )
      setOpen(false);
    else setOpen(true);
  }, []);

  const close = () => {
    setOpen(false);
  };

  const accept = () => {
    localStorage.setItem(Constants.LOCAL_STORAGE.SHOW_COOKIE_PROMPT, "true");
    setOpen(false);
  };

  return (
    <div className={classNames("kz-cookie", { open })}>
      <span>
        <BiX size={32} onClick={close} />
      </span>
      <div className="content">
        <h3>Life is like a box of cookies</h3>
        <p>
          You never know what you're gonna get. Unless you read our{" "}
          <Link to="/privacy">Privacy</Link>.
          <br />
          Cookies help us provide you with more personalized experiences and
          allow better web analytics for us.
        </p>
      </div>
      <a className="btn" onClick={accept}>
        Accept
      </a>
    </div>
  );
};

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <Layout>
        <NotFound code={error.status} />
      </Layout>
    )
  }

  return (
    <Layout>
      <h1>Uh oh ...</h1>
      <p>Something went wrong.</p>
    </Layout>
  );
}

export default App;
