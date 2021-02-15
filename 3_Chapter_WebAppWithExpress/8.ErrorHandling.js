const express = require("express");
const app = express();

app.set("view engine", "pug");
app.set("views", "src/views");

app.use(function (req, res, next) {
  var err = new Error("New Error");
  err.status = 404;
  console.log(err);

  next(err);
});

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  console.log(err);

  res.render("error", {
    message: err.message,
    error: err,
  });
});

app.listen(1212);
