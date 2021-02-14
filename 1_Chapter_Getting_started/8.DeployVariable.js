const http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, {
      "Content-Type": "text/plain",
    });
    //    req.connection.remoteAddress
    res.write("Hi process.env.PORT");
    res.end();
  })
  .listen(process.env.PORT || 1212);
