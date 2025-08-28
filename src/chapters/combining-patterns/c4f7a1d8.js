import { TestResult } from "../../utils/test_utils";

export const codeExcerciseNineChapter = {
  id: 'c4f7a1d8',
  title: 'DSA Challenge 9 - Sliding Window: max sum of size k',
  sectionId: 'combining-patterns',
  previousChapterId: null,
  content: `
# Challenge 9: Sliding Window — max sum of size k

**Navigate:** [1](9b8a8427) | [2](a4b7c9d2) | [3](e8f1a5b3) | [4](c6d9e2f4) | [5](b3a8d7c1) | [6](f9e4b2a7) | [7](d1c5f8e3) | [8](a7b2e9f6) | 9

**Why it matters:** Sliding window replaces nested loops when aggregating over contiguous spans.

**Objectives:**
- Explain when sliding window applies.
- Implement fixed-size window in O(n) and compare to O(n*k) naive.

**Time Estimate:** 20 minutes

## Problem to Solve:

**maxSumOfSizeK(nums, k)** - Return the maximum sum of any contiguous subarray of length k

## Algorithm:
1. Calculate sum of first k elements (initial window)
2. Slide the window: add next element, remove first element
3. Track maximum sum seen
4. Return maximum

## Naive vs Optimized:
- **Naive: O(n*k)** - recalculate sum for each position
- **Sliding Window: O(n)** - calculate once, then slide efficiently

## Big-O Analysis:
- **Time: O(n)** - each element added and removed once
- **Space: O(1)** - only storing window sum and max`,

  exercise: {
    starterCode: `/*
Challenge 9: Sliding Window — max sum of size k

Return the maximum sum of any contiguous subarray of length k.

Examples:
maxSumOfSizeK([2,1,5,1,3,2], 3) => 9  // [5,1,3]
maxSumOfSizeK([2,3,4,1,5], 2) => 7    // [3,4]
maxSumOfSizeK([1], 1) => 1
maxSumOfSizeK([1,2], 3) => null        // k > array length

Use sliding window technique for O(n) time complexity.
*/

function maxSumOfSizeK(nums, k){
  // Return the maximum sum of any contiguous subarray of length k
  // Your code here
}`,

    solution: `/*
Challenge 9: Sliding Window — max sum of size k
*/

function maxSumOfSizeK(nums, k){
  // Return the maximum sum of any contiguous subarray of length k
  if (k <= 0 || k > nums.length) {
    return null;
  }
  
  // Calculate sum of first window
  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += nums[i];
  }
  
  let maxSum = windowSum;
  
  // Slide the window
  for (let r = k; r < nums.length; r++) {
    // Add new element, remove old element
    windowSum += nums[r] - nums[r - k];
    
    if (windowSum > maxSum) {
      maxSum = windowSum;
    }
  }
  
  return maxSum;
}

// O(n) time, O(1) extra space.`,

    tests: [
      {
        name: "maxSumOfSizeK works correctly",
        test: (code) => {
          try {
            const func = new Function(`${code}; return maxSumOfSizeK;`)();
            
            const result1 = func([2,1,5,1,3,2], 3); // 5+1+3 = 9
            const result2 = func([2,3,4,1,5], 2);   // 3+4 = 7
            const result3 = func([1], 1);           // 1
            
            if (result1 === 9 && result2 === 7 && result3 === 1) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Results: ${result1}, ${result2}, ${result3}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should find maximum sum of size k correctly."
      },
      {
        name: "Handles edge cases",
        test: (code) => {
          try {
            const func = new Function(`${code}; return maxSumOfSizeK;`)();
            
            const result1 = func([1,2], 3);    // k > length
            const result2 = func([], 1);       // empty array
            const result3 = func([5], 0);      // k = 0
            
            if (result1 === null && result2 === null && result3 === null) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `k>length: ${result1}, empty: ${result2}, k=0: ${result3}`
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
        name: "Works with negative numbers",
        test: (code) => {
          try {
            const func = new Function(`${code}; return maxSumOfSizeK;`)();
            
            const result1 = func([-1, -2, -3, -4], 2); // max of [-1,-2], [-2,-3], [-3,-4] = -3
            const result2 = func([1, -1, 0, 2], 2);    // max of [1,-1], [-1,0], [0,2] = 2
            
            if (result1 === -3 && result2 === 2) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Negative: ${result1}, Mixed: ${result2}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should work with negative numbers."
      }
    ]
  }
};