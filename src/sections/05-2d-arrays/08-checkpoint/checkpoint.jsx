import { QUESTION_TYPES } from "@nss-workshops/nss-core";

export default [
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx: "In JavaScript, what is the correct way to access an element at the second row, first column of a 2D Array called myArray?",
    answers: [
      "myArray[2][1]",
      "myArray[2,1]",
      "myArray[1][0]",
      "myArray[0][1]"
    ],
    correctAnswer: 2
  },
  {
    type: QUESTION_TYPES.CHECKBOX,
    questionJsx: "Which of the following are recommended methods for creating a 2D array in JavaScript?",
    answers: [
      "Using literal notation with nested arrays",
      "Using Array.from() with a fill value",
      "Using the new Array(rows, columns) constructor",
      "Using nested loops to populate values",
      "Using the Math.toArray() method"
    ],
    correctAnswers: [0, 1, 3]
  },
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx: "When working with 2D arrays in JavaScript, which of these is a useful performance consideration?",
    answers: [
      "Accessing elements column by column is faster than row by row",
      "Accessing elements row by row is usually faster than column by column",
      "You should traverse by whichever dimension is shorter",
      "Diagonal traversal is always the most efficient"
    ],
    correctAnswer: 1
  },
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx: "What is the purpose of using direction arrays in grid traversal?",
    answers: [
      "To make the code more readable",
      "To cache the grid's dimensions",
      "To efficiently specify movement patterns",
      "To insert a new row or column"
    ],
    correctAnswer: 2
  }
];