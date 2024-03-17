import sayHello, {welcome, Messenger} from "./message.js";

sayHello();

const messenger = new Messenger();
messenger.send(welcome);

import MessageModule from "./message.js";
MessageModule.sayHello();

const messenger = new MessageModule.Messenger();
messenger.send(MessageModule.welcome);
