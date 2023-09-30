import { Response } from "express";
import ProductModel from "../model/Products.model";
import product, { RequestWithBody } from "../types/Product";
import HttpStatus from "../enum/HTTPStatus";

class ProductController {
  productModel: ProductModel;

  constructor() {
    this.productModel = new ProductModel();
  }

  async createProduct(req: RequestWithBody, res: Response): Promise<void> {
    const { body } = req;
    const create = await this.productModel.createProduct(body as product);

    res.status(HttpStatus.Created).json({product: create});
  }

  async getProducts(_req: RequestWithBody, res: Response): Promise<void> {
    const products = await this.productModel.getProducts();

    res.status(HttpStatus.OK).json({products: products })
  }

  async getProduct(req: RequestWithBody, res: Response): Promise<void> {
    const { id } = req.params;
    const product = await this.productModel.getProduct(id);

    res.status(HttpStatus.OK).json({products: product })
  }
}

export default ProductController;
