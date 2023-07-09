import React, { useContext } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { capitalCase } from "change-case";

import { StoreContext } from "../../Store";
import "../../../../styles/shared/components/FormSteps.css";
import { DropZone } from "../../FormFields";

interface Question {
  domain: string;
  question: string;
}

interface Props {
  questionArray: Question[];
  name: string;
}

const DropzoneComponent = (props: Props) => {
  const { questionArray, name } = props;
  let { domain, setDomain } = useContext(StoreContext);
  let selectedDomain = questionArray.find(
    (obj: Question) => obj.domain == domain
  );

  return (
    <Grid className="kz-form">
      <Row>
        <Col md={12} xs={12} className="kz-message-screen">
          <h1>
            {domain === "gfx"
              ? "GFX OR Photography"
              : capitalCase(selectedDomain!.domain)}{" "}
            Application
          </h1>
          <h4
            dangerouslySetInnerHTML={{ __html: selectedDomain!.question }}
          ></h4>
          <DropZone name={name} />
        </Col>
      </Row>
    </Grid>
  );
};

export default DropzoneComponent;
