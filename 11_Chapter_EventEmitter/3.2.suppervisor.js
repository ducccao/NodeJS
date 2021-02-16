const server = require("./3.1.HttpAnalysEvent");

server.on("request", (method, url) => {
  console.log(`Got a request ${method} ${url}`);
});
