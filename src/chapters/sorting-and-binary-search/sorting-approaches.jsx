import Checkpoint, { QUESTION_TYPES } from "../../components/Checkpoint";
import content  from './text/sorting-approaches-content.md?raw';

const questions = [
  {
      type: QUESTION_TYPES.RADIO,
      questionJsx:<p>Which sorting algorithm has O(n log n) time complexity in ALL cases (best, average, and worst) and is stable (preserves relative order of equal elements)?</p>,
      answers: [
        "Bubble Sort",
        "Selection Sort",
        "Merge Sort",
        "Quick Sort"
      ],
      correctAnswer: 2
  }
];

export const sortingApproachesChapter = {
  id: 'sorting-approaches',
  title: 'Common Sorting Approaches: Bubble, Selection, Merge',
  sectionId: 'sorting-and-binary-search',
  previousChapterId: 'sorting-binary-search-learning-objectives',
  content: content,
  exercise: null,
  quiz: {
    component: () => <>
      <h1>Checkpoint</h1>
      <Checkpoint questions={questions}/>
    </>
  }
};