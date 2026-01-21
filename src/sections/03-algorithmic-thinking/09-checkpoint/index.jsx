import { Checkpoint } from '@nss-workshops/nss-core';
import questions from "./checkpoint.jsx";

export default {
    id: "algorithmic-thinking-checkpoint",
    title: "Checkpoint: Algorithmic Thinking",
    description: "Test your understanding of Big O notation and algorithmic thinking concepts.",
    previousChapterId: "algorithmic-thinking-glossary",
    nextChapterId: null,
    content: `Test your understanding of Big O notation and algorithmic thinking concepts.`,
    exercises: [],
    quiz: {component: () => <>
      <h1>Checkpoint</h1>
      <Checkpoint questions={questions}/>
    </>}
}