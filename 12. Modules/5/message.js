let welcome = "Welcome";
const hello = "Hello";
function sayHello(){
    console.log("Hello HERO!");
}
class Messenger{
    send(text){
        console.log("Sending: ", text);
    }
}

export { welcome as simpleMessage, hello, sayHello as printMessage, Messenger};