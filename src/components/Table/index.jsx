import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { toast } from 'react-toastify';
import axios from '../../utils/api';

function ScheduleTable() {
  const [listaVac, setListaVac] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('/agendamento');
      setListaVac(
        response.data.data.map((appointment) => ({
          ...appointment,
          birthday: new Date(appointment.birthday),
          schedulingDate: new Date(appointment.schedulingDate),
        }))
      );
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChecked = async ({ target: { checked } }, editVac) => {
    const novaLista = listaVac.map((paciente) => {
      if (paciente._id === editVac._id) {
        return {
          ...paciente,
          check: checked,
        };
      }

      return paciente;
    });

    try {
      const response = await axios.put(`/agendamento/${editVac._id}`, {
        ...editVac,
        check: checked,
      });
      setListaVac(novaLista);
      toast.info(response.data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const listaOrdenada = listaVac.sort((a, b) => {
    return new Date(a.schedulingDate) - new Date(b.schedulingDate);
  });

  function maskDate(time) {
    const date = new Date(time);
    return date.toLocaleDateString(navigator.language, {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  }

  function maskTime(time) {
    const date = new Date(time);
    return date.toLocaleTimeString(navigator.language, {
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  return (
    <Table striped hover>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Data de Nascimento</th>
          <th>Data de Vascinação</th>
          <th>Situação</th>
        </tr>
      </thead>
      <tbody>
        {listaOrdenada.map((paciente) => (
          <tr key={paciente._id}>
            <td>{paciente.name}</td>
            <td>{maskDate(paciente.birthday)}</td>
            <td>
              {maskDate(paciente.schedulingDate)} -{' '}
              {maskTime(paciente.schedulingDate)}
            </td>
            <td>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                  checked={paciente.check}
                  onChange={(event) => handleChecked(event, paciente)}
                />
                <span className="m-0">
                  {paciente.check
                    ? ' Atendimento Realizado'
                    : ' Aguardando Consulta'}
                </span>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export { ScheduleTable };
