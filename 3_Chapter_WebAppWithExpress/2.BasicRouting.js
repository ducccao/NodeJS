const express = require("express");
const app = express();

app.get("/mosquito", function (req, res, next) {});
app.post("/mosquito", function (req, res, next) {});
app.put("/mosquito", function (req, res, next) {});
app.delete("/mosquito", function (req, res, next) {});
app.all("/mosquito", function (req, res, next) {});
app.use("/mosquito", function (req, res, next) {});
app.use("*", function (req, res, next) {});

// chaining
app
  .get("/mosquito", function (req, res, next) {})
  .post("/mosquito", function (req, res, next) {})
  .put("/mosquito", function (req, res, next) {})
  .delete("/mosquito", function (req, res, next) {});

// middleware
function mdwFx() {}
app.get("/mosquito", mdwFx, function (req, res, next) {});
