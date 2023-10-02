import { NextFunction, Response } from "express";
import ProductModelMock from "../../mocks/productModelMock";
import ProductController from "../../../src/controller/ProductsController"
import newProduct, { defaultProduct } from "../../mocks/product";
import product from "../../../src/types/Product";


describe('Tests ProductController Class', () => {
  let req: any, res: Response, next: NextFunction;
  let productController: ProductController;

  beforeAll(() => {
    req = {} as any;
    res = {} as Response;
    next = () => {};
  });

  beforeEach(() => {
    res.status = jest.fn().mockReturnThis();
    res.json = jest.fn().mockReturnThis();
    productController = new ProductController();
    (productController as any).productModel = new ProductModelMock();
  });

  afterAll(() => jest.clearAllMocks());

  test('Tests controller CreateProduct', async () => {
    req.body = newProduct;
    await productController.createProduct(req, res, next);

    expect(res.status).toBeCalledWith(201);
    expect(res.json).toBeCalledWith({ product: defaultProduct });
  });

  test('Tests controller getProducts', async () => {
    await productController.getProducts(req, res, next);

    expect(res.status).toBeCalledWith(200);
    expect(res.json).toBeCalledWith({ products: new Array(5).fill(newProduct) });
  });

  test('Tests controller getProduct', async () => {
    req.params = "fakeId"
    await productController.getProduct(req, res, next);

    expect(res.status).toBeCalledWith(200);
    expect(res.json).toBeCalledWith({ product: newProduct });
  });

  test('Tests controller updateProduct', async () => {
    req.body = { id: "fakeId", product: {} }
    await productController.updateProduct(req, res, next);

    expect(res.status).toBeCalledWith(200);
    expect(res.json).toBeCalledWith({ product: defaultProduct });
  });
  
  test('Tests controller deleteProduct', async () => {
    req.body = "fakeId"
    await productController.deleteProduct(req, res, next);

    expect(res.status).toBeCalledWith(200);
    expect(res.json).toBeCalledWith({ excluded: "ok" });
  });
});

