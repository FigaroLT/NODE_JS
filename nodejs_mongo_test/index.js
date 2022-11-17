require("dotenv").config();

const { MongoClient } = require("mongodb");
const express = require("express");
const app = express();
const cors = require("cors");
const { response } = require("express");
const { type } = require("os");
const PORT = +process.env.PORT || 5_001;
const URI = process.env.URI;
const client = new MongoClient(URI);
const DB = process.env.DB;
const dbCollection = process.env.dbCollection;
app.use(cors());
app.use(express.json());

app.get("/users", async (_, res) => {
  const connection = await client.connect();
  const data = await connection
    .db(DB)
    .collection(dbCollection)
    .find()
    .toArray();
  await connection.close();
  return res.send(data);
});

app.post("/user", async (req, res) => {
  const { firstName, lastName } = req.body || {};
  console.log(req.body);
  if (!firstName || !lastName) {
    res.status(400).send("Nepatekti firstName ir lastName").end();
    return;
  }
  if (typeof firstName !== "string" || typeof lastName !== "string") {
    res.status(400).send("First name & last name aren't a string").end();
    return;
  }
  try {
    const con = await client.connect();
    const dbRes = await con
      .db(DB)
      .collection(dbCollection)
      .insertOne({ name: firstName, surname: lastName });
    await con.close();
    return res.send(dbRes);
  } catch (err) {
    res.status(500).send({ err });
  }
});

app.listen(PORT);
