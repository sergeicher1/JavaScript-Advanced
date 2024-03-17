const http = require("http");
const fs = require("fs");

http
  .createServer(async (request, response) => {
    if (request.url == "/user") {
      let body = "";
      for await (const item of request) {
        body += item;
      }
      let userName = "";
      let userAge = 0;
      const exp =
        /Content-Disposition: form-data; name="([^\"]+)\"\r\n\r\n(\w*)/g;
      let formElement;
      while ((formElement = exp.exec(body))) {
        paramName = formElement[1];
        paramValue = formElement[2];
        console.log(paramName, ":", paramValue);
        if (paramName === "name") userName = paramValue;
        if (paramName === "age") userAge = paramValue;
      }
      response.end(`Your name: ${userName} Your age: ${userAge}`);
    } else {
      fs.readFile("index.html", (_, data) => response.end(data));
    }
  })
  .listen(3000, () => console.log("http://localhost:3000"));
