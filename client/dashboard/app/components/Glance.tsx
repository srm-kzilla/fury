import { useEffect } from "react";
import glanceStyles from "~/styles/components/Glance.css";
import {
  BiBell,
  BiCheckCircle,
  BiExtension,
  BiFlag,
  BiKey,
  BiTrashAlt,
} from "react-icons/bi";
import moment from "moment";
import type { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: glanceStyles,
    },
  ];
};

interface ActivityProps {
  user: User;
  activity: Activity[];
}

const Glance = ({ user, activity }: ActivityProps) => {
  useEffect(() => {
    window.$crisp.push(["set", "user:nickname", [user?.name]]);
    window.$crisp.push(["set", "user:email", [user?.email]]);
    window.$crisp.push(["set", "user:phone", [user?.contact]]);
    // window.$crisp.push(["set", "user:avatar", [user?.avatar_url]]);
  }, []);

  return (
    <div className="kz-glance">
      <div className="profile">
        {/*<img src={user?.avatar_url} alt="avatar" />*/}
        <div>
          <h5>
            {user?.name}
            <span>
              <BiCheckCircle />
            </span>
          </h5>

          <p>
            {user?.email}
            <span className="primary">
              <BiBell />
            </span>
          </p>
        </div>
      </div>
      <hr />

      <div className="activity">
        <h3>Recent activity</h3>
        <div>
          {activity &&
            activity.map((event: Activity) => {
              return (
                <Activity key={event.timestamp.toString()} event={event} />
              );
            })}
        </div>
      </div>
    </div>
  );
};

const Activity = ({ event }: { event: Activity }) => {
  const parseActivity = (activity: Activity) => {
    switch (activity.type) {
      case "login":
        return {
          icon: <BiKey />,
          description: `You logged in from <span>${activity.device_ip}</span>.`,
        };
      case "add_project":
        return {
          icon: <BiFlag />,
          description: `You added <span>a new project</span>.`,
        };
      case "update_project":
        return {
          icon: <BiExtension />,
          description: `You updated <span>${activity.project_slug}</span>.`,
        };
      case "delete_project":
        return {
          icon: <BiTrashAlt />,
          description: `You deleted <span>${activity.project_slug}</span>.`,
        };
      default:
        return undefined;
    }
  };

  const activity = parseActivity(event);

  return activity ? (
    <div className="activity-tile">
      {activity.icon}
      <div>
        <time>{moment(event.timestamp).fromNow(true)}</time>
        <p dangerouslySetInnerHTML={{ __html: activity.description }}></p>
      </div>
    </div>
  ) : null;
};

export default Glance;
