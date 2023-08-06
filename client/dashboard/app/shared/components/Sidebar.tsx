import sidebarCSS from "../../styles/shared/components/Sidebar.css";
import { Assets } from "~/constants";
import { BiHomeCircle, BiLogOut, BiRocket } from "react-icons/bi";
import {Form, Link, useLocation, useNavigate} from "@remix-run/react";
import classNames from "classnames";
import type { LinksFunction } from "@remix-run/node";

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
  const navigate = useNavigate();
  const pathname = location.pathname;

  return (
    <div className="kz-sidebar">
      <div>
        <div className="logo">
          <img
            src={Assets.SRMKZILLA_LOGO_WHITE}
            alt="logo"
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
        <ul>
          <li title="Dashboard">
            <Link
              to="/"
              className={classNames({ active: pathname === "/" })}
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

        <Form method="post" action="/logout">
          <button type="submit">
            <BiLogOut />
          </button>
        </Form>
      </div>
    </div>
  );
};

export default Sidebar;
