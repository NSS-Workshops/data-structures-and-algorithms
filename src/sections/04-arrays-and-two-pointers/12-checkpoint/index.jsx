import { Checkpoint } from '@nss-workshops/nss-core';
import questions from "./checkpoint.jsx";

export default {
  id: "arrays-and-two-pointers-checkpoint",
  title: "Checkpoint: Arrays and Two Pointers",
  description: "Test your understanding of arrays and two-pointer techniques.",
  previousChapterId: "arrays-and-two-pointers-glossary",
  nextChapterId: null,
  content: `Test your understanding of arrays and two-pointer techniques.`,
  exercises: [],
  quiz: {component: () => <>
    <Checkpoint questions={questions}/>
  </>}
};