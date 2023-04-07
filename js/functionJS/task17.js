function sum(a, b) {
  if (b === undefined) {
    return function (c) {
      return a + c;
    };
  } else {
    return a + b;
  }
}

console.log(sum(1)(3));
