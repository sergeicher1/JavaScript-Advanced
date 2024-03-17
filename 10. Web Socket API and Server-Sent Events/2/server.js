const http = require("http");
const fs = require("fs");

const messages = ["Hello", "How are you ?", "Whats your name? ", "Bye"];

http
  .createServer(function (request, response) {
    if (request.url == "/events") {
      if (
        request.headers.accept &&
        request.headers.accept == "text/event-stream"
      ) {
        sendEvent(response);
      } else {
        response.writeHead(400);
        response.end("Bad request");
      }
    } else {
      fs.readFile("index.html", (error, data) => response.end(data));
    }
  })
  .listen(3000, () => console.log("http://localhost:3000"));

function sendEvent(response) {
  response.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
  });
  const id = new Date().toLocaleTimeString();
  setInterval(() => {
    createServerSendEvent(response, id);
  }, 5000);
}
function createServerSendEvent(response, id){
    const index = Math.floor(Math.random() * messages.length);
    const message = messages[index];
    response.write("id: " + id + "\n");
    response.write("data: " + message + "\n\n");
}