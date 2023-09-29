import { connect, set } from "mongoose";
import constants from "../../constants";

const database = {
  async connection() {
    set("strictQuery", true);
    await connect(constants.mongoUri).then(() => console.log("Connection established.")
    );
  }
}

export default database;
