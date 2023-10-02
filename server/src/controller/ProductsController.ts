import { Request, Response } from "express";
import ProductModel from "../model/Productsmodel";
import product, { updateProduct } from "../types/Product";
import HttpStatus from "../enum/HTTPStatus";

class ProductController {
  private productModel: ProductModel;

  constructor() {
    this.productModel = new ProductModel();
  }

  async createProduct(req: Request<{body: product}>, res: Response): Promise<void> {
    try {
      const { body } = req;
      const create = await this.productModel.createProduct(body as product);
      res.status(HttpStatus.Created).json({product: create});
    } catch (err) {
      res.status(HttpStatus.InternalServerError).json({error: err.message});
    }

  }

  async getProducts(_req: Request<{body: product}>, res: Response): Promise<void> {
    const products = await this.productModel.getProducts();

    res.status(HttpStatus.OK).json({products: products });
  }

  async getProduct(req: Request<{body: {id: string}}>, res: Response): Promise<void> {
    const { id } = req.body;
    const product = await this.productModel.getProduct(id);

    res.status(HttpStatus.OK).json({product: product });
  }

  async updateProduct(req: Request<{body: updateProduct}>, res: Response): Promise<void> {
    const { body } = req;
    const product = await this.productModel.updateProduct(body as updateProduct);

    res.status(HttpStatus.OK).json({product: product });
  }

  async deleteProduct(req: Request<{body: {id: string}}>, res: Response): Promise<void> {
    const { id } = req.body;
    await this.productModel.deleteProduct(id);

    res.status(HttpStatus.OK).json({ excluded: "ok" });
  }
}

export default ProductController;
