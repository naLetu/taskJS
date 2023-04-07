
function getNumbers(arr,num){
    return arr.filter((item)=>item>num)
}

console.log(getNumbers([1, 3, 5, 6, 8, 10, 15], 7));