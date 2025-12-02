import { Checkpoint } from '@nss-workshops/nss-core';
import content from "./index.md?raw";
import example from "./example.js?raw";
import questions from "./checkpoint.jsx";

export default {
    id: "introduction",
    title: "Introduction",
    description: "Introduction to the course and fundamental concepts.",
    previousChapterId: null,
    nextChapterId: null,
    content,
    exercises: [
      {},
      { starterCode:example },
    ],
    quiz: {component: () => <>
      <h1>Checkpoint</h1>
      <Checkpoint questions={questions}/>
    </>}
}
