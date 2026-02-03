import { TestResult } from "@nss-workshops/nss-core";

export default {
  id: '9e31c844',
  title: 'Module 4 - Code Excercise 1',
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
## Problem: Increment All Neighbors

Given a 2D array (matrix) of numbers and a target cell (row, col), increment all **immediate neighbors** (up, down, left, right) of that cell by 1.

The input matrix should be updated in-place.

## Follow-up Questions:
- What is the time complexity of your solution?
- What is the space complexity?
- How would this change if diagonal neighbors were included?`,
  exercise: {
    starterCode:`/*Problem: Increment All Neighbors

Given a 2D array (matrix) of numbers and a target cell (row, col), increment all **immediate neighbors** (up, down, left, right) of that cell by 1.

The input matrix should be updated in-place.
*/

function incrementNeighbors(matrix, row, col) {
  // Your code here
}`,
    solution:`function incrementNeighbors(matrix, row, col) {
  const directions = [
    [-1, 0], // up
    [1, 0],  // down
    [0, -1], // left
    [0, 1]   // right
  ];

  for (const [dr, dc] of directions) {
    const r = row + dr;
    const c = col + dc;
    if (r >= 0 && r < matrix.length && c >= 0 && c < matrix[0].length) {
      matrix[r][c] += 1;
    }
  }
}`,
    tests:[
    {
        name: "Increment Neighbors basic 3x3 center",
        test: (code) => {
          try {
            const incrementNeighbors = new Function(`${code}; return incrementNeighbors;`)();
            const grid = [
              [1, 1, 1],
              [1, 1, 1],
              [1, 1, 1],
            ];
            incrementNeighbors(grid, 1, 1);
            const expected = [
              [1, 2, 1],
              [2, 1, 2],
              [1, 2, 1],
            ];
            return JSON.stringify(grid) === JSON.stringify(expected)
              ? new TestResult({ passed: true })
              : new TestResult({ passed: false, message: `Expected ${JSON.stringify(expected)}, got ${JSON.stringify(grid)}` });
          } catch (e) {
            return new TestResult({ passed: false, message: e.message });
          }
        },
        message: "Should increment 4 neighbors of the center cell"
      },
      {
        name: "Increment Neighbors edge cell",
        test: (code) => {
          try {
            const incrementNeighbors = new Function(`${code}; return incrementNeighbors;`)();
            const grid = [
              [1, 1, 1],
              [1, 1, 1],
              [1, 1, 1]
            ];
            incrementNeighbors(grid, 0, 1);
            const expected = [
              [2, 1, 2],
              [1, 2, 1],
              [1, 1, 1]
            ];
            return JSON.stringify(grid) === JSON.stringify(expected)
              ? new TestResult({ passed: true })
              : new TestResult({ passed: false, message: `Expected ${JSON.stringify(expected)}, got ${JSON.stringify(grid)}` });
          } catch (e) {
            return new TestResult({ passed: false, message: e.message });
          }
        },
        message: "Should handle edge case for top edge cell"
      }
    ]
  }
};