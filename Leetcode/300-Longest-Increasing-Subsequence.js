

tail = [1,2,5,6,7]

let left = 0
let right = (tail.length - 1 )

let num = 3
// console.log(mid )
while (left < right) {
    
    let mid = Math.floor((left + right)/2)
    
    if(tail[mid] < num) {
        left = mid + 1

    } else {
        right = mid
    }

    break

}

/**
 * @param {number[]} nums
 * @return {number}
 */
function lengthOfLIS(nums) {
    const n = nums.length;
    if (n === 0) return 0;

    const tail = [nums[0]];

    for (let i = 1; i < n; i++) {
        const num = nums[i];
        if (num > tail[tail.length - 1]) {
            tail.push(num);
        } else {
            // Use binary search to find the correct position to replace an element in tail.
            let left = 0;
            let right = tail.length - 1;
            while (left < right) {
                const mid = Math.floor((left + right) / 2);
                if (tail[mid] < num) {
                    left = mid + 1;
                } else {
                    right = mid;
                }
            }
            tail[left] = num;
        }
    }

    console.log(tail)

    return tail.length;
}

const nums = [10, 22, 9, 33, 21, 50, 41, 60, 80];
console.log(lengthOfLIS(nums));