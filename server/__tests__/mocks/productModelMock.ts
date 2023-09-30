import newProduct, { defaultProduct } from "./product";

class ProductModelMock {
  createProduct(req: Request, res: Response) {
    return defaultProduct;
  }

  getProducts(req: Request, res: Response) {
    return new Array(5).fill(newProduct);
  }

  getProduct(req: Request, res: Response) {
    return newProduct;
  }

  updateProduct(req: Request, res: Response) {
    return defaultProduct;
  }

  deteleProduct(req: Request, res: Response) {
    return "ok";
  }
}

export default ProductModelMock;
