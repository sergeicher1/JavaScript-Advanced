console.log("Main module starts");
import("./message.js").then((module)=>{
    module.default();
    console.log(module.hello);
});

const module = await import("./message.js");
module.default();
console.log(module.hello);

console.log("Main module end");