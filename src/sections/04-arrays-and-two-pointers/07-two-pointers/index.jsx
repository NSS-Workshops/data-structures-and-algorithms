import content from './index.md?raw';
import starterCode from './starterCode.js?raw';
import solution from './solution.js?raw';
import { tests } from './tests.js';

export default {
  id: "two-pointers",
  title: "Two-Pointer Logic for Pairwise Traversal",
  description: "Master the elegant two-pointer technique for efficient array traversal and problem solving.",
  previousChapterId: "implement-arraylist",
  nextChapterId: "info-sheet",
  content,
  exercises: [{
    starterCode,
    solution,
    tests
  }]
};