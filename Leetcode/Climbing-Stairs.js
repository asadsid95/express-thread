/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    
    // 0th index indicates ground zero
    var array = new Array(n+1)

    if (n==1) return n

    array[1] = 1;
    array[2] = 2;

    for(let i =3; i <= n; i++) {
        array[i] = array[i-1] + array[i-2]
    }

    return array[n]
    
};

console.log(climbStairs(6))