import dashboardStyles from "~/styles/pages/Dashboard.css";
import Timer from "react-compound-timer";
import {
  Notification,
  ApplicationTile,
  FooterCompact,
  Sidebar,
  Glance,
  sidebarLinks,
  notificationLinks,
  footerCompactLinks,
  applicationTileLinks,
  TeamSvg,
} from "~/components";
import { json, redirect } from "@remix-run/node";
import {
  getApplications,
  getNotifications,
  getUserActivity,
  getUserDetails,
} from "~/utils/api.server";
import { Link, useLoaderData, useNavigate } from "@remix-run/react";
import getEnv from "~/utils/env";
import { BiAlarm, BiPlus } from "react-icons/bi";
import { Assets } from "~/constants";
import toast from "~/utils/toast.client";
import { useEffect } from "react";
import moment from "moment";
import type { LinksFunction, LoaderFunction } from "@remix-run/node";

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
  const activity = await getUserActivity(request);
  if (!user.gender) return redirect("/start");

  return json({ user, notifications, applications, activity });
};

const Dashboard = () => {
  const { user, notifications, applications, activity } = useLoaderData();
  const navigate = useNavigate();
  const env = getEnv();
  const endTime = parseInt(env.APPLICATION_DEADLINE!);

  useEffect(() => {
    toast.show(
      `Deadline for application is ${moment(endTime).format("MMMM Do YYYY")}`,
      "🗓️"
    );
  }, []);

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
                <div className="application-wrapper">
                  {applications &&
                    applications.length > 0 &&
                    applications.map(
                      (application: Application, index: number) => {
                        return (
                          <div key={index} className="tile">
                            <ApplicationTile
                              application={application}
                              handleClick={() => {
                                navigate(
                                  `/applications/status/${application.domain}`
                                );
                              }}
                            />
                          </div>
                        );
                      }
                    )}
                </div>
              </div>
              {applications && applications.length === 0 && (
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
              <div className="notif-wrapper">
                <div className="notif-row">
                  <div className="kz-notifications">
                    {notifications &&
                      notifications.map((notification: Notification) => {
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
            <div className="glance">
              <Glance user={user} activity={activity} />
            </div>
          </div>
        </div>
      </div>
      <FooterCompact />
    </>
  );
};

export default Dashboard;
