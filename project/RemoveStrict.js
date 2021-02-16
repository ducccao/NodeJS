const fs = require("fs");
const path = __dirname.replace("project", "");

fs.readdir(path, (er, files) => {
  const directions = [
    files[2],
    files[3],
    files[4],
    files[5],
    files[6],
    files[7],
  ];

  for (let i = 0; i < directions.length; ++i) {
    const pathDir = path + directions[i];
    fs.readdir(pathDir, (er, files) => {
      console.log(files);
      for (let i = 0; i < files.length; ++i) {
        fs.readFile(pathDir + `/${files[i]}`, "utf-8", function (er, data) {
          if (typeof data !== "undefined") {
            //const removeStrict = data.replace(/"use strict";/gm, ""); bug

            fs.writeFile(
              pathDir + `/${files[i]}`,
              removeStrict,
              "utf-8",
              (er, data) => {
                if (er) throw er;
                console.log("Done!");
              }
            );
          }
        });
      }
    });
  }
});
