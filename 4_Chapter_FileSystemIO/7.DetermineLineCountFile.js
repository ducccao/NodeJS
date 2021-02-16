

const readline = require("readline");
const fs = require("fs");

const path = __dirname + "/temp/hi.txt";
var lineCount = 0;

const rl = readline.createInterface({
  input: fs.createReadStream(path),
  output: process.stdout,
  terminal: false,
});

rl.on("line", function (line) {
  console.log(line);
  lineCount++;
});

rl.on("close", function () {
  console.log(`File ${path.replace(__dirname + "/", "")} have ${lineCount}`);
});
