import express from "express";
import consts from "./constants/index";
import database from "./database/connection";
import { generalError } from "./api/middlewares/GeneralError";
import cors from "cors";
import productRoute from "./api/routes/ProductRoute";
import "express-async-errors";
import specificErrorsThreatment from "./api/middlewares/specificErrors";

class App {
  app: express.Application;
  PORT: number;
  database: { connection(): Promise<void>; }

  constructor() {
    this.app = express();
    this.PORT = Number(consts.port);
    this.database = database;

    this.config();

    this.activeRoutes();

    this.errorMiddlewars();
  }

  config() {

    this.app.use(express.json());

    this.app.use(cors({
      methods: ['GET','POST','DELETE','PUT'],
      origin: "*"
    }));
  }


  activeRoutes() {
    this.app.use(productRoute);
  }

  errorMiddlewars() {
    this.app.use(specificErrorsThreatment);
    this.app.use(generalError);
  }

  start() {
    this.database.connection().catch((err) => console.error(err));

    const listen = this.app.listen(this.PORT || 3001, () => {
      console.log("App rodando liso na porta " + this.PORT);
    });

    return listen;
  }
}

export default App;
