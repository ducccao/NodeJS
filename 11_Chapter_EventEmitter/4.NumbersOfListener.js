const EventEmitter = require("events");

class ShibaEmit extends EventEmitter {}

const shiba1 = new ShibaEmit();

shiba1.on("data", () => {
  console.log("Data event emitter");
});

console.log(shiba1.listenerCount("data"));
console.log(shiba1.listenerCount("mess"));

shiba1.on("data", () => {
  console.log("Data event emitter");
});

console.log(shiba1.listenerCount("data"));

shiba1.once("data", (stuff) => {
  console.log(`Tell me ${stuff}`);
});

console.log(shiba1.listenerCount("data"));
console.log(shiba1.listenerCount("mess"));
