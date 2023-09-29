import { connect, set } from "mongoose";
import constants from "../../constants";

const database = {
  async connection() {
    set("strictQuery", true);
    await connect(constants.mongoUri);
  }
}

export default database;
