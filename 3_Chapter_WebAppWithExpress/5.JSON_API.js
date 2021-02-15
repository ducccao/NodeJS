const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", function (req, res) {
  const data = {
    name: "duccao",
    age: 1,
  };
  res.json(data);
});

app.listen(1212);
