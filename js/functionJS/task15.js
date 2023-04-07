function type(str) {
  if (str === null) {
    return "Null";
  } else if (str === /[A-z]/) {
    return "RegExp";
  } else if (str === []) {
    return "Array";
  } else {
    return typeof str;
  }
}

console.log(type({}));
console.log(type(1));
console.log(type(false));
console.log(type("s"));
console.log(type(null));
console.log(type([]));
console.log(type(/[A-z]/));
console.log(type(() => {}));
console.log(type(undefined));
