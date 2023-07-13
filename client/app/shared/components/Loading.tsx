import React from "react";
import loadingCss from "../../styles/shared/components/Loading.css";
import {LinksFunction} from "@remix-run/node";

export const links: LinksFunction = () => {
    return [
        {
            rel: "stylesheet",
            href: loadingCss ,
        },
    ];
};

const Loading = () => {
    return <div className="kz-loading"></div>;
};

export default Loading;
