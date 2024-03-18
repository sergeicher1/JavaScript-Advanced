const http = require("http");
const fs = require("fs");

http
  .createServer((request, response) => {
    let filePath = request.url.substring(1);
    if (!filePath) {
      filePath = "index.html";
    }
    response.setHeader("Content-Type", "text/html");
    fs.readFile(filePath, (error, data) => {
      if (error) {
        response.statusCode = 404;
        response.end("<h1>Resource not found!</h1>");
      } else {
        response.end(data);
      }
    });
  })
  .listen(3000, () => console.log("http://localhost:3000"));
