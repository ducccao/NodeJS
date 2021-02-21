const fs = require("fs");
const zlib = require("zlib");

const readable = fs.createReadStream(__dirname + "/data.txt");
const writeable = fs.createWriteStream(__dirname + "./wr.txt");
readable.pipe(writeable);

fs.createReadStream(__dirname + "/data.txt")
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream(__dirname + "/wr.txt"));
