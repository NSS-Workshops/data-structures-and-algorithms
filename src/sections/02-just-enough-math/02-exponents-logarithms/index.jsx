import { Checkpoint } from '@nss-workshops/nss-core';
import content from "./index.md?raw";
import questions from "./checkpoint.jsx";

export default {
    id: "exponents-logarithms",
    title: "Exponents and Logarithms",
    description: "Understanding exponential and logarithmic growth patterns in algorithm analysis.",
    previousChapterId: "polynomials",
    nextChapterId: "combinations-permutations",
    content,
    exercises: [],
    quiz: {component: () => <>
      <h1>Checkpoint</h1>
      <Checkpoint questions={questions}/>
    </>}
}