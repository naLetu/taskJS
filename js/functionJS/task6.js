let sayHi = (...arguments) => {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) result += arguments[i];
  return result;
}

console.log(sayHi(3, 4, 5, 6, 7, 8));
