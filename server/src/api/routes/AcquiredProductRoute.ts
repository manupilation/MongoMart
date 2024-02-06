import { Request, Response } from "express";
import express, { NextFunction } from "express";
import ProductController from "../controller/ProductsController";
import productPostValidation from "../middlewares/ProductPostValidation";
import productUpdateValidation from "../middlewares/ProductUpdateValidation";
import AcquiredProductController from "../controller/AcquiredProducts";

const acquiredProduct = new AcquiredProductController();
const acquireProductRoute = express.Router();

acquireProductRoute.get("/acquiredProduct/:userId", (req: Request<any>, res: Response<any>, _: NextFunction) => {
  return acquiredProduct.getProduct(req, res, _);
});

acquireProductRoute.post("/acquiredProduct", (req: Request<any>, res: Response<any>, _: NextFunction) => {
  return acquiredProduct.registerProducts(req, res, _);
});

export default acquireProductRoute;
