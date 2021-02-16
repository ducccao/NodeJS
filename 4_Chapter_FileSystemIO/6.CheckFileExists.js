const fs = require("fs");

const path = __dirname + "/temp";
fs.stat(path, function (er) {
  if (!er) {
    console.log("File Exists!");
  } else {
    console.log("File does not exists!");
  }
});
