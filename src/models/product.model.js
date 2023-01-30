const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
      default: "the product has no description.",
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    availableUnits: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false }
);

const Product = mongoose.model("products", productSchema);

module.exports = Product;
