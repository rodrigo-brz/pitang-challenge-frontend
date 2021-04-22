import PaginaFormulario from '../pages/PaginaFormulario';
import ListaAgendamento from '../pages/ListaAgendamento';

const routes = [
  {
    component: PaginaFormulario,
    name: 'PaginaFormulario',
    path: '/agendamento',
  },
  {
    component: ListaAgendamento,
    name: 'Tabela Agendamento',
    path: '/tabela',
  },
];

export default routes;
