import { Checkpoint, QUESTION_TYPES } from "@nss-workshops/nss-core";
import content  from './text/indexing-content.md?raw';
import example from './text/indexing-example.js?raw';
import completed from './text/indexing-completed.js?raw';

const questions = [
  {
      type: QUESTION_TYPES.RADIO,
      questionJsx:<p>What is bounds checking?</p>,
      answers: [
        "Passing a clone of an array to avoid overwriting the original data",
        "Finding the amount of space an array takes up in memory",
        "Confirming a user or client has permission to edit a specified data structure",
        "Verifying that a specified element exists in an array to avoid errors"
      ],
      correctAnswer: 3
  },
  {
      type: QUESTION_TYPES.RADIO,
      questionJsx:<p>Does Javascript allow jagged arrays?</p>,
      answers: [
        "Yes, though they are less common.",
        "No. JavaScript is highly type-safe and requires rigid structure.",
        "Yes. All arrays in JavaScript must be jagged.",
        "No. Jagged arrays violate Crispin's law, so they can't be used in any programming language."
      ],
      correctAnswer: 0
  }
];

export const indexingAndBoundsChapter = {
  id: 'indexing-and-bounds',
  title: 'Indexing and Bounds Checking in Grids',
  sectionId: '2d-arrays',
  previousChapterId: '2d-arrays-intro',
  content: content,
  exercise: {
      starterCode: example,
      solution: completed,
  },
  quiz: {
    component: () => <>
      <h1>Checkpoint</h1>
      <Checkpoint questions={questions}/>
    </>
  }
};