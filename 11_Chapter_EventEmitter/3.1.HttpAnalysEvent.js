const EventEmitter = require("events");
const http = require("http");

const serverEvents = new EventEmitter();
const httpServer = http.createServer((req, res) => {
  serverEvents.emit("request", req.method, req.url);
});

module.exports = serverEvents;
