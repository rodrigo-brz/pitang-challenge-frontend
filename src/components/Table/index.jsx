import { Table } from 'react-bootstrap';

const lista = [
  {
    name: 'rodrigo',
    birthday: '2021-04-23T18:00:00.000Z',
    schedulingDate: '2021-04-23T15:00:00.000Z',
    checked: true,
  },
  {
    name: 'rodrigo',
    birthday: '2021-04-23T18:00:00.000Z',
    schedulingDate: '2021-04-23T14:00:00.000Z',
    checked: false,
  },
  {
    name: 'rodrigo',
    birthday: '2021-04-23T18:00:00.000Z',
    schedulingDate: '2021-04-23T18:00:00.000Z',
    checked: false,
  },
];

const listaOrdenada = lista.sort(function (a, b) {
  return new Date(a.schedulingDate) - new Date(b.schedulingDate);
});

function ScheduleTable() {
  return (
    <Table striped variant="dark">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Nascimento</th>
          <th>Data de Vascinação</th>
          <th>Situação</th>
        </tr>
      </thead>
      <tbody>
        {listaOrdenada.map((elem) => (
          <tr>
            <td>{elem.name}</td>
            <td>{elem.birthday}</td>
            <td>{elem.schedulingDate}</td>
            <td>
              {elem.checked === true && (
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                    checked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckDefault"
                  >
                    Default switch checkbox input
                  </label>
                </div>
              )}

              {elem.checked === false && (
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckDefault"
                  >
                    Default switch checkbox input
                  </label>
                </div>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export { ScheduleTable };
