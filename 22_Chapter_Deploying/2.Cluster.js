var cluster = require("cluster");
var numCPUs = require("os").cpus().length;

if (cluster.isMaster) {
  console.log("Server is working on " + numCPUs + " cores");
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("disconnect", function (worker) {
    console.error("disconnect!");
    //clearTimeout(timeout);
    cluster.fork();
  });
} else {
  require("app.js");
}
