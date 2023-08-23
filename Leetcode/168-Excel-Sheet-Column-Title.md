Approach:
- 40 min of brainstorming approaches
- 30 min to code it and use tags for pointers if clueless
- 30 min of finding good solutions, creating test cases to test them with the good solutions + understanding them
- 30 min to code the solution

--------
Excel Sheet Column Title



Problem: given an integer, return the corresponding column title in a spreadsheet

Base case: 

    1 -> A
    26 -> Z


To convert the given integer to base 26, divide the given integer by 26 and record the quotient and remainder.

Remainder is used to represent the alphabet for column name while quotient is used to further convert the column number to base 26.
Note that the quotient has to be subtracted by 1. 
Although I dont fully understand why, it's adjusting Excel's standard of starting at 1, to 0.