const express = require("express");

require("dotenv").config();

const app = express();
const cors = require("cors");
const PORT = +process.env.PORT || 5_001;
app.use(cors());

app.get("/", (_, res) => {
  res.send("Sveiki!");
});

app.get("/date", (req, res) => {
  const locale = req.query.locale || "en-US";
  const formattedDate = new Date().toLocaleString(locale);

  res.send(formattedDate);
});

app.listen(PORT);
