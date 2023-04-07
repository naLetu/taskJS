const input = document.getElementById("input");
const clearBtn = document.getElementById("clearBtn");

let str = "привет";
let arr = str.toLocaleLowerCase().split("");
let filteredValue = "";

function filteredString(str) {
  let filtered = "";
  return str
    .split("")
    .map((item) => {
      if (arr.includes(item)) {
        return filtered + item;
      } else {
        return filtered;
      }
    })
    .join("");
}

// function filteredString(str){
//     return.split('').reduce((filtered,item)=>{
//         if(arr.includes(item)){
//             return filtered + item
//         } else {
//             return filtered;
//         }
//     },'')
// }

input.addEventListener("input", () => {
  input.value = filteredString(input.value);
});

clearBtn.addEventListener("click", () => {
  input.value = "";
});
