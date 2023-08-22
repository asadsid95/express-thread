Approach:
- 40 min of brainstorming approaches
- 30 min to code it and use tags for pointers if clueless
- 30 min of finding good solutions, creating test cases to test them with the good solutions + understanding them
- 30 min to code the solution

--------
Climbing Stairs

Dynamic programming - technique of breaking problems into subproblems and solving each sub problem only once. Solutions to be stored in a table or map for retrival  

Problem: given the number of steps to reach top of stairs and only 1 or 2 steps can be climbed, how many distinct ways can the top be climb?

 
example:

n = 5

distint ways
- 1 1 1 1 1
- 1 1 1 2
- 1 2 2 
- 2 1 1 1
- 2 2 1


Pseudo code

n = 6

at step 1, there are 5 of n-1 or 2 of n-2 to go == 5
at step 2, there are 4 of n-1 or 2 of n-2 to go == 4
at step 3, there are 3 of n-1 or 1 of n-2 to go == 3
at step 4, there are 2 of n-1 or 1 of n-2 to go == 2
at step 5, there is 1 of n-1 or 0 of n-2 to go == 1

Number of ways to reach nth step is equal to number of ways to reach the last step (before the top) + number of ways to reach the second-last step(before the top)

At first and 2 step from the bottom, theres 1 way to climb the first step and 2 ways to climb the second step (1+1 & 2)

creating an array of size (n + 1); to compensate for index 0th, we add 1
for step 1 and 2, add in 1 and 2 for base case

from there, we follow 'Number of ways to reach nth step is equal to number of ways to reach the last step (before the top) + number of ways to reach the second-last step(before the top)' such that to reach 3rd step, we add the number of ways to reach the first and second step 