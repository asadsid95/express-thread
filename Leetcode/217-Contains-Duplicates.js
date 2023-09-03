/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    var tracker = {}

    for (let i=0; i<nums.length; i++) {
        
        if (nums[i] in tracker) {
            return true
        } else {
            tracker[nums[i]] = i 
        }
    }

    return false
    
};

var nums = [1,2,3,4]

console.log(containsDuplicate(nums))