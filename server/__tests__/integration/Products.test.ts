import request from "supertest";
import {app as application} from "../../src/index";
import newProduct from "../mocks/product";

describe("Integration tests", () => {
  let app;
  const ALL_INFOS_ERROR_MESSAGE = "It's necessary all infos";

  beforeAll(() => {
    app = application;
  });

  describe("Integration tests of PostProduct route", () => {
    it('Deve retornar um status 201 ao criar um novo produto', async () => {
      const response = await request(app).post('/product')
        .send(newProduct);
  
      expect(response.status).toBe(201);
    });

    it('Deve retornar um status 400 ao tentar criar um produto sem nome', async () => {
      const {name, ...productWithoutName} = newProduct;
      const response = await request(app).post('/product')
        .send(productWithoutName);
  
      expect(response.status).toBe(400);
      expect(response.body.error).toBe(ALL_INFOS_ERROR_MESSAGE);
    });

    it('Deve retornar um status 400 ao tentar criar um produto com nome numeral', async () => {
      const response = await request(app).post('/product')
        .send({...newProduct, name: 123});
  
      expect(response.status).toBe(400);
    });

    it('Deve retornar um status 400 ao tentar criar um produto sem preço', async () => {
      const {price, ...productWithoutPrice} = newProduct;
      const response = await request(app).post('/product')
        .send(productWithoutPrice);
  
      expect(response.status).toBe(400);
      expect(response.body.error).toBe(ALL_INFOS_ERROR_MESSAGE);
    });

    it('Deve retornar um status 400 ao tentar criar um produto com preço string', async () => {
      const response = await request(app).post('/product')
        .send({...newProduct, price: "Value"});
  
      expect(response.status).toBe(400);
      expect(response.body.error).toBe("Your value of price must be a/an number");
    });

    it('Deve retornar um status 400 ao tentar criar um produto sem imagem', async () => {
      const {image, ...productWithoutImage} = newProduct;
      const response = await request(app).post('/product')
        .send(productWithoutImage);
  
      expect(response.status).toBe(400);
      expect(response.body.error).toBe(ALL_INFOS_ERROR_MESSAGE);
    });

    it('Deve retornar um status 400 ao tentar criar um produto com url image numeral', async () => {
      const response = await request(app).post('/product')
        .send({...newProduct, image: 123});
  
      expect(response.status).toBe(400);
      expect(response.body.error).toBe("Your value of image must be a/an string");
    });
  });

  describe("Integration tests of PostProduct route", () => {
    it('Deve retornar um status 200 ao acessar a rota /GET', async () => {
      const response = await request(app).get('/products');
      expect(response.status).toBe(200);
    });
  });

  describe("Integration tests of PUT Product route", () => {
    it('Deve retornar um status 400 ao tentar atualizar um produto sem id', async () => {
      const response = await request(app).put('/product')
        .send({body: newProduct});
  
      expect(response.status).toBe(400);
      expect(response.body.error).toBe("Your value of id must be a/an string");
    });

    it('Deve retornar um status 400 ao tentar atualizar um produto com nome numeral', async () => {
      const response = await request(app).put('/product')
      .send({id: "123", body: {...newProduct, name: 123}});
  
      expect(response.status).toBe(400);
      expect(response.body.error).toBe("Your value of name must be a/an string");
    });

    it('Deve retornar um status 400 ao tentar atualizar um produto sem preço', async () => {
      const {price, ...productWithoutPrice} = newProduct;
      const response = await request(app).put('/product')
      .send({id: "123", body: productWithoutPrice});
  
      expect(response.status).toBe(400);
      expect(response.body.error).toBe(ALL_INFOS_ERROR_MESSAGE);
    });

    it('Deve retornar um status 400 ao tentar criar um produto com preço string', async () => {
      const response = await request(app).put('/product')
        .send({id: "fakeId", body: { ...newProduct, price: "Value" }});
  
      expect(response.status).toBe(400);
      expect(response.body.error).toBe("Your value of price must be a/an number");
    });

    it('Deve retornar um status 400 ao tentar atualizar um produto sem imagem', async () => {
      const {image, ...productWithoutImage} = newProduct;
      const response = await request(app).put('/product')
      .send({id: "fakeId", body: { ...productWithoutImage }});
  
      expect(response.status).toBe(400);
      expect(response.body.error).toBe(ALL_INFOS_ERROR_MESSAGE);
    });

    it('Deve retornar um status 400 ao tentar criar um produto com url image numeral', async () => {
      const response = await request(app).post('/product')
        .send({id: "fakeId", body: {...newProduct, image: 123}});
  
      expect(response.status).toBe(400);
      expect(response.body.error).toBe("It's necessary all infos");
    });
  });
});
