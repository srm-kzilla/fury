import React from "react";
import "../styles/shared/FooterCompact.css";
import {Assets} from "../../constants";

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
