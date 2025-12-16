import content from './index.md?raw';
import starterCode from './starterCode.js?raw';
import solution from './solution.js?raw';
import tests from './tests.js';

export default {
    id: "combining-weather",
    title: "Global Cooling Crisis",
    previousChapterId: "combining-objectives",
    nextChapterId: "combining-lost",
    content: content,
    exercises: [{
      starterCode,
      solution,
      tests
    }]
}
