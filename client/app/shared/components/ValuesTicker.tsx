import React from "react";
import valuesTickerCss from "../../styles/shared/components/ValuesTicker.css";
import { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: valuesTickerCss,
    },
  ];
};

interface Props {
  valueSize: number;
  duration?: string | "2";
  delay?: string | "0";
  direction?: boolean | false;
}

const ethicalValues = [
  "Craftsmanship",
  "Thriving",
  "Solidarity",
  "Dependability",
  "Open-mindedness",
  "Loyalty",
  "Commitment",
  "Open-mindedness",
  "Consistency",
  "Efficiency",
  "Innovation",
  "Creativity",
  "Motivation",
  "Passion",
  "Education",
  "Perseverance",
  "Service to others",
];

const ValuesTicker = (props: Props) => {
  const newTickerValues: string[] = [];
  for (let i = 0; i < props.valueSize; i++) {
    const rnd =
      ethicalValues[
        Math.floor(Math.random() * Math.floor(ethicalValues.length))
      ];
    newTickerValues.push(rnd);
  }
  const insertTheme = {
    "--animation-direction": props.direction ? "reverse" : "normal",
    "--animation-delay": props.delay + "s",
    "--animation-duration": props.duration + "s",
  } as React.CSSProperties;
  return (
    <div className="kz-ticker-list" style={insertTheme}>
      {/* <Ticker isNewsTicker={true}>
        {newTickerValues.map((newTickerValue, index) => {
          return (
            <NewsTicker id={index} title={newTickerValue} url={"#"} meta={""} />
          );
        })}
      </Ticker> */}
    </div>
  );
};

export default ValuesTicker;
