import product, { updateProduct } from "../types/Product";
import { ProductDBModel } from "./Product"

class ProductModel {
  productAccessDb: typeof ProductDBModel;
  constructor() {
    this.productAccessDb = ProductDBModel;
  }

  async createProduct(product: product) {
    const create = await this.productAccessDb.create(product);

    const obj = (await create.save()).toObject();

    return {
      ...obj,
      price: Number(create.price),
    };
  }

  async getProducts() {
    const products = await this.productAccessDb.find().limit(5);

    return products;
  }

  async getProduct(id: string) {
    const product = await this.productAccessDb.findOne({id: id});

    return product;
  }

  async updateProduct(product: updateProduct) {
    const updateProduct = await this.productAccessDb.findOneAndUpdate({ id: product.id }, { ...product.body });

    return updateProduct;
  }

  async deleteProduct(id: string) {
    await this.productAccessDb.findOneAndDelete({id});

    return "ok";
  }
}

export default ProductModel;
