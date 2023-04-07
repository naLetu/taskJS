let str = "hello";

const returnQantity = (str) => {
  let arr = str.toLowerCase().split("");
  s = "aeiou";
  let ds = arr.reduce((sum, val) => {
    if (s.indexOf(val) !== -1) {
      sum++;
    }
    return sum;
  }, 0);
  return ds;
};

console.log(returnQantity(str));
