/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    if(s.length === 0 ) return false

    hash_table = {
        '(': ')',
        '{': '}',
        '[': ']'
    }

    if(!(s[0] in hash_table)) return false

    var stack = []

    for (let i=0; i < s.length ; i++ ){

        if((s[i] in hash_table)) { // checks if s[i] is a key 
            stack.push(s[i])
        }
        else if (hash_table[stack[stack.length - 1]] === s[i]) { // in a stack of [ ( , [ , { ] , { would the top of the stack

            // s[i] will be the closing type and to validate that, pull the topmost opening type in the stack and check if it's value matches s[i]
            stack.pop()
        } else {
            return false
        }

    }
    console.log(stack)
    return stack.length === 0
};

var s = '[()]}'
console.log(isValid(s))