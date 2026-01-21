import { Checkpoint } from '@nss-workshops/nss-core';
import content from "./index.md?raw";
import questions from "./checkpoint.jsx";

export default {
    id: "sort-approaches",
    title: "Common Sorting Approaches: Bubble, Selection, Merge",
    description: "Learn about different sorting algorithms and their characteristics.",
    previousChapterId: "sort-objectives",
    nextChapterId: "sort-method",
    content,
    exercises: [],
    quiz: {component: () => <>
      <h1>Checkpoint</h1>
      <Checkpoint questions={questions}/>
    </>}
}