import dashboardStyles from "~/styles/pages/Dashboard.css";
import Timer from "react-compound-timer";
import Notification, {
  links as notificationLinks,
  NotificationSkeleton,
} from "~/components/Notification";
import { links as sidebarLinks } from "~/shared/components/Sidebar";
import { links as footerCompactLinks } from "~/shared/components/FooterCompact";
import {
  ApplicationTileSkeleton,
  links as applicationTileLinks,
} from "~/shared/components/ApplicationTile";
import { ApplicationTile, FooterCompact, Sidebar } from "~/shared/components";
import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import {
  getApplications,
  getNotifications,
  getUserDetails,
} from "~/utils/api.server";
import { Assets } from "~/constants";
import { BiAlarm, BiPlus } from "react-icons/bi";
import Glance from "~/components/Glance";
import {Link, useLoaderData, useNavigate} from "@remix-run/react";
import TeamSvg from "~/components/TeamSvg";
import getEnv from "~/shared/utils/env";

export const links: LinksFunction = () => [
  ...sidebarLinks(),
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
  const { notifications } = await getNotifications(request);
  const { applications } = await getApplications(request);

  if (!user.gender) return redirect("/start");

  return json({ user, notifications, applications });
};

const Dashboard = () => {
  const { notifications, applications } = useLoaderData();
  const navigate = useNavigate();

  const env = getEnv();
  const endTime = parseInt(env.APPLICATION_DEADLINE!);

  return (
    <>
      <div className="kz-dashboard">
        <Sidebar />
        <div style={{ overflowX: "hidden" }}>
          <div className="main-wrapper">
            <div className="main">
              <h2>
                Applications
                {applications.length < 2 && (
                  <Link
                    className="new"
                    to="/applications/new"
                    title="Create a new application"
                  >
                    <BiPlus />
                  </Link>
                )}
              </h2>
              <div>
                <div className="applicationWrapper">
                  <>
                    <div className="tile">
                      <ApplicationTileSkeleton />
                    </div>
                    <div className="tile">
                      <ApplicationTileSkeleton />
                    </div>
                  </>
                  {applications.length > 0 &&
                    applications.map((project: any, index: number) => {
                      return (
                        <div key={index} className="tile">
                          <ApplicationTile
                            application={project}
                            handleClick={() => {
                              navigate(`/applications/${project.domain}`);
                            }}
                          />
                        </div>
                      );
                    })}
                </div>
              </div>
              {applications.length === 0 && (
                <div className="empty">
                  <TeamSvg />
                  <h3>
                    Be a part of the SRMKZILLA{" "}
                    <span className="strike">team</span>{" "}
                    <span className="primary">family.</span>
                  </h3>
                  {endTime - Date.now() > 0 && (
                    <h5>
                      Create a{" "}
                      <Link to="/applications/new">new application</Link> to get
                      started
                    </h5>
                  )}
                </div>
              )}

              <h2 className="mt">Notifications</h2>
              <div style={{ overflowX: "hidden" }}>
                <div className="notif-row">
                  <div className="kz-notifications">
                    {notifications.map((notification: Notification) => {
                      return (
                        <Notification
                          key={notification.timestamp}
                          notification={notification}
                        />
                      );
                    })}
                    {(!notifications || notifications.length === 0) && (
                      <div className="empty">
                        <img src={Assets.MAIL} alt="mail" />
                        <h2>The mailman did not have anything for you.</h2>
                      </div>
                    )}
                  </div>

                  <div className="banner">
                    <div className="kz-timer">
                      {endTime - Date.now() <= 0 ? (
                        <div className="kz-times-up">
                          <p>Your time is Up!!</p>
                        </div>
                      ) : (
                        <div className="timer-inner">
                          <h4>
                            The clock is ticking <BiAlarm />
                          </h4>

                          <div className="timer">
                            <Timer
                              initialTime={endTime - Date.now()}
                              direction="backward"
                            >
                              {() => (
                                <>
                                  <div>
                                    <h5>
                                      <Timer.Days />
                                    </h5>
                                    <small>days</small>
                                  </div>
                                  <div>
                                    <h5>
                                      <Timer.Hours />
                                    </h5>
                                    <small>hours</small>
                                  </div>
                                  <div>
                                    <h5>
                                      <Timer.Minutes />
                                    </h5>
                                    <small>minutes</small>
                                  </div>
                                  <div>
                                    <h5>
                                      <Timer.Seconds />
                                    </h5>
                                    <small>seconds</small>
                                  </div>
                                </>
                              )}
                            </Timer>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="container-iframe">
                      <iframe
                        className="responsive-iframe"
                        src="https://www.youtube.com/embed/LPt3vocZGfE?controls=0"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="glance">{/*<Glance user={authStore.user} />*/}</div>
          </div>
        </div>
      </div>
      <FooterCompact />
    </>
  );
};

export default Dashboard;
