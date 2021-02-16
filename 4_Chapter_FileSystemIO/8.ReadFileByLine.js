

const readline = require("readline");
const fs = require("fs");

const path = __dirname + "/temp/hi.txt";

const rl = readline.createInterface({
  input: fs.createReadStream(path),
  output: process.stdout,
  terminal: false,
});

rl.on("line", function (data) {
  console.log(data);
});
