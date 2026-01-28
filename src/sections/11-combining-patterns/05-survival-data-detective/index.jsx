import content from './index.md?raw';
import starterCode from './starterCode.js?raw';
import solution from './solution.js?raw';
import tests from './tests.js';

export default {
    id: "combining-survival",
    title: "Survival Data Detective",
    previousChapterId: "combining-regional",
    nextChapterId: "combining-checkpoint",
    content: content,
    exercises: [{
      starterCode,
      solution,
      tests
    }]
}