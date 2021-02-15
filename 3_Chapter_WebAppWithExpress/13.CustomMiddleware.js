const express = require("express");
const app = express();

app.use(function (req, res, next) {
  req.user = "nhung";
  next();
});

app.get("/", function (req, res) {
  const user = req.user;
  return res.send(user);
});

app.listen(1212);
