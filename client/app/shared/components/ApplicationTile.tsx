import React from "react";
import "../../styles/shared/components/ApplicationTile.css";
import {BiCheck, BiError, BiFlag, BiHourglass, BiTask, BiX,} from "react-icons/bi";
import Skeleton from "react-loading-skeleton";

import {getDomainName} from "~/shared/utils/domains";

interface Props {
    application: any;
    handleClick: () => void;
}

export enum Status {
    InProgress = "in_progress",
    Rejected = "rejected",
    Accepted = "accepted",
    ChangesRequired = "changes_required",
    InReview = "in_review",
}

const ApplicationTile = ({application, handleClick}: Props) => {
    const formatStatus = (status: string) => {
        switch (status) {
            case Status.InProgress:
                return {
                    icon: <BiTask className="info"/>,
                    label: "In-progress",
                };
            case Status.InReview:
                return {
                    icon: <BiHourglass className="info spin"/>,
                    label: "In-review",
                };
            case Status.Accepted:
                return {
                    icon: <BiCheck className="tertiary"/>,
                    label: "Accepted",
                };
            case Status.Rejected:
                return {
                    icon: <BiX className="primary"/>,
                    label: "Rejected",
                };
            case Status.ChangesRequired:
                return {
                    icon: <BiError className="warning"/>,
                    label: "Changes required",
                };
        }
    };

    const status = formatStatus(application.status);

    return (
        <div className="kz-application-tile" onClick={handleClick}>
            <div className="icon">
                <BiFlag/>
            </div>
            <h3>{getDomainName(application.domain)}</h3>
            <div className="info">
                <div className="status">
                    {status && status.icon}
                    {status && status.label}
                </div>
                {/* <div>
          <span className="domain">{application.domain}</span>
        </div> */}
            </div>
        </div>
    );
};

export const ApplicationTileSkeleton = () => {
    return (
        <div className="kz-application-tile">
            <div className="icon">
                <Skeleton circle width={32} height={32}/>
            </div>
            <h3>
                <Skeleton/>
            </h3>
            <div className="info">
                <div className="status">
                    <Skeleton width={96}/>
                </div>
                <div>
          <span className="domain">
            <Skeleton width={64}/>
          </span>
                </div>
            </div>
        </div>
    );
};

export default ApplicationTile;
