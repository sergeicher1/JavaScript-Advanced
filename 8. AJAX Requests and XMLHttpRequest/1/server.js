const http = require("http");
const fs = require("fs");

http
  .createServer(function (request, response) {
    if (request.url == "/hello") {
      response.end("Hello HERO!");
    } else {
      fs.readFile("index.html", (error, data) => response.end(data));
    }
  })
  .listen(3000, () =>
    console.log("The server is running at http://localhost:3000")
  );
