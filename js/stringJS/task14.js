let str = "1 2 3 4 -5 -6 7";
let hightAndLow = (str) => {
  let arr = str.split(" ");
  arr.sort((a, b) => a - b);
  return `${arr[arr.length - 1]} ${arr[0]}`;
};


console.log(hightAndLow(str));
