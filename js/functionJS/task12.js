function getEvenNumber(arr) {
  return arr.filter((item) => item % 2 == 0);
}

console.log(getEvenNumber([1, 2, 3, 4, 5, 6, 7]));
