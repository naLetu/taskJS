const input = document.getElementById('input');
const output = document.getElementById('output')

input.addEventListener('keyup',() => {
    output.innerText = input.value
})