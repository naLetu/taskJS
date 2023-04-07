const colors = ['green', 'red', 'blue']

const box = document.getElementById('box');
const changeColorBtn = document.getElementById('changeColorBtn');

changeColorBtn.addEventListener('click',()=>{
    const colorRandom = Math.floor(Math.random()* colors.length)
    box.style.backgroundColor = colors[colorRandom]
})