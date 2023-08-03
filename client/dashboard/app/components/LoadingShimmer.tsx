import Skeleton from "react-loading-skeleton";
import loadingShimmerStyles from "~/styles/components/LoadingShimmer.css";
import type { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: loadingShimmerStyles,
  },
];

const LoadingShimmer = () => {
  return (
    <div className="kz-tile-shimmer">
      <Skeleton height={"100%"}></Skeleton>
    </div>
  );
};

export default LoadingShimmer;
