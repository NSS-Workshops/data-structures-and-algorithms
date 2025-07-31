import Checkpoint, { QUESTION_TYPES } from "../../components/Checkpoint";
import content  from './text/neighbors-content.md?raw';
import example from './text/neighbors-example.js?raw';
import completed from './text/neighbors-completed.js?raw';


const questions = [
  {
      type: QUESTION_TYPES.RADIO,
      questionJsx:<p>How do we typically work with neighboring elements in arrays?</p>,
      answers: [
        "Map the array to multiple copies with the elements offset",
        "Target the different adjacent elements using a direction array",
        "Iterate through all elements and check each for adjacency",
        "Store these spatial relationships in a lookup table"
      ],
      correctAnswer: 1
  }
];

export const findingNeighborsChapter = {
  id: 'finding-neighbors',
  title: 'Finding Neighbors (Up/Down/Left/Right)',
  sectionId: '2d-arrays',
  previousChapterId: 'indexing-and-bounds',
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