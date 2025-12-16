import { QUESTION_TYPES } from "@nss-workshops/nss-core";

export default [
  {
    type: QUESTION_TYPES.CHECKBOX,
    questionJsx: "Which of the following scenarios require a Queue (FIFO) data structure to ensure fairness?",
    answers: [
      "📚 Book return processing cart",
      "📖 Hold request system for popular books",
      "💻 Computer reservation waiting list",
      "↩️ Undo system in text editor",
      "🎫 Event registration with limited capacity",
      "🌐 Browser history navigation"
    ],
    correctAnswers: [1, 2, 4],
    // explanation: {
    //   "📚 Book return processing cart": "❌ Incorrect — Order doesn't matter for returns, Stack (LIFO) is fine.",
    //   "📖 Hold request system for popular books": "✅ Correct — First to request should be first to receive (fairness).",
    //   "💻 Computer reservation waiting list": "✅ Correct — First to sign up should get next available computer.",
    //   "↩️ Undo system in text editor": "❌ Incorrect — Should undo most recent action first (LIFO/Stack).",
    //   "🎫 Event registration with limited capacity": "✅ Correct — First to register should get priority for limited spots.",
    //   "🌐 Browser history navigation": "❌ Incorrect — Back button goes to most recent page (LIFO/Stack)."
    // }
  },
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx: "In a queue, elements are removed from which end?",
    answers: [
      "Front",
      "Back",
      "Middle",
      "Any position"
    ],
    correctAnswer: 0,
    // explanation: "In a queue, elements are always removed from the front (dequeue operation) and added to the back (enqueue operation). This maintains FIFO (First In, First Out) order."
  },
  {
    type: QUESTION_TYPES.TEXT,
    questionJsx: "What does the acronym that describes queue behavior stand for? (Enter the 4-letter acronym)",
    correctAnswer: "FIFO",
    explanation: "FIFO stands for 'First In, First Out' - the fundamental principle of queue behavior where the first element added is the first one to be removed, ensuring fairness."
  }
];