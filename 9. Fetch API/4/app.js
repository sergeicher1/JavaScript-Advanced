const http = require("http");
const fs = require("fs");

http
  .createServer(async (request, response) => {
    if (request.url == "/user") {
      const buffers = [];
      for await (const item of request) {
        buffers.push(item);
      }
      const data = Buffer.concat(buffers).toString();
      const user = JSON.parse(data);
      user.name = user.name + " Hanks";
      user.age = user.age + 10;
      response.end(JSON.stringify(user));
    }
    else{
        fs.readFile("index.html", (error, data) => response.end(data));
    }
      let userName = Buffer.concat(buffers).toString();
      userName = userName + " Jaackson";
      response.end(userName);
    } else {
      fs.readFile("index.html", (error, data) => response.end(data));
    }
  })
  .listen(3000, () => console.log("http://localhost:3000"));
