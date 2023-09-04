/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    
    if (nums.length < 2) 
        return nums[0]

    {/* 
    attempt # 1

    // var result = [nums[0], nums[1]] // adjacent values cannot be summed so putting 1st 2 values in the result[]

    // for(let i=2; i<nums.length; i++ ){

    //     var total_value_at_n = Math.max( result[i-2] + nums[i], result[i-1])
        
    //     console.log(total_value_at_n)
    // }
    */}

    var result = new Array(nums.length)

    // result.push(nums[0], Math.max(nums[0], nums[1])) // pushes element to the end

    result[0] = nums[0]
    result[1] = Math.max(nums[0], nums[1])

    for(let n = 2; n < nums.length; n++){
        result[n] = Math.max(result[n-2] + nums[n], result[n-1])
    }

    // console.log(result[nums.length-1])
    
    return result[nums.length-1]

};

console.log(rob([2,7,3,1,4,2,1,8]))

// how to achieve space complexity of O(1) ; hint = only store n-2 and n-1 instead of an entirely new array