import { Checkpoint } from '@nss-workshops/nss-core';
import content from "./index.md?raw";
import questions from "./checkpoint.jsx";

export default {
    id: "combinations-permutations",
    title: "Combinations and Permutations",
    description: "Understanding how to count and organize groups of data with and without order constraints.",
    previousChapterId: "exponents-logarithms",
    nextChapterId: "just-enough-math-glossary",
    content,
    exercises: [],
    quiz: {component: () => <>
      <h1>Checkpoint</h1>
      <Checkpoint questions={questions}/>
    </>}
}