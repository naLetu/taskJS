function deleteValue(arr, valDelete) {
  return arr.filter((item) => item !== valDelete);
}

console.log(
  deleteValue(["красный", "желтый", "зеленый", "синий", "желтый"], "желтый")
);
