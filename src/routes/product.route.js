const express = require("express");
const router = express.Router();

const productValidation = require("../middlewares/product.middleware");
const productController = require("../controllers/product.controller");

router.get("/", productController.getProducts);
router.post("/", productValidation, productController.createProduct);
router.get("/:id", productController.getProductById);
router.patch("/:id", productValidation, productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
