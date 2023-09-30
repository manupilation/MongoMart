import product, { updateProduct } from "../../src/types/Product";
import { defaultProduct } from "./product";

const ProductDBModelMock = {
  find() {
    return { limit: () => new Array(5).fill(defaultProduct)};
  },

  findOne(id: string) {
    return defaultProduct;
  },

  findOneAndUpdate(id: string, body: product) {
    return defaultProduct;
  },

  findOneAndDelete(id: string) {
    return "ok";
  },

  create(product: product) {
    return {
      ...product,
      id: "123",
      date: Date.now(),
      save: () => {},
    }
  },

  update(product: updateProduct) {
    return {
      ...product,
      save: () => {},
    }
  },

  delete(id: string) {
    return "ok";
  }
}

export default ProductDBModelMock;
