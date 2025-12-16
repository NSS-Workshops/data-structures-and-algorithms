import content from './index.md?raw';
import starterCode from './starterCode.js?raw';
import solution from './solution.js?raw';
import tests from './tests.js';

export default {
    id: "combining-lost",
    title: "Lost Weather Monitors",
    previousChapterId: "combining-weather",
    nextChapterId: "combining-regional",
    content: content,
    exercises: [{
      starterCode,
      solution,
      tests
    }]
}