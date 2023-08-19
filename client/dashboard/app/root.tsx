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
  useNavigation,
  useRouteError,
  useSearchParams,
} from "@remix-run/react";
import { useEffect, useState } from "react";
import rootStyles from "~/styles/index.css";
import appStyles from "~/styles/App.css";
import progressStyles from "nprogress/nprogress.css";
import {
  Headbar,
  NotFound,
  glanceLinks,
  notFoundLinks,
  headbarLinks,
} from "~/components";
import { Toaster } from "react-hot-toast";
import NProgress from "nprogress";
import toast, { getToastFromIdentifier } from "~/utils/toast.client";
import { BiX } from "react-icons/bi";
import { json } from "@remix-run/node";
import type { ReactNode } from "react";
import type { LoaderFunction, LinksFunction } from "@remix-run/node";

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
      href: progressStyles,
    },
    {
      rel: "icon",
      href: "/favicon.ico",
    },
  ];
};

export const loader: LoaderFunction = () => {
  const env = process.env;

  const envSec = {
    env: {
      API_BASE_URL: env.API_BASE_URL,
      APPLICATION_DEADLINE: env.APPLICATION_DEADLINE,
      OAUTH_REDIRECT_URI: env.OAUTH_REDIRECT_URI,
      OAUTH_CLIENT_ID: env.OAUTH_CLIENT_ID,
      LANDING_PAGE_URL: env.LANDING_PAGE_URL,
      RECAPTCHA_SITE_KEY: env.RECAPTCHA_SITE_KEY,
    },
  };

  let key: keyof typeof envSec.env;
  for (key in envSec.env) {
    if (
      envSec.env[key] === undefined ||
      envSec.env[key] === "" ||
      envSec.env[key] === null
    ) {
      throw new Error(`Something went wrong. If persists contact us`);
    }
  }

  return json(envSec);
};

function App() {
  const navigation = useNavigation();

  useEffect(() => {
    NProgress.configure({ showSpinner: false });
    if (navigation.state === "loading") {
      NProgress.start();
    } else {
      NProgress.done();
    }
  }, [navigation]);

  return (
    <>
      <Layout>
        <Headbar />
        <div className="App">
          <Outlet />
          <Cookie />
        </div>
      </Layout>
    </>
  );
}

function Layout({ children }: { children: ReactNode }) {
  const { env } = useLoaderData<typeof loader>();

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const toastParam = searchParams.get("toast") as ToastIdentifier;
    if (!toastParam) return;

    const toastMessage = getToastFromIdentifier(toastParam);
    if (toastMessage) {
      switch (toastMessage.type) {
        case "success":
          toast.success(toastMessage.message);
          break;
        case "custom":
          toast.show(toastMessage.message, toastMessage.icon);
          break;
        case "error":
          toast.error(toastMessage.message);
          break;
      }

      searchParams.delete("toast");
      setSearchParams(searchParams);
    }
  }, [searchParams, setSearchParams]);

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
        <Toaster
          position="top-right"
          reverseOrder={false}
          gutter={8}
          containerStyle={{}}
          toastOptions={{
            className: "",
            duration: 5000,
            style: {
              color: "#fff",
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}

const Cookie = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("show_cookie_prompt") === "true") setOpen(false);
    else setOpen(true);
  }, []);

  const close = () => {
    setOpen(false);
  };

  const accept = () => {
    localStorage.setItem("show_cookie_prompt", "true");
    setOpen(false);
  };

  return (
    <div className={open ? "kz-cookie open" : "kz-cookie"}>
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

function ErrorLayout({ children }: { children: ReactNode }) {
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
        <Scripts />
        <LiveReload />
        <Toaster
          position="top-right"
          reverseOrder={false}
          gutter={8}
          containerStyle={{}}
          toastOptions={{
            className: "",
            duration: 5000,
            style: {
              color: "#fff",
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <ErrorLayout>
        <NotFound code={error.status} />
      </ErrorLayout>
    );
  } else if (error instanceof Error) {
    return (
      <ErrorLayout>
        <NotFound
          customError={error.message}
          link={"https://www.instagram.com/srmkzilla/"}
        />
      </ErrorLayout>
    );
  }

  return (
    <ErrorLayout>
      <NotFound code={500} />
    </ErrorLayout>
  );
}

export default App;
