const express = require("express");

module.exports = function (options = {}) {
  const router = express.Router();

  const { services } = options;

  router.get("/greet", function (req, res, next) {
    res.end(services.createGreeting(req.query.name || "Stranger"));
  });

  return router;
};
