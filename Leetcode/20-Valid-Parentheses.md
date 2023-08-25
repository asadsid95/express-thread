Approach:
- 40 min of brainstorming approaches
- 30 min to code it and use tags for pointers if clueless
- 30 min of finding good solutions, creating test cases to test them with the good solutions + understanding them
- 30 min to code the solution

--------

Valid Parentheses

Problem: ensure if given string is valid. There are 3 variations of parentheses, and validity is dependent on the ordering of parentheses and closing with same type

- [ [ ( ) ] ] -- valid
- [ ( { ) } ] -- invalid due to ordering 

Approach:
- Check the first char is of valid parentheses as base case; set up a hash table; 
    - if char is a closing parentheses, input string is invalid even though it appears in the table as a value
- iterate over the string
    - check each char against hash table
        -- if valid, push it into stack
    - check subsequent chars and if a closing parentheses shows up, first validate that its a value of parentheses from the hash table. and then ensure that its a closing parenthese for the top-most parenthese from the stack


Another approach:
- build the hash table with closing parenthese as key and opening as value

- iterating through each char
 -- if char is in hash-table i.e. char is a closing parenthese since key is closing type
    -- make sure stack is not empty AND value at top of stack is of matching opening-parentheses, pop from the stack
    -- If stack is empty OR closing doesn't match the topmost 