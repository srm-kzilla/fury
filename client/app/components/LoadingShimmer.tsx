import React from "react";
import Skeleton from "react-loading-skeleton";
import "../styles/Components/LoadingShimmer.css";

const LoadingShimmer = () => {
  return (
    <div className="kz-tile-shimmer">
      <Skeleton height={"100%"}></Skeleton>
    </div>
  );
};

export default LoadingShimmer;
