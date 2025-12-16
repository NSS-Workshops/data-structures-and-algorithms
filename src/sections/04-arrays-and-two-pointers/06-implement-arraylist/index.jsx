import content from './index.md?raw';
import starterCode from './starterCode.js?raw';
import solution from './solution.js?raw';
import { tests } from './tests.js';

export default {
    id: "implement-arraylist",
    title: "Building a Dynamic Int32Array: Alex's High-Performance Audio Processing System",
    description: "Alex builds a custom dynamic array for high-performance audio processing",
    previousChapterId: "array-methods",
    nextChapterId: "two-pointers",
    content,
    exercises: [{
        starterCode,
        solution,
        tests
    }]
};