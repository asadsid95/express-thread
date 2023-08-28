
// brute force
// function twoSum(arr, target) {
//     // console.log(arr)

//     for (let i= 0; i<arr.length; i++){
//         for (let j=i+1; j<arr.length;j++){

//             if(arr[i] + arr[j] === target){
//                 return [i, j]
//             }

//         }
    
//     }

//     return []
// }

// Use of hash table ; 
// store all elements in hash table as keys, and their indices as value by iterating over num[]
// Iterate again over num[] and subtract each element from target. check if difference exists in keys of hash table.
function twoSum(arr, target) {

    let hashTable = {}

    for(let i=0; i< arr.length; i++) {
        hashTable[ arr[i] ] = i // added elements from num[] and their indices in hash table
    }

    for(let i=0; i<arr.length; i++){
        let diff = target - arr[i]
        
        console.log("arr[i]: ", arr[i])
        console.log("hashTable[diff]: ", hashTable[diff])
        console.log('------')
        if(diff in Object.keys(hashTable)){
            console.log('diff: ', diff)
            console.log(hashTable)
            console.log('yess')
            return [i, hashTable[diff]]
        }
    }
    return []
}
arr = [1,3,4,2,5]

console.log(twoSum(arr, 8))

// RESULT: for difference of ( 5 after subtracting 8-3 ) does not get return ; why not?
