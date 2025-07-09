import { TestResult } from "../../utils/test_utils";

export const codeExcerciseTwoChapter = {
  id: 'a62881e6',
  title: 'Module 3 - Code Excercise 2',
  sectionId: 'arrays-and-two-pointers',
  previousChapterId: null,
  content: `
  Hi 👋,
You'll be guiding your partner through the coding problem on the right side of your screen.

⚠️ **Please do not share this URL / problem before class.**
Revealing the question early defeats the purpose of simulating a real-world interview, where candidates do not know the problem in advance. Let's give your partner the chance to experience the challenge authentically.

🧠 **Before class:**
Take time to study the problem. During the session, you'll have 90 minutes in your breakout room to run a mock interview with your partner. Be sure to take turns acting as the interviewer and interviewee.

🗣️ **As the interviewer, your responsibilities are:**
- Send this URL to your partner (copy and past the whole url and slack it directly to you partner)
- Briefly introduce the problem
- Never give away the answer
- Take notes and provide feedback
- Fill out this [feedback form](https://forms.gle/sXK3tJaGNEk52jm4A)

🗣️ **As the interviewee, your responsibilities are:**
- Ask clarifying questions
- Follow the steps in the [solving guide](https://forms.gle/sXK3tJaGNEk52jm4A):
    Step 1: Clarify
    Step 2: Plan
    Step 3: Implement
    Step 4: Test
    Step 5: Optimize

🪞 **After the first interview:**
Leave 10–15 minutes to reflect, share feedback, and then switch roles.

Best of luck, and enjoy the practice! 🚀

## Problem: Remove Duplicates from Sorted Array

Given a sorted array, remove duplicates in-place and return the new length. You must modify the array in-place with O(1) extra space.`,
  exercise: {
    starterCode:`/*
Problem: Remove Duplicates from Sorted Array

Given a sorted array, remove duplicates in-place and return the new length. You must modify the array in-place with O(1) extra space.

Follow-up Questions:
- What is the time complexity of your solution?
- What is the space complexity?
*/

function removeDuplicates(nums) {
  // Remove duplicates from sorted array in-place
  // Requirements:
  // - Array is sorted in ascending order
  // - Remove duplicates in-place (modify original array)
  // - Return new length after removing duplicates
  // - First k elements should contain unique elements
  // - Use O(1) extra space complexity
  // - Use two-pointer technique
  //
  // Example:
  // Input: nums = [1, 1, 2, 2, 3]
  // Output: 3 (array becomes [1, 2, 3, _, _], return 3)
  
  // Your code here
  
}`,
    solution:`/*
Problem: Remove Duplicates from Sorted Array

Given a sorted array, remove duplicates in-place and return the new length. You must modify the array in-place with O(1) extra space.

Follow-up Questions:
- What is the time complexity of your solution?
- What is the space complexity?
*/

function removeDuplicates(nums) {
  // Remove duplicates from sorted array in-place
  // Requirements:
  // - Array is sorted in ascending order
  // - Remove duplicates in-place (modify original array)
  // - Return new length after removing duplicates
  // - First k elements should contain unique elements
  // - Use O(1) extra space complexity
  // - Use two-pointer technique
  //
  // Example:
  // Input: nums = [1, 1, 2, 2, 3]
  // Output: 3 (array becomes [1, 2, 3, _, _], return 3)
  
  // Handle edge case: empty array
  if (nums.length === 0) {
    return 0;
  }
  
  // Initialize slow pointer
  let i = 0;
  
  // Fast pointer starts from second element
  for (let j = 1; j < nums.length; j++) {
    // If current element is different from previous unique element
    if (nums[j] !== nums[i]) {
      // Move slow pointer and update with new unique element
      i++;
      nums[i] = nums[j];
    }
  }
  
  // Return new length (i + 1 because i is 0-indexed)
  return i + 1;
  
  // Time Complexity: O(n) - we visit each element once
  // Space Complexity: O(1) - only using constant extra space
}`,
    tests:[
        {
        name: "Basic functionality",
        test: (code) => {
          try {
            const removeDuplicates = new Function(`${code}; return removeDuplicates;`)();
            const nums1 = [1, 1, 2];
            const length1 = removeDuplicates(nums1);
            const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
            const length2 = removeDuplicates(nums2);

            const test1 = length1 === 2 && nums1[0] === 1 && nums1[1] === 2;
            const test2 = length2 === 5 && nums2[0] === 0 && nums2[1] === 1 && nums2[2] === 2 && nums2[3] === 3 && nums2[4] === 4;

            if (test1 && test2) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Expected length 2 for [1,1,2], got ${length1}. Expected length 5 for [0,0,1,1,1,2,2,3,3,4], got ${length2}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should remove duplicates and return correct length."
      },
      {
        name: "Edge case: empty array",
        test: (code) => {
          try {
            const removeDuplicates = new Function(`${code}; return removeDuplicates;`)();
            const nums = [];
            const length = removeDuplicates(nums);

            if (length === 0) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Expected length 0 for empty array, got ${length}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should handle empty arrays."
      },
      {
        name: "Edge case: single element",
        test: (code) => {
          try {
            const removeDuplicates = new Function(`${code}; return removeDuplicates;`)();
            const nums = [1];
            const length = removeDuplicates(nums);

            if (length === 1 && nums[0] === 1) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Expected length 1 for [1], got ${length}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should handle single element arrays."
      },
      {
        name: "No duplicates case",
        test: (code) => {
          try {
            const removeDuplicates = new Function(`${code}; return removeDuplicates;`)();
            const nums = [1, 2, 3, 4, 5];
            const originalLength = nums.length;
            const length = removeDuplicates(nums);

            if (length === originalLength && nums[0] === 1 && nums[4] === 5) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Expected length ${originalLength} for [1,2,3,4,5], got ${length}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should handle arrays with no duplicates."
      }
    ]
  }
};