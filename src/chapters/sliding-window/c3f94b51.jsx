import { TestResult } from "@nss-workshops/nss-core";

export const codeExerciseVariableWindow = {
  id: 'c3f94b51',
  title: 'Module 8 - In Class Code Exercise Two',
  sectionId: 'sliding-window',
  previousChapterId: null,
  content: `
  Hi 👋,

### Group Exercise Rules
- Be kind 💜
- Everyone should get hands on the keyboard at some point
- Take turns suggesting ideas before coding
- Celebrate small wins and progress
- Remember: efficiency comes after correctness

## Problem (Variable Window): Smallest Subarray With Sum ≥ Target

Given an array of **positive integers** \`arr\` and a \`target\`, find the **length** of the smallest contiguous subarray whose sum is **greater than or equal** to \`target\`. If no such subarray exists, return \`0\`.

### Examples
- Input: \`arr = [2, 1, 5, 2, 3, 2], target = 7\` → Output: \`2\` (e.g., \`[5,2]\`)
- Input: \`arr = [2, 1, 5, 2, 8], target = 7\` → Output: \`1\` (\`[8]\`)
- Input: \`arr = [1, 1, 1, 1], target = 5\` → Output: \`0\`

### Follow-up Questions
- Why does sliding window work particularly well when all numbers are non-negative?
- What would change if negatives were allowed?`,
  exercise: {
    starterCode:`/*
Problem: Smallest Subarray With Sum >= Target (Variable Window)

Brute-force (inefficient but correct for positives):
- Try every start index, extend to every end index, compute sum each time.
Time: O(n^2), Space: O(1)
*/

function minSubarrayLenAtLeastTarget(target, arr) {
  if (!Array.isArray(arr) || target <= 0) return 0;

  let best = Infinity;

  for (let start = 0; start < arr.length; start++) {
    let sum = 0;
    for (let end = start; end < arr.length; end++) {
      sum += arr[end];
      if (sum >= target) {
        const len = end - start + 1;
        if (len < best) best = len;
        break; // no need to extend further from this start
      }
    }
  }

  return best === Infinity ? 0 : best;
}`,
    solution:`/*
Refactor to Sliding Window:
Expand right until sum >= target, then shrink left while valid.
Time: O(n), Space: O(1)
*/

function minSubarrayLenAtLeastTarget(target, arr) {
  if (!Array.isArray(arr) || target <= 0) return 0;

  let left = 0;
  let sum = 0;
  let best = Infinity;

  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];
    while (sum >= target) {
      best = Math.min(best, right - left + 1);
      sum -= arr[left];
      left++;
    }
  }

  return best === Infinity ? 0 : best;
}`,
    tests:[
      {
        name: "Basic variable-window cases",
        test: (code) => {
          try {
            const minSubarrayLenAtLeastTarget = new Function(`${code}; return minSubarrayLenAtLeastTarget;`)();
            const t1 = minSubarrayLenAtLeastTarget(7, [2,1,5,2,3,2]) === 2; // [5,2]
            const t2 = minSubarrayLenAtLeastTarget(7, [2,1,5,2,8]) === 1;   // [8]
            // For [3,4,1,1,6] with target=11: [4,1,1,6] has sum=12 and length=4
            const t3 = minSubarrayLenAtLeastTarget(11, [3,4,1,1,6]) === 4; // [4,1,1,6] length 4
            return (t1 && t2 && t3)
              ? new TestResult({ passed: true })
              : new TestResult({ passed: false, message: "Basic cases failed." });
          } catch (e) {
            return new TestResult({ passed: false, message: `Error: ${e.message}` });
          }
        },
        message: "Function should find the smallest subarray length with sum >= target."
      },
      {
        name: "No possible subarray",
        test: (code) => {
          try {
            const fn = new Function(`${code}; return minSubarrayLenAtLeastTarget;`)();
            const t1 = fn(5, [1,1,1,1]) === 0;
            const t2 = fn(100, [10,20,30]) === 0;
            return (t1 && t2)
              ? new TestResult({ passed: true })
              : new TestResult({ passed: false, message: "No-solution cases failed." });
          } catch (e) {
            return new TestResult({ passed: false, message: `Error: ${e.message}` });
          }
        },
        message: "Should return 0 when no subarray reaches the target."
      },
      {
        name: "Edge & single-element hits",
        test: (code) => {
          try {
            const fn = new Function(`${code}; return minSubarrayLenAtLeastTarget;`)();
            const t1 = fn(3, [3]) === 1;
            const t2 = fn(3, []) === 0;
            const t3 = fn(1, [0,0,0,1]) === 1;
            const t4 = fn(7, [7,1,2]) === 1; // single element equals target
            return (t1 && t2 && t3 && t4)
              ? new TestResult({ passed: true })
              : new TestResult({ passed: false, message: "Edge cases failed." });
          } catch (e) {
            return new TestResult({ passed: false, message: `Error: ${e.message}` });
          }
        },
        message: "Handles empty arrays, single hits, and zeros."
      },
      {
        name: "Larger array sanity",
        test: (code) => {
          try {
            const fn = new Function(`${code}; return minSubarrayLenAtLeastTarget;`)();
            // Let's construct a deterministic case:
            const arr = [1,2,3,4,0,0,0,5,5,1]; // minimal for target=10 is 2 ([5,5])
            const got = fn(10, arr);
            return (got === 2)
              ? new TestResult({ passed: true })
              : new TestResult({ passed: false, message: `Expected 2, got ${got}` });
          } catch (e) {
            return new TestResult({ passed: false, message: `Error: ${e.message}` });
          }
        },
        message: "Works efficiently on larger arrays."
      }
    ]
  }
};
