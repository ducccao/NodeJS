const fs = require("fs");

const path = __dirname + "/temp/hi.txt";

// asynchornous
fs.unlink(path, (er) => {
  if (er) throw er;

  console.log("File deleted!");
});

// synchronous
fs.unlinkSync(path);
console.log("File Deleted!");
