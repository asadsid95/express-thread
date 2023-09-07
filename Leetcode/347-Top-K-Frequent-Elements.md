Top K-Frequent Elements

-------------------

Problem: Return 'k' most frequent elements from an integer array `nums`

Approach # 1 (Hash Map & Min-heap):


Approach # 1 (Hash Map & Bucket sort):
- Traverse input array and add elements as keys with their frequencies as values in hash map
    - use for loop to traverse array 
    - check if hashmap has element. If yes, set the element's value to incremented by 1
    - If NO, add element as key and 1 as value 