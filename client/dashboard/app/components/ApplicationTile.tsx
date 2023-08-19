import applicationTileStyles from "~/styles/components/ApplicationTile.css";
import {
  BiError,
  BiFlag,
  BiSolidCircle,
  BiSolidHourglass,
  BiSolidPaperPlane,
  BiSolidPencil,
} from "react-icons/bi";
import { getDomainName } from "~/utils/applications";
import type { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: applicationTileStyles,
  },
];

interface Props {
  application: Application;
  handleClick: () => void;
}

export enum Status {
  Rejected = "rejected",
  Accepted = "accepted",
  InReview = "pending",
  Draft = "draft",
}

const ApplicationTile = ({ application, handleClick }: Props) => {
  const { status, questions = [] } = application;

  const formatStatus = (status: string) => {
    switch (status) {
      case Status.Draft:
        if (questions && questions.length === 8) {
          return {
            icon: (
              <BiSolidPaperPlane
                className="primary"
                title="Application not submitted"
              />
            ),
            label: "Your application is complete! Submit it now",
          };
        }
        return {
          icon: (
            <BiSolidPencil
              className="warning"
              title="Application draft saved"
            />
          ),
          label: "Your application is saved as draft. Complete it now!",
        };
      case Status.InReview:
        return {
          icon: (
            <BiSolidHourglass
              className="tertiary"
              title="Applition in review"
            />
          ),
          label: "Application in review",
        };
      case Status.Accepted:
        return {
          icon: (
            <BiSolidCircle className="tertiary" title="Application accepted" />
          ),
          label: "Application Accepted",
        };
      case Status.Rejected:
        return {
          icon: (
            <BiSolidCircle className="primary" title="Application rejected" />
          ),
          label: "Application Rejected",
        };
      default:
        return {
          icon: <BiError className="primary" title="Error fetching status" />,
          label: "Something went wrong",
        };
    }
  };

  const { icon, label } = formatStatus(status);

  return (
    <div className="kz-application-tile" onClick={handleClick}>
      <div className="icon">
        <BiFlag />
      </div>
      <h3>{getDomainName(application.domain)}</h3>
      <div className="info">
        <div className="status">
          {icon}
          {label}
        </div>
      </div>
    </div>
  );
};

export default ApplicationTile;
