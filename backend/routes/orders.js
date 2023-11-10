const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");

const { createOrder, getOrdersByUserId } = require("../controllers/orders");

router.use(verifyToken);
router.post("/", createOrder);
router.get("/:uid", getOrdersByUserId);

module.exports = router;
