import React, { useState, useEffect, useContext } from "react";
import * as Yup from "yup";
import { Grid, Row, Col } from "react-flexbox-grid";

import { StoreContext } from "../Store";
import { SelectableDiv } from "../FormFields";
import "../../../../styles/shared/components/FormSteps.css";
import { APIService } from "../../../services/apiService";
import { Loading } from "../..";

let domainOptions = [
  {
    key: "content_writing",
    value: "content_writing",
    text: "Content Writing",
    description: "Hunger for content curation will be satisfied",
  },
  {
    key: "vfx",
    value: "vfx",
    text: "VFX",
    description: "Creativity through motion coz it is the new trend",
  },
  {
    key: "gfx",
    value: "gfx",
    text: "GFX or Photography",
    description: "Designs the pixels with purpose with an eye for creativity",
  },
  {
    key: "events",
    value: "events",
    text: "Events",
    description: "Plan events, set the stage and drop the mic",
  },
  {
    key: "technical",
    value: "technical",
    text: "Technical",
    description: "Turn every wild idea into reality",
  },
  {
    key: "corporate",
    value: "corporate",
    text: "Corporate",
    description: "Bring in the bucks as they got the vault and the deals",
  },
];

const DomainSelect = () => {
  const [loading, setLoading] = useState(true);
  const [options, setOptions] = useState(domainOptions);
  const {
    domain,
    setDomain,
    userProjects,
    setUserProjects,
    setSelectedDomainSlug,
  } = useContext(StoreContext);

  useEffect(() => {
    const getYear = async () => {
      const userInfo = await APIService.getInstance().fetchUserInfo();
      const year = userInfo.data.user.registration_number.substring(2, 4);
      if (year == "19") {
        domainOptions = domainOptions.filter((domainOption, index) => {
          return index < 3;
        });
      }
      setOptions(
        domainOptions.filter((domain) => {
          const domainExists = userProjects.find(
            (project: any) => project.domain === domain.value
          );
          return !domainExists;
        })
      );
      setLoading(false);
    };
    getYear();
    // Display only those domains for which the user has not applied for
  }, [userProjects]);

  const handleSelect = (value: string) => {
    setDomain(value);
    setSelectedDomainSlug(value);
  };

  return loading ? (
    <Loading />
  ) : (
    <Grid className="kz-form">
      {options.length > 0 ? (
        <Row>
          <SelectableDiv
            label="Select a domain"
            name="domain"
            options={options}
            handleSelect={handleSelect}
          />
        </Row>
      ) : (
        <Row center="xs">
          <Col md={12} xs={12} className="kz-message-screen">
            <h1>You have already applied for two domains.</h1>
            <h4>If you think this is a mistake, please contact support.</h4>
          </Col>
        </Row>
      )}
    </Grid>
  );
};

const DomainSelectForm = {
  component: DomainSelect,
  validationSchema: {
    domain: Yup.string().required("Required"),
  },
  initialValues: {
    domain: "",
  },
};

export default DomainSelectForm;
