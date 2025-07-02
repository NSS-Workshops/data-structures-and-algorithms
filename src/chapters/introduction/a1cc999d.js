import { TestResult } from "../../utils/test_utils";

export const codeExcerciseOneChapter = {
  id: 'a1cc999d',
  title: 'Two Sum',
  sectionId: 'introduction',
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
- Fill out this [solving guide](https://docs.google.com/forms/d/e/1FAIpQLSfKHRJlZSUR-lKnQgfIWhe5GzM1CcMmO6Lf8ECvAY8DsFh1FA/viewform)

🗣️ **As the interviewee, your responsibilities are:**
- Ask clarifying questions
- Follow the steps in the [solving guide](https://docs.google.com/forms/d/e/1FAIpQLSfKHRJlZSUR-lKnQgfIWhe5GzM1CcMmO6Lf8ECvAY8DsFh1FA/viewform):
    Step 1: Clarify
    Step 2: Plan
    Step 3: Implement
    Step 4: Test
    Step 5: Optimize

🪞 **After the first interview:**  
Leave 10–15 minutes to reflect, share feedback, and then switch roles.

Best of luck, and enjoy the practice! 🚀
## Problem: Two Sum

Given an array of integers \`nums\` and an integer \`target\`, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

**Note:** Values can be duplicated, you can short circuit, and it's guaranteed to have a solution.

### Examples:

**Example 1:**
- Input: nums = [2,7,11,15], target = 9
- Output: [0,1]
- Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

**Example 2:**
- Input: nums = [3,2,4], target = 6
- Output: [1,2]

**Example 3:**
- Input: nums = [3,3], target = 6
- Output: [0,1]

### Follow-up Questions:
- What is the time and space complexity of your solution?
- How would you optimize this if the array was sorted?
- What if we needed to find all pairs that sum to the target?
`,
  exercise: {
    starterCode:`
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
}`,
    solution:`
    /*
Problem: Two Sum

Given an array of integers nums and an integer target, 
return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, 
and you may not use the same element twice.

You can return the answer in any order.
*/
function twoSum(nums, target) {
  const map = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    
    map.set(nums[i], i);
  }
  
  // This should never be reached given the problem constraints
  return [];
}`,
    tests:[
      {
        name: "Two Sum - Example 1",
        test: (code) => {
          try {
            const twoSum = new Function(`${code}; return twoSum;`)();
            const nums = [2, 7, 11, 15];
            const target = 9;
            const result = twoSum(nums, target);
            const expected = [0, 1];
            return JSON.stringify(result.sort()) === JSON.stringify(expected.sort())
              ? new TestResult({ passed: true })
              : new TestResult({ passed: false, message: `Expected ${JSON.stringify(expected)}, got ${JSON.stringify(result)}` });
          } catch (e) {
            return new TestResult({ passed: false, message: e.message });
          }
        },
        message: "Should return [0,1] for nums=[2,7,11,15], target=9"
      },
      {
        name: "Two Sum - Example 2",
        test: (code) => {
          try {
            const twoSum = new Function(`${code}; return twoSum;`)();
            const nums = [3, 2, 4];
            const target = 6;
            const result = twoSum(nums, target);
            const expected = [1, 2];
            return JSON.stringify(result.sort()) === JSON.stringify(expected.sort())
              ? new TestResult({ passed: true })
              : new TestResult({ passed: false, message: `Expected ${JSON.stringify(expected)}, got ${JSON.stringify(result)}` });
          } catch (e) {
            return new TestResult({ passed: false, message: e.message });
          }
        },
        message: "Should return [1,2] for nums=[3,2,4], target=6"
      },
      {
        name: "Two Sum - Example 3 (Duplicates)",
        test: (code) => {
          try {
            const twoSum = new Function(`${code}; return twoSum;`)();
            const nums = [3, 3];
            const target = 6;
            const result = twoSum(nums, target);
            const expected = [0, 1];
            return JSON.stringify(result.sort()) === JSON.stringify(expected.sort())
              ? new TestResult({ passed: true })
              : new TestResult({ passed: false, message: `Expected ${JSON.stringify(expected)}, got ${JSON.stringify(result)}` });
          } catch (e) {
            return new TestResult({ passed: false, message: e.message });
          }
        },
        message: "Should return [0,1] for nums=[3,3], target=6"
      },
      {
        name: "Two Sum - Negative Numbers",
        test: (code) => {
          try {
            const twoSum = new Function(`${code}; return twoSum;`)();
            const nums = [-1, -2, -3, -4, -5];
            const target = -8;
            const result = twoSum(nums, target);
            const expected = [2, 4];
            return JSON.stringify(result.sort()) === JSON.stringify(expected.sort())
              ? new TestResult({ passed: true })
              : new TestResult({ passed: false, message: `Expected ${JSON.stringify(expected)}, got ${JSON.stringify(result)}` });
          } catch (e) {
            return new TestResult({ passed: false, message: e.message });
          }
        },
        message: "Should handle negative numbers correctly"
      }
    ]
  }
};