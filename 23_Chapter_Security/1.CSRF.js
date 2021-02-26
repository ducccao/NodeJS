const express = require("express");
const cookieParser = require("cookie-parser");
const csurf = require("csurf");
const bodyParser = require("body-parser");

const csrfProtection = csurf({ cookie: true });
const parseForm = bodyParser.urlencoded({ extended: true });

const app = express();

app.use(cookieParser());

app.get("/form", csrfProtection, function (req, res) {
  res.json({
    csrfToken: req.csrfToken(),
  });
});
