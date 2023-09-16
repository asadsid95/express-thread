let display = document.getElementById('display')
let first_digits = ''
let operator = ''
let second_digits = ''
let result = ''

function input(value) {

    // add to first_digits only
    if(operator === '' && second_digits === '') {

        // prevents decimals flooding
        if(value === '.') {
            if(first_digits.indexOf(value) === -1) {
                first_digits += value
            } 
        } else {
            first_digits += value
            display.value = first_digits
        }
    }
    // add to second_digits; if operator is not empty string
    else if (operator !== '') {
        // if operator is selected without choosing first_digits, assign first_digits 0
        // else if value is decimal, check if it already exists in second_digits
        // else add value to second_digits and show it in display
        if (first_digits === '') {
            first_digits = '0'
        } else if(value === '.') {
    
            // prevents decimals flooding
            if(second_digits.indexOf(value) === -1) {
                second_digits += value
            } 
        } else {
            second_digits += value
            display.value = second_digits
        }
    }

    console.log("first_digits: ", first_digits)
    console.log("second_digits: ", second_digits)
    console.log("operator: ", operator)
}

function operation(value) {
    operator = value
}

function calculateResult() {
    first_digits = parseFloat(first_digits)
    second_digits = parseFloat(second_digits)
    let result=''

    switch(operator){
        case "+":
            result = first_digits + second_digits
            display.value = result
            break
        case "-":
            result = first_digits - second_digits
            display.value = result

            break
        case "*":
            result = first_digits * second_digits
            display.value = result

        break
        case "/":
            if( second_digits === 0) {
                return display.value = 'Error'
            } else {
                result = first_digits / second_digits
                display.value = result
            }

        break
        }

}

function clearDisplay() {

    // change display element's value to 0
    digits = ''
    display.value = 0
    result = ''
    first_digits = ''
    second_digits = ''
    operator = ''
}