function sayHi(value) {
  if (typeof value == "string") {
    return value;
  } else if (typeof value == "number") {
    return "Это не строка";
  } else {
    return "Ничего не передано"};
  
}

console.log(sayHi());
