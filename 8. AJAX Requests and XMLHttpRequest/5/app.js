const http = require("http");
const fs = require("fs");

http
  .createServer(async (request, response) => {
    if (request.url == "/user") {
        let userName = "";
        for await (const item of request) {
          userName += item;
        }
        userName = userName + " Johnson";
        response.end(userName);
      let data = "";
      for await (const item of request) {
        data += item;
      }
      const user = JSON.parse(data);
      user.name = user.name + " Jackson";
      user.age = user.age + 10;
      response.end(JSON.stringify(user));
    } else {
      fs.readFile("index.html", (_, data) => response.end(data));
    }
  })
  .listen(3000, () => console.log("http://localhost:3000"));
