import mongoose, { Schema, model, mongo } from "mongoose";

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
