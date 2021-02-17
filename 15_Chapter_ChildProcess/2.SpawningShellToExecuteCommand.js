const exec = require("child_process").exec;
//const command = "cat *.js file | wc -l";
const command = "mkdir spawn";

exec(command, function (err, stdout, stderr) {
  if (err) {
    console.error(`exec error: ${err}`);
    return;
  }

  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});
