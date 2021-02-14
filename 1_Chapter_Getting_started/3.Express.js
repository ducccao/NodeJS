const express = require("express");

const app = express();

const port = 1212;

app.get("/", function (req, res) {
  res.send("Hi World!");
});

app.listen(port, function () {
  console.log(`Server is listening on http://localhost:${port}`);
});
