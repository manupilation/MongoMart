import product, { updateProduct } from "../../types/Product";
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
      id: obj._id,
      price: Number(create.price),
    };
  }

  async getProducts() {
    const products = await this.productAccessDb.find().limit(15);

    return products;
  }

  async getProduct(id: string) {
    const product = await this.productAccessDb.findOne({_id: id});

    return product;
  }

  async updateProduct(product: updateProduct) {
    const updateProduct = await this.productAccessDb.findOneAndUpdate({ _id: product.id }, { ...product.body }, {new: true});

    return {
      id: updateProduct._id,
      name: updateProduct.name,
      price: updateProduct.price,
      image: updateProduct.image,
      discountRate: updateProduct.discountRate,
    };
  }

  async deleteProduct(id: string) {
    await this.productAccessDb.findOneAndDelete({_id: id});

    return "ok";
  }
}

export default ProductModel;
