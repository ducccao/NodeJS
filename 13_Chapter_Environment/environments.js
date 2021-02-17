process.argv.forEach(function (val, index, arr) {
  var arg = val.split("=");
  if (arg.length > 0) {
    if (arg[0] === "env") {
      var env = require(__dirname + "/env/" + arg[1] + ".properties");
      module.exports = env;
    }
  }
});

const a = [1, 2, 3, 4, 5];
// a.forEach(function (val, index, arr) {
//   console.log(val);
//   console.log(index);
//   console.log(arr);
// });
