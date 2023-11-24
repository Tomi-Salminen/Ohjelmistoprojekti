const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");

const {
  getPlants,
  getPlantsById,
  createPlant,
  deletePlant,
  updatePlant,
} = require("../controllers/plants");

router.get("/", getPlants);
router.get("/:id", getPlantsById);

router.use(verifyToken);

router.post('/', createPlant);
router.put('/:id', updatePlant);
router.delete('/:id', deletePlant);

module.exports = router;
