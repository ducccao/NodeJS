const EventEmitter = require("events");

class ShibaEmitter extends EventEmitter {}

const shiba1 = new ShibaEmitter();

shiba1
  .on("chew", function () {
    console.log("Shiba1 was chewed");
  })
  .on("chew", function () {
    console.log("Shiba1 was chewed again");
  })
  .on("data", function () {
    console.log("A data is just occurred");
  });

console.log(shiba1.eventNames());
shiba1.removeAllListeners("chew");
console.log(shiba1.eventNames());
