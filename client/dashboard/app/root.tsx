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
import type { ReactNode } from "react";
import { useContext, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import classNames from "classnames";
import rootStyles from "~/styles/index.css";
import appStyles from "~/styles/App.css";
import toastStyles from "react-toastify/dist/ReactToastify.css";
import Store from "~/shared/components/Wizard/Store";
import { Headbar, NotFound } from "~/shared/components";
import { links as navbarLinks } from "~/shared/components/Navbar";
import { links as headbarLinks } from "~/shared/components/Headbar";
import { links as footerLinks } from "~/shared/components/Footer";
import { links as notFoundLinks } from "~/shared/components/NotFound";
import { links as glanceLinks } from "~/components/Glance";
import { BiX } from "react-icons/bi";
import { Constants } from "~/constants";
import { AuthStore } from "~/shared/stores";
import { updateLocale } from "./shared/utils/moment-config";
import { APIService } from "~/shared/services/api-service";
import type { LinksFunction } from "@remix-run/node";
import { json } from "@remix-run/node";

declare global {
  interface Window {
    $crisp: any;
    ENV: { [key: string]: string };
  }
}

export const links: LinksFunction = () => {
  return [
    ...navbarLinks(),
    ...headbarLinks(),
    ...footerLinks(),
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
    },
  });
};

function App() {
  const authStore = useContext(AuthStore);
  const [headline, setHeadline] = useState("");

  useEffect(() => {
    APIService.getInstance()
      .fetchUserInfo()
      .then(({ data: { user } }) => {
        authStore.setUser(user);
      })
      .finally(() => {
        updateLocale();
      });
  }, []);


  return (
    <>
      <Layout>
        <Headbar
          headline={
            "Dear Freshers, we see you can't wait. Recruitments open soon ;) [#2023Wrapped](https://photos.google.com/share/AF1QipORRPNrrr85gqjyS5pE43TsBKHW8PxfwUJ3hKXAgdv0SxSTKeExuMFM9RiCbIPNLQ?key=UUtMem5BOS1LeF9kYU1MWmlYRk05eGhZVVJRYXRn)"
          }
        />
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
