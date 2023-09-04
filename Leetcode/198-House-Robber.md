Approach:
- 40 min of brainstorming approaches
- 30 min to code it and use tags for pointers if clueless
- 30 min of finding good solutions, creating test cases to test them with the good solutions + understanding them
- 30 min to code the solution

--------

House Robber

Given integer[], return maximum sum of alternating elements

Example:
- Input: [1,2,3,4]
- Possibilities = 1 + 3 || 2 + 4
- Output: 6

Example:
- Input: [2,7,3,1,4,2,1,8]
- Possibilites:
-- 2 3 1 2 8
-- 7 4 8
-- 

Approaches:
- Brute Force -- iterate over array for each element
- Greedy algo -- pick the highest value and then 2nd highest, and then 3rd highest ...
- Memoization 
-- focusing on the last 3 elements (n-2, n-1, n) of the array, either `n-2` & `n` will be summed OR `n-1` will be summed
-- if former is chosen (`n-2` and `n`), total sum === total sum at `n-2` + value at `n`
-- if former is chosen (`n-1`), total sum === total sum at `n-1`  

* note total sum implies summing of all value up to the specific position 

-- therefore the maximum value of sum at `n` will either result from summing total at `n-2` and value of `n` OR summing total at `n-1`
-- Sum at `n` = Max( total sum at `n-2` + value at `n`, total sum at `n-1`)