import { TestResult } from "../../utils/test_utils";

export const codeExcerciseTwoChapter = {
  id: 'd796e8a8',
  title: 'Module 9 - Code Excercise 2',
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

## Problem: Top K Frequent Elements

Given an integer array and an integer k, return the k most frequent elements. You may return the answer in any order.

### Follow-up Questions:
- What is the time complexity of your solution?
- What is the space complexity?
- How could you optimize this with a heap data structure?`,
  exercise: {
    starterCode:`/*
Problem: Top K Frequent Elements

Given an integer array and an integer k, return the k most frequent elements.
You may return the answer in any order.

Examples:
Input: nums = [1, 1, 1, 2, 2, 3], k = 2
Output: [1, 2]

Input: nums = [1], k = 1
Output: [1]

Input: nums = [1, 2, 3, 4, 5], k = 3
Output: [1, 2, 3] (or any 3 elements since all have same frequency)

Follow-up Questions:
- What is the time complexity of your solution?
- What is the space complexity?
- How could you optimize this with a heap data structure?
*/

function topKFrequent(nums, k) {
  // Approach: Use Map for frequency counting + sorting
  // 1. Count frequency of each element using Map
  // 2. Sort elements by frequency
  // 3. Return top k elements
  
  // Your code here
}`,
    solution:`/*
Problem: Top K Frequent Elements

Given an integer array and an integer k, return the k most frequent elements.
*/

function topKFrequent(nums, k) {
  // Step 1: Count frequency of each element
  const frequencyMap = new Map();
  
  for (let num of nums) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }
  
  // Step 2: Convert map to array of [element, frequency] pairs
  const frequencyArray = Array.from(frequencyMap.entries());
  
  // Step 3: Sort by frequency in descending order
  frequencyArray.sort((a, b) => b[1] - a[1]);
  
  // Step 4: Extract top k elements
  const result = [];
  for (let i = 0; i < k && i < frequencyArray.length; i++) {
    result.push(frequencyArray[i][0]);
  }
  
  return result;
  
  // Time Complexity: O(n log n) where n is number of unique elements
  // - Frequency counting: O(n)
  // - Sorting: O(n log n) 
  // - Extracting k elements: O(k)
  // Space Complexity: O(n) for the frequency map and array
  
  // Alternative with heap would be O(n log k) time complexity
}`,
    tests:[
      {
        name: "Basic top k frequent elements",
        test: (code) => {
          try {
            const topKFrequent = new Function(`${code}; return topKFrequent;`)();
            
            const result1 = topKFrequent([1, 1, 1, 2, 2, 3], 2);
            const result2 = topKFrequent([1], 1);
            
            // For result1, should contain 1 and 2 (most frequent)
            const test1 = result1.length === 2 && result1.includes(1) && result1.includes(2);
            
            // For result2, should contain 1
            const test2 = result2.length === 1 && result2[0] === 1;
            
            if (test1 && test2) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Basic cases failed. Result1: ${JSON.stringify(result1)}, Result2: ${JSON.stringify(result2)}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should return k most frequent elements."
      },
      {
        name: "Handle equal frequencies",
        test: (code) => {
          try {
            const topKFrequent = new Function(`${code}; return topKFrequent;`)();
            
            // All elements have same frequency
            const result = topKFrequent([1, 2, 3, 4, 5], 3);
            
            // Should return exactly 3 elements
            const correctLength = result.length === 3;
            
            // All returned elements should be from the original array
            const validElements = result.every(num => [1, 2, 3, 4, 5].includes(num));
            
            // No duplicates in result
            const noDuplicates = new Set(result).size === result.length;
            
            if (correctLength && validElements && noDuplicates) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Equal frequency case failed. Result: ${JSON.stringify(result)}, Length: ${result.length}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should handle elements with equal frequencies."
      },
      {
        name: "Handle k equals array length",
        test: (code) => {
          try {
            const topKFrequent = new Function(`${code}; return topKFrequent;`)();
            
            const result = topKFrequent([1, 2, 3], 3);
            
            // Should return all unique elements
            const correctLength = result.length === 3;
            const hasAllElements = [1, 2, 3].every(num => result.includes(num));
            
            if (correctLength && hasAllElements) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `k=length case failed. Result: ${JSON.stringify(result)}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should handle k equal to number of unique elements."
      },
      {
        name: "Handle k greater than unique elements",
        test: (code) => {
          try {
            const topKFrequent = new Function(`${code}; return topKFrequent;`)();
            
            const result = topKFrequent([1, 1, 2, 2], 5);
            
            // Should return all unique elements (only 2 unique elements exist)
            const correctLength = result.length === 2;
            const hasCorrectElements = result.includes(1) && result.includes(2);
            
            if (correctLength && hasCorrectElements) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `k>unique case failed. Result: ${JSON.stringify(result)}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should handle k greater than number of unique elements."
      },
      {
        name: "Handle negative numbers and zeros",
        test: (code) => {
          try {
            const topKFrequent = new Function(`${code}; return topKFrequent;`)();
            
            const result = topKFrequent([-1, -1, 0, 0, 0, 1], 2);
            
            // 0 appears 3 times, -1 appears 2 times, 1 appears 1 time
            // Top 2 should be 0 and -1
            const correctLength = result.length === 2;
            const hasZero = result.includes(0);
            const hasMinusOne = result.includes(-1);
            
            if (correctLength && hasZero && hasMinusOne) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Negative numbers case failed. Result: ${JSON.stringify(result)}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should handle negative numbers and zeros."
      }
    ]
  }
};