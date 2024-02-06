import "dotenv/config";

export default {
  mongoUri: process.env.MONGO_URI || "mongodb://localhost:27017/MongoMart",
  port: process.env.PORT,
  testDbUri: "mongodb://localhost:27017/test",
  productsUrl: "https://api.mercadolibre.com/sites/MLB/search?q=",
  productsCategories: "https://api.mercadolibre.com/sites/MLB/categories",
  productById: "https://api.mercadolibre.com/items/",
};
