import Swal from "sweetalert2";
import { ClientDb } from "../interfaces/client.interface";

export const DeleteClientInDb = async (data:ClientDb) => {
    try {
      const resp = await fetch(`http://127.0.0.1:5000/client`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (resp.status == 404) throw Error("404");
      Swal.fire(
          "Exito",
          "El cliente se ha eliminado de forma satisfactoria",
          "success"
        );
      } catch (error) {
        Swal.fire(
          "Error",
          "Ha habido un error al eliminar el cliente",
          "error"
        );
      }
  };