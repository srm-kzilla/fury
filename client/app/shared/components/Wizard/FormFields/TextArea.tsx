import { Field } from "formik";

type TextAreaProps = {
  label?: string;
  name: string;
  placeholder?: string;
};

type FieldProps = {
  field: { value: string };
  meta: { touched: string[]; error: string[] };
};

const TextArea = ({ label, name, placeholder }: TextAreaProps) => {
  return (
    <Field name={name}>
      {({ field, meta }: FieldProps) => {
        const isError = meta.touched && meta.error;
        return (
          <div className="kz-form-field">
            {label && <label htmlFor={name}>{label}</label>}
            <textarea {...field} placeholder="Type your answer here" />
            {isError ? <p>{meta.error}</p> : null}
          </div>
        );
      }}
    </Field>
  );
};

export default TextArea;
