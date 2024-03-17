const messageText = "Hello HERO";
console.log(messageText);
const sum = (x, y) => Promise.resolve(x + y);
const value = await sum(5,3);
console.log("Result: ", value);