import Cita from './Cita'
import '../styles/CitasList.css'

function CitasList({ citas, eliminarCita }) {
  return (
    <>
      <h2 className="blanco">{citas.length ? 'Administra tus citas' : 'No hay citas'}</h2>
      {citas.map(cita => (
        <Cita 
          key={cita.id}
          cita={cita}
          eliminarCita={eliminarCita}
        />
      ))}
    </>
  )
}

export default CitasList