import { Schema, model } from "mongoose";

const ProductSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
  },
  quantity: {
    type: Schema.Types.Number,
    required: true,
  },
  price: {
    type: Schema.Types.String,
    required: true,
  },
  id: {
    type: Schema.Types.String,
    required: true,
  },
  date: {
    type: Schema.Types.Date,
    default: Date.now(),
  },
});

const AcquiredProductSchema = new Schema({
  user: {
    type: Schema.Types.String,
    required: true,
  },
  products: [ProductSchema],
}, {
  versionKey: false,
});

export const AcquiredProductModel =  model("AcquiredProduct", AcquiredProductSchema, "acquired_product");
