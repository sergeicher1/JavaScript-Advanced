const WebSocket = require("ws");
const server = new WebSocket.Server({ port: 9000 });

server.on("connection", onConnect);
function onConnect(client) {
  console.log("Connection opened");
  client.on("message", function (message) {
    console.log("Client message :", message.toString());
    client.send("Hello Client");
  });
  client.on("close", function () {
    console.log("Connection closed");
  });
}

console.log("http://localhost:9000");
