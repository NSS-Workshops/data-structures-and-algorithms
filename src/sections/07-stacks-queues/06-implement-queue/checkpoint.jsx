import { QUESTION_TYPES } from "@nss-workshops/nss-core";

export default [
  {
    type: QUESTION_TYPES.CHECKBOX,
    questionJsx: "Why is an array-based stack implementation efficient in JavaScript?",
    answers: [
      "🐌 Simple array shift() is O(n) operation",
      "📦 Arrays cannot store objects",
      "↔️ All elements must be moved when dequeuing",
      "💻 JavaScript arrays are inherently slow",
      "📉 Performance degrades with queue size",
      "💾 Memory usage is too high"
    ],
    correctAnswers: [0, 2, 4]
  },
  {
    type: QUESTION_TYPES.TEXT,
    questionJsx: "What mathematical concept is used in circular queue implementation to wrap around when reaching the end of the array?",
    correctAnswer: "Modular arithmetic",
  },
  {
    type: QUESTION_TYPES.TEXT,
    questionJsx: "What is the time complexity of enqueue and dequeue operations in a properly implemented circular array queue?",
    correctAnswer: "O(1)"
  } 
];