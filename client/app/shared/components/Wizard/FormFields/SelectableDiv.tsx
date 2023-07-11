import React, {useContext, useState} from "react";
import {Field} from "formik";

import {StoreContext} from "../Store";
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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {domain, setDomain} = useContext(StoreContext);
    return (
        <Field name={name}>
            {({field, form, meta}: FieldProps) => {
                const isError = meta.touched && meta.error;
                return (
                    //   TODO: Apply flexbox here
                    <div>
                        <h1>{label}</h1>
                        <div className="kz-form-field">
                            {options.map((option, index) => {
                                return (
                                    <div
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
                                    </div>
                                );
                            })}
                        </div>
                        {isError ? <p>{meta.error}</p> : null}
                    </div>
                );
            }}
        </Field>
    );
};

export default SelectableDiv;
