import { Checkpoint } from '@nss-workshops/nss-core';
import content from "./index.md?raw";
import questions from "./checkpoint.jsx";

export default {
    id: "polynomials",
    title: "Polynomials",
    description: "Mathematical expressions and their role in analyzing algorithm growth rates.",
    previousChapterId: null,
    nextChapterId: "exponents-logarithms",
    content,
    exercises: [],
    quiz: {component: () => <>
      <h1>Checkpoint</h1>
      <Checkpoint questions={questions}/>
    </>}
}