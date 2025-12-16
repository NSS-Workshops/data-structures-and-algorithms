import { TestResult } from "@nss-workshops/nss-core";

export default [
  {
    name: "Find first occurrence with duplicates",
    test: (code) => {
      try {
        const searchFirst = new Function(`${code}; return searchFirst;`)();
        
        const nums1 = [5, 7, 7, 8, 8, 10];
        const test1 = searchFirst(nums1, 8) === 3;
        const test2 = searchFirst(nums1, 7) === 1;
        const test3 = searchFirst(nums1, 5) === 0;
        const test4 = searchFirst(nums1, 10) === 5;
        
        if (test1 && test2 && test3 && test4) {
          return new TestResult({ passed: true });
        } else {
          return new TestResult({
            passed: false,
            message: `Failed to find first occurrences. 8: ${searchFirst(nums1, 8)}, 7: ${searchFirst(nums1, 7)}, 5: ${searchFirst(nums1, 5)}, 10: ${searchFirst(nums1, 10)}`
          });
        }
      } catch (error) {
        return new TestResult({
          passed: false,
          message: `Error: ${error.message}`
        });
      }
    },
    message: "Function should find first occurrence of targets with duplicates."
  },
  {
    name: "Handle non-existing targets",
    test: (code) => {
      try {
        const searchFirst = new Function(`${code}; return searchFirst;`)();
        
        const nums = [5, 7, 7, 8, 8, 10];
        const test1 = searchFirst(nums, 6) === -1;
        const test2 = searchFirst(nums, 4) === -1;
        const test3 = searchFirst(nums, 11) === -1;
        const test4 = searchFirst(nums, 9) === -1;
        
        if (test1 && test2 && test3 && test4) {
          return new TestResult({ passed: true });
        } else {
          return new TestResult({
            passed: false,
            message: `Failed to handle non-existing targets. 6: ${searchFirst(nums, 6)}, 4: ${searchFirst(nums, 4)}, 11: ${searchFirst(nums, 11)}, 9: ${searchFirst(nums, 9)}`
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
        const searchFirst = new Function(`${code}; return searchFirst;`)();
        
        const test1 = searchFirst([], 1) === -1; // Empty array
        const test2 = searchFirst([1], 1) === 0; // Single element found
        const test3 = searchFirst([1], 2) === -1; // Single element not found
        const test4 = searchFirst([1, 1], 1) === 0; // Two identical elements
        const test5 = searchFirst([1, 2], 2) === 1; // Two different elements
        
        if (test1 && test2 && test3 && test4 && test5) {
          return new TestResult({ passed: true });
        } else {
          return new TestResult({
            passed: false,
            message: `Edge cases failed. Empty: ${searchFirst([], 1)}, Single found: ${searchFirst([1], 1)}, Single not found: ${searchFirst([1], 2)}, Two identical: ${searchFirst([1, 1], 1)}, Two different: ${searchFirst([1, 2], 2)}`
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
    name: "Handle arrays with all same elements",
    test: (code) => {
      try {
        const searchFirst = new Function(`${code}; return searchFirst;`)();
        
        const test1 = searchFirst([1, 1, 1, 1, 1], 1) === 0;
        const test2 = searchFirst([5, 5, 5], 5) === 0;
        const test3 = searchFirst([2, 2, 2, 2], 2) === 0;
        const test4 = searchFirst([1, 1, 1, 1, 1], 2) === -1;
        
        if (test1 && test2 && test3 && test4) {
          return new TestResult({ passed: true });
        } else {
          return new TestResult({
            passed: false,
            message: `Same elements cases failed. All 1s: ${searchFirst([1, 1, 1, 1, 1], 1)}, All 5s: ${searchFirst([5, 5, 5], 5)}, All 2s: ${searchFirst([2, 2, 2, 2], 2)}, Not found: ${searchFirst([1, 1, 1, 1, 1], 2)}`
          });
        }
      } catch (error) {
        return new TestResult({
          passed: false,
          message: `Error: ${error.message}`
        });
      }
    },
    message: "Function should handle arrays with all same elements correctly."
  },
  {
    name: "Work with larger arrays with duplicates",
    test: (code) => {
      try {
        const searchFirst = new Function(`${code}; return searchFirst;`)();
        
        // Create larger array with duplicates: [1,1,1,2,2,2,3,3,3,...]
        const largeArray = [];
        for (let i = 1; i <= 100; i++) {
          largeArray.push(i, i, i); // Each number appears 3 times
        }
        
        const test1 = searchFirst(largeArray, 50) === 147; // 50 first appears at index 147 (49*3)
        const test2 = searchFirst(largeArray, 1) === 0; // First element
        const test3 = searchFirst(largeArray, 100) === 297; // Last unique number first appears at 297
        const test4 = searchFirst(largeArray, 101) === -1; // Not in array
        
        if (test1 && test2 && test3 && test4) {
          return new TestResult({ passed: true });
        } else {
          return new TestResult({
            passed: false,
            message: `Large array test failed. 50: ${searchFirst(largeArray, 50)}, 1: ${searchFirst(largeArray, 1)}, 100: ${searchFirst(largeArray, 100)}, 101: ${searchFirst(largeArray, 101)}`
          });
        }
      } catch (error) {
        return new TestResult({
          passed: false,
          message: `Error: ${error.message}`
        });
      }
    },
    message: "Function should work efficiently with larger arrays containing duplicates."
  }
];