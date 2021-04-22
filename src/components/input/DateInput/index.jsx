import { ErrorMessage, Field } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function DateInput(props) {
  const { label, name, ...rest } = props;

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ form, field }) => {
          const { value } = field;
          const { setFieldValue } = form;
          return (
            <DatePicker
              id={name}
              {...field}
              {...rest}
              selected={value}
              onChange={(val) => setFieldValue(name, val)}
              dateFormat={
                rest.showTimeSelect ? 'dd/MM/yyyy - HH:mm' : 'dd/MM/yyyy'
              }
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component="div" />
    </>
  );
}
