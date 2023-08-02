import { useEffect, useState } from "react";
import glanceStyles from "~/styles/components/Glance.css";
import {
  BiBell,
  BiCheckCircle,
  BiExtension,
  BiFlag,
  BiKey,
  BiTrashAlt,
} from "react-icons/bi";
import { APIService } from "~/shared/services/api-service";
import moment from "moment";
import Skeleton from "react-loading-skeleton";
import type { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: glanceStyles,
    },
  ];
};

interface Props {
  user?: any;
}

interface Activity {
  project_slug?: string;
  timestamp: number;
  device_ip: string;
  user_id: number;
  type: "login" | "add_project" | "update_project" | "delete_project";
}

const Glance = ({ user }: Props) => {
  const [activity, setActivity] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);

      try {
        const {
          data: { activity },
        } = await APIService.getInstance().fetchUserActivity();
        setActivity(activity);
      } finally {
        setLoading(false);
      }
    })();

    sendCrispTags();
  }, []);

  const sendCrispTags = () => {
    window.$crisp.push([
      "set",
      "user:nickname",
      [user.first_name + " " + user.last_name],
    ]);
    window.$crisp.push(["set", "user:email", [user?.github_email]]);
    window.$crisp.push(["set", "user:phone", [user?.contact_num]]);
    window.$crisp.push(["set", "user:avatar", [user?.avatar_url]]);
  };

  return (
    <div className="kz-glance">
      {loading && (
        <div className="profile skeleton">
          <Skeleton circle width={48} height={48} />
          <div>
            <h5>
              <Skeleton width={140} />
              <span>
                <Skeleton circle width={16} height={16} />
              </span>
            </h5>

            <p>
              <Skeleton width={80} />
              <span className="primary">
                <Skeleton circle width={16} height={16} />
              </span>
            </p>
          </div>
        </div>
      )}
      {!loading && (
        <div className="profile">
          <img src={user?.avatar_url} alt="avatar" />
          <div>
            <h5>
              {user?.first_name} {user?.last_name}
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
      )}
      <hr />

      <div className="activity">
        <h3>Recent activity</h3>
        {!user && (
          <>
            <ActivitySkeleton />
            <ActivitySkeleton />
            <ActivitySkeleton />
          </>
        )}
        {user && (
          <div>
            {activity &&
              activity.map((event: Activity) => {
                return <Activity key={event.timestamp} event={event} />;
              })}
          </div>
        )}
      </div>
    </div>
  );
};

const ActivitySkeleton = () => {
  return (
    <div className="activity-tile skeleton">
      <Skeleton circle width={32} height={32} />
      <div>
        <time>
          <Skeleton width={80} />
        </time>
        <p>
          <Skeleton count={2} />
        </p>
      </div>
    </div>
  );
};

interface ActivityProps {
  event: Activity;
}

const Activity = ({ event }: ActivityProps) => {
  const parseActivity = (event: Activity) => {
    switch (event.type) {
      case "login":
        return {
          icon: <BiKey />,
          description: `You logged in from <span>${event.device_ip}</span>.`,
        };
      case "add_project":
        return {
          icon: <BiFlag />,
          description: `You added <span>a new project</span>.`,
        };
      case "update_project":
        return {
          icon: <BiExtension />,
          description: `You updated <span>${event.project_slug}</span>.`,
        };
      case "delete_project":
        return {
          icon: <BiTrashAlt />,
          description: `You deleted <span>${event.project_slug}</span>.`,
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
