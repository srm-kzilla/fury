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
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import classNames from "classnames";
import rootStyles from "~/styles/index.css";
import appStyles from "~/styles/App.css";
import toastStyles from "react-toastify/dist/ReactToastify.css";
import Store from "~/components/Wizard/Store";
import {
  Headbar,
  NotFound,
  glanceLinks,
  notFoundLinks,
  headbarLinks,
} from "~/components";
import { BiX } from "react-icons/bi";
import { Constants } from "~/constants";
import { json } from "@remix-run/node";
import type { ReactNode } from "react";
import type { LinksFunction } from "@remix-run/node";

declare global {
  interface Window {
    $crisp: any;
    ENV: { [key: string]: string };
  }
}

export const links: LinksFunction = () => {
  return [
    ...headbarLinks(),
    ...notFoundLinks(),
    ...glanceLinks(),
    {
      rel: "stylesheet",
      href: rootStyles,
    },
    {
      rel: "stylesheet",
      href: appStyles,
    },
    {
      rel: "stylesheet",
      href: toastStyles,
    },
  ];
};

export const loader = () => {
  const env = process.env;

  return json({
    env: {
      API_BASE_URL: env.API_BASE_URL,
      APPLICATION_DEADLINE: env.APPLICATION_DEADLINE,
      OAUTH_REDIRECT_URI: env.OAUTH_REDIRECT_URI,
      OAUTH_CLIENT_ID: env.OAUTH_CLIENT_ID,
    },
  });
};

function App() {
  return (
    <>
      <Layout>
        <Headbar headline="Dear Freshers, we see you can't wait. Recruitments open soon ;) [#2023Wrapped](https://photos.app.goo.gl/FQTcCjWnXgPB5r296)" />
        <div className="App">
          <Store>
            <Outlet />
          </Store>
          <Cookie />
          <ToastContainer pauseOnFocusLoss={false} />
        </div>
      </Layout>
    </>
  );
}

function Layout({ children }: { children: ReactNode }) {
  const { env } = useLoaderData<typeof loader>();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        <title>SRMKZILLA Recruitments '23</title>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.$crisp=[];
            window.CRISP_WEBSITE_ID="c3e20450-f803-4f5b-9674-b2245cf31786";
            (function() {
              d=document;
              s=d.createElement("script");
              s.src="https://client.crisp.chat/l.js";
              s.async=1;
              d.getElementsByTagName("head")[0].appendChild(s);
            })();
          `,
          }}
        />
      </head>
      <body>
        <ScrollRestoration />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(env)}`,
          }}
        />
        <Scripts />
        <LiveReload />
        {children}
      </body>
    </html>
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
      <div className="btn" onClick={accept}>
        Accept
      </div>
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
    );
  }

  return (
    <Layout>
      <h1>Uh oh ...</h1>
      <p>Something went wrong.</p>
    </Layout>
  );
}

export default App;
