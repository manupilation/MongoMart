import product, { updateProduct } from "../../src/types/Product";
import { defaultProduct } from "./product";

const ProductDBModelMock = {
  getProducts() {
    return new Array(5).fill(defaultProduct);
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
