import { Request, Response } from "express";
import express, { NextFunction } from "express";
import ProductController from "../controller/ProductsController";

const productController = new ProductController();
const productRoute = express.Router();

productRoute.post("/product", (req: Request<any>, res: Response<any>, _: NextFunction) => {
    return productController.createProduct(req, res, _);
  });

export default productRoute;
