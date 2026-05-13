import { Checkpoint } from '@nss-workshops/nss-core';
import questions from "./checkpoint.jsx";

export default {
  id: "what-is-memory-checkpoint",
  title: "Checkpoint: What Is Memory?",
  description: "Test your understanding of binary, RAM, memory addresses, and references.",
  previousChapterId: "what-is-memory-glossary",
  nextChapterId: "what-is-memory-feedback",
  content: `Test your understanding of binary, RAM, memory addresses, and references.`,
  exercises: [],
  quiz: {component: () => <>
    <h1>Checkpoint</h1>
    <Checkpoint questions={questions}/>
  </>}
}
