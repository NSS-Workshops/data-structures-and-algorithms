import { Checkpoint } from '@nss-workshops/nss-core';
import content from "./index.md?raw";
import starterCode from "./starterCode.js?raw";
import solution from "./solution.js?raw";
import questions from "./checkpoint.jsx";

export default {
    id: "sliding-window-intro",
    title: "Introduction to Sliding Window - Financial Market Analysis",
    description: "Learn the sliding window technique through financial market analysis examples.",
    previousChapterId: "sliding-window-learning-objectives",
    nextChapterId: "optimal-trading-period",
    content,
    exercises: [
      { starterCode, solution },
    ],
    quiz: {component: () =>  <Checkpoint questions={questions}/> }
}