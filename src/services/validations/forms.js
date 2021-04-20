import * as Yup from 'yup';

export const appointmentFormSchema = Yup.object({
  name: Yup.string().min(2).required('*'),
  birthday: Yup.date().required('*').nullable(),
  schedulingDate: Yup.date().required('*').nullable(),
});
