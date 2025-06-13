import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import MisCitas from './pages/MisCitas';
import NuevasReservas from './pages/CrearCita';

import './styles/App.css';
import CrearCita from './pages/CrearCita';

function App() {
  const [citas, setCitas] = useState(() => {
    const citasGuardadas = localStorage.getItem('citas');
    return citasGuardadas ? JSON.parse(citasGuardadas) : [];
  });

  useEffect(() => {
    localStorage.setItem('citas', JSON.stringify(citas));
  }, [citas]);

  const crearCita = cita => {
    setCitas([...citas, { ...cita, id: Date.now() }]);
  };

  const eliminarCita = id => {
    setCitas(citas.filter(cita => cita.id !== id));
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/citas" element={<MisCitas citas={citas} eliminarCita={eliminarCita} />} />
            <Route path="/crearcita" element={<CrearCita crearCita={crearCita} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;