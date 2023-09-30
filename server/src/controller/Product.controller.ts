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
}

export default ProductController;
