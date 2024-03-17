function sayHello() {
  console.log("hello from sayHello() function");
}
let welcome = "Welcome";
const hello = "Hello";
class Messenger {
  send(text) {
    console.log("Send message: ", text);
  }
}
export default {welcome, hello, sayHello, Messenger}
