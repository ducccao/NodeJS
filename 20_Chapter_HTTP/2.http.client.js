var http = require("http");

var options = {
  hostname: "127.0.0.1",
  port: 1212,
  path: "/",
  method: "GET",
};

var req = http.request(options, function (res) {
  console.log("STATUS: ", res.statusCode);
  console.log("Headers: ", JSON.stringify(res.headers));

  res.setEncoding("utf-8");

  res.on("data", function (chunck) {});
  console.log("Response: ", chunk);
});

req.on("error", (e) => {
  console.log("Problem with request: ", e.message);
});

req.end();
