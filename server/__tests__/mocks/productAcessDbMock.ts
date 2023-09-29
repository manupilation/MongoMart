import product from "../../src/types/Product";

const ProductDBModelMock = {
  create(product: product) {
    return {
      ...product,
      id: "123",
      date: Date.now(),
      save: () => {},
    }
  }
}

export default ProductDBModelMock;
