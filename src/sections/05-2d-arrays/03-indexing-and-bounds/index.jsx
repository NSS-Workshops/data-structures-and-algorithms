import content from './index.md?raw';
import starterCode from './starterCode.js?raw';
import solution from './solution.js?raw';
import questions from './checkpoint.jsx';
import { Checkpoint } from "@nss-workshops/nss-core";

export default {
  id: "2d-arrays-indexing",
  title: 'Indexing and Bounds Checking in Grids',
  previousChapterId: "2d-arrays-intro",
  nextChapterId: "2d-arrays-neighbors",
  content,
  exercises: [{
    starterCode,
    solution,
    instructions: `
# Exercise Instructions

Complete the \`measureTraversalPerformance\` function to demonstrate the performance difference between row-wise and column-wise traversal:

1. **Row-wise traversal** - Traverse the matrix by rows first, then by columns within each row
2. **Column-wise traversal** - Traverse the matrix by columns first, then by rows within each column

For each element accessed, set the \`placeholder\` variable to that element's value. The function will measure and log the time difference between these two approaches.

This exercise demonstrates cache locality - row-wise traversal is typically faster due to how arrays are stored in memory.
    `
  }],
    quiz: {component: () => <>
      <h1>Checkpoint</h1>
      <Checkpoint questions={questions}/>
    </>}
};