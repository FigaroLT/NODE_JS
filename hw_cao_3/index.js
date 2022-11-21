require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const cars = ["AUDI", "PORSCHE", "SUZUKI", "PEUGEOT"];

app.use(express.json());
app.use(cors());

const PORT = +process.env.PORT || 5001;

app.get("/", (_, res) => {
  res.send(cars);
  console.log(cars);
});

app.post("/", (req, res) => {
  const newCar = req.body.newCar;
  console.log(newCar);

  cars.push(newCar);
  res.send(cars);
});

app.listen(PORT);
