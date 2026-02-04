import { TestResult } from "@nss-workshops/nss-core";

export default {
  id: '9cb73255',
  title: 'Module 9 - Code Excercise 1',
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

## Problem: Binary Search

Given a sorted array of integers and a target value, return the index of the target if it exists in the array. If the target doesn't exist, return -1.

You must write an algorithm with O(log n) runtime complexity.

### Follow-up Questions:
- What is the time complexity of your solution?
- What is the space complexity?
- How would you find the first/last occurrence of the target if there are duplicates?`,
  exercises: [{
    starterCode:`/*
Problem: Binary Search

Given a sorted array of integers and a target value, return the index of the target if it exists in the array.
If the target doesn't exist, return -1.

You must write an algorithm with O(log n) runtime complexity.

Examples:
Input: nums = [-1, 0, 3, 5, 9, 12], target = 9
Output: 4

Input: nums = [-1, 0, 3, 5, 9, 12], target = 2
Output: -1

Follow-up Questions:
- What is the time complexity of your solution?
- What is the space complexity?
- How would you find the first/last occurrence of the target if there are duplicates?
*/

function search(nums, target) {
  // Approach: Use binary search algorithm
  // Maintain left and right pointers
  // Compare middle element with target
  // Eliminate half of search space in each iteration
  
  // Your code here
}`,
    solution:`/*
Problem: Binary Search

Given a sorted array of integers and a target value, return the index of the target if it exists.
If the target doesn't exist, return -1.
*/

function search(nums, target) {
  // Initialize left and right pointers
  let left = 0;
  let right = nums.length - 1;
  
  // Continue searching while search space is valid
  while (left <= right) {
    // Calculate middle index (avoid overflow)
    const mid = Math.floor(left + (right - left) / 2);
    
    // Check if we found the target
    if (nums[mid] === target) {
      return mid;
    }
    
    // If target is smaller, search left half
    if (nums[mid] > target) {
      right = mid - 1;
    } 
    // If target is larger, search right half
    else {
      left = mid + 1;
    }
  }
  
  // Target not found
  return -1;
  
  // Time Complexity: O(log n) - we eliminate half the search space each iteration
  // Space Complexity: O(1) - only using constant extra space for pointers
}`,
    tests:[
      {
        name: "Find existing targets",
        test: (code) => {
          try {
            const search = new Function(`${code}; return search;`)();
            
            const nums = [-1, 0, 3, 5, 9, 12];
            const test1 = search(nums, 9) === 4;
            const test2 = search(nums, -1) === 0;
            const test3 = search(nums, 12) === 5;
            const test4 = search(nums, 3) === 2;
            
            if (test1 && test2 && test3 && test4) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Failed to find existing targets. 9: ${search(nums, 9)}, -1: ${search(nums, -1)}, 12: ${search(nums, 12)}, 3: ${search(nums, 3)}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should find existing targets and return correct indices."
      },
      {
        name: "Handle non-existing targets",
        test: (code) => {
          try {
            const search = new Function(`${code}; return search;`)();
            
            const nums = [-1, 0, 3, 5, 9, 12];
            const test1 = search(nums, 2) === -1;
            const test2 = search(nums, -2) === -1;
            const test3 = search(nums, 13) === -1;
            const test4 = search(nums, 4) === -1;
            
            if (test1 && test2 && test3 && test4) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Failed to handle non-existing targets. 2: ${search(nums, 2)}, -2: ${search(nums, -2)}, 13: ${search(nums, 13)}, 4: ${search(nums, 4)}`
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
            const search = new Function(`${code}; return search;`)();
            
            const test1 = search([], 1) === -1; // Empty array
            const test2 = search([1], 1) === 0; // Single element found
            const test3 = search([1], 2) === -1; // Single element not found
            const test4 = search([1, 2], 1) === 0; // Two elements, find first
            const test5 = search([1, 2], 2) === 1; // Two elements, find second
            
            if (test1 && test2 && test3 && test4 && test5) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Edge cases failed. Empty: ${search([], 1)}, Single found: ${search([1], 1)}, Single not found: ${search([1], 2)}, Two first: ${search([1, 2], 1)}, Two second: ${search([1, 2], 2)}`
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
        name: "Work with larger arrays",
        test: (code) => {
          try {
            const search = new Function(`${code}; return search;`)();
            
            // Create larger sorted array
            const largeArray = [];
            for (let i = 0; i < 1000; i += 2) {
              largeArray.push(i);
            }
            
            const test1 = search(largeArray, 500) === 250; // 500 is at index 250
            const test2 = search(largeArray, 0) === 0; // First element
            const test3 = search(largeArray, 998) === 499; // Last element
            const test4 = search(largeArray, 501) === -1; // Odd number not in array
            
            if (test1 && test2 && test3 && test4) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Large array test failed. 500: ${search(largeArray, 500)}, 0: ${search(largeArray, 0)}, 998: ${search(largeArray, 998)}, 501: ${search(largeArray, 501)}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should work efficiently with larger arrays."
      }
    ]
  }]
};