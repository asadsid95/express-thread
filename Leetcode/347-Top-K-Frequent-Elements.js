/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    
    let hash_map = new Map()

    for(let num of nums){
        // insert each element with value of 1
        // then if same element is found, increment the value by 1

        if(hash_map.has(num)) {
            hash_map.set(num, hash_map.get(num)+1 )
        } else{
            hash_map.set(num, 1)
        }
    }

    // get the max frequency from hashmap
    const maxFrequency = Math.max(...hash_map.values())
    
    // create array thats bigger than max frequency by 1; this will be used for bucket sorting
    const bucketArray = new Array(maxFrequency + 1).fill().map(() => [])

    // for loop on keys and values from hash map, to populate index (which matches frequency) with element, push element into the value which is an array
    for(const[num,frequency] of hash_map){
        bucketArray[frequency].push(num)
    }

    // create empty array for result
    const result = []

    // iterate over bucket[] from highest-frequency index element to first and add # of elements matching parameter `k`

    for(let i=maxFrequency; i >= 0 && result.length < k; i--){
        const bucket = bucketArray[i]

        if(bucket.length > 0) {
            result.push(...bucket)
        }
    }

    return result.slice(0, k)

    console.log(hash_map)

};

console.log(topKFrequent([1,1,1,2,2,3], 2))