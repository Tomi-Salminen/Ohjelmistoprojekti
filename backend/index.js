const express = require("express");
const bodyParser = require("body-parser");
const accountRoutes = require("./routes/accounts");
const plantsRoutes = require("./routes/plants");
const ordersRoutes = require("./routes/orders");
require("dotenv").config();


const cors = require("cors");
const app = express();

// Cors asetukset
const corsOptions = {
  origin: process.env.ORIGIN || "http://localhost:5173",
  optionsSuccessStatus: 200, // For legacy browser support
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use("/api/accounts", accountRoutes);
app.use("/api/plants", plantsRoutes);
app.use("/api/orders", ordersRoutes);

module.exports = app;
