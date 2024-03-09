import { Input } from "./input";

const FormInput = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}: {
  field: any;
  form: {
    touched: any;
    errors: any;
  };
  props: any;
}) => (
  <div>
    <Input type="text" {...field} {...props} />
    {touched[field.name] && errors[field.name] && (
      <div className="text-xs text-destructive">{errors[field.name]}</div>
    )}
  </div>
);

export default FormInput;
