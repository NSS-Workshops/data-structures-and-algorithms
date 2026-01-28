import { QUESTION_TYPES } from "@nss-workshops/nss-core";

export default [
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx: "What is bounds checking?",
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
    questionJsx: "Does Javascript allow jagged arrays?",
    answers: [
      "Yes, though they are less common.",
      "No. JavaScript is highly type-safe and requires rigid structure.",
      "Yes. All arrays in JavaScript must be jagged.",
      "No. Jagged arrays violate Crispin's law, so they can't be used in any programming language."
    ],
    correctAnswer: 0
  }
];