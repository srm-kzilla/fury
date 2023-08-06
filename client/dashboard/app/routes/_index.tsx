import dashboardStyles from "../styles/pages/Dashboard.css";
import Timer from "react-compound-timer";
import Notification, {
  links as notificationLinks,
} from "~/components/Notification";
import { links as sidebarLinks } from "~/shared/components/Sidebar";
import { links as footerCompactLinks } from "~/shared/components/FooterCompact";
import { links as applicationTileLinks } from "~/shared/components/ApplicationTile";
import { FooterCompact } from "~/shared/components";
import { links as userProfileLinks } from "~/shared/components/UserProfile";
import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { getUserDetails } from "~/utils/api.server";

export const links: LinksFunction = () => [
  ...sidebarLinks(),
  ...userProfileLinks(),
  ...notificationLinks(),
  ...footerCompactLinks(),
  ...applicationTileLinks(),
  {
    rel: "stylesheet",
    href: dashboardStyles,
  },
];

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUserDetails(request);

  if (!user.gender) return redirect("/start");
  return user;
};

const Dashboard = () => {
  return <FooterCompact />;
};

export default Dashboard;
