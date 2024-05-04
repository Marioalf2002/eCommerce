import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema({
  imgSrc: {
    type: String,
    required: true,
  },
  fileKey: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Product = models.Product || model("Product", ProductSchema);

export default Product;
