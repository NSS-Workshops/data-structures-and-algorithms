import { TestResult } from "../../utils/test_utils";

export const codeExcerciseTwoChapter = {
  id: '72eee61a',
  title: 'Module 9 - Code Excercise 2',
  sectionId: 'sorting-and-binary-search',
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

## Problem: Find First Occurrence (Binary Search Variant)

Given a sorted array of integers that may contain duplicates and a target value, return the index of the first occurrence of the target if it exists in the array. If the target doesn't exist, return -1.

You must write an algorithm with O(log n) runtime complexity.

### Follow-up Questions:
- What is the time complexity of your solution?
- What is the space complexity?
- How would you modify this to find the last occurrence instead?`,
  exercise: {
    starterCode:`/*
Problem: Find First Occurrence (Binary Search Variant)

Given a sorted array of integers that may contain duplicates and a target value, return the index of the first occurrence of the target if it exists in the array. If the target doesn't exist, return -1.

You must write an algorithm with O(log n) runtime complexity.

Examples:
Input: nums = [5, 7, 7, 8, 8, 10], target = 8
Output: 3

Input: nums = [5, 7, 7, 8, 8, 10], target = 6
Output: -1

Input: nums = [1, 1, 1, 1, 1], target = 1
Output: 0

Follow-up Questions:
- What is the time complexity of your solution?
- What is the space complexity?
- How would you modify this to find the last occurrence instead?
*/

function searchFirst(nums, target) {
  // Approach: Modified binary search
  // When we find the target, continue searching left to find first occurrence
  // Keep track of the leftmost found index
  
  // Your code here
}`,
    solution:`/*
Problem: Find First Occurrence (Binary Search Variant)

Given a sorted array that may contain duplicates, find the first occurrence of target.
*/

function searchFirst(nums, target) {
  // Initialize left and right pointers
  let left = 0;
  let right = nums.length - 1;
  let result = -1; // Store the first occurrence index
  
  // Continue searching while search space is valid
  while (left <= right) {
    // Calculate middle index (avoid overflow)
    const mid = Math.floor(left + (right - left) / 2);
    
    // Check if we found the target
    if (nums[mid] === target) {
      result = mid; // Record this occurrence
      // Continue searching left for first occurrence
      right = mid - 1;
    }
    // If target is smaller, search left half
    else if (nums[mid] > target) {
      right = mid - 1;
    }
    // If target is larger, search right half
    else {
      left = mid + 1;
    }
  }
  
  // Return first occurrence index or -1 if not found
  return result;
  
  // Time Complexity: O(log n) - we eliminate half the search space each iteration
  // Space Complexity: O(1) - only using constant extra space for pointers
}`,
    tests:[
      {
        name: "Find first occurrence with duplicates",
        test: (code) => {
          try {
            const searchFirst = new Function(`${code}; return searchFirst;`)();
            
            const nums1 = [5, 7, 7, 8, 8, 10];
            const test1 = searchFirst(nums1, 8) === 3;
            const test2 = searchFirst(nums1, 7) === 1;
            const test3 = searchFirst(nums1, 5) === 0;
            const test4 = searchFirst(nums1, 10) === 5;
            
            if (test1 && test2 && test3 && test4) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Failed to find first occurrences. 8: ${searchFirst(nums1, 8)}, 7: ${searchFirst(nums1, 7)}, 5: ${searchFirst(nums1, 5)}, 10: ${searchFirst(nums1, 10)}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should find first occurrence of targets with duplicates."
      },
      {
        name: "Handle non-existing targets",
        test: (code) => {
          try {
            const searchFirst = new Function(`${code}; return searchFirst;`)();
            
            const nums = [5, 7, 7, 8, 8, 10];
            const test1 = searchFirst(nums, 6) === -1;
            const test2 = searchFirst(nums, 4) === -1;
            const test3 = searchFirst(nums, 11) === -1;
            const test4 = searchFirst(nums, 9) === -1;
            
            if (test1 && test2 && test3 && test4) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Failed to handle non-existing targets. 6: ${searchFirst(nums, 6)}, 4: ${searchFirst(nums, 4)}, 11: ${searchFirst(nums, 11)}, 9: ${searchFirst(nums, 9)}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should return -1 for non-existing targets."
      },
      {
        name: "Handle edge cases",
        test: (code) => {
          try {
            const searchFirst = new Function(`${code}; return searchFirst;`)();
            
            const test1 = searchFirst([], 1) === -1; // Empty array
            const test2 = searchFirst([1], 1) === 0; // Single element found
            const test3 = searchFirst([1], 2) === -1; // Single element not found
            const test4 = searchFirst([1, 1], 1) === 0; // Two identical elements
            const test5 = searchFirst([1, 2], 2) === 1; // Two different elements
            
            if (test1 && test2 && test3 && test4 && test5) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Edge cases failed. Empty: ${searchFirst([], 1)}, Single found: ${searchFirst([1], 1)}, Single not found: ${searchFirst([1], 2)}, Two identical: ${searchFirst([1, 1], 1)}, Two different: ${searchFirst([1, 2], 2)}`
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
        name: "Handle arrays with all same elements",
        test: (code) => {
          try {
            const searchFirst = new Function(`${code}; return searchFirst;`)();
            
            const test1 = searchFirst([1, 1, 1, 1, 1], 1) === 0;
            const test2 = searchFirst([5, 5, 5], 5) === 0;
            const test3 = searchFirst([2, 2, 2, 2], 2) === 0;
            const test4 = searchFirst([1, 1, 1, 1, 1], 2) === -1;
            
            if (test1 && test2 && test3 && test4) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Same elements cases failed. All 1s: ${searchFirst([1, 1, 1, 1, 1], 1)}, All 5s: ${searchFirst([5, 5, 5], 5)}, All 2s: ${searchFirst([2, 2, 2, 2], 2)}, Not found: ${searchFirst([1, 1, 1, 1, 1], 2)}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should handle arrays with all same elements correctly."
      },
      {
        name: "Work with larger arrays with duplicates",
        test: (code) => {
          try {
            const searchFirst = new Function(`${code}; return searchFirst;`)();
            
            // Create larger array with duplicates: [1,1,1,2,2,2,3,3,3,...]
            const largeArray = [];
            for (let i = 1; i <= 100; i++) {
              largeArray.push(i, i, i); // Each number appears 3 times
            }
            
            const test1 = searchFirst(largeArray, 50) === 147; // 50 first appears at index 147 (49*3)
            const test2 = searchFirst(largeArray, 1) === 0; // First element
            const test3 = searchFirst(largeArray, 100) === 297; // Last unique number first appears at 297
            const test4 = searchFirst(largeArray, 101) === -1; // Not in array
            
            if (test1 && test2 && test3 && test4) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Large array test failed. 50: ${searchFirst(largeArray, 50)}, 1: ${searchFirst(largeArray, 1)}, 100: ${searchFirst(largeArray, 100)}, 101: ${searchFirst(largeArray, 101)}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should work efficiently with larger arrays containing duplicates."
      }
    ]
  }
};