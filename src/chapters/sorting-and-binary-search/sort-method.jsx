import { Checkpoint, QUESTION_TYPES } from "@nss-workshops/nss-core";
import content  from './text/sort-method-content.md?raw';
import example from './text/sort-method-example.js?raw';
import completed from './text/sort-method-completed.js?raw';

const questions = [
  {
      type: QUESTION_TYPES.RADIO,
      questionJsx:<p>When implementing multi-level sorting (e.g., sort by artist, then by year within each artist), what is the correct approach in your comparator function?</p>,
      answers: [
        "Always sort by the primary criterion only",
        "Compare the primary criterion first; if equal, then compare the secondary criterion",
        "Sort by secondary criterion first, then primary criterion",
        "Use separate sort() calls for each criterion"
      ],
      correctAnswer: 1
  }
];

export const sortMethodChapter = {
  id: 'sort-method',
  title: 'Using .sort() with Comparators',
  sectionId: 'sorting-and-binary-search',
  previousChapterId: 'sorting-approaches',
  content: content,
  exercise: {
      starterCode: example,
      solution: completed,
      question: `
  # Exercise Question
      `,
      solution_explanation: `
  # Solution Explanation
  it goes like this
      `
    },
  quiz: {
    component: () => <>
      <h1>Checkpoint</h1>
      <Checkpoint questions={questions}/>
    </>
  }
};