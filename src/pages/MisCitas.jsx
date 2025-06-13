import CitasList from '../components/CitasList';

function MisCitas({ citas, eliminarCita }) {
  return (
    <div>
      <CitasList citas={citas} eliminarCita={eliminarCita} />
    </div>
  );
}

export default MisCitas;