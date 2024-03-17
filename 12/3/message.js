export let welcome = "Welcome";
export const hello = "Hello";
export function sayHello() {
  console.log("Hello HERO");
}
export class Messenger {
  send(text) {
    console.log("Sending message: ", text);
  }
}
let welcome = "Welcome";
const hello = "Hello";
function sayHello() {
  console.log("Hello HERO");
}
class Messenger {
  send(text) {
    console.log("Sending message: ", text);
  }
}

export { welcome, hello, sayHello, Messenger };
