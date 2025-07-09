import Checkpoint, { QUESTION_TYPES } from "../../components/Checkpoint";
const questions = [
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx:<p>How do you write constant time complexity in Big O notation?</p>,
    answers: [
      "O(1)",
      "O(n)",
      "O(n^2)"
    ],
    correctAnswer: 0
  },
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx:<p>How do you write linear time complexity in Big O notation?</p>,
    answers: [
      "O(1)",
      "O(n)",
      "O(n^2)"
    ],
    correctAnswer: 1
  },
  {
    type: QUESTION_TYPES.CHECKBOX,
    questionJsx:<p>Which of the following are polynomial functions?</p>,
    answers: [
      "O(1)",
      "O(n)",
      "O(n^2)",
      "O(2^n)",
      "O(n^k)"
    ],
    correctAnswers: [0,1,2,3,4]
  },
];

export const justEnoughMathCheckpointChapter = {
  id: 'just-enough-math-checkpoint',
  title: 'Checkpoint: Just Enough Math',
  sectionId: 'just-enough-math',
  previousChapterId: 'just-enough-math-glossary',
  content: `
## Quiz: Just Enough Math

Test your understanding of mathematical concepts for algorithms.
`,
  quiz: {
    component: () => <Checkpoint questions={questions}/>
  }
};