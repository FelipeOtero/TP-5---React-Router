// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h5>Veterinaria App</h5>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/citas">Mis Citas</Link></li>
        <li><Link to="/crearcita">Crear cita</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;