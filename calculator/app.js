// ask user to enter first digits

// ask user to select operation 

// ask user to enter second digits

// ask user to select = sign

// select display element
function clearDisplay() {

    // change display element's value to 0
    digits = ''
    display.value = 0
}

function calculateResult() {

}


let display = document.getElementById('display')
let first_digits = ''
let operation = ''
let second_digits = ''
let result = ''

// provide value to display element
// function appendToDisplay(value) {

//     {/* 
//         check if value is decimal 
//             - if digits don't have a decimal 
//               add decimal to digits 
//         else, add non-decimal value to digits

//     */} 
//     if (value === '.'){
//         if(first_digits.indexOf('.') == -1 ){
//             first_digits += value

//         } 
//         // else {
//         //     // if decimal does exist, it should do nothing
//         // }
//     } else {
//         first_digits += value
//         display.value = first_digits
//     }

//     // edge case: preventing leading zeros

// }

//(value == '+') || (value == '-') || (value == '*') || (value == '/')

function appendToDisplay(value) {
    if(first_digits === '' && operation === '') {
        first_digits = value
    } else if (first_digits !== '' && (value == '+') || (value == '-') || (value == '*') || (value == '/')) {
        operation = value
    } 
    else if (first_digits !== '' && operation !=='') {
        second_digits = value
    }

    console.log("first_digits: ", first_digits)
    console.log("second_digits: ", second_digits)
    console.log("operation: ", operation)
}

function calculateResult(){
    first_digits = parseInt(first_digits)
    second_digits = parseInt(second_digits)

    switch(operation){
        
        case "+":
            console.log(first_digits + second_digits)
            break
        case "-":
            console.log(first_digits - second_digits)
            break
        case "*":
            console.log(first_digits * second_digits)
        break
        case "/":
            console.log(first_digits / second_digits)
        break
        }
}
