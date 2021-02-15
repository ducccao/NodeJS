const express = require("express");
const app = express();

app.use(express.static("public"));

app.use("/static", express.static("public"));

// multiples
app.use(express.static("images"));
app.use(express.static("videos"));

app.listen(1212);
