import React from 'react';     //necesaria en stackblitz 
import '../App.css'
import { NavLink } from 'react-router-dom';
function Inicio() {
  return (
    <>
<div className="row row-cols-1 row-cols-md-2 g-4">
  <div className="col">
    <NavLink className='nav-link' to='/personajesDBZ'>
    <div className="card">
    <img src="https://e0.pxfuel.com/wallpapers/724/322/desktop-wallpaper-steam-workshop-dragon-ball-z-vegeta-dragon-ball-super.jpg" className="card-img-top"  alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Personajes</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
    </NavLink>
  
  </div>
  <div className="col">
    <NavLink className='nav-link' to='/vehiculos'>
    <div className="card">
      <img src="https://i.pinimg.com/originals/77/2b/96/772b9670c38900eaf0422821e5cb9965.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Vehiculos</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
    </NavLink>
  </div>
  <div className="col">
    <NavLink className='nav-link' to='/comidas'>
    <div className="card">
      <img src="https://media.istockphoto.com/id/1037517908/es/foto/carne-estilo-argentino-con-salsa-chimichurri.jpg?s=1024x1024&amp;w=is&amp;k=20&amp;c=AIybDDKzLOYu7JVco1BIqdiJeef6otfapGNgT53Sc8U=" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Comidas</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
    </NavLink>
  </div>
  <div className="col">
    <NavLink className='nav-link' to='/equipos'>
    <div className="card">
      <img src="https://fondosmil.com/fondo/6996.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Equipos de futbol</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
    </NavLink>
  </div>
</div>

    </>
  );
}
export { Inicio };
