const express = require("express");
const app = express();

app.get("/names/:name", function (req, res, next) {
  if (req.params.name === "nhung") {
    return res.send("Valid name");
  } else {
    next(new Error("Not valid name!"));
  }
});

app.use(function (err, req, res, next) {
  console.log(err.stack);
  console.log("errorrrr: ", err);
  return res.status(500).send("Internal Server error");
});

app.listen(1212);
