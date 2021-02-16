const cluster = require("cluster");
const http = require("http");
const numCPUs = require("os").cpus();

// console.log(numCPUs);
if (cluster.isMaster) {
  for (let i = 0; i < numCPUs.length; ++i) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
  });
} else {
  require("./1.2.server")();
}
