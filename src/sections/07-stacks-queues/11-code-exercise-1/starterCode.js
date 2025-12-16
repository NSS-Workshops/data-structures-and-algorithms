/*
Problem: Valid Parentheses

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid.

An input string is valid if:
1. Open brackets must be closed by the same type of brackets
2. Open brackets must be closed in the correct order
3. Every close bracket has a corresponding open bracket of the same type

Examples:
Input: "()" → Output: true
Input: "()[]{}" → Output: true
Input: "(]" → Output: false
Input: "([)]" → Output: false
Input: "{[]}" → Output: true

Follow-up Questions:
- What is the time complexity of your solution?
- What is the space complexity?
- How would you handle different types of brackets?
*/

function isValid(s) {
  // Approach: Use a stack to track opening brackets
  // Push opening brackets onto stack
  // When encountering closing bracket, check if it matches the top of stack
  // String is valid if stack is empty at the end
  
  // Your code here
}