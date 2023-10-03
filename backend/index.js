const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/accounts");
require("dotenv").config();

const cors = require("cors");

const PORT = process.env.PORT || 3001;

const app = express();

// Cors asetukset
const corsOptions = {
  origin: process.env.ORIGIN || "http://localhost:5173",
  optionsSuccessStatus: 200, // For legacy browser support
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use("/api/accounts", userRoutes);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

module.exports = app;
