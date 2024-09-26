import { useEffect } from "react";
import glanceStyles from "~/styles/components/Glance.css";
import { BiBell, BiCheckCircle } from "react-icons/bi";
import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import getEnv from "~/utils/env";

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
  team: Record<string, unknown>[];
}

const Glance = ({ user, team }: ActivityProps) => {
  const { LANDING_PAGE_URL } = getEnv();
  useEffect(() => {
    window.$crisp.push(["set", "user:nickname", [user?.name]]);
    window.$crisp.push(["set", "user:email", [user?.email]]);
    window.$crisp.push(["set", "user:phone", [user?.contact]]);
  }, []);
  return (
    <div className="kz-glance">
      <Link
        to={`${LANDING_PAGE_URL}start?f=1`}
        prefetch="viewport"
        target="_blank"
      >
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
      </Link>
      <hr />

      <div className="activity">
        <h3>Meet the Team</h3>
        <div>
          {team &&
            team.map((member: any, index) => {
              return (
                <div className="meetwizards" key={index}>
                  <img src={member.url} alt="avatar" />
                  <div>
                    <h5>{member?.name}</h5>
                    <span>{member?.role}</span>
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

export default Glance;
