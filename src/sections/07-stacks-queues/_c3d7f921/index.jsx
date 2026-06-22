import { TestResult } from "@nss-workshops/nss-core";

export default {
  id: 'c3d7f921',
  title: 'Module 7 - Group Exercise 1 of 3',
  sectionId: 'stacks-queues',
  previousChapterId: null,
  content: `
**Navigate:** 1 | [2](d4e8a032) | [3](e5f9b143)

Hi team — today you'll work through three exercises that build on each other. The first asks you to **use** a stack; the second asks you to **build** one; the third asks you to **build** a queue.

## 🗣️ For each exercise, do the following as a group:
- Read the problem and talk through your approach **before** coding
- Each person implements their own solution independently
- After everyone finishes, compare — did you all arrive at the same approach?
- State the time and space complexity (Big-O) of each operation in your solution
- Discuss: are there other ways to implement this? What tradeoffs do they have?
- Be ready to walk the class through your solution and reasoning

Work through the problems in order — they get harder. Move on when your group is ready.

---

## Exercise 1 of 3 — Use a Stack: Reverse an Array
`,
  exercises: [
    {
      starterCode: `/*
Exercise 1 — Reverse an Array Using a Stack

Given an array of values, return a new array with the elements
in reversed order. You must use a stack (push / pop on a plain
JS array) to accomplish the reversal — do not use .reverse().

Examples:
  reverseArray([1, 2, 3, 4, 5]) → [5, 4, 3, 2, 1]
  reverseArray([])               → []
  reverseArray([42])             → [42]

Discussion questions:
- Why does a stack naturally reverse a sequence?
- What is the time complexity of your solution?
- What is the space complexity?
- How does using a stack compare to calling .reverse() directly?
*/

function reverseArray(arr) {
  // Your code here
}`,
      solution: `/*
Exercise 1 — Reverse an Array Using a Stack
*/

function reverseArray(arr) {
  const stack = [];

  for (const item of arr) {
    stack.push(item);         // O(1) amortized
  }

  const result = [];
  while (stack.length > 0) {
    result.push(stack.pop()); // O(1) amortized — LIFO gives us reversal for free
  }

  return result;

  // Time Complexity:  O(n) — one pass to push, one pass to pop
  // Space Complexity: O(n) — the stack holds all n elements
}`,
      tests: [
        {
          name: "Reverses a basic array",
          test: (code) => {
            try {
              const reverseArray = new Function(`${code}; return reverseArray;`)();
              const result = reverseArray([1, 2, 3, 4, 5]);
              const expected = [5, 4, 3, 2, 1];
              if (JSON.stringify(result) === JSON.stringify(expected)) {
                return new TestResult({ passed: true });
              }
              return new TestResult({
                passed: false,
                message: `Expected ${JSON.stringify(expected)}, got ${JSON.stringify(result)}`
              });
            } catch (error) {
              return new TestResult({ passed: false, message: `Error: ${error.message}` });
            }
          },
          message: "reverseArray([1,2,3,4,5]) should return [5,4,3,2,1]."
        },
        {
          name: "Handles an empty array",
          test: (code) => {
            try {
              const reverseArray = new Function(`${code}; return reverseArray;`)();
              const result = reverseArray([]);
              if (JSON.stringify(result) === JSON.stringify([])) {
                return new TestResult({ passed: true });
              }
              return new TestResult({
                passed: false,
                message: `Expected [], got ${JSON.stringify(result)}`
              });
            } catch (error) {
              return new TestResult({ passed: false, message: `Error: ${error.message}` });
            }
          },
          message: "reverseArray([]) should return []."
        },
        {
          name: "Handles a single-element array",
          test: (code) => {
            try {
              const reverseArray = new Function(`${code}; return reverseArray;`)();
              const result = reverseArray([42]);
              if (JSON.stringify(result) === JSON.stringify([42])) {
                return new TestResult({ passed: true });
              }
              return new TestResult({
                passed: false,
                message: `Expected [42], got ${JSON.stringify(result)}`
              });
            } catch (error) {
              return new TestResult({ passed: false, message: `Error: ${error.message}` });
            }
          },
          message: "reverseArray([42]) should return [42]."
        }
      ]
    }
  ]
};
