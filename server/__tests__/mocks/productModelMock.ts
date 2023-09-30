import { defaultProduct } from "./product";

class ProductModelMock {
  createProduct(req: Request, res: Response) {
    return defaultProduct;
  }
}

export default ProductModelMock;
