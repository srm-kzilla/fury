import React from "react";
import userCss from "../../styles/shared/components/User.css";
import { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: userCss,
    },
  ];
};

interface Props {
  clickDisabled: boolean;
}

const User = (props: Props) => {
  return (
    <div className="kz-user">
      <h2>Pick a project to continue</h2>
    </div>
  );
};

export default User;
