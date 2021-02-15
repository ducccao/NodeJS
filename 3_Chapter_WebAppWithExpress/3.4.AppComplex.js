const express = require("express");
const greetMdw = require("./3.3.MoreComplicated");

class GreetingService {
  constructor(greeting = "Hi") {
    this.greeting = greeting;
  }
  createGreeting(name) {
    return `${this.greeting} ${name}!`;
  }
}

express()
  .use("/api/v1/service1", greetMdw({ services: new GreetingService("Heeee") }))
  .use("/api/v1/service2", greetMdw({ services: new GreetingService("Hi 2") }))
  .listen(1212);
