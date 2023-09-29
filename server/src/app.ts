import express from "express";
import consts from "../constants/index";
import database from "./database/connection";

class App {
  app: express.Application;
  PORT: number;

  constructor() {
    this.app = express();
    this.PORT = Number(consts.port);
  }

  start() {
    database.connection().catch((err) => err 
      ? console.log(err) 
      : console.log("Connection established.")
    );

    this.app.listen(this.PORT, () => {
      console.log("App rodando liso na porta " + this.PORT);
    });
  }
}

export default App;
