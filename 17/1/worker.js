let result = 1;
const intervalID = setInterval(work, 1000);
function work() {
  result = result * 2;
  console.log("result = ", result);
  if (result >= 32) clearInterval(intervalID);
}
