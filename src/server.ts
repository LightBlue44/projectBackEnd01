import { Database } from './database';
import express, { response } from "express";
import { Server } from "http";

const app = express();

const port = 3333;

const database = new Database();

app.use(express.json());

app.get("/", (request, response) => {
  const data = database.select("user");
  response.json(user);
});

app.post("/", (request, response) => {
  const  {name, email}  = request.body;
  const user = {
    id: '1',
    name,
    email
  }
  database.insert('user', user);
  response.status(201).send(database);
});

app.listen(port, () => {
  console.log(`Server running - end: http://localhost:${port}`);
});
