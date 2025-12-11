import content from "./index.md?raw";
import starterCode from "./starterCode.js?raw";
import solution from "./solution.js?raw";
import tests from "./tests.js?raw";

export default {
    id: "6fd72967",
    title: "Module 8 - Code Exercise 1",
    description: "Practice sliding window technique with maximum sum subarray problem.",
    previousChapterId: "sliding-window-checkpoint",
    nextChapterId: "longest-substring-exercise",
    content,
    exercises: [
      { starterCode, solution, tests },
    ],
    quiz: null
}