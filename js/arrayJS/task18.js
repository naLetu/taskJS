const pens = [
  "красная шариковая ручка",
  "черная шариковая ручка",
  "шариковая ручка с медвежатами",
  "красная шариковая ручка",
  "черная шариковая ручка",
];

let newArr = [];

const deletePens = new Set(pens);
deletePens.forEach((item) => newArr.push(item))

console.log(newArr);
