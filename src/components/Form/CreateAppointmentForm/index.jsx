import { Formik, Form, Field, ErrorMessage } from 'formik';
import { setHours, setMinutes } from 'date-fns';
import { toast } from 'react-toastify';
import { DateInput } from '../../Input';
import { appointmentFormSchema } from '../../../services/validations/forms';
import axios from '../../../utils/api';

// const onSubmit = (values) => {
//   console.log('Form data', values);
// };

const onSubmit = async (values) => {
  try {
    const response = await axios.post('/agendamento', {
      name: values.name,
      birthday: values.birthday,
      schedulingDate: values.schedulingDate,
    });
    toast.success(response.data.message);
  } catch (error) {
    toast.error(error.response.data.message);
  }
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
    >
      {({ isValid }) => (
        <Form>
          <div className="form-group form-focus">
            <label className="focus-label" htmlFor="name">
              Nome Completo:
            </label>
            <Field className="form-control floating" name="name" type="text" />
            <ErrorMessage component="span" className="error" name="name" />
          </div>
          <div>
            <DateInput
              name="birthday"
              label="Data de Nascimento:"
              maxDate={new Date()}
            />
          </div>
          <div>
            <DateInput
              name="schedulingDate"
              label="Selecione uma Data e Horário:"
              showTimeSelect
              minDate={new Date().setDate(new Date().getDate() + 1)}
              minTime={setHours(setMinutes(new Date(), 0), 8)}
              maxTime={setHours(setMinutes(new Date(), 0), 17)}
            />
          </div>

          <button className="btn btn-primary" type="submit" disabled={!isValid}>
            Enviar
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default CreateAppointmentForm;
