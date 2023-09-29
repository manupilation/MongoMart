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
  image: "fakeurl",
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
    price: "newPrice",
    image: "newImage",
    discountRate: "newDiscountRate",
  }
}

export const keys = ["id", "name", "price", "image", "discountRate", "date"];

export default newProduct;
