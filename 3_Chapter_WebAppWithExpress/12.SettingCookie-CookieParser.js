const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cookieParser());

app.get("/setcookie", function (req, res) {
  res.cookie("username", "nhungbui", { maxAge: 1212, httpOnly: true });

  return res.send("Cookie has been set");
});

app.get("/getcookie", function (req, res) {
  const username = req.cookies["username"];

  if (username) {
    return res.send(username);
  }
  return res.send("Cookie not found");
});

app.listen(1212);
