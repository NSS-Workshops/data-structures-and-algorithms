import { TestResult } from "../../utils/test_utils";

export const codeExcerciseOneChapter = {
  id: '7a106b96',
  title: 'Module 3 - Code Excercise 1',
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

## Problem: Remove Element

Given an array \`nums\` and a value \`val\`, remove all occurrences of \`val\` in-place and return the new length of the array. The order of elements can change. Do not use extra space for another array.

Follow-up Questions:
- What is the time complexity of your solution?
- What is the space complexity?
- How would this change if we needed to preserve order?`,

exercise: {
  starterCode:`
/*
Problem: Remove Element

Given an array nums and a value val, remove all occurrences of val in-place and return the new length of the array.
The order of elements can change. Do not use extra space for another array.

Follow-up Questions:
- What is the time complexity of your solution?
- What is the space complexity?
- How would this change if we needed to preserve order?
*/

function removeElement(nums, val) {
  // your code here
}
`,
    solution:`
/*
Problem: Remove Element

Given an array nums and a value val, remove all occurrences of val in-place and return the new length of the array.
The order of elements can change. Do not use extra space for another array.
*/

function removeElement(nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }
  nums.length = k
  return k;
}
`,
    tests:[
       {
        name: "Removes elements correctly (basic test)",
        test: (code) => {
          try {
            const removeElement = new Function(`${code}; return removeElement;`)();

            const arr1 = [3, 2, 2, 3];
            const result1 = removeElement(arr1, 3);
            const output1 = arr1.slice(0, result1).sort();
            const expected1 = [2, 2];

            const arr2 = [0, 1, 2, 2, 3, 0, 4, 2];
            const result2 = removeElement(arr2, 2);
            const output2 = arr2.slice(0, result2).sort();
            const expected2 = [0, 0, 1, 3, 4];

            const test1 = JSON.stringify(output1) === JSON.stringify(expected1);
            const test2 = JSON.stringify(output2) === JSON.stringify(expected2);

            if (test1 && test2) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Failed: Output1 = ${JSON.stringify(output1)}, Output2 = ${JSON.stringify(output2)}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should remove all instances of val and return correct length."
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
    ]
  }
};