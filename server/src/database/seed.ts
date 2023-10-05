import mongoose from "mongoose";
import { ProductDBModel } from "../api/model/Product";
import "dotenv/config"
import constants from "../constants";
import product from "../types/Product";


mongoose.connect(constants.mongoUri).then(() => console.log("Connection established."));

const seedProducts: product[] = [
  {
    name: "Geladeira Babidi",
    price: 19999.99,
    image: "https://http2.mlstatic.com/D_621033-MLA49061312577_022022-I.jpg",
    discountRate: 10,
  },
  {
    name: "Geladeira Raka no Togami",
    price: 2999.99,
    image: "https://http2.mlstatic.com/D_677207-MLA50041554380_052022-I.jpg",
    discountRate: 20,
  },
  {
    name: "Geladeira Gela Braba",
    price: 3998.99,
    image: "https://http2.mlstatic.com/D_647558-MLU69495913955_052023-I.jpg",
    discountRate: 15,
  },
  {
    name: "Geladeira Rodrigo Polaca",
    price: 495.99,
    image: "https://http2.mlstatic.com/D_892884-MLA48848164976_012022-I.jpg",
    discountRate: 5,
  },
  {
    name: "Anzol Aizen",
    price: 59.99,
    image: "https://http2.mlstatic.com/D_777845-MLU70354925375_072023-I.jpg",
    discountRate: 25,
  },
  {
    name: "Anzol pega bobo",
    price: 29.99,
    image: "https://http2.mlstatic.com/D_985916-MLU70358032769_072023-I.jpg",
    discountRate: 12,
  },
  {
    name: "Caixa de Baygon",
    price: 79.99,
    image: "https://http2.mlstatic.com/D_737763-MLA43880872819_102020-I.jpg",
    discountRate: 8, 
  },
  {
    name: "Boneca mal criada",
    price: 89.99,
    image: "https://http2.mlstatic.com/D_907235-MLB47980927997_102021-I.jpg",
    discountRate: 18, 
  },
  {
    name: "Boneca disney",
    price: 99.99,
    image: "https://http2.mlstatic.com/D_988913-MLB50551004108_072022-I.jpg",
    discountRate: 20, 
  },
  {
    name: "Geladeira gelada",
    price: 1099.99,
    image: "https://http2.mlstatic.com/D_621033-MLA49061312577_022022-I.jpg",
    discountRate: 22, 
  },
  {
    name: "Cola rato",
    price: 39.40,
    image: "https://http2.mlstatic.com/D_728508-MLB43821929002_102020-I.jpg",
    discountRate: 7, 
  },
  {
    name: "Balde de cola rato",
    price: 129.99,
    image: "https://http2.mlstatic.com/D_245611-MLB20588796355_022016-I.jpg",
    discountRate: 14, 
  },
  {
    name: "Gaiola de Hamster Premium",
    price: 139.99,
    image: "https://http2.mlstatic.com/D_877525-MLU72014521447_092023-I.jpg",
    discountRate: 3, 
  },
  {
    name: "Casinha hamster tubo",
    price: 149.99,
    image: "https://http2.mlstatic.com/D_782433-MLB53432591789_012023-I.jpg",
    discountRate: 17, 
  },
  {
    name: "Geladeira Simon",
    price: 1599.99,
    image: "https://http2.mlstatic.com/D_621033-MLA49061312577_022022-I.jpg",
    discountRate: 9, 
  },
];

const seedDB = async () => {
  await ProductDBModel.deleteMany({});
  await ProductDBModel.insertMany(seedProducts);
}

seedDB().then(() => {
  mongoose.connection.close();
  console.log("Seed concluída.");
});

