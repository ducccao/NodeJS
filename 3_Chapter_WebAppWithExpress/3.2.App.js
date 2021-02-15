const express = require("express");
const greedMdw = require("./3.Modular");

express()
  .use("/api/v1", greedMdw({ greeting: "Hi World!" }))
  .listen(1212);
