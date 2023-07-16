import React from "react";
import Skeleton from "react-loading-skeleton";
import loadingShimmerCSS from "../styles/Components/LoadingShimmer.css";
import { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: loadingShimmerCSS,
    },
  ];
};

const LoadingShimmer = () => {
  return (
    <div className="kz-tile-shimmer">
      <Skeleton height={"100%"}></Skeleton>
    </div>
  );
};

export default LoadingShimmer;
