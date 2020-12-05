import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  discristion: {
    type: String,
    
  },
  price: {
    type: Number,
    required: true
  },
  user: {
    type: mongoose.Schema.Types>ObjectId,
    ref:"User",
    required: true,
  },
});

const Product = mongoose.model("Product", ProductSchema);

export default Product;