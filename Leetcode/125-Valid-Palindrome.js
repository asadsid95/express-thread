/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function(s) {

    // helper function to convert string to lowercase, then add to new variable each character if it is within 
    function helper(string){
        let converted_string=''

        for(let i = 0; i<string.length; i++){
            let lowercase_string = string.toLowerCase();
            // comparing the ASCII value of characters to be within the range for values of a-z and 0-9 
            if (( lowercase_string[i]>= 'a' && lowercase_string[i] <= 'z') || 
                (lowercase_string[i] >= '0' && lowercase_string[i] <= '9')) {
                converted_string += lowercase_string[i]
            }
        }
        return converted_string
    }

    let converted_string = helper(s)

    let l_pointer = 0,
        r_pointer = converted_string.length-1
    
console.log(converted_string)
// console.log(starting_pointer)
// console.log(end_pointer)

    while( l_pointer < r_pointer) {
        if (converted_string[l_pointer] !== converted_string[r_pointer]) {
            return false
        } else {
            l_pointer++
            r_pointer--
        }
    }
    return true

};

console.log(isPalindrome("race a car"))