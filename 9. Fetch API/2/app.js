const http = require("http");
const fs = require("fs");

http
  .createServer(function (request, response) {
    if (request.url == "/hello") {
      response.statusCode = 302;
      response.setHeader("Location", "/newpage");
      response.end();
      response.setHeader("Secret-Code", 123);
        response.end("Fetch to /hello");
    } else if (request.url == "/newpage") {
      response.setHeader("Secret-Code", "New Page Code: 444");
      response.end("This is the new page");
    } else {
      fs.readFile("index.html", (error, data) => response.end(data));
    }
  })
  .listen(3000, () => console.log("http://localhost:3000"));
