import { TestResult } from "../../utils/test_utils";

export const codeExcerciseTwoChapter = {
  id: '72eee61a',
  title: 'Module 8 - Code Excercise 2',
  sectionId: 'sorting-and-binary-search',
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

## Problem: Sort Colors (Dutch Flag)

Given an array with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function and in one pass (O(n) time).

### Follow-up Questions:
- What is the time complexity of your solution?
- What is the space complexity?
- How would this extend to k colors instead of 3?`,
  exercise: {
    starterCode:`/*
Problem: Sort Colors (Dutch Flag)

Given an array with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function and in one pass (O(n) time).

Examples:
Input: [2, 0, 2, 1, 1, 0]
Output: [0, 0, 1, 1, 2, 2]

Input: [2, 0, 1]
Output: [0, 1, 2]

Follow-up Questions:
- What is the time complexity of your solution?
- What is the space complexity?
- How would this extend to k colors instead of 3?
*/

function sortColors(nums) {
  // Approach: Use three pointers (Dutch Flag algorithm)
  // left: boundary for 0s (red)
  // right: boundary for 2s (blue)  
  // current: current element being processed
  // Goal: [0s][1s][2s]
  
  // Your code here
}`,
    solution:`/*
Problem: Sort Colors (Dutch Flag)

Given an array with n objects colored red, white, or blue, sort them in-place.
Use integers 0, 1, and 2 to represent red, white, and blue respectively.
*/

function sortColors(nums) {
  // Initialize three pointers
  let left = 0;           // Boundary for 0s (red)
  let right = nums.length - 1;  // Boundary for 2s (blue)
  let current = 0;        // Current element being processed
  
  // Process elements until current passes right boundary
  while (current <= right) {
    if (nums[current] === 0) {
      // Found red (0): swap with left boundary and move both pointers
      [nums[current], nums[left]] = [nums[left], nums[current]];
      left++;
      current++;
    } 
    else if (nums[current] === 2) {
      // Found blue (2): swap with right boundary, move right pointer
      // Don't increment current as we need to check the swapped element
      [nums[current], nums[right]] = [nums[right], nums[current]];
      right--;
    } 
    else {
      // Found white (1): it's in correct position, just move current
      current++;
    }
  }
  
  // Array is now sorted in-place: [0s][1s][2s]
  
  // Time Complexity: O(n) - single pass through the array
  // Space Complexity: O(1) - only using constant extra space for pointers
}`,
    tests:[
      {
        name: "Basic color sorting",
        test: (code) => {
          try {
            const sortColors = new Function(`${code}; return sortColors;`)();
            
            const test1 = [2, 0, 2, 1, 1, 0];
            sortColors(test1);
            const expected1 = [0, 0, 1, 1, 2, 2];
            
            const test2 = [2, 0, 1];
            sortColors(test2);
            const expected2 = [0, 1, 2];
            
            const result1 = JSON.stringify(test1) === JSON.stringify(expected1);
            const result2 = JSON.stringify(test2) === JSON.stringify(expected2);
            
            if (result1 && result2) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Basic sorting failed. Test1: ${JSON.stringify(test1)}, Test2: ${JSON.stringify(test2)}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should sort colors correctly in basic cases."
      },
      {
        name: "Handle edge cases",
        test: (code) => {
          try {
            const sortColors = new Function(`${code}; return sortColors;`)();
            
            const test1 = [0];
            sortColors(test1);
            const expected1 = [0];
            
            const test2 = [1];
            sortColors(test2);
            const expected2 = [1];
            
            const test3 = [2];
            sortColors(test3);
            const expected3 = [2];
            
            const test4 = [];
            sortColors(test4);
            const expected4 = [];
            
            const result1 = JSON.stringify(test1) === JSON.stringify(expected1);
            const result2 = JSON.stringify(test2) === JSON.stringify(expected2);
            const result3 = JSON.stringify(test3) === JSON.stringify(expected3);
            const result4 = JSON.stringify(test4) === JSON.stringify(expected4);
            
            if (result1 && result2 && result3 && result4) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Edge cases failed. Single 0: ${JSON.stringify(test1)}, Single 1: ${JSON.stringify(test2)}, Single 2: ${JSON.stringify(test3)}, Empty: ${JSON.stringify(test4)}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should handle edge cases (single elements, empty array)."
      },
      {
        name: "Handle already sorted arrays",
        test: (code) => {
          try {
            const sortColors = new Function(`${code}; return sortColors;`)();
            
            const test1 = [0, 0, 1, 1, 2, 2];
            sortColors(test1);
            const expected1 = [0, 0, 1, 1, 2, 2];
            
            const test2 = [0, 1, 2];
            sortColors(test2);
            const expected2 = [0, 1, 2];
            
            const result1 = JSON.stringify(test1) === JSON.stringify(expected1);
            const result2 = JSON.stringify(test2) === JSON.stringify(expected2);
            
            if (result1 && result2) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Already sorted cases failed. Test1: ${JSON.stringify(test1)}, Test2: ${JSON.stringify(test2)}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should handle already sorted arrays correctly."
      },
      {
        name: "Handle reverse sorted arrays",
        test: (code) => {
          try {
            const sortColors = new Function(`${code}; return sortColors;`)();
            
            const test1 = [2, 2, 1, 1, 0, 0];
            sortColors(test1);
            const expected1 = [0, 0, 1, 1, 2, 2];
            
            const test2 = [2, 1, 0];
            sortColors(test2);
            const expected2 = [0, 1, 2];
            
            const result1 = JSON.stringify(test1) === JSON.stringify(expected1);
            const result2 = JSON.stringify(test2) === JSON.stringify(expected2);
            
            if (result1 && result2) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Reverse sorted cases failed. Test1: ${JSON.stringify(test1)}, Test2: ${JSON.stringify(test2)}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should handle reverse sorted arrays correctly."
      },
      {
        name: "Handle arrays with same color",
        test: (code) => {
          try {
            const sortColors = new Function(`${code}; return sortColors;`)();
            
            const test1 = [0, 0, 0, 0];
            sortColors(test1);
            const expected1 = [0, 0, 0, 0];
            
            const test2 = [1, 1, 1];
            sortColors(test2);
            const expected2 = [1, 1, 1];
            
            const test3 = [2, 2, 2, 2, 2];
            sortColors(test3);
            const expected3 = [2, 2, 2, 2, 2];
            
            const result1 = JSON.stringify(test1) === JSON.stringify(expected1);
            const result2 = JSON.stringify(test2) === JSON.stringify(expected2);
            const result3 = JSON.stringify(test3) === JSON.stringify(expected3);
            
            if (result1 && result2 && result3) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Same color cases failed. All 0s: ${JSON.stringify(test1)}, All 1s: ${JSON.stringify(test2)}, All 2s: ${JSON.stringify(test3)}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should handle arrays with all same color."
      }
    ]
  }
};