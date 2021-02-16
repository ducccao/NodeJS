//const auth = (module.exports = {});
const auth = require("./6.2.auth");
const config = require("./config");
const request = require("request");

module.exports = function (req, res, next) {
  auth.facebook(req.body, function (er, user) {
    if (er) return next(er);
    req.user = user;
    next();
  });
};
