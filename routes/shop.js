const express = require("express");

const router = express.Router();

const shopController = require("../controllers/shop");

router.get("/", shopController.getIndex);

router.get("/products", shopController.getShopProducts);

router.get("/products/:productId", shopController.getProductById);

router.get("/cart", shopController.getCart);

router.post("/cart", shopController.addToCart);

router.post("/cart-delete-item", shopController.postDeleteProduct);

router.get("/orders", shopController.getOrders);

router.get("/checkout", shopController.getCheckout);

module.exports = router;
