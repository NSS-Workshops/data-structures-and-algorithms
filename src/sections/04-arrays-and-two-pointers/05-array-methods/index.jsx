import content from './index.md?raw';
import starterCode from './starterCode.js?raw';
import solution from './solution.js?raw';
import { tests } from './tests.js';

export default {
    id: "array-methods",
    title: "Array Methods: The Musician's Advanced Toolkit",
    description: "Alex learns advanced array methods for sophisticated data management",
    previousChapterId: "array-tradeoffs",
    nextChapterId: "implement-arraylist",
    content,
    exercises: [{
        starterCode,
        solution,
        tests
    }]
};