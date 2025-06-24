import { TestResult } from "../../utils/test_utils";

export const codeExcerciseOneChapter = {
  id: '7a106b96',
  title: 'Module 2 - Code Excercise 1',
  sectionId: 'arrays-and-two-pointers',
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

## Problem: Two Sum (Two-Pointer Approach)

Given a sorted array of integers and a target sum, find two numbers in the array that add up to the target. Return the indices of these two numbers.`,
  exercise: {
    starterCode:`/*
Problem: Two Sum (Two-Pointer Approach)

Given a sorted array of integers and a target sum, find two numbers in the array that add up to the target. Return the indices of these two numbers.

Follow-up Questions:
- What is the time complexity of your solution?
- What is the space complexity?
*/

function twoSum(nums, target) {
  // Find two numbers in sorted array that add up to target
  // Requirements:
  // - Array is sorted in ascending order
  // - Use two-pointer technique for efficient solution
  // - Return indices as [index1, index2] where index1 < index2
  // - If no solution exists, return null
  //
  // Example:
  // Input: nums = [2, 7, 11, 15], target = 9
  // Output: [0, 1] (because nums[0] + nums[1] = 2 + 7 = 9)
  
  // Your code here
  
}`,
    solution:`/*
Problem: Two Sum (Two-Pointer Approach)

Given a sorted array of integers and a target sum, find two numbers in the array that add up to the target. Return the indices of these two numbers.

Follow-up Questions:
- What is the time complexity of your solution?
- What is the space complexity?
*/

function twoSum(nums, target) {
  // Find two numbers in sorted array that add up to target
  // Requirements:
  // - Array is sorted in ascending order
  // - Use two-pointer technique for efficient solution
  // - Return indices as [index1, index2] where index1 < index2
  // - If no solution exists, return null
  //
  // Example:
  // Input: nums = [2, 7, 11, 15], target = 9
  // Output: [0, 1] (because nums[0] + nums[1] = 2 + 7 = 9)
  
  // Initialize two pointers
  let left = 0;
  let right = nums.length - 1;
  
  // Move pointers towards each other
  while (left < right) {
    const sum = nums[left] + nums[right];
    
    if (sum === target) {
      // Found the target sum
      return [left, right];
    } else if (sum < target) {
      // Sum is too small, move left pointer right
      left++;
    } else {
      // Sum is too large, move right pointer left
      right--;
    }
  }
  
  // No solution found
  return null;
  
  // Time Complexity: O(n) - we visit each element at most once
  // Space Complexity: O(1) - only using constant extra space
}`,
    tests:[
      {
        name: "Basic functionality",
        test: (code) => {
          try {
            eval(code);
            const result1 = twoSum([2, 7, 11, 15], 9);
            const result2 = twoSum([2, 3, 4], 6);
            const result3 = twoSum([-1, 0], -1);
            
            const test1 = result1 && result1[0] === 0 && result1[1] === 1;
            const test2 = result2 && result2[0] === 0 && result2[1] === 2;
            const test3 = result3 && result3[0] === 0 && result3[1] === 1;
            
            if (test1 && test2 && test3) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Expected [0, 1] for twoSum([2, 7, 11, 15], 9), got ${JSON.stringify(result1)}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should find two numbers that sum to target."
      },
      {
        name: "No solution case",
        test: (code) => {
          try {
            eval(code);
            const result = twoSum([1, 2, 3, 4], 8);
            
            if (result === null) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Expected null for twoSum([1, 2, 3, 4], 8), got ${JSON.stringify(result)}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should return null when no solution exists."
      },
      {
        name: "Edge case: two elements",
        test: (code) => {
          try {
            eval(code);
            const result = twoSum([3, 3], 6);
            
            if (result && result[0] === 0 && result[1] === 1) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Expected [0, 1] for twoSum([3, 3], 6), got ${JSON.stringify(result)}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should handle arrays with only two elements."
      },
      {
        name: "Negative numbers",
        test: (code) => {
          try {
            eval(code);
            const result = twoSum([-3, -1, 0, 2, 4], 1);
            
            if (result && result[0] === 1 && result[1] === 3) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Expected [1, 3] for twoSum([-3, -1, 0, 2, 4], 1), got ${JSON.stringify(result)}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should handle negative numbers correctly."
      }
    ]
  }
};