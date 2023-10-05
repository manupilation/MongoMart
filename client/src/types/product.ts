export type newProduct = {
  name: string,
  price: number,
  image: string,
  discountRate?: number,
}

export type product = newProduct & {
  id: string,
  date: string,
};

export type productToClean = newProduct & {
  price: { $numberDecimal: string },
  id: string,
  date: string
}
