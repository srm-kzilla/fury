import React from "react";
import headbarCss from "../../styles/shared/components/Headbar.css";
import Markdown from "markdown-to-jsx";
import {LinksFunction} from "@remix-run/node";

export const links: LinksFunction = () => {
    return [
        {
            rel: "stylesheet",
            href: headbarCss,
        },
    ];
};

const Headbar = ({headline}: { headline?: string }) => {
    return headline ? (
        <div className="kz-headbar">
            <Markdown>{headline}</Markdown>
        </div>
    ) : null;
};

export default Headbar;
