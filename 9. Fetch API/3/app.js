const http = require("http");
const fs = require("fs");

http
  .createServer(function (request, response) {
    if (request.url == "space3.png") {
      fs.readFile("/space3.png", (error, data) => response.end(data));
    } else {
      fs.readFile("index.html", (error, data) => response.end(data));
    }
    if (request.url == "/hello") {
      response.end("Fetch to /hello");
    } else {
      fs.readFile("index.html", (error, data) => response.end(data));
    }
    if (request.url == "/user") {
      const user = { name: "Tom", age: 22 };
      response.end(JSON.stringify(user));
    } else {
      fs.readFile("index.html", (error, data) => response.end(data));
    }
    if(request.url == "/users.json"){
        fs.readFile("users.json", (error, data) => response.end(data));
    }
    else{
        fs.readFile("index.html", (error, data) => response.end(data));
    }
    if (request.url == "/users.json") {
      fs.readFile("users.json", (error, data) => response.end(data));
      const users = [
          {name: "Sam", age: 32},
          {name: "Tom", age: 22},
          {name: "Bob", age: 55},
      ];
      response.end(JSON.stringify(users));
    } else {
      fs.readFile("index.html", (error, data) => response.end(data));
    }
  })
  .listen(3000, () => console.log("http://localhost:3000"));
