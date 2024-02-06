import mongoose from "mongoose";
import { AcquiredProductModel } from "../api/model/AcquiredProducts"; 
import "dotenv/config";
import constants from "../constants";

mongoose.connect(constants.mongoUri).then(() => console.log("Conexão estabelecida com sucesso."));

const seedAcquiredProducts = [
  {
    user: "userID1",
    products: [
      {
        name: "Geladeira Babidi",
        quantity: 2,
        price: 19999.99,
        id: "productID1",
      },
      {
        name: "Anzol Aizen",
        quantity: 1,
        price: 59.99,
        id: "productID5",
      },
    ],
  },
  {
    user: "userID2",
    products: [
      {
        name: "Geladeira Gela Braba",
        quantity: 1,
        price: 3998.99,
        id: "productID3",
      },
      {
        name: "Balde de cola rato",
        quantity: 3,
        price: 129.99,
        id: "productID12",
      },
    ],
  },
];

const seedAcquiredProductsDB = async () => {
  await AcquiredProductModel.deleteMany({});
  await AcquiredProductModel.insertMany(seedAcquiredProducts);
};

seedAcquiredProductsDB().then(() => {
  mongoose.connection.close();
  console.log("Seed de AcquiredProduct concluída.");
});
