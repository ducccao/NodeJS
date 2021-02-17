process.on("uncaughtException", function (er) {
  console.log(er);

  process.exit(1);
});
