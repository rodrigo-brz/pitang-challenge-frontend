import { ScheduleTable } from '../../components/Table';
import Page from '../../components/Page';

function ListaAgendamento() {
  return (
    <div>
      <Page title="Tabela de Agendamentos">
        <ScheduleTable />
      </Page>
    </div>
  );
}

export default ListaAgendamento;
