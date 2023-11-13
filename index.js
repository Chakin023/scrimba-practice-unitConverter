/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input-value")
const lengthResultEl = document.getElementById("length-result")
const volumnResultEl = document.getElementById("volumn-result")
const massResultEl = document.getElementById("mass-result")

convertBtn.addEventListener("click", function() {
    checkInput(inputEl.value)
})

/* 
- converter function use 4 parameters: value convertValue, metricUnit, imperialUnit
- to convert the value of metric unit to imperial unit 
- and to convert the value of imperial unit to metric unit 
- by using convert value
- then fix the decimal to 3 
- then print out as a format of message
*/

function converter(value, convertValue, metricUnit, imperialUnit) {
    const msg = `${value} ${metricUnit} = ${(value*convertValue).toFixed(3)} ${imperialUnit} | 
    ${value} ${imperialUnit} = ${(value*(1/convertValue)).toFixed(3)} ${metricUnit}`
    return msg
}

/* 
- checkInput function use only 1 parameter: inputValue
- to check the user input that valid to do the convert
- by checking if user input empty input
- by checking if user input the string or notand 
- by checking if user not input the negative number input
*/

// function checkInput(inputValue) {
//     if (inputValue === '') {
//         lengthResultEl.textContent = "You didn't input a value, please input the positive number";
//         volumnResultEl.textContent = "You didn't input a value, please input the positive number";
//         massResultEl.textContent = "You didn't input a value, please input the positive number";
//     } else if (isNaN(inputValue)) {
//         lengthResultEl.textContent = `You input the invalid input, please input the positive number`
//         volumnResultEl.textContent = `You input the invalid input, please input the positive number`
//         massResultEl.textContent = `You input the invalid input, please input the positive number`
//     } else if(inputValue < 0) {
//         lengthResultEl.textContent = `You input ${inputValue} that is the negative number, please input the positive number`
//         volumnResultEl.textContent = `You input ${inputValue} that is the negative number, please input the positive number`
//         massResultEl.textContent = `You input ${inputValue} that is the negative number, please input the positive number`
//     } else {
//         lengthResultEl.textContent = converter(inputValue, 3.281, "meters", "feet")
//         volumnResultEl.textContent = converter(inputValue, 0.264, "liters", "gallons")
//         massResultEl.textContent = converter(inputValue, 2.204, "kilos", "pounds")
//     }
// }

// refactor to use switch-case instead of if-else
function checkInput(inputValue) {
    switch (true) {
        case inputValue === '':
            lengthResultEl.textContent = "You didn't input a value, please input a positive number";
            volumnResultEl.textContent = "You didn't input a value, please input a positive number";
            massResultEl.textContent = "You didn't input a value, please input a positive number";
            break;
        case isNaN(inputValue):
            lengthResultEl.textContent = "You input the invalid input, please input a positive number";
            volumnResultEl.textContent = "You input the invalid input, please input a positive number";
            massResultEl.textContent = "You input the invalid input, please input a positive number";
            break;
        case inputValue < 0:
            lengthResultEl.textContent = `You input ${inputValue} that is a negative number, please input a positive number`;
            volumnResultEl.textContent = `You input ${inputValue} that is a negative number, please input a positive number`;
            massResultEl.textContent = `You input ${inputValue} that is a negative number, please input a positive number`;
            break;
        default:
            lengthResultEl.textContent = converter(inputValue, 3.281, "meters", "feet");
            volumnResultEl.textContent = converter(inputValue, 0.264, "liters", "gallons");
            massResultEl.textContent = converter(inputValue, 2.204, "kilos", "pounds");
    }
}