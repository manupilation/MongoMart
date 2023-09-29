import product from "../types/Product";
import { ProductDBModel } from "./Product"

class ProductModel {
  productAccessDb: typeof ProductDBModel;
  constructor() {
    this.productAccessDb = ProductDBModel;
  }

  async createProduct(product: product) {
    const create = await this.productAccessDb.create(product);

    create.save();

    return {
      ...create,
      price: Number(create.price),
    };
  }
}

export default ProductModel;
