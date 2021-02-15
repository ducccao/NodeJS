module.exports = function (app) {
  app.get("test", "/hello", function (req, res) {
    res.end("hi");
  });
};
