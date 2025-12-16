
import content from './index.md?raw';
import starterCode from './starterCode.js?raw';
import solution from './solution.js?raw';
import tests from './tests.js';

export default {
    id: "stacks-implement-stack",
    title: 'Implement a Stack Class - Building the Book Cart System',
    previousChapterId: "stacks-tradeoffs",
    nextChapterId: "stacks-implement-queue",
    content: content,
    exercises: [{
      starterCode,
      solution,
      tests
    }]
}