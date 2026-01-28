import { QUESTION_TYPES } from "@nss-workshops/nss-core";

export default [
  {
    type: QUESTION_TYPES.CHECKBOX,
    questionJsx: "Which of the following scenarios require a Queue (FIFO) data structure to ensure fairness?",
    answers: [
      "⚡ Performance requirements",
      "🎨 Code aesthetics and style",
      "👥 Team capabilities and experience",
      "💻 Programming language preference",
      "📈 Scalability needs",
      "👤 Personal coding preferences"
    ],
    correctAnswers: [0, 2, 4]
  },
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx: "In a queue, elements are removed from which end?",
    answers: [
      "O(1) - Constant time",
      "O(log n) - Logarithmic time",
      "O(n) - Linear time",
      "O(n²) - Quadratic time"
    ],
    correctAnswer: 2,
  },
  {
    type: QUESTION_TYPES.CHECKBOX,
    questionJsx: "Why do circular array queues and linked list queues both maintain O(1) time complexity for enqueue and dequeue operations, while simple array queues have O(n) dequeue operations?",
    answers: [
      "🔄 Circular array queues use front/rear pointers and modular arithmetic to avoid shifting elements",
      "📊 Simple arrays are inherently faster for small datasets",
      "🔗 Linked list queues update pointers without moving existing elements",
      "💾 Memory allocation patterns determine the time complexity",
      "💻 The programming language determines the time complexity"
    ],
    correctAnswers: [0, 2]
  } 
];