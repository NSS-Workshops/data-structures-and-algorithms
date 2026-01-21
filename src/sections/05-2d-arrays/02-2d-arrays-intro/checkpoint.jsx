import { QUESTION_TYPES } from "@nss-workshops/nss-core";

export default [
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx: "What is a 2D Array?",
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
    questionJsx: "Which of these could be a good use case for a 2D Array? (Select all that apply)",
    answers: [
      "A shopping cart for an e-commerce site",
      "A spreadsheet viewer",
      "A collection of recipes, each with steps and ingredients",
      "A QR Code generator"
    ],
    correctAnswers: [1, 3]
  }
];