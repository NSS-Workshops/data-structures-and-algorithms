import { TestResult } from "@nss-workshops/nss-core";

export default {
  id: 'e49003dd',
  title: 'Module 8 - Code Excercise 2',
  sectionId: 'sliding-window',
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

## Problem: Longest Substring Without Repeating Characters

Given a string, find the length of the longest substring without repeating characters.

### Follow-up Questions:
- What is the time complexity of your solution?
- What is the space complexity?
- How would you return the actual substring instead of just the length?`,
  exercises: [{
    starterCode:`/*
Problem: Longest Substring Without Repeating Characters

Given a string, find the length of the longest substring without repeating characters.

Examples:
Input: "abcabcbb" → Output: 3 (substring "abc")
Input: "bbbbb" → Output: 1 (substring "b")
Input: "pwwkew" → Output: 3 (substring "wke")
Input: "" → Output: 0

Follow-up Questions:
- What is the time complexity of your solution?
- What is the space complexity?
- How would you return the actual substring instead of just the length?
*/

function lengthOfLongestSubstring(s) {
  // Approach: Use sliding window with Set to track unique characters
  // Expand window by moving right pointer
  // Contract window by moving left pointer when duplicate found
  // Keep track of maximum window size seen
  
  // Your code here
}`,
    solution:`/*
Problem: Longest Substring Without Repeating Characters

Given a string, find the length of the longest substring without repeating characters.
*/

function lengthOfLongestSubstring(s) {
  // Handle edge case
  if (!s || s.length === 0) {
    return 0;
  }
  
  // Use Set to track characters in current window
  const charSet = new Set();
  let left = 0;  // Left pointer of sliding window
  let maxLength = 0;  // Maximum length found so far
  
  // Expand window with right pointer
  for (let right = 0; right < s.length; right++) {
    // If character is already in window, contract from left
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }
    
    // Add current character to window
    charSet.add(s[right]);
    
    // Update maximum length
    maxLength = Math.max(maxLength, right - left + 1);
  }
  
  return maxLength;
  
  // Time Complexity: O(n) - each character visited at most twice
  // Space Complexity: O(min(m, n)) where m is charset size, n is string length
  // In worst case, we store all unique characters in the set
}`,
    tests:[
      {
        name: "Basic substring cases",
        test: (code) => {
          try {
            const lengthOfLongestSubstring = new Function(`${code}; return lengthOfLongestSubstring;`)();
            
            const test1 = lengthOfLongestSubstring("abcabcbb") === 3; // "abc"
            const test2 = lengthOfLongestSubstring("bbbbb") === 1; // "b"
            const test3 = lengthOfLongestSubstring("pwwkew") === 3; // "wke"
            
            if (test1 && test2 && test3) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Basic cases failed. "abcabcbb": ${lengthOfLongestSubstring("abcabcbb")}, "bbbbb": ${lengthOfLongestSubstring("bbbbb")}, "pwwkew": ${lengthOfLongestSubstring("pwwkew")}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should find length of longest substring without repeating characters."
      },
      {
        name: "Handle edge cases",
        test: (code) => {
          try {
            const lengthOfLongestSubstring = new Function(`${code}; return lengthOfLongestSubstring;`)();
            
            const test1 = lengthOfLongestSubstring("") === 0; // Empty string
            const test2 = lengthOfLongestSubstring("a") === 1; // Single character
            const test3 = lengthOfLongestSubstring("au") === 2; // Two unique chars
            const test4 = lengthOfLongestSubstring("aab") === 2; // "ab"
            
            if (test1 && test2 && test3 && test4) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Edge cases failed. "": ${lengthOfLongestSubstring("")}, "a": ${lengthOfLongestSubstring("a")}, "au": ${lengthOfLongestSubstring("au")}, "aab": ${lengthOfLongestSubstring("aab")}`
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
        name: "Handle all unique characters",
        test: (code) => {
          try {
            const lengthOfLongestSubstring = new Function(`${code}; return lengthOfLongestSubstring;`)();
            
            const test1 = lengthOfLongestSubstring("abcdef") === 6; // All unique
            const test2 = lengthOfLongestSubstring("abcdefg") === 7; // All unique
            
            if (test1 && test2) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `All unique cases failed. "abcdef": ${lengthOfLongestSubstring("abcdef")}, "abcdefg": ${lengthOfLongestSubstring("abcdefg")}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should handle strings with all unique characters."
      },
      {
        name: "Complex patterns",
        test: (code) => {
          try {
            const lengthOfLongestSubstring = new Function(`${code}; return lengthOfLongestSubstring;`)();
            
            const test1 = lengthOfLongestSubstring("dvdf") === 3; // "vdf"
            const test2 = lengthOfLongestSubstring("anviaj") === 5; // "nviaj"
            const test3 = lengthOfLongestSubstring("abba") === 2; // "ab" or "ba"
            
            if (test1 && test2 && test3) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Complex cases failed. "dvdf": ${lengthOfLongestSubstring("dvdf")}, "anviaj": ${lengthOfLongestSubstring("anviaj")}, "abba": ${lengthOfLongestSubstring("abba")}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should handle complex repeating patterns."
      }
    ]
  }]
};