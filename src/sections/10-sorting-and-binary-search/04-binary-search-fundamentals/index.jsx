import content from "./index.md?raw";
import starterCode from "./starterCode.js?raw";
import solution from "./solution.js?raw";

export default {
    id: "sort-fundamentals",
    title: "Binary Search Fundamentals",
    description: "Learn the fundamentals of binary search algorithm for efficient searching.",
    previousChapterId: "sort-method",
    nextChapterId: "sort-variants",
    content,
    exercises: [
      { starterCode, solution },
    ],
    quiz: null
}