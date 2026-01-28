import { Checkpoint } from '@nss-workshops/nss-core';
import content from "./index.md?raw";
import starterCode from "./starterCode.js?raw";
import solution from "./solution.js?raw";
import questions from "./checkpoint.jsx";

export default {
    id: "sort-variants",
    title: "Binary Search Variants",
    description: "Learn advanced binary search techniques for complex search problems.",
    previousChapterId: "sort-fundamentals",
    nextChapterId: "sort-info",
    content,
    exercises: [
      { starterCode, solution },
    ],
    quiz: {component: () => <Checkpoint questions={questions}/>}
}