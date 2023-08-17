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

const Tile = ({ title }: TileProps) => {
  const setRotation = () => {
    const angle = (90 * Math.floor(Math.random() * Math.floor(5))).toString();
    return "rotate(" + angle + "deg)";
  };
  const memoizedRotation = useMemo(() => setRotation(), []);

  const rotationStyle = {
    transform: memoizedRotation,
  };

  return (
    <div className="kz-wrapper">
      <div className="kz-project-tile dark">
        <h2>{title?.substring(0, 2)}</h2>
        <div className="kz-bg-shapes" style={rotationStyle}>
          <div className="kz-rectangle"></div>
          <div className="kz-circle"></div>
        </div>
      </div>
      <h5>{title}</h5>
    </div>
  );
};

export default Tile;
