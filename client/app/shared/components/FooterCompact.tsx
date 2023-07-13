import React from "react";
import footerCompactCss from "../../styles/shared/components/FooterCompact.css";
import {Assets} from "../../constants";
import {LinksFunction} from "@remix-run/node";

export const links: LinksFunction = () => {
    return [
        {
            rel: "stylesheet",
            href: footerCompactCss,
        },
    ];
}

const FooterCompact = () => {
    return (
        <div className="kz-footer-compact">
            <p>
                crafted by your <img src={Assets.MASK_PARROT} alt="parrot"/> crazy
                friends on the SRMKZILLA team
            </p>
        </div>
    );
};

export default FooterCompact;
