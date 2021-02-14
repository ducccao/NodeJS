const http = require("http");

function index(req, res) {
  res.writeHead(200);
  res.end("Hi world!");
}

const routes = {
  "/": function index(req, res) {
    res.writeHead(200);
    res.end("Hi World!");
  },
  "/duccao": function duccao(req, res) {
    res.writeHead(200);
    res.end("Duccao Route");
  },
};

http
  .createServer(function (req, res) {
    // this is so massive and we dont want a giant mess like that

    // if (req.url === "/") {
    //   return index(req, res);
    // }

    // so we clean it up

    if (req.url in routes) {
      return routes[req.url](req, res);
    }

    res.writeHead(404);
    res.end(http.STATUS_CODES[500]);
  })
  .listen(1212);
