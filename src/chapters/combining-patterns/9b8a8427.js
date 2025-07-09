import { TestResult } from "../../utils/test_utils";

export const codeExcerciseOneChapter = {
  id: '9b8a8427',
  title: 'Module 10 - Code Excercise 1',
  sectionId: 'combining-patterns',
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

## Problem: Group Anagrams

Given an array of strings, group the anagrams together. You can return the answer in any order.

An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

### Follow-up Questions:
- What is the time complexity of your solution?
- What is the space complexity?
- What are alternative approaches to detect anagrams?`,
  exercise: {
    starterCode:`/*
Problem: Group Anagrams

Given an array of strings, group the anagrams together. You can return the answer in any order.

An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Examples:
Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
Output: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]

Input: [""]
Output: [[""]]

Input: ["a"]
Output: [["a"]]

Follow-up Questions:
- What is the time complexity of your solution?
- What is the space complexity?
- What are alternative approaches to detect anagrams?
*/

function groupAnagrams(strs) {
  // Approach: Use Map with sorted string as key
  // Anagrams will have the same sorted characters
  // Group strings by their sorted version
  
  // Your code here
}`,
    solution:`/*
Problem: Group Anagrams

Given an array of strings, group the anagrams together.
*/

function groupAnagrams(strs) {
  // Use Map to group anagrams by their sorted characters
  const anagramGroups = new Map();
  
  // Process each string
  for (let str of strs) {
    // Sort characters to create a key for anagrams
    // Anagrams will have the same sorted key
    const sortedKey = str.split('').sort().join('');
    
    // If this key exists, add to existing group
    // Otherwise, create new group
    if (anagramGroups.has(sortedKey)) {
      anagramGroups.get(sortedKey).push(str);
    } else {
      anagramGroups.set(sortedKey, [str]);
    }
  }
  
  // Return all groups as an array of arrays
  return Array.from(anagramGroups.values());
  
  // Time Complexity: O(n * k log k) where n = number of strings, k = max string length
  // - Sorting each string takes O(k log k)
  // - We do this for n strings
  // Space Complexity: O(n * k) for storing all strings in the map
}`,
    tests:[
      {
        name: "Basic anagram grouping",
        test: (code) => {
          try {
            const groupAnagrams = new Function(`${code}; return groupAnagrams;`)();
            
            const result = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
            
            // Sort each group and the overall result for consistent comparison
            const sortedResult = result.map(group => group.sort()).sort();
            const expected = [["bat"], ["ate", "eat", "tea"], ["nat", "tan"]].map(group => group.sort()).sort();
            
            const isCorrect = JSON.stringify(sortedResult) === JSON.stringify(expected);
            
            if (isCorrect) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Expected ${JSON.stringify(expected)}, got ${JSON.stringify(sortedResult)}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should group anagrams correctly."
      },
      {
        name: "Handle edge cases",
        test: (code) => {
          try {
            const groupAnagrams = new Function(`${code}; return groupAnagrams;`)();
            
            const test1 = groupAnagrams([""]);
            const test2 = groupAnagrams(["a"]);
            const test3 = groupAnagrams([]);
            
            const result1 = JSON.stringify(test1) === JSON.stringify([[""]]);
            const result2 = JSON.stringify(test2) === JSON.stringify([["a"]]);
            const result3 = JSON.stringify(test3) === JSON.stringify([]);
            
            if (result1 && result2 && result3) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Edge cases failed. Empty string: ${JSON.stringify(test1)}, Single char: ${JSON.stringify(test2)}, Empty array: ${JSON.stringify(test3)}`
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
        name: "Handle no anagrams",
        test: (code) => {
          try {
            const groupAnagrams = new Function(`${code}; return groupAnagrams;`)();
            
            const result = groupAnagrams(["abc", "def", "ghi"]);
            
            // Each string should be in its own group
            const sortedResult = result.map(group => group.sort()).sort();
            const expected = [["abc"], ["def"], ["ghi"]].sort();
            
            const isCorrect = JSON.stringify(sortedResult) === JSON.stringify(expected);
            
            if (isCorrect) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Expected ${JSON.stringify(expected)}, got ${JSON.stringify(sortedResult)}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should handle strings with no anagrams."
      },
      {
        name: "Handle duplicate strings",
        test: (code) => {
          try {
            const groupAnagrams = new Function(`${code}; return groupAnagrams;`)();
            
            const result = groupAnagrams(["abc", "bca", "abc", "cab"]);
            
            // All should be grouped together as they're anagrams
            const hasOneGroup = result.length === 1;
            const groupSize = result[0] ? result[0].length : 0;
            const correctSize = groupSize === 4;
            
            if (hasOneGroup && correctSize) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Expected one group of 4 anagrams, got ${result.length} groups with sizes: ${result.map(g => g.length)}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should handle duplicate strings correctly."
      },
      {
        name: "Handle mixed case and special characters",
        test: (code) => {
          try {
            const groupAnagrams = new Function(`${code}; return groupAnagrams;`)();
            
            const result = groupAnagrams(["a", "aa", "aaa"]);
            
            // Each should be in separate groups (different lengths)
            const hasThreeGroups = result.length === 3;
            const allSingleGroups = result.every(group => group.length === 1);
            
            if (hasThreeGroups && allSingleGroups) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Expected 3 separate groups, got ${result.length} groups: ${JSON.stringify(result)}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should handle strings of different lengths."
      }
    ]
  }
};