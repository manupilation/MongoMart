import ProductModel from "../../../src/model/Products.model";
import newProduct, { keys as keysProducts, updateProduct } from "../../mocks/product";
import ProductDBModelMock from "../../mocks/productAcessDbMock";
import { jest } from '@jest/globals';

describe('Tests ProductModel class', () => {
  let productModel: ProductModel;

  beforeAll(() => {
    productModel = new ProductModel() as any;
    productModel.productAccessDb = ProductDBModelMock as any;
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  test('Tests if ProductModel create and return a product', async () => {
    const createProduct = await productModel.createProduct(newProduct);

    keysProducts.map((key) => expect(createProduct).toHaveProperty(key));
  });

  test('Tests if ProductModel can get 5 products', async () => {
    const getProducts = await productModel.getProducts();

    expect(getProducts.length).toBe(5);
  });

  test('Tests if ProductModel can get 5 products', async () => {
    const getProduct = await productModel.getProduct();

    expect(getProduct.length).toBe(5);
  });

  test('Tests if ProductModel can update a product', async () => {
    const updateProductProcess = await productModel.updateProduct(updateProduct);

    keysProducts.map((key) => expect(updateProductProcess).toHaveProperty(key));
  });

  test('Tests if ProductModel can delete a product', async () => {
    const deleteProduct = await productModel.deleteProduct({id: "123456879"});

    expect(deleteProduct).toBe("ok");
  });
});

