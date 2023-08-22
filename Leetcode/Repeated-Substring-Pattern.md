Approach:
- 40 min of brainstorming approaches
- 30 min to code it and use tags for pointers if clueless
- 30 min of finding good solutions, creating test cases to test them with the good solutions + understanding them
- 30 min to code the solution

--------
Repeated Substring Pattern

Problem: can a substring from a given string recreate the string by appending multiple copies of itself together?

Examples of target strings = abcabcabcabc, xyzxyzxyz, hellohellohellohello
Examples of ineligible strings = aba, hellohelloworld


40 min -  brainstorm approaches
What are the parts to this problem?
- Suspected substring needs to preserve its order
- Eligible substring may have repeated letters within i.e. hello for hellohello, therefore using a set wont work

30 min - open tags to get a direction on solving the problem and come up with an approach
- tags indicate string matching
- How to find the substring?


30 min of finding good solutions, creating test cases to test them with the good solutions + understanding them
- Solution:
-- length of repeating substring must be divisor of string's length i.e. no remainder 
-- Search for possible divisor of string's length, starting at length/2
-- If this value is a divisor, repeat substring (size of the value) by the value of size (VERIFY this)