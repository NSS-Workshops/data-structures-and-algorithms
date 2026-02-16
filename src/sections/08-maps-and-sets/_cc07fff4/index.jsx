import { TestResult } from "@nss-workshops/nss-core";

export default {
  id: 'cc07fff4',
  title: 'Module 7 - Code Exercise 2',
  sectionId: 'maps-and-sets',
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

## Problem: First Unique Character

Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

You may assume the string contains only lowercase English letters.

### Follow-up Questions:
- What is the time complexity of your solution?
- What is the space complexity?
- How would you solve this with only one pass through the string?`,
  exercises: [{
    starterCode:`/*
Problem: First Unique Character

Given a string, find the first non-repeating character in it and return its index.
If it doesn't exist, return -1.

You may assume the string contains only lowercase English letters.

Examples:
Input: "leetcode" → Output: 0 (character 'l' at index 0)
Input: "loveleetcode" → Output: 2 (character 'v' at index 2)
Input: "aabb" → Output: -1 (no unique characters)

Follow-up Questions:
- What is the time complexity of your solution?
- What is the space complexity?
- How would you solve this with only one pass through the string?
*/

function firstUniqChar(s) {
  // Approach: Use a Map to count character frequencies
  // First pass: count all characters
  // Second pass: find first character with count = 1
  
  // Your code here
}`,
    solution:`/*
Problem: First Unique Character

Given a string, find the first non-repeating character in it and return its index.
If it doesn't exist, return -1.
*/

function firstUniqChar(s) {
  // Create a Map to store character frequencies
  const charCount = new Map();
  
  // First pass: count frequency of each character
  for (let char of s) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }
  
  // Second pass: find first character with frequency = 1
  for (let i = 0; i < s.length; i++) {
    if (charCount.get(s[i]) === 1) {
      return i;
    }
  }
  
  // No unique character found
  return -1;
  
  // Time Complexity: O(n) - two passes through the string
  // Space Complexity: O(1) - at most 26 lowercase letters in the map
  // Since we're limited to lowercase English letters, space is constant
}`,
    tests:[
      {
        name: "Find first unique character",
        test: (code) => {
          try {
            const firstUniqChar = new Function(`${code}; return firstUniqChar;`)();
            
            const test1 = firstUniqChar("leetcode") === 0; // 'l' at index 0
            const test2 = firstUniqChar("loveleetcode") === 2; // 'v' at index 2
            const test3 = firstUniqChar("abcdef") === 0; // 'a' at index 0 (all unique)
            
            if (test1 && test2 && test3) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Failed basic cases. "leetcode": ${firstUniqChar("leetcode")}, "loveleetcode": ${firstUniqChar("loveleetcode")}, "abcdef": ${firstUniqChar("abcdef")}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should find the first unique character's index."
      },
      {
        name: "Handle no unique characters",
        test: (code) => {
          try {
            const firstUniqChar = new Function(`${code}; return firstUniqChar;`)();
            
            const test1 = firstUniqChar("aabb") === -1;
            const test2 = firstUniqChar("abccba") === -1;
            const test3 = firstUniqChar("aa") === -1;
            
            if (test1 && test2 && test3) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Failed no unique cases. "aabb": ${firstUniqChar("aabb")}, "abccba": ${firstUniqChar("abccba")}, "aa": ${firstUniqChar("aa")}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should return -1 when no unique characters exist."
      },
      {
        name: "Handle edge cases",
        test: (code) => {
          try {
            const firstUniqChar = new Function(`${code}; return firstUniqChar;`)();
            
            const test1 = firstUniqChar("") === -1; // Empty string
            const test2 = firstUniqChar("a") === 0; // Single character
            const test3 = firstUniqChar("abcabc") === -1; // All repeated
            
            if (test1 && test2 && test3) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Edge cases failed. "": ${firstUniqChar("")}, "a": ${firstUniqChar("a")}, "abcabc": ${firstUniqChar("abcabc")}`
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
        name: "Complex cases with multiple unique chars",
        test: (code) => {
          try {
            const firstUniqChar = new Function(`${code}; return firstUniqChar;`)();
            
            // "abccba" -> no unique chars, should return -1
            // "abcabc" -> no unique chars, should return -1  
            // "abcdefg" -> 'a' at index 0 (all unique, return first)
            // "aabbcde" -> 'c' at index 4 (first unique)
            
            const test1 = firstUniqChar("aabbcde") === 4; // 'c' at index 4
            const test2 = firstUniqChar("abcdefg") === 0; // 'a' at index 0
            const test3 = firstUniqChar("dddccdbba") === 8; // 'a' at index 8
            
            if (test1 && test2 && test3) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Complex cases failed. "aabbcde": ${firstUniqChar("aabbcde")}, "abcdefg": ${firstUniqChar("abcdefg")}, "dddccdbba": ${firstUniqChar("dddccdbba")}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should handle complex cases with multiple patterns."
      }
    ]
  }]
};