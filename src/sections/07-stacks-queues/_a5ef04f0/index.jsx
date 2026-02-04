import { TestResult } from "@nss-workshops/nss-core";

export default {
  id: 'a5ef04f0',
  title: 'Module 6 - Code Excercise 1',
  sectionId: 'stacks-queues',
  previousChapterId: null,
  content: `
  Hi 👋,
You'll be guiding your partner through the coding problem on the right side of your screen. 

⚠️ **Please do not share this URL / problem before class.**  
Revealing the question early defeats the purpose of simulating a real-world interview, where candidates do not know the problem in advance. Let's give your partner the chance to experience the challenge authentically.

🧠 **Before class:**  
Take time to study the problem. During the session, you'll have 90 minutes in your breakout room to run a mock interview with your partner. Be sure to take turns acting as the interviewer and interviewee.

🗣️ **As the interviewer, your responsibilities are:**
- Send this URL to your partner (copy and past the whole url and slack it directly to you partner)
- Briefly introduce the problem
- Never give away the answer
- Take notes and provide feedback
- Fill out this [feedback form](https://forms.gle/sXK3tJaGNEk52jm4A)

🗣️ **As the interviewee, your responsibilities are:**
- Ask clarifying questions
- Follow the steps in the [solving guide](https://forms.gle/sXK3tJaGNEk52jm4A):
    Step 1: Clarify
    Step 2: Plan
    Step 3: Implement
    Step 4: Test
    Step 5: Optimize

🪞 **After the first interview:**  
Leave 10–15 minutes to reflect, share feedback, and then switch roles.

Best of luck, and enjoy the practice! 🚀

## Problem: Valid Parentheses

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
1. Open brackets must be closed by the same type of brackets
2. Open brackets must be closed in the correct order
3. Every close bracket has a corresponding open bracket of the same type

### Follow-up Questions:
- What is the time complexity of your solution?
- What is the space complexity?
- How would you handle different types of brackets?`,
  exercises: [{
    starterCode:`/*
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
}`,
    solution:`/*
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
}`,
    tests:[
      {
        name: "Valid parentheses basic cases",
        test: (code) => {
          try {
            const isValid = new Function(`${code}; return isValid;`)();
            
            const test1 = isValid("()") === true;
            const test2 = isValid("()[]{}") === true;
            const test3 = isValid("{[]}") === true;
            
            if (test1 && test2 && test3) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Failed basic valid cases. Results: "()" = ${isValid("()")}, "()[]{}" = ${isValid("()[]{}")}, "{[]}" = ${isValid("{[]}")}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should return true for valid parentheses combinations."
      },
      {
        name: "Invalid parentheses cases",
        test: (code) => {
          try {
            const isValid = new Function(`${code}; return isValid;`)();
            
            const test1 = isValid("(]") === false;
            const test2 = isValid("([)]") === false;
            const test3 = isValid("((") === false;
            const test4 = isValid("))") === false;
            
            if (test1 && test2 && test3 && test4) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Failed invalid cases. Results: "(]" = ${isValid("(]")}, "([)]" = ${isValid("([)]")}, "((" = ${isValid("((")}, "))" = ${isValid("))")}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should return false for invalid parentheses combinations."
      },
      {
        name: "Edge cases",
        test: (code) => {
          try {
            const isValid = new Function(`${code}; return isValid;`)();
            
            const test1 = isValid("") === true;  // Empty string is valid
            const test2 = isValid("(") === false; // Single opening bracket
            const test3 = isValid(")") === false; // Single closing bracket
            
            if (test1 && test2 && test3) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Failed edge cases. Results: "" = ${isValid("")}, "(" = ${isValid("(")}, ")" = ${isValid(")")}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should handle edge cases correctly."
      },
      {
        name: "Complex nested cases",
        test: (code) => {
          try {
            const isValid = new Function(`${code}; return isValid;`)();
            
            const test1 = isValid("((()))") === true;
            const test2 = isValid("({[]})") === true;
            const test3 = isValid("((())") === false;
            const test4 = isValid("({[}])") === false;
            
            if (test1 && test2 && test3 && test4) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Failed complex cases. Results: "((()))" = ${isValid("((()))")}, "({[]})" = ${isValid("({[]})")}, "((())" = ${isValid("((())")}, "({[}])" = ${isValid("({[}])")}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should handle complex nested bracket combinations."
      }
    ]
  }]
};