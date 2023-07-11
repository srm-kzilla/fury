import React, { useMemo } from "react";
import tinycolor from "tinycolor2";
import classNames from "classnames";
import "../../styles/shared/components/Tile.css";
import { ProjectTile } from "../../routes/ProjectTiles";

interface Props {
  tile: ProjectTile;
  toggleTileActive: (slug: string) => void;
}

const Tile = (props: Props) => {
  const setRotation = () => {
    const angle = (90 * Math.floor(Math.random() * Math.floor(5))).toString();
    return "rotate(" + angle + "deg)";
  };
  const memoizedRotation = useMemo(() => setRotation(), []);

  const checkTheme = () => {
    return tinycolor(props.tile.color).isDark();
  };

  const insertTheme = {
    "--theme": props.tile.color,
  } as React.CSSProperties;

  const rotationStyle = {
    transform: memoizedRotation,
  };

  return (
    <div
      className={classNames("kz-wrapper", { active: props.tile.active })}
      style={insertTheme}
    >
      <div
        className={classNames("kz-project-tile", {
          dark: checkTheme(),
        })}
        onClick={() => {
          props.toggleTileActive(props.tile.slug);
        }}
      >
        <h2>{props.tile.title?.substring(0, 2)}</h2>
        <div className="kz-bg-shapes" style={rotationStyle}>
          <div className="kz-rectangle"></div>
          <div className="kz-circle"></div>
        </div>
      </div>
      <h5>{props.tile.title}</h5>
    </div>
  );
};

export default Tile;
