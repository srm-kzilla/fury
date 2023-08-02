import React, { useContext } from "react";

import { getDomainName } from "../../../../utils/domains";
import { StoreContext } from "../../Store";
import questionComponentCSS from "../../../../../styles/shared/components/FormSteps.css";
import { DropZone, TextArea } from "../../FormFields";
import { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: questionComponentCSS,
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
  type?: string;
}

const TextAreaComponent = (props: Props) => {
  const { questionArray, name, type } = props;
  let { domain } = useContext(StoreContext);
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
              ? "GFX or Photography"
              : getDomainName(selectedDomain!.domain)}{" "}
            Application
          </h1>
          <h4
            dangerouslySetInnerHTML={{ __html: selectedDomain!.question }}
          ></h4>
          {type === "dropzone" &&
          (domain === "content_writing" ||
            domain === "vfx" ||
            domain === "gfx") ? (
            <DropZone name={name} />
          ) : (
            <TextArea name={name} />
          )}
        </div>
      </div>
    </div>
  );
};

export default TextAreaComponent;
