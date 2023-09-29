type product = {
  name: string,
  price: number,
  image: string,
  discountRate?: number,
}

export type updateProduct = {
  id: string,
  body: product,
}

export default product;
