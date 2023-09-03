/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    
    var count = 0

    while(n !== 0){
        // console.log(n%2)
        console.log(n & 1)
        count += n & 1
        n >>>= 1
        
        // console.log(n)
        // console.log(count)
    }

    return count

};

console.log(hammingWeight(11))