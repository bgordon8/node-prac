const express = require("express");

const viewController = require("../controllers/error");
const router = express.Router();

router.use("/", viewController.getError);

module.exports = router;
