const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: fs.createReadStream("text.txt"),
});

rl.on("line", (line) => {
  console.log(line);
});

rl.on("close", () => {
  console.log("Done reading file");
});
