function findLongestWord(str){
    return str.split(' ').reduce((a, b) => (a.length > b.length) ? a : b)
    
    
}
console.log(findLongestWord('принимает строку и находит'));
// function retLong(word, long){
//     if (word >= long){
//         return word
//     } else{
//         return long
//     }
    
// }
// const retLong = ()