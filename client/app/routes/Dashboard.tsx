import React, {useContext, useEffect, useRef, useState} from "react";
import "../styles/pages/Dashboard.css";
import {APIService} from "../shared/services/apiService";
import {AuthStore} from "../shared/stores";
import {observer} from "mobx-react";
import Timer from "react-compound-timer";
import Glance from "../components/Glance";
import Notification from "../components/Notification";
import NotificationSkeleton from "../components/NotificationSkeleton";
import TeamSvg from "../components/TeamSvg";
import {Col, Grid, Row} from "react-flexbox-grid";
import {ApplicationTile, ApplicationTileSkeleton, FooterCompact, Sidebar,} from "../../shared/components";
import {Link, useNavigate} from "@remix-run/react";
import {BiAlarm, BiPlus} from "react-icons/bi";
import {Assets} from "../constants";
import {toast} from "../shared/utils/toast";
import {toast as Toast} from "react-toastify";

const Dashboard = () => {
    const authStore = useContext(AuthStore);
    const history = useNavigate();
    const [loading, setLoading] = useState(true);
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [projects, setProjects] = useState<any>([]);
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
    }, []);

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
    }, []);

    return (
        <>
            <div className="kz-dashboard">
                <Sidebar/>
                <Grid fluid style={{overflowX: "hidden"}}>
                    <Row className="main-wrapper">
                        <Col xs={12} md={9} className="main">
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
                            <Grid fluid>
                                <Row>
                                    {loading && (
                                        <>
                                            <Col sm={12} md={6} className="tile">
                                                <ApplicationTileSkeleton/>
                                            </Col>
                                            <Col sm={12} md={6} className="tile">
                                                <ApplicationTileSkeleton/>
                                            </Col>
                                        </>
                                    )}

                                    {projects.length > 0 &&
                                        projects.map((project: any, index: number) => {
                                            return (
                                                <Col sm={12} md={6} key={index} className="tile">
                                                    <ApplicationTile
                                                        application={project}
                                                        handleClick={() => {
                                                            history(`/applications/${project.domain}`);
                                                        }}
                                                    />
                                                </Col>
                                            );
                                        })}
                                </Row>
                            </Grid>
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
                            <Grid fluid style={{overflowX: "hidden"}}>
                                <Row className="notif-row">
                                    {loading && (
                                        <Col
                                            sm={12}
                                            md={5}
                                            className="kz-notifications"
                                            style={{overflowX: "hidden"}}
                                        >
                                            <NotificationSkeleton/>
                                            <NotificationSkeleton/>
                                            <NotificationSkeleton/>
                                        </Col>
                                    )}
                                    {!loading && (
                                        <Col sm={12} md={5} className="kz-notifications">
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
                                        </Col>
                                    )}

                                    <Col sm={12} md={7} className="banner">
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
                                    </Col>
                                </Row>
                            </Grid>
                        </Col>
                        <Col sm={12} md={3} className="glance">
                            <Glance user={authStore.user}/>
                        </Col>
                    </Row>
                </Grid>
            </div>
            <FooterCompact/>
        </>
    );
};

export default observer(Dashboard);
