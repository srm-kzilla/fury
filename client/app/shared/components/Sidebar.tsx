import React, { useContext } from "react";
import sidebarCSS from "../../styles/shared/components/Sidebar.css";
import { Assets } from "../../constants";
import { BiHomeCircle, BiLogOut, BiRocket } from "react-icons/bi";
import { Link, useLocation, useNavigate } from "@remix-run/react";
import classNames from "classnames";
import { AuthStore } from "../stores";
import { observer } from "mobx-react";
import { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: sidebarCSS,
    },
  ];
};

const Sidebar = () => {
  let location = useLocation();
  const history = useNavigate();
  const pathname = location.pathname;
  const authStore = useContext(AuthStore);

  const signOut = () => {
    authStore.setUser(undefined);
    authStore.setAuthorization(undefined);
    history("/start");
  };

  return (
    <div className="kz-sidebar">
      <div>
        <div className="logo">
          <img
            src={Assets.SRMKZILLA_LOGO_WHITE}
            alt="logo"
            onClick={() => {
              history("/");
            }}
          />
        </div>
        <ul>
          <li title="Dashboard">
            <Link
              to="/dashboard"
              className={classNames({ active: pathname === "/dashboard" })}
            >
              <BiHomeCircle />
            </Link>
          </li>
          <li title="Explore SRMKZILLA">
            <Link
              to="/explore"
              className={classNames({ active: pathname === "/explore" })}
            >
              <BiRocket />
            </Link>
          </li>
        </ul>

        <div className="sign-out">
          <div title="Logout">
            <BiLogOut onClick={signOut} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(Sidebar);
