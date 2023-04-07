function count(sum) {
  return function () {
    return ++sum;
  };
}

let incCount = count(7);

console.log(incCount());
console.log(incCount());
console.log(incCount());
