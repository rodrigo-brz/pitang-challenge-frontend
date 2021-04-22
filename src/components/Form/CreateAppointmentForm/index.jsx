import { Formik, Form, Field, ErrorMessage } from 'formik';
import { setHours, setMinutes } from 'date-fns';
import { DateInput } from '../../Input';
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
          <div className="form-group form-focus">
            <label className="focus-label" htmlFor="name">
              Nome Completo
            </label>
            <Field className="form-control floating" name="name" type="text" />
            <ErrorMessage component="span" className="error" name="name" />
          </div>
          <div>
            <DateInput name="birthday" label="Data de Nascimento:" />
          </div>
          <div>
            <DateInput
              name="schedulingDate"
              label="Selecione uma Data e Horário"
              showTimeSelect
              minDate={new Date()}
              minTime={setHours(setMinutes(new Date(), 30), 7)}
              maxTime={setHours(setMinutes(new Date(), 30), 17)}
            />
          </div>

          <button className="btn btn-primary" type="submit" disabled={!isValid}>
            Enviar
          </button>
        </Form>
      )}
    />
  );
}

export default CreateAppointmentForm;
