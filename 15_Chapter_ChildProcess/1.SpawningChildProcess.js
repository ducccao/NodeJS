const spawn = require("child_process").spawn;
const ls = spawn("ls", ["-lh", "/usr"]);

ls.stdout.on("data", (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on("data", (dt) => {
  console.log(`stderr: ${dt}`);
});

ls.on("close", (code) => {
  console.log(`Child process existed with ${code}`);
});
