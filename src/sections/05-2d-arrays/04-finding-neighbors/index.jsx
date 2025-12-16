import content from './index.md?raw';
import starterCode from './starterCode.js?raw';
import solution from './solution.js?raw';
import questions from './checkpoint.jsx';
import { Checkpoint } from "@nss-workshops/nss-core";


export default {
  id: "2d-arrays-neighbors",
  title: 'Finding Neighbors (Up/Down/Left/Right)',
  previousChapterId: "2d-arrays-indexing",
  //nextChapterId: "2d-arrays-methods",
  content,
  exercises: [{
    starterCode,
    solution,
    instructions: `
# Exercise Instructions

Complete the \`countIslands\` function to count connected groups of land cells (1s) in a grid:

1. **Bounds checking** - Check if coordinates are out of bounds or in water, and return if so
2. **Mark as visited** - Change the current cell to water (0) to mark it as visited
3. **Recursive exploration** - Recursively call explore on all 4 neighbors (up, down, left, right)
4. **Grid traversal** - Traverse through the grid, and for each land cell, increment count and explore from that cell

This is a classic "flood fill" algorithm that uses depth-first search to find connected components in a 2D grid.

The expected output should be: "Islands: 4"
    `
  }],
    quiz: {component: () => <>
      <h1>Checkpoint</h1>
      <Checkpoint questions={questions}/>
    </>}
};