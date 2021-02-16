

const fs = require("fs");

const path = __dirname + "/temp/hi.txt";

fs.readFile(path, { encoding: "utf-8" }, (err, content) => {
  if (err) return console.log(err);

  //console.log(content);
});

fs.readFile(__dirname + "/temp/binary.txt", (er, content) => {
  console.log(content.toString("binary"));
});
