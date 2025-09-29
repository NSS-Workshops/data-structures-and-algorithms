import { TestResult } from "@nss-workshops/nss-core";

export const codeExcerciseFourChapter = {
  id: 'c6d9e2f4',
  title: 'DSA Challenge 4 - Two Pointers: pair sum in sorted array',
  sectionId: 'combining-patterns',
  previousChapterId: null,
  content: `
# Challenge 4: Two Pointers — pair sum in sorted array

**Navigate:** [1](9b8a8427) | [2](a4b7c9d2) | [3](e8f1a5b3) | 4 | [5](b3a8d7c1) | [6](f9e4b2a7) | [7](d1c5f8e3) | [8](a7b2e9f6) | [9](c4f7a1d8)

## 👥 Pair Programming Instructions

**Work in pairs for this challenge!** One person should be the **Driver** (writing code) and the other the **Navigator** (reviewing and guiding). **Switch roles for each function** you implement.

<iframe width="560" height="315" src="https://www.youtube.com/embed/jqGmL6Hf23k?si=qXmQcnQigfo1adTb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

**Why it matters:** Two pointers converts nested loops to linear time when data is ordered.

**Objectives:**
- Explain when to use two pointers.
- Solve pair sum in O(n) vs naive O(n²).

**Time Estimate:** 20 minutes

## Problem to Solve:

**hasPairWithSum(sortedNums, target)** - Given a sorted array and target, return true if any pair sums to target
   - Example: \`hasPairWithSum([1, 2, 4, 4], 8)\` → \`true\` (4 + 4 = 8)
   - Example: \`hasPairWithSum([1, 2, 3, 9], 8)\` → \`false\` (no pair sums to 8)
   - Example: \`hasPairWithSum([1, 2], 3)\` → \`true\` (1 + 2 = 3)
   - Example: \`hasPairWithSum([5], 5)\` → \`false\` (single element, no pair)

## Algorithm:
1. Use two pointers: left at start, right at end
2. If sum equals target, return true
3. If sum < target, move left pointer right
4. If sum > target, move right pointer left
5. Continue until pointers meet

## Big-O Analysis:
- **Time: O(n)** vs naive O(n²)
- **Space: O(1)** - only using two pointers`,

  exercise: {
    starterCode: `/*
Challenge 4: Two Pointers — pair sum in sorted array

Given a sorted array and target, return true if any pair sums to target.

Use two pointers technique:
- Start with left=0, right=length-1
- If sum equals target, return true
- If sum < target, move left pointer right
- If sum > target, move right pointer left
*/

function hasPairWithSum(sortedNums, target) {
  // two pointers: left, right
  // Your code here
}`,

    solution: `/*
Challenge 4: Two Pointers — pair sum in sorted array
*/

function hasPairWithSum(sortedNums, target) {
  // two pointers: left, right
  let l = 0;
  let r = sortedNums.length - 1;
  
  while (l < r) {
    const sum = sortedNums[l] + sortedNums[r];
    
    if (sum === target) {
      return true;
    }
    
    if (sum < target) {
      l++; // Need larger sum, move left pointer right
    } else {
      r--; // Need smaller sum, move right pointer left
    }
  }
  
  return false;
}

// Time: O(n) vs naive O(n²)
// Space: O(1) - only using two pointers`,

    tests: [
      {
        name: "Finds pair that sums to target",
        test: (code) => {
          try {
            const func = new Function(`${code}; \n return hasPairWithSum;`)();
            const result = func([1, 2, 4, 4], 8);
            
            if (result === true) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Expected true, got ${result}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should find pair that sums to target."
      },
      {
        name: "Returns false when no pair exists",
        test: (code) => {
          try {
            const func = new Function(`${code}; \n return hasPairWithSum;`)();
            const result = func([1, 2, 3, 9], 8);
            
            if (result === false) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Expected false, got ${result}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should return false when no pair sums to target."
      },
      {
        name: "Handles edge cases",
        test: (code) => {
          try {
            const func = new Function(`${code}; \n return hasPairWithSum;`)();
            
            const result1 = func([], 5); // Empty array
            const result2 = func([5], 5); // Single element
            const result3 = func([1, 2], 3); // Two elements that sum to target
            
            if (result1 === false && result2 === false && result3 === true) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Empty: ${result1}, Single: ${result2}, Two elements: ${result3}`
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
      }
    ]
  }
};