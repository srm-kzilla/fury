import React from "react";
import "../styles/shared/Headbar.css";
import Markdown from "markdown-to-jsx"; // TODO: Update this dependency

const Headbar = ({headline}: { headline?: string }) => {
    return headline ? (
        <div className="kz-headbar">
            <Markdown>{headline}</Markdown>
        </div>
    ) : null;
};

export default Headbar;
