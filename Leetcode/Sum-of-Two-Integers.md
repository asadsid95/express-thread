Approach:
- 40 min of brainstorming approaches
- 30 min to code it and use tags for pointers if clueless
- 30 min of finding good solutions, creating test cases to test them with the good solutions + understanding them
- 30 min to code the solution

--------

Sum of Two Integers

Problem = given 2 integers, return their sum without using + or - operands

40 min -  brainstorm approaches
How can summing up be made possible without using the operators?
- Setting a counter and incrementing it to the value of the first integer and then the 2nd integer
    -- this would still require using the operands but its not directly being applied to the 2 integers

30 min - open tags to get a direction on solving the problem and come up with an approach
- Using bit manipulation; how?
    -- convert each integer to its binary representation
    -- 5 -> 101
    -- 7 -> 111
    and then what? how to add the 2 binary representations?

    JS allows for bitwise manipulation