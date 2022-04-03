import { createClient, deleteClient, GetClientByCedula, GetClients, updateClient } from "./services/client.service";
import db from "./db";
import express from "express";
import cors from "cors";
const app = express();
const port = process.env.PORT || 5000;
const dbConnection = db;
app.use(express.json());
app.use(cors());
app.get("/", async function (req, res) {
  await GetClients(res);
});
app.get("/update",async function (req,res) {
  await GetClientByCedula(req.query.clientId,res)  
})
app.post("/update",async function (req,res) {
  await updateClient(req.body,res)
})
app.delete("/client",async function (req,res) {
  await deleteClient(req.body,res)
})
app.post("/registrar", async function (req, res) {
  await createClient(req.body, res);
});
app.listen(port, () => {
  console.log(`Timezones by location application is running on port ${port}.`);
});
