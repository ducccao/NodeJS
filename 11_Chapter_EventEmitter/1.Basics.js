const EventEmitter = require("events").EventEmitter;

class Dog extends EventEmitter {}
class Food {}

let shiba = new Dog();

shiba.on("chew", (item) => {
  if (item instanceof Food) {
    console.log("Good boy");
  } else {
    console.log("Bad boy");
  }
});

shiba.emit("chew", "shoe");
const bacon = new Food();
shiba.emit("chew", bacon);

shiba.on("bark", () => {
  console.log("Who's at the door!");
});

function func1() {}
function func2() {}

shiba.on("chew", func1);
shiba.on("chew", func2);

function pet() {}
shiba.once("chew", pet);

shiba.removeListener("chew", func2);
