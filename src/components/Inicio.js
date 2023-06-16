import React from 'react';     //necesaria en stackblitz 
function Inicio() {
  return (
    <div className="mt-4 p-5 rounded" style={{ backgroundColor: "LightCyan" }}>
      <h1>APP NASHE</h1>
      <p>probando el inicio</p>
      <button className="btn btn-lg btn-primary">
        <i className="fa fa-search"> </i>
        Boton
      </button>
    </div>
  );
}
export { Inicio };
