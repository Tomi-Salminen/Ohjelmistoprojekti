const express = require("express");
const router = express.Router();

const {
  getPlants,
  getPlantsById
} = require("../controllers/plants");

router.get("/", getPlants);
router.get("/:id", getPlantsById);

module.exports = router;
