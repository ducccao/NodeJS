const fs = require("fs");

var existsAsync = function (path) {
  return new Promise(function (resolve, reject) {
    fs.exists(path, function (exists) {
      if (exists) {
        resolve({
          data: 1,
        });
      } else {
        reject(new Error("Path does not exists!"));
      }
    });
  });
};

const dt = existsAsync(__dirname)
  .then((rs) => {
    console.log(rs);
    return rs;
  })
  .catch((er) => {
    console.log(er);
  });

console.log(dt);
