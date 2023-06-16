import React, { useState, useEffect } from "react";
import PersonajesBuscar from "./PersonajesBuscar";
import PersonajesListado from "./PersonajesListado";
import PersonajesRegistro from "./PersonajesRegistro";
import { personajesService } from "../../services/personajes.service";
import moment from "moment";

function Personajes() {
  let ComidaFavorita = [];
  ComidaFavorita.push({ Id: 1, Nombre: "Pizza" });
  ComidaFavorita.push({ Id: 2, Nombre: "Hamburguesa" });
  ComidaFavorita.push({ Id: 3, Nombre: "Sushi" });
  ComidaFavorita.push({ Id: 4, Nombre: "Tacos" });
  ComidaFavorita.push({ Id: 5, Nombre: "Pasta" });
  ComidaFavorita.push({ Id: 6, Nombre: "Ensalada" });
  ComidaFavorita.push({ Id: 7, Nombre: "Helado" });
  ComidaFavorita.push({ Id: 8, Nombre: "Chocolate" });
  ComidaFavorita.push({ Id: 9, Nombre: "Frutas" });
  ComidaFavorita.push({ Id: 10, Nombre: "Sopa" });

console.log(ComidaFavorita);


  const TituloAccionABMC = {
    A: "(Agregar)",
    B: "(Eliminar)",
    M: "(Modificar)",
    C: "(Consultar)",
    L: "(Listado)",
  };
  const [AccionABMC, setAccionABMC] = useState("L");

  const [Nombre, setNombre] = useState("");
  const [Activo, setActivo] = useState("");

  const [Items, setItems] = useState(null);
  const [Item, setItem] = useState([]); // usado en BuscarporId (Modificar, Consultar)
  const [RegistrosTotal, setRegistrosTotal] = useState(0);
  const [Pagina, setPagina] = useState(1);
  const [Paginas, setPaginas] = useState([]);


  // cargar al "montar" el componente, solo la primera vez (por la dependencia [])


  async function Buscar(_pagina) {
    if (_pagina && _pagina !== Pagina) {
      setPagina(_pagina);
    }
    // OJO Pagina (y cualquier estado...) se actualiza para el proximo render, para buscar usamos el parametro _pagina
    else {
      _pagina = Pagina;
    }
    const data = await personajesService.Buscar(Nombre, Activo, _pagina);
    setItems(data.Items);
    setRegistrosTotal(data.RegistrosTotal);

    //generar array de las páginas para mostrar en select del paginador
    const arrPaginas = [];
    for (let i = 1; i <= Math.ceil(data.RegistrosTotal/ 10); i++) {
      arrPaginas.push(i);
    }
    setPaginas(arrPaginas);
  }


  async function BuscarPorId(item, accionABMC) {
    const data = await personajesService.BuscarPorId(item);
    setItem(data);
    setAccionABMC(accionABMC);
  }
  

  function Consultar(item) {
    BuscarPorId(item, "C"); // paso la accionABMC pq es asincrono la busqueda y luego de ejecutarse quiero cambiar el estado accionABMC
  }
  function Modificar(item) {
    if (!item.Activo) {
      alert("No puede modificarse un registro Inactivo.");
      return;
    }
    BuscarPorId(item, "M"); // paso la accionABMC pq es asincrono la busqueda y luego de ejecutarse quiero cambiar el estado accionABMC
  }

  function Agregar() {
    setAccionABMC("A");
    setItem({
      IdPersonaje: 0,
      Nombre: null,
      NivelDePoder: null,
      fechaNacimiento: moment(new Date()).format("YYYY-MM-DD"),
      Activo: true,
      ComidaFavorita: 1
    });
  }


  function Imprimir() {
    alert("En desarrollo...");
  }

  async function ActivarDesactivar(item) {
    const resp = window.confirm(
      "Está seguro que quiere " +
        (item.Activo ? "desactivar" : "activar") +
        " el registro?"
    );
    if (resp) {
      await personajesService.ActivarDesactivar(item);
      await Buscar();
    }
  }
  
  async function Grabar(item) {
    await personajesService.Grabar(item);
    await Buscar()
    Volver();
  }
  

  // Volver/Cancelar desde Agregar/Modificar/Consultar
  function Volver() {
    setAccionABMC("L");
  }

  return (
    <div>
      <div className="tituloPagina">
        Personajes <small>{TituloAccionABMC[AccionABMC]}</small>
      </div>

      {AccionABMC === "L" && < PersonajesBuscar
        Nombre={Nombre}
        setNombre={setNombre}
        Activo={Activo}
        setActivo={setActivo}
        Buscar={Buscar}
        Agregar={Agregar}
      />}

      {/* Tabla de resutados de busqueda y Paginador */}
      {AccionABMC === "L" && Items?.length > 0 && <PersonajesListado
        {...{
          Items,
          Consultar,
          Modificar,
          ActivarDesactivar,
          Imprimir,
          Pagina,
          RegistrosTotal,
          Paginas,
          Buscar,
        }}
      />}

    {AccionABMC === "L" && Items?.length === 0 && <div className="alert alert-info mensajesAlert">
        <i className="fa fa-exclamation-sign"></i>
        No se encontraron registros...
      </div>}

      {/* Formulario de alta/modificacion/consulta */}
      {AccionABMC !== "L" && <PersonajesRegistro
        {...{ AccionABMC, Item, Grabar, Volver, ComidaFavorita }}
      />}
    </div>
  );
}
export { Personajes };
