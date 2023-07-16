import type { LinksFunction } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration, useLoaderData,
} from "@remix-run/react";
import index from "~/styles/index.css";
import app from "~/styles/App.css";
import { ToastContainer } from "react-toastify";
import { links as navbarLink } from "../app/shared/components/Navbar";
import { links as sidebarLink } from "../app/shared/components/Sidebar";
import { links as applicationTitleLink } from "../app/shared/components/ApplicationTile";
import { links as footerLink } from "../app/shared/components/Footer";
import { links as footerCompactLink } from "../app/shared/components/FooterCompact";
import { links as formClosedLink } from "../app/shared/components/FormClosed";
import { links as headbarLink } from "../app/shared/components/Headbar";
import { links as loadingLink } from "../app/shared/components/Loading";
import { links as signInWithSRMKZILLALink } from "../app/shared/components/SignInWithSRMKZILLA";
import { links as taskLink } from "../app/shared/components/Task";
import { links as taskListLink } from "../app/shared/components/TaskList";
import { links as tileLink } from "../app/shared/components/Tile";
import { links as userLink } from "../app/shared/components/User";
import { links as userProfileLink } from "../app/shared/components/UserProfile";
import { links as valuesTickerLink } from "../app/shared/components/ValuesTicker";
import { links as wizardLink } from "../app/shared/components/Wizard/Wizard";
import { links as selectableDivLink } from "../app/shared/components/Wizard/FormFields/SelectableDiv";
import { links as textAreaLink } from "../app/shared/components/Wizard/FormFields/TextArea";
import { links as textFieldLink } from "../app/shared/components/Wizard/FormFields/TextField";
import { links as dropzoneComponentLink } from "../app/shared/components/Wizard/FormSteps/DomainForm/DropzoneComponent";
import { links as questionComponentLink } from "../app/shared/components/Wizard/FormSteps/DomainForm/QuestionComponent";
import { links as domainSelectLink } from "../app/shared/components/Wizard/FormSteps/DomainSelect";
import { links as instructionsLink } from "../app/shared/components/Wizard/FormSteps/Instructions";
import { links as glanceLink } from "../app/components/Glance";
import { links as infoTileLink } from "../app/components/InfoTile";
import { links as loadingShimmerLink } from "../app/components/LoadingShimmer";
import { links as notificationLink } from "../app/components/Notification";
import { links as teamSvgLink } from "../app/components/TeamSvg";
import { BiX } from "react-icons/bi";
import classNames from "classnames";
import { Constants } from "~/constants";
import { useContext, useEffect, useState } from "react";
import { APIService } from "~/shared/services/apiService";
import { updateLocale } from "~/shared/utils/MomentConfig";
import { AuthStore } from "~/shared/stores";
import { StoreContext } from "~/shared/components/Wizard/Store";
import { Headbar } from "~/shared/components";
import {json} from "@remix-run/node";

export const links: LinksFunction = () => {
  return [
    ...navbarLink(),
    ...sidebarLink(),
    ...applicationTitleLink(),
    ...footerLink(),
    ...footerCompactLink(),
    ...formClosedLink(),
    ...headbarLink(),
    ...loadingLink(),
    ...signInWithSRMKZILLALink(),
    ...taskLink(),
    ...taskListLink(),
    ...tileLink(),
    ...userLink(),
    ...userProfileLink(),
    ...valuesTickerLink(),
    ...glanceLink(),
    ...infoTileLink(),
    ...loadingShimmerLink(),
    ...notificationLink(),
    ...teamSvgLink(),
    ...wizardLink(),
    ...selectableDivLink(),
    ...textAreaLink(),
    ...textFieldLink(),
    ...dropzoneComponentLink(),
    ...questionComponentLink(),
    ...domainSelectLink(),
    ...instructionsLink(),
    {
      rel: "stylesheet",
      href: index,
    },
    {
      rel: "stylesheet",
      href: app,
    },
  ];
};

function App() {
  const authStore = useContext(AuthStore);
  const { userProjects } = useContext(StoreContext);
  const [headline, setHeadline] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    APIService.getInstance()
      .fetchUserInfo()
      .then(({ data: { user } }) => {
        authStore.setUser(user);
      })
      .finally(() => {
        setLoading(false);
        updateLocale();
      });
  }, []);

  useEffect(() => {
    (async () => {
      const {
        data: { headline },
      } = await APIService.getInstance().fetchHeadline();
      setHeadline(headline);
    })();
  }, []);

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
          <Headbar headline={headline} />
          <div className="App">
            <Outlet />
            <Cookie />
            <ToastContainer pauseOnFocusLoss={false} />
          </div>
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

export default App;
