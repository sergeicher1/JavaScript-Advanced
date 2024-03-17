import { simpleMessage as message, printMessage as display, Messenger } from "./message.js";

printMessage();
display();

const messenger = new Messenger();
messenger.send(message);
