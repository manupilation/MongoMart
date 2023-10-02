import { Request, Response } from "express";
import express, { NextFunction } from "express";
import ProductController from "../controller/ProductsController";

const productController = new ProductController();
const productRoute = express.Router();

productRoute.post("/product", (req: Request<any>, res: Response<any>, _: NextFunction) => {
  return productController.createProduct(req, res, _);
});

productRoute.get("/products", (req: Request<any>, res: Response<any>, _: NextFunction) => {
  return productController.getProducts(req, res, _);
});

productRoute.get("/product/:id", (req: Request<any>, res: Response<any>, _: NextFunction) => {
  return productController.getProduct(req, res, _);
});

productRoute.put("/product", (req: Request<any>, res: Response<any>, _: NextFunction) => {
  return productController.updateProduct(req, res, _);
});

export default productRoute;
