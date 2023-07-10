import React from "react";
import "../styles/Components/Notification.css";
import {BiBoltCircle} from "react-icons/bi";
import moment from "moment";
import Markdown from "markdown-to-jsx";
import Skeleton from "react-loading-skeleton";

interface Notification {
    timestamp: number;
    markdown: string;
}

const Notification = ({notification}: { notification: Notification }) => {
    return (
        <div className="kz-notification">
            <BiBoltCircle/>
            <div>
                <time>{moment(notification.timestamp).fromNow(true)}</time>
                <Markdown>{notification.markdown}</Markdown>
            </div>
        </div>
    );
};

export const NotificationSkeleton = () => {
    return (
        <div className="kz-notification">
            <Skeleton circle width={32} height={32}/>
            <div>
                <time>
                    <Skeleton width={100}/>
                </time>
                <p>
                    <Skeleton count={2} width={200}/>
                </p>
            </div>
        </div>
    );
};

export default Notification;
