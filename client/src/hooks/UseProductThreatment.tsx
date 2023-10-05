import { product } from "../types/product";

type DBProduct = product & {
  _id: string,
  price: { $numberDecimal: string },
}

function useProductThreatment(products: DBProduct[]) {
  const mapCleanPrices = products.map((product: DBProduct) => {
    return {
      ...product,
      id: product._id,
      price: +product.price.$numberDecimal,
    }
  });

  return mapCleanPrices;
}

export default useProductThreatment;
