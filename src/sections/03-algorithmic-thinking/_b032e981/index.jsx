import { TestResult } from "@nss-workshops/nss-core";

export default {
  id: 'b032e981',
  title: 'Module 2 - Code Excercise 1',
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

## Problem: Reverse Array In-Place

Write a function that reverses an array in-place without using any built-in reverse methods or creating a new array.`,
  exercise: {
    starterCode:`/*
Problem: Reverse Array In-Place

Write a function that reverses an array in-place without using any built-in reverse methods or creating a new array.

Follow-up Questions:
- What is the time complexity of your solution?
- What is the space complexity?
- Can you solve this using the two-pointer technique?
*/

function reverseArray(arr) {
  // Reverse an array in-place without using built-in methods
  // Requirements:
  // - Modify the original array directly (in-place)
  // - Do not use built-in reverse() method
  // - Do not create a new array
  // - Use only constant extra space
  //
  // Example:
  // Input: [1, 2, 3, 4, 5]
  // Output: [5, 4, 3, 2, 1] (original array is modified)
  
  // Your code here
  
}`,
    solution:`/*
Problem: Reverse Array In-Place

Write a function that reverses an array in-place without using any built-in reverse methods or creating a new array.

Follow-up Questions:
- What is the time complexity of your solution?
- What is the space complexity?
- Can you solve this using the two-pointer technique?
*/

function reverseArray(arr) {
  // Reverse an array in-place without using built-in methods
  // Requirements:
  // - Modify the original array directly (in-place)
  // - Do not use built-in reverse() method
  // - Do not create a new array
  // - Use only constant extra space
  //
  // Example:
  // Input: [1, 2, 3, 4, 5]
  // Output: [5, 4, 3, 2, 1] (original array is modified)
  
  // Use two-pointer technique
  let left = 0;
  let right = arr.length - 1;
  
  // Swap elements from both ends moving towards center
  while (left < right) {
    // Swap elements at left and right positions
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    
    // Move pointers towards center
    left++;
    right--;
  }
  
  // Return the modified array (though it's modified in-place)
  return arr;
  
  // Time Complexity: O(n) - we visit each element at most once
  // Space Complexity: O(1) - only using constant extra space
}`,
    tests:[
      {
        name: "Basic functionality",
        test: (code) => {
          try {
            const reverseArray = new Function(`${code}; return reverseArray;`)();
            const arr1 = [1, 2, 3, 4, 5];
            reverseArray(arr1);
            const test1 = JSON.stringify(arr1) === JSON.stringify([5, 4, 3, 2, 1]);
            
            const arr2 = [10, 20, 30];
            reverseArray(arr2);
            const test2 = JSON.stringify(arr2) === JSON.stringify([30, 20, 10]);
            
            if (test1 && test2) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Expected reverseArray([1, 2, 3, 4, 5]) to return [5, 4, 3, 2, 1], got ${JSON.stringify(arr1)}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should reverse arrays correctly."
      },
      {
        name: "Edge case: single element",
        test: (code) => {
          try {
            const reverseArray = new Function(`${code}; return reverseArray;`)();
            const arr = [42];
            reverseArray(arr);
            
            if (JSON.stringify(arr) === JSON.stringify([42])) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Expected reverseArray([42]) to return [42], got ${JSON.stringify(arr)}`
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
        name: "Edge case: empty array",
        test: (code) => {
          try {
            const reverseArray = new Function(`${code}; return reverseArray;`)();
            const arr = [];
            reverseArray(arr);
            
            if (JSON.stringify(arr) === JSON.stringify([])) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Expected reverseArray([]) to return [], got ${JSON.stringify(arr)}`
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
        name: "In-place modification check",
        test: (code) => {
          try {
            const reverseArray = new Function(`${code}; return reverseArray;`)();
            const arr = [1, 2, 3, 4];
            const originalRef = arr;
            reverseArray(arr);
            
            // Check if the original array reference was modified
            if (originalRef === arr) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Function should modify the array in-place. Original array: ${JSON.stringify(originalRef)}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should modify the array in-place."
      }
    ]
  }
};