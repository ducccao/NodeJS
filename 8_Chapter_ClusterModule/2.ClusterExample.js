const cluster = require("cluster");
const http = require("http");
const numCPUs = require("os").cpus();

if (cluster.isMaster) {
  for (let i = 0; i < numCPUs.length; ++i) {
    cluster.fork(); // creating child process
  }

  cluster.on("exit", (worker, code, signal) => {
    if (signal) {
      console.log(`Worker ${worker} was killed by signal ${signal}`);
    } else if (code !== 0) {
      console.log(`worker exited with error code ${code}`);
    } else {
      console.log("Worker success!");
    }
  });
} else {
  http
    .createServer((req, res) => {
      res.writeHead(200);
      res.end("Hi\n");
    })
    .listen(1212);
}
