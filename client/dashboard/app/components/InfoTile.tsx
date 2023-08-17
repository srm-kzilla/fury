import infoTileStyles from "~/styles/components/InfoTile.css";
import { BiTime, BiArrowToRight, BiGitBranch } from "react-icons/bi";
import moment from "moment";
import type { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: infoTileStyles,
  },
];

interface Props {
  icon: any;
  title: string;
  description: string;
  timestamp: number;
  github?: string;
  url?: string;
}

const InfoTile = ({
  icon,
  title,
  description,
  timestamp,
  github,
  url,
}: Props) => {
  return (
    <div className="kz-info-tile">
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="info">
        <div className="status">
          <BiTime />
          {moment(timestamp).format("MMM DD, YYYY")}
        </div>
        <div className="icons">
          <div className="git">
            {github && (
              <a href={github} target="_blank">
                <BiGitBranch />
              </a>
            )}
          </div>
          <div className="link">
            {url && (
              <a href={url} target="_blank" rel="noreferrer">
                <BiArrowToRight />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoTile;
