const http = require("http");
const fs = require("fs");

http
  .createServer(function (request, response) {
    fs.readFile("index.html", (request, data) => response.end(data));
  })
  .listen(3000, () =>
    console.log("The server is running at http://localhost:3000")
  );
