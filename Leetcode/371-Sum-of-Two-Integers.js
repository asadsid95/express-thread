/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    
    while( b !== 0){
        let carry = a & b

        console.log(carry)
        a = a ^ b
        b = carry << 1
    }

    return a

};

console.log(addBinary(9,11))