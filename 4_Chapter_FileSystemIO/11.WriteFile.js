

const fs = require("fs");

const path = __dirname + "/temp/wr.txt";
const data = [1, 2, 3, 4, 5];

fs.writeFile(path, data.join("\n"), (er) => {
  if (er) return console.log(er);
});

// synchronous
try {
  fs.writeFileSync(path, data, { mode: 0o755 });
} catch (er) {
  console.log(er);
}
