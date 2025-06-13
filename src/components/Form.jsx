import { useState } from 'react'
import '../styles/Form.css'

function Form({ crearCita }) {
  const [cita, setCita] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: ''
  })

  const handleChange = (e) => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    if (
      cita.mascota.trim() === '' ||
      cita.propietario.trim() === '' ||
      cita.fecha.trim() === '' ||
      cita.hora.trim() === '' ||
      cita.sintomas.trim() === ''
    ) {
      alert('Debes completar todos los campos!')
      return
    }

    cita.id = Date.now()

    crearCita(cita)

    setCita({
      mascota: '',
      propietario: '',
      fecha: '',
      hora: '',
      sintomas: ''
    })
  }

  return (
    <>
      <h2 className="blanco">Crear mi Cita</h2>

      <form onSubmit={handleSubmit}>
        <label>Nombre Mascota</label>
        <input 
          type="text" 
          name="mascota" 
          className="u-full-width" 
          placeholder="Nombre Mascota" 
          onChange={handleChange}
          value={cita.mascota}
        />
        
        <label>Nombre Dueño</label>
        <input 
          type="text" 
          name="propietario" 
          className="u-full-width" 
          placeholder="Nombre dueño de la mascota" 
          onChange={handleChange}
          value={cita.propietario}
        />
        
        <label>Fecha</label>
        <input 
          type="date" 
          name="fecha" 
          className="u-full-width" 
          onChange={handleChange}
          value={cita.fecha}
        />
        
        <label>Hora</label>
        <input 
          type="time" 
          name="hora" 
          className="u-full-width" 
          onChange={handleChange}
          value={cita.hora}
        />
        
        <label>Sintomas</label>
        <textarea 
          name="sintomas" 
          className="u-full-width"
          onChange={handleChange}
          value={cita.sintomas}
        ></textarea>
        
        <button 
          type="submit" 
          className="u-full-width button-primary"
        >
          Agregar Cita
        </button>
      </form>
    </>
  )
}

export default Form