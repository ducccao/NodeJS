

const fs = require("fs");

const readable = fs.createReadStream(__dirname + "/temp/hi.txt", {
  encoding: "utf-8",
});

const writeable = fs.createWriteStream(__dirname + "/temp/hiClone.txt");

readable.on("data", function (chunk) {
  writeable.write(chunk);
});
