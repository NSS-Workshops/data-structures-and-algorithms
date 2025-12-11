/*
Problem: Two Sum

Given an array of integers nums and an integer target, 
return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, 
and you may not use the same element twice.

You can return the answer in any order.
*/
function twoSum(nums, target) {
  // Your code here
}
  
//     /*
// Problem: Two Sum

// Given an array of integers nums and an integer target, 
// return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, 
// and you may not use the same element twice.

// You can return the answer in any order.
// */
// function twoSum(nums, target) {
//   const map = new Map();
  
//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i];
    
//     if (map.has(complement)) {
//       return [map.get(complement), i];
//     }
    
//     map.set(nums[i], i);
//   }
  
//   // This should never be reached given the problem constraints
//   return [];
// }`




//     tests:[
//       {
//         name: "Two Sum - Example 1",
//         test: (code) => {
//           try {
//             const twoSum = new Function(`${code}; return twoSum;`)();
//             const nums = [2, 7, 11, 15];
//             const target = 9;
//             const result = twoSum(nums, target);
//             const expected = [0, 1];
//             return JSON.stringify(result.sort()) === JSON.stringify(expected.sort())
//               ? new TestResult({ passed: true })
//               : new TestResult({ passed: false, message: `Expected ${JSON.stringify(expected)}, got ${JSON.stringify(result)}` });
//           } catch (e) {
//             return new TestResult({ passed: false, message: e.message });
//           }
//         },
//         message: "Should return [0,1] for nums=[2,7,11,15], target=9"
//       },
//       {
//         name: "Two Sum - Example 2",
//         test: (code) => {
//           try {
//             const twoSum = new Function(`${code}; return twoSum;`)();
//             const nums = [3, 2, 4];
//             const target = 6;
//             const result = twoSum(nums, target);
//             const expected = [1, 2];
//             return JSON.stringify(result.sort()) === JSON.stringify(expected.sort())
//               ? new TestResult({ passed: true })
//               : new TestResult({ passed: false, message: `Expected ${JSON.stringify(expected)}, got ${JSON.stringify(result)}` });
//           } catch (e) {
//             return new TestResult({ passed: false, message: e.message });
//           }
//         },
//         message: "Should return [1,2] for nums=[3,2,4], target=6"
//       },
//       {
//         name: "Two Sum - Example 3 (Duplicates)",
//         test: (code) => {
//           try {
//             const twoSum = new Function(`${code}; return twoSum;`)();
//             const nums = [3, 3];
//             const target = 6;
//             const result = twoSum(nums, target);
//             const expected = [0, 1];
//             return JSON.stringify(result.sort()) === JSON.stringify(expected.sort())
//               ? new TestResult({ passed: true })
//               : new TestResult({ passed: false, message: `Expected ${JSON.stringify(expected)}, got ${JSON.stringify(result)}` });
//           } catch (e) {
//             return new TestResult({ passed: false, message: e.message });
//           }
//         },
//         message: "Should return [0,1] for nums=[3,3], target=6"
//       },
//       {
//         name: "Two Sum - Negative Numbers",
//         test: (code) => {
//           try {
//             const twoSum = new Function(`${code}; return twoSum;`)();
//             const nums = [-1, -2, -3, -4, -5];
//             const target = -8;
//             const result = twoSum(nums, target);
//             const expected = [2, 4];
//             return JSON.stringify(result.sort()) === JSON.stringify(expected.sort())
//               ? new TestResult({ passed: true })
//               : new TestResult({ passed: false, message: `Expected ${JSON.stringify(expected)}, got ${JSON.stringify(result)}` });
//           } catch (e) {
//             return new TestResult({ passed: false, message: e.message });
//           }
//         },
//         message: "Should handle negative numbers correctly"
//       }
//     ]
//   }
// };