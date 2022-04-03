import { createClient, GetClients } from "./services/client.service";
import db from "./db";
import express from "express";
import cors from "cors";
const app = express();
const port = 5000;
const dbConnection = db;
app.use(express.json());
app.use(cors());
app.get("/", async function (req, res) {
  await GetClients(res);
});
app.post("/registrar", async function (req, res) {
  await createClient(req.body, res);
});
app.listen(port, () => {
  console.log(`Timezones by location application is running on port ${port}.`);
});
