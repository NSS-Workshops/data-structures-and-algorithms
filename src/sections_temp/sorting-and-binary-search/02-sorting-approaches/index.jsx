import { Checkpoint } from '@nss-workshops/nss-core';
import content from "./index.md?raw";
import questions from "./checkpoint.jsx";

export default {
    id: "sorting-approaches",
    title: "Common Sorting Approaches: Bubble, Selection, Merge",
    description: "Learn about different sorting algorithms and their characteristics.",
    previousChapterId: "sorting-binary-search-learning-objectives",
    nextChapterId: "sort-method",
    content,
    exercises: [],
    quiz: {component: () => <>
      <h1>Checkpoint</h1>
      <Checkpoint questions={questions}/>
    </>}
}