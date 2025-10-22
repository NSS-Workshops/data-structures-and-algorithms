import { TestResult } from "@nss-workshops/nss-core";

export const codeExcerciseTwoChapter = {
  id: 'b892f062',
  title: 'Module 2 - Code Excercise 2',
  sectionId: 'algorithmic-thinking',
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

## Problem: Move Zeros to End

Write a function that moves all zeros in an array to the end while maintaining the relative order of non-zero elements.`,
  exercise: {
    starterCode:`/*
Problem: Move Zeros to End

Write a function that moves all zeros in an array to the end while maintaining the relative order of non-zero elements.

Follow-up Questions:
- What is the time complexity of your solution?
- What is the space complexity?
- Can you solve this using the two-pointer technique?
- How does swapping compare to the two-pass approach?
*/

function moveZeroes(nums) {
  // Move all zeros to the end while maintaining relative order
  // Requirements:
  // - Modify the array in-place
  // - Maintain the relative order of non-zero elements
  // - Do not use extra space for another array
  // - Use efficient swapping technique
  //
  // Example:
  // Input: [0, 1, 0, 3, 12]
  // Output: [1, 3, 12, 0, 0]
  
  // Your code here
  
}`,
    solution:`/*
Problem: Move Zeros to End

Write a function that moves all zeros in an array to the end while maintaining the relative order of non-zero elements.

Follow-up Questions:
- What is the time complexity of your solution?
- What is the space complexity?
- Can you solve this using the two-pointer technique?
- How does swapping compare to the two-pass approach?
*/

function moveZeroes(nums) {
  // Move all zeros to the end while maintaining relative order
  // Requirements:
  // - Modify the array in-place
  // - Maintain the relative order of non-zero elements
  // - Do not use extra space for another array
  // - Use efficient swapping technique
  //
  // Example:
  // Input: [0, 1, 0, 3, 12]
  // Output: [1, 3, 12, 0, 0]
  
  // Use single-pass approach with swapping
  let lastNonZero = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      // Swap with the element at lastNonZero pointer
      [nums[i], nums[lastNonZero]] = [nums[lastNonZero], nums[i]];
      lastNonZero++;
    }
  }
  
  // Time Complexity: O(n) - single pass through the array
  // Space Complexity: O(1) - only using constant extra space
}`,
    tests:[
      {
        name: "Basic functionality",
        test: (code) => {
          try {
            const moveZeroes = new Function(`${code}; return moveZeroes;`)();
            const arr1 = [0, 1, 0, 3, 12];
            moveZeroes(arr1);
            const arr2 = [0, 0, 1];
            moveZeroes(arr2);
            
            const test1 = JSON.stringify(arr1) === JSON.stringify([1, 3, 12, 0, 0]);
            const test2 = JSON.stringify(arr2) === JSON.stringify([1, 0, 0]);
            
            if (test1 && test2) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Expected moveZeroes([0, 1, 0, 3, 12]) to result in [1, 3, 12, 0, 0], got ${JSON.stringify(arr1)}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should move zeros to end while maintaining order."
      },
      {
        name: "Edge case: no zeros",
        test: (code) => {
          try {
            const moveZeroes = new Function(`${code}; return moveZeroes;`)();
            const arr = [1, 2, 3, 4, 5];
            moveZeroes(arr);
            
            if (JSON.stringify(arr) === JSON.stringify([1, 2, 3, 4, 5])) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Expected moveZeroes([1, 2, 3, 4, 5]) to result in [1, 2, 3, 4, 5], got ${JSON.stringify(arr)}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should handle arrays with no zeros."
      },
      {
        name: "Edge case: all zeros",
        test: (code) => {
          try {
            const moveZeroes = new Function(`${code}; return moveZeroes;`)();
            const arr = [0, 0, 0, 0];
            moveZeroes(arr);
            
            if (JSON.stringify(arr) === JSON.stringify([0, 0, 0, 0])) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Expected moveZeroes([0, 0, 0, 0]) to result in [0, 0, 0, 0], got ${JSON.stringify(arr)}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should handle arrays with all zeros."
      },
      {
        name: "Single element",
        test: (code) => {
          try {
            const moveZeroes = new Function(`${code}; return moveZeroes;`)();
            const arr1 = [0];
            moveZeroes(arr1);
            const arr2 = [5];
            moveZeroes(arr2);
            
            const test1 = JSON.stringify(arr1) === JSON.stringify([0]);
            const test2 = JSON.stringify(arr2) === JSON.stringify([5]);
            
            if (test1 && test2) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Expected moveZeroes([0]) to result in [0], got ${JSON.stringify(arr1)}`
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
      }
    ]
  }
};