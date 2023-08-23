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
      <div className="tile">
        <div className="icon">{icon}</div>
      </div>
      <h5>{title}</h5>
    </div>
  );
};

export default Tile;
