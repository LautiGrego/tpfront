import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import {Inicio} from './components/Inicio'
import Menu from './components/Menu';
import { Personajes } from './components/personajes/Personajes';
import { Vehiculos } from './components/vehiculos/Vehiculos';

function App() {
  return (
    <>
      <BrowserRouter>
      <Menu />
          <div className="divBody">
            <Routes>
              <Route path="/inicio" element={<Inicio />} />
              <Route path="*" element={<Navigate to="/inicio" replace />} /> 
              <Route path="/personajesDBZ" element={<Personajes/>} /> 
              <Route path="/vehiculos" element={<Vehiculos/>} /> 
            </Routes>
          </div>
      </BrowserRouter>
    </>
  );
}

export default App;
