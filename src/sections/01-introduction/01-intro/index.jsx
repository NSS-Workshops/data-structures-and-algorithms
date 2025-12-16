import content from "./index.md?raw";
import example from "./example.js?raw";

export default {
    id: "introduction_intro",
    title: "Introduction",
    description: "Introduction to the course and fundamental concepts.",
    previousChapterId: null,
    nextChapterId: "introduction_checkpoint",
    content,
    exercises: [
      { starterCode:example },
    ]
}
