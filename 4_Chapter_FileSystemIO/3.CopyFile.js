const fs = require("fs");

const readable = fs.createReadStream(__dirname + "/temp/hi.txt", {
  encoding: "utf-8",
  highWaterMark: 16 * 1024,
});

const writeable = fs.createWriteStream(__dirname + "/temp/nodePipe.txt");

readable.pipe(writeable);
