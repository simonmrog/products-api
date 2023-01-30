const ProductModel = require("../models/product.model");

function getProducts(id) {
  return ProductModel.find(id);
}

function getProductById(id) {
  return ProductModel.findById(id);
}

function createProduct(product) {
  const newProduct = new ProductModel(product);
  return newProduct.save();
}

function updateProduct(id, product) {
  return ProductModel.findByIdAndUpdate(id, product, { new: true });
}

async function deleteProduct(id) {
  const video = await ProductModel.findById(id);
  if (!video) throw new Error("Product Not Found");
  return ProductModel.findByIdAndDelete(id);
}

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
