import { TestResult } from "@nss-workshops/nss-core";

export default {
  id: 'd796e8a8',
  title: 'DSA Challenge 1 - Arrays: iterate, add, remove',
  sectionId: 'combining-patterns',
  previousChapterId: null,
  content: `

**Navigate:** 1 | [2](a4b7c9d2) | [3](e8f1a5b3) | [4](c6d9e2f4) | [5](b3a8d7c1) | [6](f9e4b2a7) | [7](d1c5f8e3) | [8](a7b2e9f6) | [9](c4f7a1d8)

**Why it matters:** Arrays are the workhorse. Mastering iteration and index-based edits builds intuition for time complexity.

**Objectives:**
- Implement code to iterate over an array and perform an operation.
- Implement code to add/remove by index.
- Explain why insert/remove by index is **O(n)** and \`.push/.pop\` are **O(1)** while \`.shift/.unshift\` are **O(n)\`.

**Time Estimate:** 20 minutes

## Problems to Solve:

1. **sumOfSquares(nums)** - Return the sum of x² for each x in nums (no Array.prototype.map)
2. **insertAt(arr, index, value)** - Return NEW array with value inserted at index
3. **removeAt(arr, index)** - Return NEW array without the element at index

## Big-O Analysis:
- **insertAt/removeAt are O(n)**: They require shifting elements to maintain array structure
- **push/pop are O(1)**: They operate at the end, no shifting needed  
- **shift/unshift are O(n)**: They operate at the beginning, requiring all elements to shift`,

  exercises: [{
    starterCode: `/*
Challenge 1: Arrays — iterate, add, remove

Implement the following functions:

1. sumOfSquares(nums) - return the sum of x^2 for each x in nums (no Array.prototype.map)
2. insertAt(arr, index, value) - returns NEW array with value inserted at index
3. removeAt(arr, index) - returns NEW array without the element at index

Time Complexity Questions:
- Why are insertAt/removeAt O(n)?
- Why are push/pop O(1) but shift/unshift O(n)?
*/

function sumOfSquares(nums) {
  // return the sum of x^2 for each x in nums (no Array.prototype.map)
  // Your code here
}

function insertAt(arr, index, value) {
  // returns NEW array with value inserted at index
  // Your code here
}

function removeAt(arr, index) {
  // returns NEW array without the element at index
  // Your code here
}`,

    solution: `/*
Challenge 1: Arrays — iterate, add, remove
*/

function sumOfSquares(nums) {
  // return the sum of x^2 for each x in nums (no Array.prototype.map)
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i] * nums[i];
  }
  return sum;
}

function insertAt(arr, index, value) {
  // returns NEW array with value inserted at index
  return [...arr.slice(0, index), value, ...arr.slice(index)];
}

function removeAt(arr, index) {
  // returns NEW array without the element at index
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

// Big-O Analysis:
// - insertAt/removeAt are O(n): They require shifting elements to maintain array structure
// - push/pop are O(1): They operate at the end, no shifting needed
// - shift/unshift are O(n): They operate at the beginning, requiring all elements to shift`,

    tests: [
      {
        name: "sumOfSquares calculates correctly",
        test: (code) => {
          try {
            const func = new Function(`${code}; return { sumOfSquares, insertAt, removeAt };`)();
            const result = func.sumOfSquares([1, 2, 3]);
            if (result === 14) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Expected 14, got ${result}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should calculate sum of squares correctly."
      },
      {
        name: "insertAt works correctly",
        test: (code) => {
          try {
            const func = new Function(`${code}; return { sumOfSquares, insertAt, removeAt };`)();
            const result1 = func.insertAt([10, 20, 30], 1, 99);
            const result2 = func.insertAt([], 0, 'a');
            
            const test1 = JSON.stringify(result1) === JSON.stringify([10, 99, 20, 30]);
            const test2 = JSON.stringify(result2) === JSON.stringify(['a']);
            
            if (test1 && test2) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Test 1: ${JSON.stringify(result1)}, Test 2: ${JSON.stringify(result2)}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should insert elements at correct positions."
      },
      {
        name: "removeAt works correctly",
        test: (code) => {
          try {
            const func = new Function(`${code}; return { sumOfSquares, insertAt, removeAt };`)();
            const result = func.removeAt([10, 20, 30], 1);
            
            if (JSON.stringify(result) === JSON.stringify([10, 30])) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Expected [10, 30], got ${JSON.stringify(result)}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should remove elements at correct positions."
      }
    ]
  }]
};