import content from './index.md?raw';
import starterCode from './starterCode.js?raw';
import solution from './solution.js?raw';
import { tests } from './tests.js';

export default {
  id: "code-exercise-1",
  title: "Code Exercise 1: Remove Element",
  description: "Practice removing elements from arrays using two-pointer technique.",
  previousChapterId: "arrays-and-two-pointers-checkpoint",
  nextChapterId: "code-exercise-2",
  content,
  exercises: [{
    starterCode,
    solution,
    tests
  }]
};