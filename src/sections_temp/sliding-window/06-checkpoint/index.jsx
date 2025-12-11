import { Checkpoint } from '@nss-workshops/nss-core';
import content from "./index.md?raw";
import questions from "./checkpoint.jsx";

export default {
    id: "sliding-window-checkpoint",
    title: "Checkpoint: Sliding Window",
    description: "Test your understanding of the sliding window technique.",
    previousChapterId: "sliding-window-glossary",
    nextChapterId: null,
    content,
    exercises: [],
    quiz: {component: () => <>
      <h1>Quiz: Sliding Window</h1>
      <Checkpoint questions={questions}/>
    </>}
}