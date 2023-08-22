/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    
    var array = new Array(n)
    
    if(n <= 2){
        return n
    }

    for (let i = 2; i < n;  i++) {

        array[i] = array[i-1] + array[i-2]

    }

    console.log(array)
    return array.length
};

console.log(climbStairs(3))