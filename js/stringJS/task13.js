let str = "1,2,3";

let firstOrLast = () => {
  const firstAndLast = str.slice(1, -1).replaceAll(",", " ").trim();
  return !!firstAndLast ? firstAndLast : null;
};

console.log(firstOrLast());
