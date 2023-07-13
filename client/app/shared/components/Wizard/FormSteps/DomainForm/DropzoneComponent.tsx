import React, {useContext} from "react";
import {capitalCase} from "change-case";

import {StoreContext} from "../../Store";
import dropzoneComponentCSS from "../../../../../styles/shared/components/FormSteps.css";
import {DropZone} from "../../FormFields";
import {LinksFunction} from "@remix-run/node";

export const links: LinksFunction = () => {
    return [
        {
            rel: "stylesheet",
            href: dropzoneComponentCSS,
        },
    ];
};

interface Question {
    domain: string;
    question: string;
}

interface Props {
    questionArray: Question[];
    name: string;
}

const DropzoneComponent = (props: Props) => {
    const {questionArray, name} = props;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let {domain, setDomain} = useContext(StoreContext);
    let selectedDomain = questionArray.find(
        (obj: Question) => obj.domain == domain
    );

    return (
        //   TODO: Apply flexbox here
        <div className="kz-form">
            <div>
                <div className="kz-message-screen">
                    <h1>
                        {domain === "gfx"
                            ? "GFX OR Photography"
                            : capitalCase(selectedDomain!.domain)}{" "}
                        Application
                    </h1>
                    <h4
                        dangerouslySetInnerHTML={{__html: selectedDomain!.question}}
                    ></h4>
                    <DropZone name={name}/>
                </div>
            </div>
        </div>
    );
};

export default DropzoneComponent;
