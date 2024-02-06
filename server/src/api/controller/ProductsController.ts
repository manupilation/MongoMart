import { NextFunction, Request, Response } from "express";
import ProductModel from "../model/Productsmodel";
import product, { updateProduct } from "../../types/Product";
import HttpStatus from "../../enum/HTTPStatus";
import resolver from "../../helper/Resolver";
import { Products } from "../model/Product";

class ProductController {
  private productModel: ProductModel;
  private mlProduct: Products;

  constructor() {
    this.productModel = new ProductModel();
    this.mlProduct = new Products();
  }

  createProduct = resolver(async (req: Request<{body: product}>, res: Response, _: NextFunction): Promise<void> => {
    const { body } = req;
    const create = await this.productModel.createProduct(body as product);

    res.status(HttpStatus.Created).json({product: create});
  });

  getProducts = resolver(async (_req: Request<{body: product}>, res: Response, _: NextFunction): Promise<void> =>{
    const products = await this.productModel.getProducts();

    res.status(HttpStatus.OK).json({products: products });
  });

  getMlProducts = resolver(async (req: Request, res: Response, _: NextFunction): Promise<void> =>{
    const { name } = req.params;
    const products = await this.mlProduct.getProductsByName(name || "default");

    res.status(HttpStatus.OK).json({ products });
  });

  getMlProductById = resolver(async (req: Request, res: Response, _: NextFunction): Promise<void> => {
    const {id} = req.params;
    const product = await this.mlProduct.getProductById(id);

    res.status(HttpStatus.OK).json({ product });
  });

  getMlCategories = resolver(async (req: Request, res: Response, _: NextFunction): Promise<void> => {
    const categories = await this.mlProduct.getProductCategories();

    res.status(HttpStatus.OK).json({ categories });
  });

   getProduct = resolver(async (req: Request, res: Response, _: NextFunction): Promise<void> => {
    const { id } = req.params;

    const product = await this.productModel.getProduct(id);

    res.status(HttpStatus.OK).json({product: product });
  });

  updateProduct = resolver( async(req: Request<{body: updateProduct}>, res: Response, _: NextFunction): Promise<void> => {
    const { body } = req;
    const product = await this.productModel.updateProduct(body as updateProduct);

    res.status(HttpStatus.OK).json({product: product });
  });

  deleteProduct = resolver(async (req: Request<{body: {id: string}}>, res: Response, _: NextFunction): Promise<void> => {
    const { id } = req.body;
    await this.productModel.deleteProduct(id);

    res.status(HttpStatus.OK).json({ excluded: "ok" });
  });
}

export default ProductController;
