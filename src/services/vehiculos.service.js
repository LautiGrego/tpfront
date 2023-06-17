import axios from "axios";

const urlResource = "http://localhost:4000/api/vehiculos";

async function Buscar(Modelo, Activo, Pagina) {
  const resp = await axios.get(urlResource, {
    params: { Modelo, Activo, Pagina },
  });
  return resp.data;
}

async function BuscarPorId(item) {
  const resp = await axios.get(urlResource + "/" + item.IdVehiculo);
  return resp.data;
}

async function ActivarDesactivar(item) {
  await axios.delete(urlResource + "/" + item.IdVehiculo);
}

async function Grabar(item) {
  if (item.IdVehiculo === 0) {
    await axios.post(urlResource, item);
  } else {
    await axios.put(urlResource + "/" + item.IdVehiculo, item);
  }
}

export const vehiculosService = {
  Buscar,BuscarPorId,ActivarDesactivar,Grabar
};
