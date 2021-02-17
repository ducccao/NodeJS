const execFile = require("child_process").execFile;
const child = execFile(
  __dirname + "/2.SpawningShellToExecuteCommand.js",
  (err, stdout, stderr) => {
    if (err) throw err;
    console.log(stdout);
  }
);
