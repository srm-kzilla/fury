import infoTileStyles from "~/styles/Components/InfoTile.css";
import { BiTime, BiArrowToRight } from "react-icons/bi";
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
  url?: string;
}

const InfoTile = ({ icon, title, description, timestamp, url }: Props) => {
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
        <div className="link">
          {url && (
            <a href={url} target="_blank">
              <BiArrowToRight />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default InfoTile;
