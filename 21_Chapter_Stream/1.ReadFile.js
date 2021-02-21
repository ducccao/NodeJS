var http = require("http");
var fs = require("fs");

// var server = http
//   .createServer(function (req, res) {
//     fs.readFile(__dirname + "/data.txt", function (er, data) {
//       res.end(data);
//     });
//   })
//   .listen(1212, () => {
//     console.log(`Server is start at ${1212}`);
//   });

// this is better way
var server2 = http
  .createServer((req, res) => {
    var stream = fs.createReadStream(__dirname + "/data.txt");
    stream.pipe(res);
  })
  .listen(1212, () => {
    console.log(`Server is start at ${1212}`);
  });
