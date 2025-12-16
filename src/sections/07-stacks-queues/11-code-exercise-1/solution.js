/*
Problem: Valid Parentheses

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid.
*/

function isValid(s) {
  // Use a stack to keep track of opening brackets
  const stack = [];
  
  // Map closing brackets to their corresponding opening brackets
  const bracketMap = {
    ')': '(',
    '}': '{',
    ']': '['
  };
  
  // Process each character in the string
  for (let char of s) {
    // If it's a closing bracket
    if (char in bracketMap) {
      // Check if stack is empty or top doesn't match
      if (stack.length === 0 || stack.pop() !== bracketMap[char]) {
        return false;
      }
    } else {
      // It's an opening bracket, push to stack
      stack.push(char);
    }
  }
  
  // String is valid if all brackets are matched (stack is empty)
  return stack.length === 0;
  
  // Time Complexity: O(n) - we process each character once
  // Space Complexity: O(n) - in worst case, all characters are opening brackets
}