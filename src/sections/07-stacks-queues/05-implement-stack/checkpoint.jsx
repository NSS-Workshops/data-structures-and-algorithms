import { QUESTION_TYPES } from "@nss-workshops/nss-core";

export default [
  {
    type: QUESTION_TYPES.CHECKBOX,
    questionJsx: "Why is an array-based stack implementation efficient in JavaScript?",
    answers: [
      "➕ push() adds to end of array",
      "🔄 Arrays automatically sort elements",
      "➖ pop() removes from end of array",
      "♾️ Arrays have unlimited capacity",
      "🚫 No shifting of elements needed",
      "⚡ JavaScript optimizes array operations"
    ],
    correctAnswers: [0, 2, 4]
  },
  {
    type: QUESTION_TYPES.TEXT,
    questionJsx: "In the BookCart implementation, what does the processNextBook() method return when the cart is empty?",
    correctAnswer: "null",
  },
  {
    type: QUESTION_TYPES.TEXT,
    questionJsx: "What is the name of the stack operation that allows you to look at the top element without removing it?",
    correctAnswer: "peek"
  } 
];