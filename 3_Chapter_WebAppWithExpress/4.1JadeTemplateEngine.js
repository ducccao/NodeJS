

const express = require("express");
const app = express();

app.set("view engine", "pug");
app.set("views", "src/views");

app.get("/", function (req, res) {
  res.render("index", {
    name: "Duccao",
  });
});

app.listen(1212, function (er) {
  if (!er) {
    console.log(`App is running at PORT ${1212}`);
  } else {
    console.log(JSON.stringify(er));
  }
});
