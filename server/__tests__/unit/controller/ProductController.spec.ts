import ProductModelMock from "../../mocks/productModelMock";
import ProductController from "../../../src/controller/Product.controller"
import newProduct, { defaultProduct } from "../../mocks/product";
import { RequestWithBody } from "../../../src/types/Product";
import { Response } from "express";


describe('Tests ProductController Class', () => {
  let req: RequestWithBody, res: Response;
  let productController: ProductController;

  beforeAll(() => {
    req = {} as RequestWithBody;
    res = {} as Response;
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
    await productController.createProduct(req, res);

    expect(res.status).toBeCalledWith(201);
    expect(res.json).toBeCalledWith({ product: defaultProduct });
  });

  test('Tests controller getProducts', async () => {
    await productController.getProducts(req, res);

    expect(res.status).toBeCalledWith(200);
    expect(res.json).toBeCalledWith({ products: new Array(5).fill(newProduct) });
  });

  test('Tests controller getProduct', async () => {
    req.params = "fakeId"
    await productController.getProduct(req, res);

    expect(res.status).toBeCalledWith(200);
    expect(res.json).toBeCalledWith({ product: newProduct });
  });

  test('Tests controller updateProduct', async () => {
    req.body = { id: "fakeId", product: {} }
    await productController.updateProduct(req, res);

    expect(res.status).toBeCalledWith(200);
    expect(res.json).toBeCalledWith({ product: defaultProduct });
  });
});

