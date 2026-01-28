import { Checkpoint } from '@nss-workshops/nss-core';
import content from "./index.md?raw";
import starterCode from "./starterCode.js?raw";
import solution from "./solution.js?raw";
import questions from "./checkpoint.jsx";

export default {
    id: "sort-method",
    title: 'Using .sort() with Comparators',
    description: "Learn variable-size sliding windows through trading period optimization.",
    previousChapterId: "sort-approaches",
    nextChapterId: "sort-fundamentals",
    content,
    exercises: [
      { starterCode, solution },
    ],
    quiz: {component: () => <Checkpoint questions={questions}/>}
}