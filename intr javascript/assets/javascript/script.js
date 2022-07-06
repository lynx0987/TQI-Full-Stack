var currentnumberw = document.getElementById("currentnumber")
var currentNumber = 0

function decrement() {
    currentNumber = currentNumber - 1;
    currentnumberw.innerHTML = currentNumber;
}
function increment() {
    currentNumber = currentNumber + 1;
    currentnumberw.innerHTML = currentNumber;
}