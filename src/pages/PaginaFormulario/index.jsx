import { CreateAppointmentForm } from '../../components/Form';
import Page from '../../components/Page';

function PaginaFormulario() {
  return (
    <div>
      <Page title="Preencha o Formulário de Agendamento">
        <CreateAppointmentForm />
      </Page>
    </div>
  );
}

export default PaginaFormulario;
