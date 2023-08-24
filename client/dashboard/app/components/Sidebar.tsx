import sidebarCSS from "~/styles/components/Sidebar.css";
import { BiChat, BiHomeCircle, BiLogOut, BiRocket } from "react-icons/bi";
import {
  Form,
  Link,
  useLoaderData,
  useLocation,
  useNavigate,
} from "@remix-run/react";
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
  const data = useLoaderData();
  const { LANDING_PAGE_URL } = data;
  return (
    <div className="kz-sidebar">
      <div>
        <div className="logo">
          <img
            src="/srmkzilla_logo_white.svg"
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
              prefetch="viewport"
              className={pathname === "/" ? "active" : ""}
            >
              <BiHomeCircle />
            </Link>
          </li>
          <li title="Explore SRMKZILLA">
            <Link
              to="/explore"
              prefetch="viewport"
              className={pathname === "/explore" ? "active" : ""}
            >
              <BiRocket />
            </Link>
          </li>
          <li title="FAQ's">
            <Link
              to={LANDING_PAGE_URL + "faq"}
              prefetch="viewport"
              target="_blank"
            >
              <BiChat />
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
