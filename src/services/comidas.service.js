import axios from "axios";

const urlResource = "http://localhost:4000/api/comidas";

async function Buscar(Nombre, Activo, Pagina) {
  const resp = await axios.get(urlResource, {
    params: { Nombre, Activo, Pagina },
  });
  return resp.data;
}

async function BuscarPorId(item) {
  const resp = await axios.get(urlResource + "/" + item.IdComida);
  return resp.data;
}

async function ActivarDesactivar(item) {
  await axios.delete(urlResource + "/" + item.IdComida);
}

async function Grabar(item) {
  if (item.IdComida === 0) {
    await axios.post(urlResource, item);
  } else {
    await axios.put(urlResource + "/" + item.IdComida, item);
  }
}

export const comidasService = {
  Buscar,BuscarPorId,ActivarDesactivar,Grabar
};