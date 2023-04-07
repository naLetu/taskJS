const rates = {
  ruble: { dollar: 0.012, ruble: 1 },
  dollar: { ruble: 80.67, dollar: 1 },
};

function convertCurrency() {
  const firstInput = document.getElementById("first-input").value;
  const cur1 = document.getElementById("cur1").value;
  const cur2 = document.getElementById("cur2").value;
  const secondInput = document.getElementById("second-input").value;
  
  
  if (firstInput){
    const rate = rates[cur1][cur2];
    const converted = (firstInput * rate).toFixed(2);
    document.getElementById('second-input').value = converted
  }
  else if (secondInput){
    const rate = rates[cur1][cur2];
    const converted = (secondInput / rate).toFixed(2);
    document.getElementById('first-input').value = converted
  }

}

document
  .getElementById("first-input")
  .addEventListener("input", convertCurrency);
  document
  .getElementById("second-input")
  .addEventListener("input", convertCurrency);
document.getElementById("cur1").addEventListener("change", convertCurrency);
document.getElementById("cur2").addEventListener("change", convertCurrency);
