import content from './index.md?raw';
import starterCode from './starterCode.js?raw';
import solution from './solution.js?raw';
import { tests } from './tests.js';

export default {
  title: 'Module 4 - Code Exercise 1',
  content,
  exercises: [{
    starterCode,
    solution,
    tests,
    instructions: `
# Exercise Instructions

Implement the \`incrementNeighbors\` function that:

1. Takes a 2D matrix and target cell coordinates (row, col)
2. Increments all immediate neighbors (up, down, left, right) by 1
3. Updates the matrix in-place
4. Uses proper bounds checking to avoid out-of-bounds errors

**Follow-up Questions:**
- What is the time complexity? O(1) - always checks exactly 4 neighbors
- What is the space complexity? O(1) - only uses constant extra space
- How would diagonal neighbors change this? Would check 8 directions instead of 4
    `
  }]
};