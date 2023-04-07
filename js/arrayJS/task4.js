const products = [
  { name: "Книга по основам JS", price: 1900 },

  { name: "Кошачий корм", price: 200 },

  { name: "Самоучитель ”Как написать скрипт для кормления кота”", price: 1799 },
];

let firstPrice = 0;

const sumPrice = products.forEach((product) => {
  firstPrice += product.price;
});

console.log(firstPrice);
