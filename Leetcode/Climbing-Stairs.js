/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    
    // // 0th index indicates ground zero
    // var array = new Array(n+1)

    // // stairs of 1 step only has 1 way
    // // stairs of 2 steps has 2 ways
    // if (n==1) return n

    // // initializing the array 
    // array[1] = 1;
    // array[2] = 2;

    // // to get to the top, the last traversal can happen either from the last step or second last step
    // // so getting the numbers of way to reach those two (last and second-last step) and adding them sums the possibilities
    // for(let i =3; i <= n; i++) {
    //     array[i] = array[i-1] + array[i-2]
    // }

    // return array[n]

    var array = [0,1,2]

    // how is the array expanding
    for(let i=3;i<=n;i++){
        array[i] = array[i-1] + array[i-2]

        console.log(array)
    }

    return array[n]
    
};

console.log(climbStairs(6))

// for time complexity,
// loop iterates over an array of n-3
// constant of 3 is removed so O(n) 

