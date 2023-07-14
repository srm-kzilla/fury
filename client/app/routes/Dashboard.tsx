import React, {useContext, useEffect, useRef, useState} from "react";
import dashboardCSS from "../styles/pages/Dashboard.css";
import {APIService} from "~/shared/services/apiService";
import {AuthStore} from "../shared/stores";
import {observer} from "mobx-react";
import Timer from "react-compound-timer";
import Glance from "../components/Glance";
import Notification, {NotificationSkeleton} from "../components/Notification";
import TeamSvg from "../components/TeamSvg";
import {ApplicationTile, ApplicationTileSkeleton, FooterCompact, Sidebar,} from "../shared/components";
import {Link, useNavigate} from "@remix-run/react";
import {BiAlarm, BiPlus} from "react-icons/bi";
import {Assets} from "~/constants";
import {toast} from "~/shared/utils/toast";
import {toast as Toast} from "react-toastify";
import {LinksFunction} from "@remix-run/node";

export const links: LinksFunction = () => {
    return [
        {
            rel: "stylesheet",
            href: dashboardCSS,
        },
    ];
};

const Dashboard = () => {
    const authStore = useContext(AuthStore);
    const history = useNavigate();
    const [loading, setLoading] = useState(true);
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [projects, setProjects] = useState<any>([]);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [timesUp, setTimesUp] = useState<number>(Date.now() + 604800000); //to be changed when backend is done

    useEffect(() => {
        setLoading(true);
        const userInfoPromise = APIService.getInstance().fetchUserInfo();
        const notificationsPromise =
            APIService.getInstance().fetchUserNotifications();
        const projectsPromise = APIService.getInstance().fetchApplications();
        //const timesUpAt = APIService.getInstance().fetchTimesUpAt();

        // @ts-ignore
        Promise.all([userInfoPromise, notificationsPromise, projectsPromise])
            .then(function (values) {
                authStore.setUser(values[0].data.user);
                setNotifications(values[1].data.notifications);
                setProjects(values[2].data.applications);
                //setTimesUp(values[3].data.timesUpAt);  set after backend is done
            })
            .catch((error) => {
                toast({
                    title: "Stuff broke",
                    message:
                        "Geeky people on our team are working on it. Please check back soon.",
                    theme: "error",
                });
            })
            .finally(() => setLoading(false));
    }, [authStore]);

    useEffect(() => {
        if (Date.now() >= timesUp) {
            //TODO - block routes here
            //TODO - disable clicks here
        }
    }, [timesUp]);

    const toastRef = useRef<any>(null);
    useEffect(() => {
        let curr = 0;
        let days = authStore.timeLeftDuration.days();
        let hours = authStore.timeLeftDuration.hours();
        let minutes = authStore.timeLeftDuration.minutes();
        let seconds = authStore.timeLeftDuration.seconds();

        if (
            isNaN(days) ||
            (days == 0 && hours == 0 && minutes == 0 && seconds == 0)
        ) {
            curr = (process.env.REACT_APP_DEADLINE as any) - Date.now();
            days = Math.floor(curr / 8.64e7);
            hours = new Date(curr).getHours();
            minutes = new Date(curr).getMinutes();
            seconds = new Date(curr).getSeconds();
        }
        console.log(days, hours, minutes, seconds);

        toastRef.current = toast({
            title: "Heads up!",
            message: `Applications close in <span>${days < 0 ? 0 : days}d ${
                hours < 0 ? 0 : hours
            }h ${minutes < 0 ? 0 : minutes}m ${seconds < 0 ? 0 : seconds}s</span>.`,
            theme: "info",
            options: {closeButton: false},
        });

        setTimeout(() => {
            Toast.dismiss(toastRef.current);
        }, 8000);
    }, [authStore.timeLeftDuration]);

    return (
        <>
            <div className="kz-dashboard">
                <Sidebar/>
                {/*TODO: Apple flexbox here*/}
                <div style={{overflowX: "hidden"}}>
                    <div className="main-wrapper">
                        <div className="main">
                            <h2>
                                Applications{" "}
                                {!loading && projects.length < 2 && authStore.timeLeft > 0 && (
                                    <Link
                                        className="new"
                                        to="/applications/new"
                                        title="Create a new application"
                                    >
                                        <BiPlus/>
                                    </Link>
                                )}
                            </h2>
                            <div>
                                <div>
                                    {loading && (
                                        <>
                                            <div className="tile">
                                                <ApplicationTileSkeleton/>
                                            </div>
                                            <div className="tile">
                                                <ApplicationTileSkeleton/>
                                            </div>
                                        </>
                                    )}

                                    {projects.length > 0 &&
                                        projects.map((project: any, index: number) => {
                                            return (
                                                <div key={index} className="tile">
                                                    <ApplicationTile
                                                        application={project}
                                                        handleClick={() => {
                                                            history(`/applications/${project.domain}`);
                                                        }}
                                                    />
                                                </div>
                                            );
                                        })}
                                </div>
                            </div>
                            {!loading && projects.length === 0 && (
                                <div className="empty">
                                    <TeamSvg/>
                                    <h3>
                                        Be a part of the SRMKZILLA{" "}
                                        <span className="strike">team</span>{" "}
                                        <span className="primary">family.</span>
                                    </h3>
                                    {authStore.timeLeft > 0 && (
                                        <h5>
                                            Create a{" "}
                                            <Link to="/applications/new">new application</Link> to get
                                            started
                                        </h5>
                                    )}
                                </div>
                            )}

                            <h2 className="mt">Notifications</h2>
                            {/*TODO: Apply flexbox here*/}
                            <div style={{overflowX: "hidden"}}>
                                <div className="notif-row">
                                    {loading && (
                                        <div
                                            className="kz-notifications"
                                            style={{overflowX: "hidden"}}
                                        >
                                            <NotificationSkeleton/>
                                            <NotificationSkeleton/>
                                            <NotificationSkeleton/>
                                        </div>
                                    )}
                                    {!loading && (
                                        <div className="kz-notifications">
                                            {notifications.map((notification: Notification) => {
                                                return (
                                                    <Notification
                                                        key={notification.timestamp}
                                                        notification={notification}
                                                    />
                                                );
                                            })}
                                            {!loading &&
                                                (!notifications || notifications.length === 0) && (
                                                    <div className="empty">
                                                        <img src={Assets.MAIL} alt="mail"/>
                                                        <h2>The mailman did not have anything for you.</h2>
                                                    </div>
                                                )}
                                        </div>
                                    )}

                                    <div className="banner">
                                        <div className="kz-timer">
                                            {authStore.timeLeft <= 0 ? (
                                                <div className="kz-times-up">
                                                    <p>Your time is Up!!</p>
                                                </div>
                                            ) : (
                                                <div className="timer-inner">
                                                    <h4>
                                                        The clock is ticking <BiAlarm/>
                                                    </h4>

                                                    <div className="timer">
                                                        <Timer
                                                            initialTime={
                                                                (process.env.REACT_APP_DEADLINE as any) -
                                                                Date.now()
                                                            }
                                                            direction="backward"
                                                        >
                                                            {() => (
                                                                <React.Fragment>
                                                                    <div>
                                                                        <h5>
                                                                            <Timer.Days/>
                                                                        </h5>
                                                                        <small>days</small>
                                                                    </div>
                                                                    <div>
                                                                        <h5>
                                                                            <Timer.Hours/>
                                                                        </h5>
                                                                        <small>hours</small>
                                                                    </div>
                                                                    <div>
                                                                        <h5>
                                                                            <Timer.Minutes/>
                                                                        </h5>
                                                                        <small>minutes</small>
                                                                    </div>
                                                                    <div>
                                                                        <h5>
                                                                            <Timer.Seconds/>
                                                                        </h5>
                                                                        <small>seconds</small>
                                                                    </div>
                                                                </React.Fragment>
                                                            )}
                                                        </Timer>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <figure>
                                            <img
                                                src="https://recruitment-2021.s3.ap-south-1.amazonaws.com/life/Screenshot+from+2021-09-14+17-35-58.png"
                                                alt="banner"
                                            />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="glance">
                            <Glance user={authStore.user}/>
                        </div>
                    </div>
                </div>
            </div>
            <FooterCompact/>
        </>
    );
};

export default observer(Dashboard);