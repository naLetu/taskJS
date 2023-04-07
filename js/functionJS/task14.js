let num = 0;

function getNumberMatches(str, sym) {
  return str.split('').filter(x => x===sym).length;
}

console.log(getNumberMatches("произвольная строка", "о"));


// str.split('').forEach((item) => {
//     if (item.includes(sym) == true) {
//         return num++;
//     }
//   return num;
    
//   })  