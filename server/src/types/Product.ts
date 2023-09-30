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

export type RequestWithBody = Request & {
  body: any;
};

export default product;
