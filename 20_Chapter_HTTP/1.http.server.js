const http = require("http");
const port = 1212;

http
  .createServer((req, res) => {
    const clientIP = req.connection.remoteAddress;
    const connectString = req.connection.encrypted ? "SSL" : "HTTP";
    console.log(
      "Request recieved: " + connectString + " " + req.method + " " + req.url
    );
    console.log("Client IP: ", clientIP);
    res.write("OK");
    res.end();
  })
  .listen(port, startAppCallback);

function startAppCallback() {
  console.log(`Server is start at port: ${port}`);
}
