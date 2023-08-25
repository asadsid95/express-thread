/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

var merge = function(intervals) {
    if(intervals.length <=1){
        return intervals
    }

    intervals.sort((a,b) => a[0] - b[0])

    // console.log(intervals)
    
    var result = [intervals[0]]

    // var new_interval = intervals[0]
    // result.push(new_interval)

    // console.log(result)

    for (let i=1; i< intervals.length; i++ ){
        const currentInterval_intervals = intervals[i]
        const lastMergedInterval_result = result[result.length-1] // gets the last element of result[]
        
        if (currentInterval_intervals[0] <= lastMergedInterval_result[1]){
            lastMergedInterval_result[1] = Math.max(lastMergedInterval_result[1], currentInterval_intervals[1])
        } else {
            result.push(currentInterval_intervals)
        }
    }
    return result
};

// var merge = function(intervals) {
//     if (intervals.length <= 1) {
//         return intervals;
//     }

//     // Sort intervals based on start points
//     intervals.sort((a, b) => a[0] - b[0]);

//     const mergedIntervals = [intervals[0]];

//     for (let i = 1; i < intervals.length; i++) {
//         const currentInterval = intervals[i];
//         const lastMergedInterval = mergedIntervals[mergedIntervals.length - 1];

//         // If current interval overlaps with last merged interval
//         if (currentInterval[0] <= lastMergedInterval[1]) {
//             lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
//         } else {
//             mergedIntervals.push(currentInterval);
//         }
//     }

//     return mergedIntervals;
// };

var intervals = [[1,4],[2,3]]

console.log(merge(intervals))