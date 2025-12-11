import content from './index.md?raw';
import starterCode from './starterCode.js?raw';
import solution from './solution.js?raw';
import { tests } from './tests.js';

export default {
  id: "code-exercise-2",
  title: "Code Exercise 2: Remove Duplicates from Sorted Array",
  description: "Practice removing duplicates from sorted arrays using two-pointer technique.",
  previousChapterId: "code-exercise-1",
  nextChapterId: null,
  content,
  exercises: [{
    starterCode,
    solution,
    tests
  }]
};