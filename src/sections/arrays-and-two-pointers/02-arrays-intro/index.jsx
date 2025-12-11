import content from './index.md?raw';
import starterCode from './starterCode.js?raw';
import solution from './solution.js?raw';
import { tests } from './tests.js';

export default {
  id: "arrays-intro",
  title: "Introduction to Arrays",
  description: "Learn the fundamentals of arrays and their basic operations.",
  previousChapterId: "arrays-and-two-pointers-learning-objectives",
  nextChapterId: "array-core-operations",
  content,
  exercises: [{
    starterCode,
    solution,
    tests
  }]
};