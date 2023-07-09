import React, { useContext } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";

import { getDomainName } from "../../../../utils/domains";
import { StoreContext } from "../../Store";
import "../../../../styles/shared/components/FormSteps.css";
import { DropZone, TextArea } from "../../FormFields";

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
    <Grid className="kz-form">
      <Row>
        <Col md={12} xs={12} className="kz-message-screen">
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
        </Col>
      </Row>
    </Grid>
  );
};

export default TextAreaComponent;
