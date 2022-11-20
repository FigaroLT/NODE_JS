const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
require("dotenv").config();
const PORT = +process.env.PORT || 5001;

const cars = ["BMW", "AUDI", "PORSCHE", "BENTLEY", "VW"];

app.get("/", (req, res) => {
  res.send(cars);
});

app.listen(PORT);
