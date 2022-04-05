import Swal from "sweetalert2";
export interface CreateForm {
  name: string;
  email: string;
  age: number;
  civilstatus: "Soltero" | "Casado";
  work: "Si" | "No" | boolean;
}

export const registrarCliente = async (data: CreateForm) => {
  try {
    data.work = data.work == "Si";
    const resp = await fetch("https://secure-lake-76119.herokuapp.com/registrar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    console.log(resp);
    if (resp.status == 404) throw Error("404");
    Swal.fire(
      "Exito",
      "El cliente se ha añadido de forma satisfactoria",
      "success"
    );
  } catch (error) {
    Swal.fire(
      "Error",
      "Ha habido un error, verifica que la cedula y el email sean unicos",
      "error"
    );
  }
};
