import axios from "axios";

const urlResource = "http://localhost:4000/api/equipos";

async function Buscar(Nombre, Activo, Pagina) {
  const resp = await axios.get(urlResource, {
    params: { Nombre, Activo, Pagina },
  });
  return resp.data;
}

async function BuscarPorId(item) {
  const resp = await axios.get(urlResource + "/" + item.IdEquipo);
  return resp.data;
}

async function ActivarDesactivar(item) {
  await axios.delete(urlResource + "/" + item.IdEquipo);
}

async function Grabar(item) {
  if (item.IdEquipo === 0) {
    await axios.post(urlResource, item);
  } else {
    await axios.put(urlResource + "/" + item.IdEquipo, item);
  }
}

export const equiposService = {
  Buscar,BuscarPorId,ActivarDesactivar,Grabar
};