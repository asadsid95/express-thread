/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    
    const length_of_string = s/2

    // console.log(s.length)
    if (s.length % length_of_string !== 0 ) {
        console.log('hello')
    }

};

repeatedSubstringPattern('abcabcabc')