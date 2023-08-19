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
  }, []);
  const data = [
    {
      name: "Aryan",
      role: "Tech Lead",
      comment: "In reality I am an Events associate who can code in Go.",
      url: "https://recruitment-23.s3.ap-south-1.amazonaws.com/images/duck-aryan.jpeg",
    },
    {
      name: "Farhaan",
      role: "Tech Lead",
      comment: "I couldn't decide what I love more, my bike or my github account, so I got a github sticker on my bike.",
      url: "https://recruitment-23.s3.ap-south-1.amazonaws.com/images/farhaan-spider.png",
    },
    {
      name: "Viraj",
      role: "Head of Tech",
      comment: "I like crocs, remix, linux, dogs and roll from butty.",
      url: "https://recruitment-23.s3.ap-south-1.amazonaws.com/images/doge-viraj.jpeg",
    },
  ];
  return (
    <div className="kz-glance">
      <div className="profile">
        <img
          src={`https://api.dicebear.com/6.x/notionists-neutral/svg?seed=${encodeURIComponent(
            user.name.trim()
          )}`}
          alt="avatar"
        />
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
        <h3>Meet the Team</h3>
        <div>
          {data &&
            data.map((member: any, index) => {
              return (
                <div className="meetwizards" key={index}>
                  <img src={member.url} alt="avatar" />
                  <div>
                    <h5>{member?.name}, <span>{member?.role}</span></h5>
                    <p>{member?.comment}</p>
                  </div>
                </div>
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
          description: `You logged in from <span>${activity.location}</span>.`,
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
