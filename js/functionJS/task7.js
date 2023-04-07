function phoneRepair(phone, tool = "отвертка") {
  return `При разборе телефона ${phone} использовался инструмент - ${tool}`;
}

console.log(phoneRepair("iphone"));