import Checkpoint, { QUESTION_TYPES } from "../../components/Checkpoint";
import content  from './text/2d-arrays-intro-content.md?raw';
import example from './text/2d-arrays-intro-example.js?raw';
import completed from './text/2d-arrays-intro-completed.js?raw';


const questions = [
  {
      type: QUESTION_TYPES.RADIO,
      questionJsx:<p>What is a 2D Array?</p>,
      answers: [
        "A data structure that has been serielized",
        "A collection of images, each stored as a binary stream",
        "An array in which each of the elements is an array",
        "A nested function used only by its parent function"
      ],
      correctAnswer: 2
  },
  {
      type: QUESTION_TYPES.CHECKBOX,
      questionJsx:<p>Which of these could be a good use case for a 2D Array? (Select all that apply)</p>,
      answers: [
        "A shopping cart for an e-commerce site",
        "A spreadsheet viewer",
        "A collection of recipes, each with steps and ingredients",
        "A QR Code generator"
      ],
      correctAnswers: [1,3]
  }
];

export const twoDArraysIntroChapter = {
  id: '2d-arrays-intro',
  title: 'Introduction to 2D Arrays',
  sectionId: '2d-arrays',
  previousChapterId: '2d-arrays-learning-objectives',
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
  },
};