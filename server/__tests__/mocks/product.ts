export const defaultProduct = {
  id: "123456789",
  name: "Mousepad",
  price: 255.55,
  image: "fakeurl",
  discountRate: 16,
  date: Date.now(),
}

const newProduct = {
  name: "Mousepad",
  price: 255.55,
  image: "https://http2.mlstatic.com/D_744609-MLA32854739285_112019-I.jpg",
  discountRate: 16,
}

const getProduct = {
  id: "123456",
  name: "Mousepad",
}

export const updateProduct = {
  id: "idProduct",
  body: {
    name: "newName",
    price: 55.44,
    image: "newImage",
    discountRate: 14,
    id: "idProduct",
  }
}

export const keys = ["id", "name", "price", "image", "discountRate"];

export default newProduct;
