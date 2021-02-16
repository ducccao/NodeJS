const http = require("http");

function startServer() {
  const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end("Hi http");
  });
  server.listen(1212);
}

if (!module.parent) {
  startServer();
} else {
  module.exports = startServer;
}
