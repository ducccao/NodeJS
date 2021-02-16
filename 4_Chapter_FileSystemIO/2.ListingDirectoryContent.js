const fs = require("fs");

// asynchronous

fs.readdir(__dirname, (er, files) => {
  if (er) return console.log(er);
  //console.log(files);
  //console.log(files.join(" "));
});

// synchronous
let files;
try {
  files = fs.readdirSync(__dirname);
  console.log(files);
} catch (er) {
  console.log(er);
}
