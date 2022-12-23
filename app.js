/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


const numberInput = document.getElementById('digits');
const convertBtn = document.querySelector('.convert-btn')
const lengthMF = document.getElementById('length');
const volume = document.getElementById('volume');
const mass = document.getElementById('mass');
let number = 0;

// clears the default value of "0"
numberInput.addEventListener('click', function () {
    if(numberInput.value === "0") {
        numberInput.value = null
    }
})

// Turns input from the input field into an integer from a string
numberInput.addEventListener('keyup', function (event) {
    number = parseInt(event.target.value)
})

// Convert Button
convertBtn.addEventListener('click', function () {
    length();
})

let meters = 0;
let feet = 0;

// Number Input from Feet to Meters
function lengthM(arr) {
    meters = (arr / 3.281).toFixed(3);
    return meters
}

// Number Input from Meters to Feet
function lengthF(arr) {
    feet = (arr * 3.281).toFixed(3);
    return feet
}

// Write out paragraph with converted length units.
function length() {
    lengthM(number);
    lengthF(number);
    lengthMF.textContent = `${number} meters = ${feet} feet | ${number} feet = ${meters} meters`;
}