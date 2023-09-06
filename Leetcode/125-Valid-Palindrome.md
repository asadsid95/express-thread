Valid Palindrome

----

Problem: given a string, return true if it reads the same forward and backward after it has been converted to lowercase and all non-alphanumeric characters have been removed

Approach:

- create helper function that uses regex to replace non-alphanumeric characters and converts the string to lowercase. 
    Another way is to convert string to lowercase, then iterate through the string and check if each character is between a-z | 0-9, save it to another variable and return it to the main function
- initialize 2 pointers; one at beginning and end
- while the 2 pointers are not equal (i.e. left is less than right), check if string's char at each pointer is not the same to return false. Otherwise increment and decrement left and right pointer 