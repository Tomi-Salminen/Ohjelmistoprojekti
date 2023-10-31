const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");

const {
  getPlants,
  getPlantsById
} = require("../controllers/plants");

router.get("/", getPlants);
router.get("/:id", getPlantsById);

module.exports = router;
