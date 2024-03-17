const http = require("http");
const fs = require("fs");

http
  .createServer((request, response) => {
    let filePath = request.url.substring(1);
    if (!filePath) {
      filePath = "index.html";
    }
    response.setHeader("Content-Type", "text/html; charset=utf-8;");
    fs.readFile(filePath, (error, data) => {
      if (error) {
        response.statusCode = 404;
        response.end("<h1>Resourse not found</h1>");
      } else {
        response.end(data);
      }
    });
  })
  .listen(3000, () => console.log("Navigate to http://localhost:3000"));
