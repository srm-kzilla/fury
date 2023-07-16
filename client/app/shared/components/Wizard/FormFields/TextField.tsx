import React from "react";
import { Field } from "formik";
import classNames from "classnames";
import { BiLock } from "react-icons/bi";

import textFieldCss from "../../../../styles/shared/components/FormFields.css";
import { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: textFieldCss,
    },
  ];
};

type TextFieldProps = {
  label?: string;
  name: string;
  placeholder: string;
  readOnly?: boolean;
};

type FieldProps = {
  field: { value: string };
  meta: { touched: string[]; error: string[] };
};

const TextField = ({ label, name, placeholder, readOnly }: TextFieldProps) => {
  return (
    <Field name={name}>
      {({ field, meta }: FieldProps) => {
        const isError = meta.touched && meta.error;
        return (
          <>
            <div className="kz-form-field">
              {label && <label htmlFor={name}>{label}</label>}
              <div className="inner">
                <input
                  readOnly={readOnly}
                  className={classNames({ readOnly: readOnly })}
                  type="text"
                  placeholder={placeholder}
                  {...field}
                />
                {readOnly && <BiLock />}
              </div>
              {isError ? <p>{meta.error}</p> : null}
            </div>
          </>
        );
      }}
    </Field>
  );
};

export default TextField;
