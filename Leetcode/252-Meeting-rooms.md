Approach:
- 40 min of brainstorming approaches
- 30 min to code it and use tags for pointers if clueless
- 30 min of finding good solutions, creating test cases to test them with the good solutions + understanding them
- 30 min to code the solution

--------
Meeting Rooms

Problems:
- array of sub-arrays represent a schedule for meetings, can the person attend all meetings?

Approach:

Assume: person cannot attend more than 1 meeting at a time


- sort array by sub-array's first element i.e. start time
- put first sub-array in a new []
- iterate over remaining sub-arrays and check if their 1st element is between new []'s elements; 
    - if in between, return false
