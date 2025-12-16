import { TestResult } from "@nss-workshops/nss-core";

export default [
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
];