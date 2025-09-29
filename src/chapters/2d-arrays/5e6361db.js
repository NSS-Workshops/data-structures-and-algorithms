import { TestResult } from "@nss-workshops/nss-core";

export const codeExcerciseTwoChapter = {
  id: '5e6361db',
  title: 'Module 4 - Code Excercise 2',
  sectionId: '2d-arrays',
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
## Problem: Return Neighbor Values

Write a function \`getNeighbors\` that returns an array of the values of all valid neighbors (top, bottom, left, right) of a given cell \`(row, col)\` in a 2D array. Do not modify the original grid.

### Follow-up Questions:
- What edge cases need to be considered?
- How would this change if diagonal neighbors were allowed?
`,
  exercise: {
    starterCode:`
    /*
Problem: Return Neighbor Values
*/
function getNeighbors(grid, row, col) {
  // Return an array of top, bottom, left, right neighbor values
}`,
    solution:`
    /*
Problem: Return Neighbor Values
*/
    function getNeighbors(grid, row, col) {
  const result = [];
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  for (let [dr, dc] of directions) {
    let r = row + dr;
    let c = col + dc;
    if (r >= 0 && r < grid.length && c >= 0 && c < grid[0].length) {
      result.push(grid[r][c]);
    }
  }
  return result;
}`,
    tests:[
      {
        name: "Get Neighbors top-left corner",
        test: (code) => {
          try {
            const getNeighbors = new Function(`${code}; return getNeighbors;`)();
            const grid = [
              [5, 2, 3],
              [4, 6, 7],
              [8, 9, 1]
            ];
            const result = getNeighbors(grid, 0, 0);
            const expected = [4, 2];
            return JSON.stringify(result) === JSON.stringify(expected)
              ? new TestResult({ passed: true })
              : new TestResult({ passed: false, message: `Expected ${JSON.stringify(expected)}, got ${JSON.stringify(result)}` });
          } catch (e) {
            return new TestResult({ passed: false, message: e.message });
          }
        },
        message: "Should return only valid top-left corner neighbors"
      },
      {
        name: "Get Neighbors center cell",
        test: (code) => {
          try {
            const getNeighbors = new Function(`${code}; return getNeighbors;`)();
            const grid = [
              [1, 2, 3],
              [4, 5, 6],
              [7, 8, 9]
            ];
            const result = getNeighbors(grid, 1, 1);
            const expected = [2, 8, 4, 6];
            return JSON.stringify(result) === JSON.stringify(expected)
              ? new TestResult({ passed: true })
              : new TestResult({ passed: false, message: `Expected ${JSON.stringify(expected)}, got ${JSON.stringify(result)}` });
          } catch (e) {
            return new TestResult({ passed: false, message: e.message });
          }
        },
        message: "Should return neighbors of center cell"
      }
    ]
  }
};