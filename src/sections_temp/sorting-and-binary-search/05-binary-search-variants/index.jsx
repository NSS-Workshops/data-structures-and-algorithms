import { Checkpoint } from '@nss-workshops/nss-core';
import content from "./index.md?raw";
import starterCode from "./starterCode.js?raw";
import solution from "./solution.js?raw";
import questions from "./checkpoint.jsx";

export default {
    id: "binary-search-variants",
    title: "Binary Search Variants",
    description: "Learn advanced binary search techniques for complex search problems.",
    previousChapterId: "binary-search-fundamentals",
    nextChapterId: "sorting-binary-search-info-sheet",
    content,
    exercises: [
      { starterCode, solution },
    ],
    quiz: {component: () => <>
      <h1>Checkpoint</h1>
      <Checkpoint questions={questions}/>
    </>}
}