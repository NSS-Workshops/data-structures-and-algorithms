import { Checkpoint } from '@nss-workshops/nss-core';
import content from "./index.md?raw";
import starterCode from "./starterCode.js?raw";
import solution from "./solution.js?raw";
import questions from "./checkpoint.jsx";

export default {
    id: "optimal-trading-period",
    title: "Variable-Size Windows - Optimal Trading Period Analysis",
    description: "Learn variable-size sliding windows through trading period optimization.",
    previousChapterId: "sliding-window-intro",
    nextChapterId: "sliding-window-supplemental-materials",
    content,
    exercises: [
      { starterCode, solution },
    ],
    quiz: {component: () => <>
      <h1>🧠 Recall Practice</h1>
      <Checkpoint questions={questions}/>
    </>}
}