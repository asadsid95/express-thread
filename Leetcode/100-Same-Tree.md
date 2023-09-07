Same Tree

----------


Problem: Given root nodes of 2 binary tree, write a function that checks if they are the same
- Same implies structurally identical and respective nodes having the same values


Approach # 1 (using recursion):
- we first check if nodes p and q are null (return true), and check if either are null (return false)
- then check if the values of each node are not the same (return false)
- inside return, call the function with each node's left nodes & each node's right nodes


Approach # 2 (using stacks):
- we first check if nodes p and q are null (return true), and check if either are null (return false)
- While loop (condition: both stacks' lengths are > 0)
    - pop the top elements from each stack and assign them to individual variables
    - check that they both are empty, continue
        -- Referencing the last point below, this will lead to pushing null values in the stacks which will stop the while loop as stacks' length will be zero
    - check if either are empty or if their values are not equal, return false
    - now, push each node's left and right node in their respective stacks in the exact order. This will ensure the correct node will be popped in the next iteration. 


