import express from "express";

class App {
  app: express.Application;
  PORT: number;
  
  constructor() {
    this.app = express();
    this.PORT = 3000;
  }

  start() {
    this.app.listen(3000, () => {
      console.log("App rodando liso na porta " + this.PORT);
    });
  }
}

export default App;
