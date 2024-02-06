import { AcquiredProduct } from "../../types/Product";
import { AcquiredProductModel } from "./AcquiredProducts";

class RegisterProduct {
  productAcquiredDb: typeof AcquiredProductModel;
  constructor() {
    this.productAcquiredDb = AcquiredProductModel;
  }

  async RegisterProductOnDb(product: AcquiredProduct) {
    const register = await this.productAcquiredDb.updateOne(
      {user: product.user}, 
      {$push: { products: product.products }});

    if(register.modifiedCount === 0) {
      await this.productAcquiredDb.create(product);
    }

    return register;
  }

  async GetRegisteredProductsOnDb(userId: string) {
    const productAcquired = await this.productAcquiredDb.find({user: userId});

    return productAcquired;
  }
}

export default RegisterProduct;