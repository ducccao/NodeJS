const express = require("express");
const bodyParser = require("body-parser");
// cookie parser mdw right there

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "pug");
app.set("views", "src/views");

app.get("/", (req, res) => {
  res.json({
    mess: "Hi",
  });
});

app.put("/settings", function (req, res) {
  const originalUrl = req.originalUrl;
  const id = req.params.id;
  const query = req.query.name;

  const header = req.get("content-type");
  console.log(originalUrl);
  console.log(id);
  console.log(query);
  console.log(header);

  const cookie = req.cookies.name;
});

app.listen(1212);
