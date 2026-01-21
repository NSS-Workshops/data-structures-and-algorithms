import content from './index.md?raw';
import starterCode from './starterCode.js?raw';
import solution from './solution.js?raw';
import { tests } from './tests.js';

export default {
  id: "array-core-operations",
  title: "Core Operations: Add, Remove, Update, Access",
  description: "Understanding the fundamental operations you can perform on arrays.",
  previousChapterId: "arrays-intro",
  nextChapterId: "array-tradeoffs",
  content,
  exercises: [{
    starterCode,
    solution,
    tests
  }]
};