import { useMemo } from "react";
import type { LinksFunction } from "@remix-run/node";
import tileStyles from "~/styles/components/Tile.css";

interface TileProps extends Project {}

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: tileStyles,
  },
];

const Tile = ({ title, icon }: TileProps) => {
  return (
    <div className="kz-wrapper">
      <div className="icon">{icon}</div>
      <div className="kz-project-tile dark">
        <h2>{title?.substring(0, 2)}</h2>
      </div>
      <h5>{title}</h5>
    </div>
  );
};

export default Tile;
