import { product } from "../types/product";

type DBProduct = product & {
  price: { $numberDecimal: string },
}

function useProductThreatment(products: DBProduct[]) {
  const mapCleanPrices = products.map((product: DBProduct) => {
    return {
      ...product,
      price: +product.price.$numberDecimal,
    }
  });

  return mapCleanPrices;
}

export default useProductThreatment;
