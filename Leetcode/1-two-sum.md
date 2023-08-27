Approach:
- 40 min of brainstorming approaches
- 30 min to code it and use tags for pointers if clueless
- 30 min of finding good solutions, creating test cases to test them with the good solutions + understanding them
- 30 min to code the solution

--------
Used ChatGPT to find ways to solve two sum
- brute force -- 
- hash map + subtract from target to find remaining amount in map
- sort array and use 2 pointers
- sort array and use 

---------

Two-Sum

Problem = return indices of the 2 elements from a given array that add up to target integer

Given: 
nums = [ 5, 4, 3 ,2] | target = 7

Brute Force method:
- for each element, iterate over the array to check if any element adds to target;
- example =  for the first integer, iterate over the arrray;  No element is found 
-- for second integer, 5 doesnt add up. Skip over 4 itself and find 3 that adds up to target. return the second integer's index and integer 3's index in an array