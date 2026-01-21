import content from './index.md?raw';
import starterCode from './starterCode.js?raw';
import solution from './solution.js?raw';
import tests from './tests.js';

export default {
    id: "combining-regional",
    title: "Regional Evacuation Center",
    previousChapterId: "combining-lost",
    nextChapterId: "combining-survival",
    content: content,
    exercises: [{
      starterCode,
      solution,
      tests
    }]
}
