import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import {Inicio} from './components/Inicio'
import Menu from './components/Menu';
import { Personajes } from './components/personajes/Personajes';
import { Equipos } from './components/equipos/Equipos';

function App() {
  return (
    <>
      <BrowserRouter>
      <Menu />
          <div className="divBody" style={{ backgroundColor: '#88888' }}>
            <Routes>
              <Route path="/inicio" element={<Inicio />} />
              <Route path="*" element={<Navigate to="/inicio" replace />} /> 
              <Route path="/personajesDBZ" element={<Personajes/>} /> 
              <Route path="/equipos" element={<Equipos/>} /> 
            </Routes>
          </div>
      </BrowserRouter>
    </>
  );
}

export default App;
