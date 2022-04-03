import mongoose from "mongoose";
const url =
  "mongodb+srv://tecnicasdb:whoM0xuYzZypHcVq@cluster0.fdysc.mongodb.net/tecnicas";

mongoose.connect(url);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error al conectar a MongoDB"));

db.once("open", function callback() {
  console.log("Conectado a MongoDB");
});
export default db;
