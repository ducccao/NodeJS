const express = require("express");
const app = express();
const ejs = require("ejs");

app.set("view engine", "ejs");
app.set("views", "src/views");

app.get("/", (req, res) => {
  res.render("index", {
    name: "duccao",
    supplies: ["a", "bbb", "cc"],
  });
});

app.listen(1212, function (er) {
  if (er) {
    console.log(JSON.stringify(er));
  } else {
    console.log("App is start at 1212");
  }
});
