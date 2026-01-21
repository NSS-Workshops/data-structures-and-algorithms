import { TestResult } from "@nss-workshops/nss-core";

export default [
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
];