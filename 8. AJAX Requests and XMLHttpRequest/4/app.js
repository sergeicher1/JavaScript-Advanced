const http = require("http");
const fs = require("fs");

http
  .createServer((request, response) => {
    if (request.url == "/data") {
      fs.readFile("data.json", (_, data) => response.end(data));
    } else {
      fs.readFile("index.html", (_, data) => response.end(data));
    }
  })
  .listen(3000, () => console.log("http://localhost:3000"));
