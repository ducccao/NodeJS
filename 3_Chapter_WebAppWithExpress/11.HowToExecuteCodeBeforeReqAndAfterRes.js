const express = require("express");
const app = express();

app.use(function (req, res, next) {
  function afterRes() {
    res.removeListener("finish", afterRes);
    res.removeListener("close", afterRes);

    // actions after response
  }

  res.on("finish", afterRes);
  res.on("close", afterRes);

  next();
});

app.listen(1212);
