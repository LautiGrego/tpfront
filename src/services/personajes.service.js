import axios from "axios";

const urlResource = "http://localhost:4000/api/personajesDBZ";

async function Buscar(Nombre, Activo, Pagina) {
  const resp = await axios.get(urlResource, {
    params: { Nombre, Activo, Pagina },
  });
  return resp.data;
}

async function BuscarPorId(item) {
  const resp = await axios.get(urlResource + "/" + item.IdPersonaje);
  return resp.data;
}

async function ActivarDesactivar(item) {
  await axios.delete(urlResource + "/" + item.IdPersonaje);
}

async function Grabar(item) {
  if (item.IdPersonaje === 0) {
    await axios.post(urlResource, item);
  } else {
    await axios.put(urlResource + "/" + item.IdPersonaje, item);
  }
}

export const personajesService = {
  Buscar,BuscarPorId,ActivarDesactivar,Grabar
};
