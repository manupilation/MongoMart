import mongoose, { Schema, model } from "mongoose";

const Product = new Schema({
  id: {
    type: Schema.Types.String,
    unique: true,
    required: true,
  },
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

export const ProductModel = model("products", Product, "products");
