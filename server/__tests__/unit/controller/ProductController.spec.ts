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

  test('Tests route CreateProduct', async () => {
    req.body = newProduct;
    await productController.createProduct(req, res);

    expect(res.status).toBeCalledWith(201);
    expect(res.json).toBeCalledWith({ product: defaultProduct });
  });
});

