import { Formik, Form, Field, ErrorMessage } from 'formik';
import { DateInput } from '../../input';
import { appointmentFormSchema } from '../../../services/validations/forms';

const onSubmit = (values) => {
  console.log('Form data', values);
};

function CreateAppointmentForm() {
  return (
    <Formik
      validationSchema={appointmentFormSchema}
      onSubmit={onSubmit}
      initialValues={{
        name: '',
        birthday: null,
        schedulingDate: null,
      }}
      render={({ isValid }) => (
        <Form>
          <div>
            <label htmlFor="name">Nome Completo</label>
            <Field name="name" type="text" />
            <ErrorMessage name="name" />
          </div>
          <div>
            <DateInput name="birthday" label="Data de Nascimento:" />
          </div>
          <div>
            <DateInput
              name="schedulingDate"
              label="Selecione uma Data e Horário"
              showTimeSelect
            />
          </div>

          <button type="submit" disabled={!isValid}>
            Enviar
          </button>
        </Form>
      )}
    />
  );
}

export default CreateAppointmentForm;
