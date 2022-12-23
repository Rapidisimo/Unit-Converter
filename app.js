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
let meter = 0;
let feet = 0;
let liter = 0;
let gallon = 0;
let kilogram = 0;
let pound = 0;


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


// Unit conversions
function conversions(arr) {
    // 1 meter = 3.281 feet
    meter = (arr / 3.281).toFixed(3);// Number Input from Feet to Meters
    feet = (arr * 3.281).toFixed(3); // Number Input from Meters to Feet
    // 1 liter = 0.264 gallon
    gallon = (arr * 0.264).toFixed(3); // Number Input from Liters to Galons
    liter = (arr / 0.264).toFixed(3); // Number Input from Galons to Liters
    // 1 kilogram = 2.204 pound
    pound = (arr * 2.204).toFixed(3); // Number Input from Kilograms to Pounds
    kilogram = (arr / 2.204).toFixed(3); // Number Input from Pounds to Kilograms
}

// Write out paragraph with converted length units.
function length() {
    conversions(number);
    lengthMF.textContent = `${number} meters = ${feet} feet | ${number} feet = ${meter} meters`;
    volume.textContent = `${number} liters = ${gallon} gallons | ${number} gallons = ${liter} liters`;
    mass.textContent = `${number} kilos = ${pound} pounds | ${number} pounds = ${kilogram} kilograms`;
}
