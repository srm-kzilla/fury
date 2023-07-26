import React, { useContext } from "react";
import navbarCSS from "~/styles/shared/components/Navbar.css";
import { Assets } from "~/constants";
import { Link, useLocation } from "@remix-run/react";
import { AuthStore } from "../stores";
import { FaMoon, FaRegMoon } from "react-icons/fa";
import { observer } from "mobx-react";
import { BiLogOut } from "react-icons/bi";
import type { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: navbarCSS,
    },
  ];
};

const Navbar = () => {
  const { user } = useContext(AuthStore);
  const authStore = useContext(AuthStore);
  const location = useLocation();

  console.log("Navbar.tsx: user: ", user);

  const signOut = () => {
    authStore.setUser(undefined);
    authStore.setAuthorization(undefined);
  };

  return (
    <div className="kz-navbar test">
      <div className="logo">
        <Link to="/">
          <figure>
            <img
              src={Assets.SRMKZILLA_LOGO_WHITE}
              alt="logo"
            />
          </figure>
        </Link>
      </div>

      <div className="cta">
        {user ? (
          <div>
            <div>
              <Link className="border" to="/dashboard">
                Dashboard
              </Link>
            </div>
            <div>
              <BiLogOut onClick={signOut} />
            </div>
          </div>
        ) : !(location.pathname === "/start") ? (
          <Link className="border" to="/start">
            Get started
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default observer(Navbar);
