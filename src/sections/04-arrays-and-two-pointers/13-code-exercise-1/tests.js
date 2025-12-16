import { TestResult } from "@nss-workshops/nss-core";

export const tests = [
  {
    name: "Removes elements correctly (basic test)",
    test: (code) => {
      try {
        const removeElement = new Function(`${code}; return removeElement;`)();

        // Test 1: [3, 2, 2, 3] remove 3
        const arr1 = [3, 2, 2, 3];
        const result1 = removeElement(arr1, 3);
        const expected1 = [2, 2];

        // Test 2: [0, 1, 2, 2, 3, 0, 4, 2] remove 2
        const arr2 = [0, 1, 2, 2, 3, 0, 4, 2];
        const result2 = removeElement(arr2, 2);
        const expected2 = [0, 0, 1, 3, 4];

        // Check that the returned length matches expected
        const lengthTest1 = result1 === expected1.length;
        const lengthTest2 = result2 === expected2.length;

        // Check that the array has been properly truncated to the returned length
        const arrayLengthTest1 = arr1.length === result1;
        const arrayLengthTest2 = arr2.length === result2;

        // Check that the remaining elements are correct (since array is truncated, we can sort the whole array)
        const output1 = [...arr1].sort();
        const output2 = [...arr2].sort();
        const contentTest1 = JSON.stringify(output1) === JSON.stringify(expected1);
        const contentTest2 = JSON.stringify(output2) === JSON.stringify(expected2);

        if (lengthTest1 && lengthTest2 && contentTest1 && contentTest2 && arrayLengthTest1 && arrayLengthTest2) {
          return new TestResult({ passed: true });
        } else {
          let failureDetails = [];
          if (!lengthTest1) failureDetails.push(`Test 1 length: expected ${expected1.length}, got ${result1}`);
          if (!lengthTest2) failureDetails.push(`Test 2 length: expected ${expected2.length}, got ${result2}`);
          if (!arrayLengthTest1) failureDetails.push(`Test 1 array length: expected ${result1}, got ${arr1.length} (array not properly truncated)`);
          if (!arrayLengthTest2) failureDetails.push(`Test 2 array length: expected ${result2}, got ${arr2.length} (array not properly truncated)`);
          if (!contentTest1) failureDetails.push(`Test 1 content: expected ${JSON.stringify(expected1)}, got ${JSON.stringify(output1)}`);
          if (!contentTest2) failureDetails.push(`Test 2 content: expected ${JSON.stringify(expected2)}, got ${JSON.stringify(output2)}`);
          
          return new TestResult({
            passed: false,
            message: `Failed: ${failureDetails.join('; ')}`
          });
        }
      } catch (error) {
        return new TestResult({
          passed: false,
          message: `Error: ${error.message}`
        });
      }
    },
    message: "Function should remove all instances of val, return correct length, and properly modify the array length."
  },
  {
    name: "Handles empty array",
    test: (code) => {
      try {
        const removeElement = new Function(`${code}; return removeElement;`)();
        const arr = [];
        const result = removeElement(arr, 1);
        if (result === 0 && arr.length === 0) {
          return new TestResult({ passed: true });
        } else {
          return new TestResult({
            passed: false,
            message: `Expected length 0, got ${result}`
          });
        }
      } catch (error) {
        return new TestResult({
          passed: false,
          message: `Error: ${error.message}`
        });
      }
    },
    message: "Function should handle empty arrays correctly."
  },
  {
    name: "Handles array with no target value",
    test: (code) => {
      try {
        const removeElement = new Function(`${code}; return removeElement;`)();
        const arr = [1, 2, 3];
        const result = removeElement(arr, 4);
        const output = arr.slice(0, result).sort();
        const expected = [1, 2, 3];
        if (result === 3 && JSON.stringify(output) === JSON.stringify(expected)) {
          return new TestResult({ passed: true });
        } else {
          return new TestResult({
            passed: false,
            message: `Expected [1, 2, 3], got ${JSON.stringify(output)}`
          });
        }
      } catch (error) {
        return new TestResult({
          passed: false,
          message: `Error: ${error.message}`
        });
      }
    },
    message: "Function should not modify array if val is not found."
  }
];