import { TestResult } from "@nss-workshops/nss-core";

export const tests = [
  {
    name: "Basic functionality",
    test: (code) => {
      try {
        const removeDuplicates = new Function(`${code}; return removeDuplicates;`)();
        const nums1 = [1, 1, 2];
        const length1 = removeDuplicates(nums1);
        const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
        const length2 = removeDuplicates(nums2);

        // Check returned length and content
        const lengthTest1 = length1 === 2;
        const lengthTest2 = length2 === 5;
        const contentTest1 = nums1[0] === 1 && nums1[1] === 2;
        const contentTest2 = nums2[0] === 0 && nums2[1] === 1 && nums2[2] === 2 && nums2[3] === 3 && nums2[4] === 4;
        
        // Check that the array has been properly truncated to the returned length
        const arrayLengthTest1 = nums1.length === length1;
        const arrayLengthTest2 = nums2.length === length2;

        if (lengthTest1 && lengthTest2 && contentTest1 && contentTest2 && arrayLengthTest1 && arrayLengthTest2) {
          return new TestResult({ passed: true });
        } else {
          let failureDetails = [];
          if (!lengthTest1) failureDetails.push(`Test 1 length: expected 2, got ${length1}`);
          if (!lengthTest2) failureDetails.push(`Test 2 length: expected 5, got ${length2}`);
          if (!arrayLengthTest1) failureDetails.push(`Test 1 array length: expected ${length1}, got ${nums1.length} (array not properly truncated)`);
          if (!arrayLengthTest2) failureDetails.push(`Test 2 array length: expected ${length2}, got ${nums2.length} (array not properly truncated)`);
          if (!contentTest1) failureDetails.push(`Test 1 content: expected [1,2], got [${nums1[0]},${nums1[1]}]`);
          if (!contentTest2) failureDetails.push(`Test 2 content: expected [0,1,2,3,4], got [${nums2.slice(0,5).join(',')}]`);
          
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
    message: "Function should remove duplicates, return correct length, and properly truncate the array."
  },
  {
    name: "Edge case: empty array",
    test: (code) => {
      try {
        const removeDuplicates = new Function(`${code}; return removeDuplicates;`)();
        const nums = [];
        const length = removeDuplicates(nums);

        if (length === 0 && nums.length === 0) {
          return new TestResult({ passed: true });
        } else {
          return new TestResult({
            passed: false,
            message: `Expected length 0 for empty array, got ${length}. Array length: ${nums.length}`
          });
        }
      } catch (error) {
        return new TestResult({
          passed: false,
          message: `Error: ${error.message}`
        });
      }
    },
    message: "Function should handle empty arrays and maintain proper array length."
  },
  {
    name: "Edge case: single element",
    test: (code) => {
      try {
        const removeDuplicates = new Function(`${code}; return removeDuplicates;`)();
        const nums = [1];
        const length = removeDuplicates(nums);

        if (length === 1 && nums[0] === 1 && nums.length === 1) {
          return new TestResult({ passed: true });
        } else {
          return new TestResult({
            passed: false,
            message: `Expected length 1 for [1], got ${length}. Array length: ${nums.length}`
          });
        }
      } catch (error) {
        return new TestResult({
          passed: false,
          message: `Error: ${error.message}`
        });
      }
    },
    message: "Function should handle single element arrays and maintain proper array length."
  },
  {
    name: "No duplicates case",
    test: (code) => {
      try {
        const removeDuplicates = new Function(`${code}; return removeDuplicates;`)();
        const nums = [1, 2, 3, 4, 5];
        const originalLength = nums.length;
        const length = removeDuplicates(nums);

        if (length === originalLength && nums[0] === 1 && nums[4] === 5 && nums.length === originalLength) {
          return new TestResult({ passed: true });
        } else {
          return new TestResult({
            passed: false,
            message: `Expected length ${originalLength} for [1,2,3,4,5], got ${length}. Array length: ${nums.length}`
          });
        }
      } catch (error) {
        return new TestResult({
          passed: false,
          message: `Error: ${error.message}`
        });
      }
    },
    message: "Function should handle arrays with no duplicates and maintain proper array length."
  }
];