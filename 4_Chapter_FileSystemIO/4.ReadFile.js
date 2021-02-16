

const fs = require("fs");

let content;

try {
  content = fs.readFileSync(__dirname + "/temp/hi.txt", { encoding: "utf-8" });
  console.log(content);
} catch (er) {
  console.log(er);
}
