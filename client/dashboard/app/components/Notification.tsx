import notificationStyles from "~/styles/components/Notification.css";
import { BiBoltCircle } from "react-icons/bi";
import moment from "moment";
import Markdown from "markdown-to-jsx";
import type { LinksFunction } from "@remix-run/node";

interface Notification {
  timestamp: number;
  markdown: string;
}

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: notificationStyles,
  },
];

const Notification = ({ notification }: { notification: Notification }) => {
  return (
    <div className="kz-notification">
      <BiBoltCircle />
      <div>
        <time>{moment(notification.timestamp).fromNow(true)}</time>
        <Markdown>{notification.markdown}</Markdown>
      </div>
    </div>
  );
};

export default Notification;
