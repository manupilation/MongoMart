import express from "express";
import consts from "./constants/index";
import database from "./database/connection";
import { generalError } from "./api/middlewares/GeneralError";
import cors from "cors";
import productRoute from "./api/routes/ProductRoute";
import "express-async-errors";

class App {
  app: express.Application;
  PORT: number;

  constructor() {
    this.app = express();
    this.PORT = Number(consts.port);

    this.config();

    this.activeRoutes();

    this.errorMiddlewars();
  }

  config() {
    this.app.use(express.json());

    this.app.use(cors({
      methods: ['GET','POST','DELETE','UPDATE'],
      origin: "*"
    }));
  }


  activeRoutes() {
    this.app.use(productRoute);
  }

  errorMiddlewars() {
    this.app.use(generalError);
  }

  start() {
    database.connection().catch((err) => console.error(err));

    this.app.listen(this.PORT, () => {
      console.log("App rodando liso na porta " + this.PORT);
    });
  }
}

export default App;
