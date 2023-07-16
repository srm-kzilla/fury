import React from "react";
import SignInWithSRMKZILLACSS from "../../styles/shared/components/SignInWithSRMKZILLA.css";
import classNames from "classnames";
import { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: SignInWithSRMKZILLACSS,
    },
  ];
};

interface Props {
  dark?: boolean;
  people?: boolean;
  label?: string;
  onClick?: () => void;
  className?: string;
}

const SignInWithSRMKZILLA = ({
  dark,
  people,
  label,
  onClick,
  className,
}: Props) => {
  return (
    <div
      className={classNames(
        "sign-in-with-srmkzilla",
        {
          dark,
          people,
          light: !dark,
        },
        className,
      )}
      onClick={onClick}
    >
      <div className="logo"></div>
      <span className="text">{label || "Sign in with SRMKZILLA"}</span>

      <div className="person jack"></div>
      <div className="person miguel"></div>
      <div className="person yvette"></div>
    </div>
  );
};

export default SignInWithSRMKZILLA;
