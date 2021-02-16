

// asynchronous
const fs = require("fs");

function mkdir(dirPath, callback) {
  fs.mkdir(dirPath, (er) => {
    callback(er && er.code !== "Exists" ? er : null);
  });
}
mkdir(__dirname + "/mkdir1", (er) => {
  if (er) {
    console.error(er);
  }
});

// synchronous

function mkdirSync(dirPath) {
  try {
    fs.mkdirSync(dirPath);
  } catch (er) {
    if (er.code === "EEXISTS") throw e;
  }
}
mkdirSync("mkdirSync");
