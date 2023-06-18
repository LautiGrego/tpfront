import React from 'react';     //necesaria en stackblitz 
import '../App.css'
import DragonBall from "../syles/statics/dz.png"
import Lambo from "../syles/statics/lambo.jpg"
import Equipos from "../syles/statics/equipos.png"
import Comida from "../syles/statics/comida.jpg"
import { NavLink } from 'react-router-dom';
function Inicio() {
  return (
    <>
<div className="row row-cols-1 row-cols-md-2 g-4 div-Principal">
  <div className="col">
    <NavLink className='nav-link' to='/personajesDBZ'>
    <div className="card carta carta-der">
    <img src={DragonBall} className="card-img-top imagen"  alt="..."/>
      <div className="card-body">
        <h5 className="card-title titulo">Personajes</h5>
        <p className="card-text texto">Sumérgete en el emocionante mundo de Dragon Ball Z y conoce a los legendarios personajes que han cautivado a fans de todo el mundo. Desde los poderosos Saiyajin como Goku, Vegeta y Gohan.</p>
      </div>
    </div>
    </NavLink>
  
  </div>
  <div className="col">
    <NavLink className='nav-link' to='/vehiculos'>
    <div className="card carta carta-der">
      <img src={Lambo} className="card-img-top imagen" alt="..."/>
      <div className="card-body">
        <h5 className="card-title titulo">Vehiculos</h5>
        <p className="card-text texto">Explora nuestra amplia selección de vehículos disponibles para satisfacer tus necesidades de transporte. Desde coches compactos y deportivos hasta SUVs espaciosos.</p>
      </div>
    </div>
    </NavLink>
  </div>
  <div className="col">
    <NavLink className='nav-link' to='/comidas'>
    <div className="card carta carta-izq">
      <img src={Comida} className="card-img-top imagen" alt="..."/>
      <div className="card-body">
        <h5 className="card-title titulo">Comidas</h5>
        <p className="card-text texto">Sumérgete en un mundo de sabores y disfruta de una amplia variedad de comidas exquisitas. Desde platos internacionales hasta especialidades locales.</p>
      </div>
    </div>
    </NavLink>
  </div>
  <div className="col">
    <NavLink className='nav-link' to='/equipos'>
    <div className="card carta carta-izq">
      <img src={Equipos} className="card-img-top imagen" alt="..."/>
      <div className="card-body">
        <h5 className="card-title titulo">Equipos de futbol</h5>
        <p className="card-text texto">Sumérgete en el apasionante mundo del fútbol argentino y descubre la emoción y la pasión que rodea a los equipos más destacados de Argentina.</p>
      </div>
    </div>
    </NavLink>
  </div>
</div>

    </>
  );
}
export { Inicio };
