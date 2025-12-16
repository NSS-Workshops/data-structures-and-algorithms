import content from './index.md?raw';
import starterCode from './starterCode.js?raw';
import solution from './solution.js?raw';
import { tests } from './tests.js';

export default {
    id: "array-tradeoffs",
    title: "The Hidden Costs: Understanding Array Performance Tradeoffs",
    description: "Maya learns about performance implications of array operations at scale",
    previousChapterId: "array-core-operations",
    nextChapterId: "array-methods",
    content,
    exercises: [{
        starterCode,
        solution,
        tests
    }]
};