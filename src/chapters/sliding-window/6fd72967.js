import { TestResult } from "../../utils/test_utils";

export const codeExcerciseOneChapter = {
  id: '6fd72967',
  title: 'Sliding Window - Fixed Size Window Practice',
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

## Problem: Maximum Sum Subarray of Size K (Financial Trading)

Given an array of daily trading profits and a number k, find the maximum sum of any contiguous k-day period.

Use the sliding window technique to solve this efficiently for portfolio analysis.

### Follow-up Questions:
- What is the time complexity of your solution?
- What is the space complexity?
- How does this compare to the brute force approach?`,
  exercise: {
    starterCode:`/*
Problem: Maximum Sum Subarray of Size K

Given an array of integers and a number k, find the maximum sum of any contiguous subarray of size k.

Use the sliding window technique to solve this efficiently.

Examples:
Input: arr = [2, 1, 5, 1, 3, 2], k = 3
Output: 9 (subarray [5, 1, 3])

Input: arr = [2, 3, 4, 1, 5], k = 2  
Output: 7 (subarray [3, 4])

Input: arr = [1, 4, 2, 9, 5], k = 4
Output: 20 (subarray [4, 2, 9, 5])

Follow-up Questions:
- What is the time complexity of your solution?
- What is the space complexity?
- How does this compare to the brute force approach?
*/

function maxSumSubarray(arr, k) {
  // Approach: Use sliding window technique
  // 1. Calculate sum of first k elements
  // 2. Slide window: remove leftmost element, add rightmost element
  // 3. Keep track of maximum sum seen so far
  
  // Your code here
}`,
    solution:`/*
Problem: Maximum Sum Subarray of Size K

Given an array of integers and a number k, find the maximum sum of any contiguous subarray of size k.
*/

function maxSumSubarray(arr, k) {
  // Handle edge cases
  if (!arr || arr.length === 0 || k <= 0 || k > arr.length) {
    return 0;
  }
  
  // Calculate sum of first window
  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  
  // Initialize max sum with first window sum
  let maxSum = windowSum;
  
  // Slide the window from left to right
  for (let i = k; i < arr.length; i++) {
    // Remove the leftmost element of previous window
    // Add the rightmost element of current window
    windowSum = windowSum - arr[i - k] + arr[i];
    
    // Update maximum sum if current window sum is larger
    maxSum = Math.max(maxSum, windowSum);
  }
  
  return maxSum;
  
  // Time Complexity: O(n) - we visit each element at most twice
  // Space Complexity: O(1) - only using constant extra space
  
  // Brute force would be O(n*k) - for each position, calculate sum of k elements
  // Sliding window optimizes this to O(n) by reusing previous calculations
}`,
    tests:[
      {
        name: "Basic sliding window cases",
        test: (code) => {
          try {
            const maxSumSubarray = new Function(`${code}; return maxSumSubarray;`)();
            
            const test1 = maxSumSubarray([2, 1, 5, 1, 3, 2], 3) === 9; // [5, 1, 3]
            const test2 = maxSumSubarray([2, 3, 4, 1, 5], 2) === 7; // [3, 4]
            const test3 = maxSumSubarray([1, 4, 2, 9, 5], 4) === 20; // [4, 2, 9, 5]
            
            if (test1 && test2 && test3) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Basic cases failed. Test1: ${maxSumSubarray([2, 1, 5, 1, 3, 2], 3)}, Test2: ${maxSumSubarray([2, 3, 4, 1, 5], 2)}, Test3: ${maxSumSubarray([1, 4, 2, 9, 5], 4)}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should find maximum sum subarray of size k."
      },
      {
        name: "Handle negative numbers",
        test: (code) => {
          try {
            const maxSumSubarray = new Function(`${code}; return maxSumSubarray;`)();
            
            const test1 = maxSumSubarray([-1, -2, -3, -4], 2) === -3; // [-1, -2]
            const test2 = maxSumSubarray([1, -2, 3, -4, 5], 2) === 1; // [-4, 5] = 1
            const test3 = maxSumSubarray([-5, -1, -3, -2], 3) === -6; // [-1, -3, -2]
            
            if (test1 && test2 && test3) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Negative number cases failed. Test1: ${maxSumSubarray([-1, -2, -3, -4], 2)}, Test2: ${maxSumSubarray([1, -2, 3, -4, 5], 2)}, Test3: ${maxSumSubarray([-5, -1, -3, -2], 3)}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should handle arrays with negative numbers."
      },
      {
        name: "Handle edge cases",
        test: (code) => {
          try {
            const maxSumSubarray = new Function(`${code}; return maxSumSubarray;`)();
            
            const test1 = maxSumSubarray([5], 1) === 5; // Single element
            const test2 = maxSumSubarray([1, 2, 3], 3) === 6; // k equals array length
            const test3 = maxSumSubarray([], 1) === 0; // Empty array
            const test4 = maxSumSubarray([1, 2, 3], 0) === 0; // k = 0
            const test5 = maxSumSubarray([1, 2], 3) === 0; // k > array length
            
            if (test1 && test2 && test3 && test4 && test5) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Edge cases failed. Single: ${maxSumSubarray([5], 1)}, Full: ${maxSumSubarray([1, 2, 3], 3)}, Empty: ${maxSumSubarray([], 1)}, k=0: ${maxSumSubarray([1, 2, 3], 0)}, k>len: ${maxSumSubarray([1, 2], 3)}`
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
        name: "Verify sliding window optimization",
        test: (code) => {
          try {
            const maxSumSubarray = new Function(`${code}; return maxSumSubarray;`)();
            
            // Test with larger array to ensure efficiency
            const largeArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            const result = maxSumSubarray(largeArr, 3);
            const expected = 27; // [8, 9, 10]
            
            if (result === expected) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Large array test failed. Expected ${expected}, got ${result}`
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
  }
};