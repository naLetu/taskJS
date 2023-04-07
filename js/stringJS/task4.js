let str = "Sdfd dasdas";
let arr = str
  .split(" ")
  .map((item) => item[0].toUpperCase())
  .join(".");

console.log(arr);
