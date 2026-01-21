import content from './index.md?raw';
import starterCode from './starterCode.js?raw';
import solution from './solution.js?raw';
import { tests } from './tests.js';

export default {
  title: 'Module 4 - Code Exercise 2',
  content,
  exercise: {
    starterCode,
    solution,
    tests,
    instructions: `
# Exercise Instructions

Implement the \`getNeighbors\` function that:

1. Takes a 2D grid and target cell coordinates (row, col)
2. Returns an array of values from all valid neighbors (top, bottom, left, right)
3. Does NOT modify the original grid
4. Uses proper bounds checking to avoid out-of-bounds errors

**Edge Cases to Consider:**
- Corner cells (only 2 neighbors)
- Edge cells (only 3 neighbors)
- Center cells (4 neighbors)

**Follow-up Questions:**
- What edge cases need to be considered? Bounds checking for grid boundaries
- How would diagonal neighbors change this? Would check 8 directions and return up to 8 values
    `
  }
};