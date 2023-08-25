Approach:
- 40 min of brainstorming approaches
- 30 min to code it and use tags for pointers if clueless
- 30 min of finding good solutions, creating test cases to test them with the good solutions + understanding them
- 30 min to code the solution

--------
Merge Intervals

Problem: return an array of non-overlapping intervals that cover all intervals from the input, which is an array of arrays. These arrays contain 2 elements which indicate the start & end of the interval

Approach:

1st:

Iterate over given array
 - at 0th element, store the start & end element in variables (foo & boo)
 - at 1th element, compare its start's value to foo and bar, for overlapping i.e. between the range; if in range, do nothing so foo's value remains 
    - compare end's value with foo & bar and replace bar if its lower than end

2nd:

Sort the array, create result array, iterate and merge 
 - sort given array based on sub-list's first value
 - create result array with given array's first element; this is to give reference for comparison
 - iterate over given array, and compare sub-list's 1nd element (i.e. start) with the 2nd element of the sub-list from result array
    - update the result array's sublist's 2nd element

    