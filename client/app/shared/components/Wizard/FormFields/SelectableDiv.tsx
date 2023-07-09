import React, { useState, useContext } from "react";
import { Field } from "formik";
import { Grid, Row, Col } from "react-flexbox-grid";

import { StoreContext } from "../Store";
import "../../../../styles/shared/components/FormFields.css";

type SelectableDivProps = {
  name: string;
  options: {
    key: string;
    value: string;
    text: string;
    description: string;
  }[];
  label: string;
  handleSelect: (value: string) => void;
};

type FieldProps = {
  field: { value: string };
  form: { setFieldValue: Function };
  meta: { touched: string[]; error: string[] };
};

const SelectableDiv = ({
  name,
  options,
  label,
  handleSelect,
}: SelectableDivProps) => {
  const [active, isActive] = useState(-1);
  const { domain, setDomain } = useContext(StoreContext);
  return (
    <Field name={name}>
      {({ field, form, meta }: FieldProps) => {
        const isError = meta.touched && meta.error;
        return (
          <Grid>
            <h1>{label}</h1>
            <Row className="kz-form-field" center="xs">
              {options.map((option, index) => {
                return (
                  <Col
                    md={4}
                    xs={12}
                    className={
                      active === index
                        ? `selectable-div active`
                        : `selectable-div`
                    }
                    key={index}
                    onClick={() => {
                      isActive(index);
                      handleSelect(option.key);
                    }}
                  >
                    <div
                      key={option.key}
                      onClick={() => {
                        form.setFieldValue(name, option.value);
                      }}
                    >
                      <h3>{option.text}</h3>
                      <h4>{option.description}</h4>
                    </div>
                  </Col>
                );
              })}
            </Row>
            {isError ? <p>{meta.error}</p> : null}
          </Grid>
        );
      }}
    </Field>
  );
};

export default SelectableDiv;
