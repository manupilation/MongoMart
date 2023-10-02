import express from "express";
import ProductController from "../controller/ProductsController";

const productController = new ProductController();
const productRoute = express.Router();

productRoute.post("/product", (req: any, res: any) => {
    return productController.createProduct(req, res);
  });

export default productRoute;
