import Select from "react-select";
import debounce from "debounce";
import type OptionsType from "react-select";
import type { FieldProps } from "formik";

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
        : (option as Option).value
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
