import { newProduct } from "../types/product";

const isFormValid = (newProduct: newProduct) => {
  const priceRegex = /^[0-9.,]+$/;
  const discountRateRegex = /^[0-9]+$/;

  const isPriceValid = priceRegex.test(String(newProduct.price));
  const isDiscountRateValid =
    !newProduct.discountRate || discountRateRegex.test(String(newProduct.discountRate));

  return (
    newProduct.name.length > 3 &&
    isPriceValid &&
    newProduct.image.length > 8 &&
    isDiscountRateValid
  );
};

export default isFormValid;
