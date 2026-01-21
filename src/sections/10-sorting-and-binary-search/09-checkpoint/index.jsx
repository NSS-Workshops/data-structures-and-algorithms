import { Checkpoint } from '@nss-workshops/nss-core';
import content from "./index.md?raw";
import questions from "./checkpoint.jsx";

export default {
    id: "sort-checkpoint",
    title: "Checkpoint",
    previousChapterId: "sort-glossary",
    nextChapterId: null,
    content,
    exercises: [],
    quiz: {component: () => <Checkpoint questions={questions}/>}
}