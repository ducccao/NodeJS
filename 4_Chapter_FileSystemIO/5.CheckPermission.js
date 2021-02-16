

const fs = require("fs");

const path = __dirname + "/temp";

fs.access(path, fs.constants.R_OK | fs.constants.W_OK, (er) => {
  if (er) {
    console.log(er);
  } else {
    console.log("can execute");
  }
});
