import { sayHello, welcome, Messenger, hello } from "./message.js";

sayHello();
const messenger = new Messenger();
messenger.send(welcome +" " + hello);
import * as MessageModule from "./message.js";
MessageModule.sayHello();

const messenger = new MessageModule.Messenger();
messenger.send(MessageModule.welcome);