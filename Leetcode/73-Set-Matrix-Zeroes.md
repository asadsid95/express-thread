Approach:
- 40 min of brainstorming approaches
- 30 min to code it and use tags for pointers if clueless
- 30 min of finding good solutions, creating test cases to test them with the good solutions + understanding them
- 30 min to code the solution

--------

Set Matrix Zeros

Problem: Given an integer matrix of M x N, set the respective row and column to zero if an element contains zero. Solution must be done in place

Example:
[
    [1,1,1],
    [1,0,1],
    [1,1,1]
]

turns into

[
    [1,0,1],
    [0,0,0],
    [1,0,1]
]

Approach:

brute force:
- Iterate through the matrix array
    -- in each sub array (i.e. row), if a zero is contained, convert that array to zero.
    -- for the column, store the index of the 0-element, and iterate through remaining sub arrays and change the value to 0 for target index


O(n^2) solution:
- Iterate over the matrix and store in a temp [] the locations of the zeroes
- Iterate again over the matrix to set the corresponding columns and rows to the zeroes' location, to zero

