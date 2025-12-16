import content from './index.md?raw';
import starterCode from './starterCode.js?raw';
import solution from './solution.js?raw';
import tests from './tests.js';

export default {
  id: "stacks-implement-queue",
  title: 'Implement a Queue Class - Digitizing the Hold System',
  previousChapterId: "stacks-implement-stack",
  nextChapterId: "stacks-info",
  content: content,
    exercises: [{
      starterCode,
      solution,
      tests
    }]
};