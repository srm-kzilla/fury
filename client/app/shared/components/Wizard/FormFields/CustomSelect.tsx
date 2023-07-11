import React from "react";
import { FieldProps } from "formik";
// eslint-disable-next-line import/no-duplicates
import Select from "react-select";
// eslint-disable-next-line import/no-duplicates
import OptionsType  from "react-select";
import debounce from "debounce"; // TODO: Update Dependency

interface Option {
  label: string;
  value: string;
}

interface CustomSelectProps extends FieldProps {
  // @ts-ignore
  options: OptionsType<Option>;
  isMulti?: boolean;
  className?: string;
  placeholder?: string;
  label?: string;
  handleOptionChange: (value: string) => void;
}

export const CustomSelect = ({
  className,
  placeholder,
  field,
  form,
  options,
  label,
  handleOptionChange,
  isMulti = false,
}: CustomSelectProps) => {
  const onChange = (option: any) => {
    option = option || [];
    form.setFieldValue(
      field.name,
      isMulti
        ? (option as Option[])?.map((item: Option) => item.value)
        : (option as Option).value,
    );
  };

  const onInputChange = (value: string) => {
    if (value) {
      handleOptionChange(value);
    }
  };

  return (
    <div className="kz-form-field">
      <label>{label}</label>
      <Select
        className="react-select-container"
        classNamePrefix="react-select"
        name={field.name}
        onChange={onChange}
        onInputChange={debounce(onInputChange, 300)}
        placeholder={placeholder}
        options={options}
        isMulti={isMulti}
      />
    </div>
  );
};

export default CustomSelect;
