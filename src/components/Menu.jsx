import React from "react";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
<nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand">WTAS WEB</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NavLink className="nav-link" to='/inicio'>
            Inicio
          </NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/personajesDBZ">
              Personajes
            </NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/vehiculos">
              Vehiculos
            </NavLink>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  );
}
export default Menu;
