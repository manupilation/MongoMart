import mongoose, { Schema, model, mongo } from "mongoose";
import consts from "../../constants/";
import { MlProduct, mlProductCategory } from "../../types/Product";
import axios, { AxiosResponse } from "axios";

const Product = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
  },
  price: {
    type: Schema.Types.Decimal128,
    required: true,
  },
  image: {
    type: Schema.Types.String,
    required: true,
  },
  date: {
    type: Schema.Types.Date,
    default: Date.now(),
  },
  discountRate: {
    type: Schema.Types.Number,
  },
}, {
  versionKey: false,
});

export const ProductDBModel = model("products", Product, "products");

export class Products {
  async getProducts(name: string) {
    const products: AxiosResponse<{results: Array<MlProduct>}> = await axios.get(consts.productsUrl + "default");
    return products.data.results;
  }

  async getProductsByName(name: string) {
    const products: AxiosResponse<{results: Array<MlProduct>}> = await axios.get(consts.productsUrl + name);
    return products.data.results;
  }

  async getProductsByCategory(name: string) {
    const products: AxiosResponse<{results: Array<MlProduct>}> = await axios.get(consts.productsByCategory + name);
    return products.data.results;
  }

  async getProductById(id: string) {
    const product: AxiosResponse<MlProduct> = await axios.get(consts.productById + id);

    return product.data;
  }

  async getProductCategories() {
    const products: AxiosResponse<{results: Array<mlProductCategory>}> = await axios.get(consts.productsCategories);
    return products.data;
  }
}
