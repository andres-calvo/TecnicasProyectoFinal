import Swal from "sweetalert2";
import { ClientDb } from "../interfaces/client.interface";
const onError = () => {
  Swal.fire("Error", "No existe cliente con dicha cedula", "error");
};
export const SearchClientInDb = async ({ clientId }: { clientId: string }) => {
  try {
    const resp = await fetch(
      `https://secure-lake-76119.herokuapp.com/update?clientId=${clientId}`
    );
    if (resp.status == 404) throw Error("404");
    return await resp.json();
  } catch (error) {
    onError();
  }
};
export const UpdateClientInDb = async (data:ClientDb) => {
  try {
    //@ts-ignore
    data.work = data.work == "Si";
    const resp = await fetch(`https://secure-lake-76119.herokuapp.com/update`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (resp.status == 404) throw Error("404");
    Swal.fire(
        "Exito",
        "El cliente se ha actualizado de forma satisfactoria",
        "success"
      );
    } catch (error) {
      Swal.fire(
        "Error",
        "Ha habido un error al actualizar el cliente",
        "error"
      );
    }
};
