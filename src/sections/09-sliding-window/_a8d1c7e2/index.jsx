import { TestResult } from "@nss-workshops/nss-core";

export default {
  id: 'a8d1c7e2',
  title: 'Module 8 - In Class Code Exercise One',
  sectionId: 'sliding-window',
  previousChapterId: null,
  content: `
  Hi 👋,

### Group Exercise Rules
- Be kind 💜
- Make sure everyone gets a chance to contribute
- Ask questions out loud — don’t suffer in silence
- It’s okay to be wrong, mistakes are part of the process
- Focus on learning together, not just getting the answer

## Problem (Fixed Window): Maximum Sum Subarray of Size K

Given an array of integers and a number \`k\`, find the maximum sum of any contiguous subarray of size \`k\`.

### Examples
- Input: \`arr = [2, 1, 5, 1, 3, 2], k = 3\` → Output: \`9\` (subarray \`[5, 1, 3]\`)
- Input: \`arr = [2, 3, 4, 1, 5], k = 2\` → Output: \`7\` (subarray \`[3, 4]\`)
- Input: \`arr = [1, 4, 2, 9, 5], k = 4\` → Output: \`20\` (subarray \`[4, 2, 9, 5]\`)

### Follow-up Questions
- What is the time complexity of your initial (brute-force) solution?
- What is the time complexity after refactoring to sliding window?
- What is the space complexity in both cases?`,
  exercise: {
    starterCode:`/*
Problem: Maximum Sum Subarray of Size K (Fixed Window)

Given an array of integers and a number k, find the maximum sum of any contiguous subarray of size k.

Brute-force approach (inefficient but correct): try all windows and compute their sums from scratch.
Time: O(n * k), Space: O(1)
*/

function maxSumSubarray(arr, k) {
  if (!Array.isArray(arr) || k <= 0 || k > arr.length) return 0;
  let max = -Infinity;
  for (let start = 0; start + k <= arr.length; start++) {
    let sum = 0;
    for (let i = start; i < start + k; i++) {
      sum += arr[i];
    }
    if (sum > max) max = sum;
  }
  return max === -Infinity ? 0 : max;
}`,
    solution:`/*
Refactor to Sliding Window:
- Compute sum of first k elements once
- Slide by removing leftmost and adding next rightmost
Time: O(n), Space: O(1)
*/

function maxSumSubarray(arr, k) {
  if (!Array.isArray(arr) || k <= 0 || k > arr.length) return 0;

  // sum of first window
  let windowSum = 0;
  for (let i = 0; i < k; i++) windowSum += arr[i];

  let maxSum = windowSum;

  // slide the window
  for (let right = k; right < arr.length; right++) {
    windowSum += arr[right] - arr[right - k];
    if (windowSum > maxSum) maxSum = windowSum;
  }

  return maxSum;
}`,
    tests:[
      {
        name: "Basic fixed-window cases",
        test: (code) => {
          try {
            const maxSumSubarray = new Function(`${code}; return maxSumSubarray;`)();
            const t1 = maxSumSubarray([2, 1, 5, 1, 3, 2], 3) === 9;
            const t2 = maxSumSubarray([2, 3, 4, 1, 5], 2) === 7;
            const t3 = maxSumSubarray([1, 4, 2, 9, 5], 4) === 20;
            return (t1 && t2 && t3)
              ? new TestResult({ passed: true })
              : new TestResult({ passed: false, message: "Basic cases failed." });
          } catch (e) {
            return new TestResult({ passed: false, message: `Error: ${e.message}` });
          }
        },
        message: "Function should find maximum sum subarray of size k."
      },
      {
        name: "Negative numbers allowed",
        test: (code) => {
          try {
            const maxSumSubarray = new Function(`${code}; return maxSumSubarray;`)();
            const t1 = maxSumSubarray([-1, -2, -3, -4], 2) === -3; // [-1,-2]
            const t2 = maxSumSubarray([1, -2, 3, -4, 5], 2) === 1; // [-4,5]
            const t3 = maxSumSubarray([-5, -1, -3, -2], 3) === -6; // [-1,-3,-2]
            return (t1 && t2 && t3)
              ? new TestResult({ passed: true })
              : new TestResult({ passed: false, message: "Negative number cases failed." });
          } catch (e) {
            return new TestResult({ passed: false, message: `Error: ${e.message}` });
          }
        },
        message: "Function should handle arrays with negative numbers."
      },
      {
        name: "Edge cases",
        test: (code) => {
          try {
            const maxSumSubarray = new Function(`${code}; return maxSumSubarray;`)();
            const t1 = maxSumSubarray([5], 1) === 5;
            const t2 = maxSumSubarray([1, 2, 3], 3) === 6;
            const t3 = maxSumSubarray([], 1) === 0;
            const t4 = maxSumSubarray([1, 2, 3], 0) === 0;
            const t5 = maxSumSubarray([1, 2], 3) === 0;
            return (t1 && t2 && t3 && t4 && t5)
              ? new TestResult({ passed: true })
              : new TestResult({ passed: false, message: "Edge cases failed." });
          } catch (e) {
            return new TestResult({ passed: false, message: `Error: ${e.message}` });
          }
        },
        message: "Function should handle edge cases correctly."
      },
      {
        name: "Larger array sanity",
        test: (code) => {
          try {
            const maxSumSubarray = new Function(`${code}; return maxSumSubarray;`)();
            const largeArr = [1,2,3,4,5,6,7,8,9,10];
            const got = maxSumSubarray(largeArr, 3);
            return (got === 27)
              ? new TestResult({ passed: true })
              : new TestResult({ passed: false, message: `Expected 27, got ${got}` });
          } catch (e) {
            return new TestResult({ passed: false, message: `Error: ${e.message}` });
          }
        },
        message: "Function should work efficiently with larger arrays."
      }
    ]
  }
};

