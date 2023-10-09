const express = require("express");
const router = express.Router();

const {
  loginUser,
  signUpUser,
  getUserById,
  getAccounts,
} = require("../controllers/accounts");

router.get("/", getAccounts);
router.post("/signup", signUpUser);
router.post("/login", loginUser);
router.get("/:uid", getUserById);

module.exports = router;
