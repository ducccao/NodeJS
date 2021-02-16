const fs = require("fs");

fs.readFile(__dirname + "/temp/hi.txt", "utf-8", function (er, data) {
  if (er) throw er;

  const newData = data.replace(/email/gm, "name");

  fs.writeFile(__dirname + "/temp/hi.txt", newData, "utf-8", (er, data) => {
    if (er) throw er;
    console.log("Done!");
  });
});
