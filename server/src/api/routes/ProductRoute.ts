import { Request, Response } from "express";
import express, { NextFunction } from "express";
import ProductController from "../controller/ProductsController";
import productPostValidation from "../middlewares/ProductPostValidation";
import productUpdateValidation from "../middlewares/ProductUpdateValidation";

const productController = new ProductController();
const productRoute = express.Router();

productRoute.post("/product", productPostValidation, (req: Request<any>, res: Response<any>, _: NextFunction) => {
  return productController.createProduct(req, res, _);
});

productRoute.get("/products", (req: Request<any>, res: Response<any>, _: NextFunction) => {
  return productController.getProducts(req, res, _);
});

productRoute.get("/product/:id", (req: Request<any>, res: Response<any>, _: NextFunction) => {
  return productController.getProduct(req, res, _);
});

productRoute.get("/ml/product/:name", (req: Request<any>, res: Response<any>, _: NextFunction) => {
  return productController.getMlProducts(req, res, _);
});

productRoute.get("/ml/product/category/:name", (req: Request<any>, res: Response<any>, _: NextFunction) => {
  return productController.getMlProductsByCategory(req, res, _);
});

productRoute.get("/ml/product/item/:id", (req: Request<any>, res: Response<any>, _: NextFunction) => {
  return productController.getMlProductById(req, res, _);
});

productRoute.get("/ml/categories", (req: Request<any>, res: Response<any>, _: NextFunction) => {
  return productController.getMlCategories(req, res, _);
})

productRoute.put("/product", productUpdateValidation, (req: Request<any>, res: Response<any>, _: NextFunction) => {
  return productController.updateProduct(req, res, _);
});

productRoute.delete("/product", (req: Request<any>, res: Response<any>, _: NextFunction) => {
  return productController.deleteProduct(req, res, _);
});

export default productRoute;
