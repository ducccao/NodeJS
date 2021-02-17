const EventEmitter = require("events");

function doAync(req, res) {
  let shibaEvent = new EventEmitter();

  setTimeout(function () {
    shibaEvent.emit("error", new Error("sdsd"));
  }, 1000);
  return shibaEvent;
}

let shiba1 = doAync(req, res);
shiba1.on("error", function (er) {
  console.log(er);
});

shiba1.on("done", function (ret) {
  console.log(ret);
});
