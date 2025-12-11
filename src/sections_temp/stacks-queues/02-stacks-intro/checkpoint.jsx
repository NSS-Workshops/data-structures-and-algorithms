import { QUESTION_TYPES } from "@nss-workshops/nss-core";

export const questions = [
  {
    type: QUESTION_TYPES.CHECKBOX,
    question: "Which of the following scenarios are best implemented using a Stack (LIFO) data structure?",
    answers: [
      "↩️ Undo feature that reverses the most recent user action",
      "📚 Hold request system for library books",
      "🌐 Browser back button navigation",
      "🖨️ Print job queue at the library",
      "💻 Function call management in programming",
      "☎️ Customer service line"
    ],
    correctAnswers: [0, 2, 4],
    explanation: {
      "↩️ Undo feature that reverses the most recent user action": "✅ Correct — Perfect LIFO use case where the last action is the first to be undone.",
      "📚 Hold request system for library books": "❌ Incorrect — This requires FIFO (Queue) for fairness.",
      "🌐 Browser back button navigation": "✅ Correct — Last visited page is first to return to (LIFO).",
      "🖨️ Print job queue at the library": "❌ Incorrect — Print jobs should be processed in order (FIFO).",
      "💻 Function call management in programming": "✅ Correct — Function calls follow LIFO pattern in call stack.",
      "☎️ Customer service line": "❌ Incorrect — Should be first-come, first-served (FIFO)."
    }
  },
  {
    type: QUESTION_TYPES.RADIO,
    question: "What is the time complexity of push, pop, and peek operations in an array-based stack implementation?",
    answers: [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n²)"
    ],
    correctAnswer: 0,
    explanation: "All stack operations (push, pop, peek) are O(1) constant time because they only work with the top element. No shifting or searching through other elements is required."
  },
  {
    type: QUESTION_TYPES.RADIO,
    question: "What does the acronym that describes stack behavior stand for?",
    answers: [
      "LIFO (Last In, First Out)",
      "FIFO (First In, First Out)",
      "LILO (Last In, Last Out)",
      "FILO (First In, Last Out)"
    ],
    correctAnswer: 0,
    explanation: "LIFO stands for Last In, First Out - the fundamental principle of stack behavior where the most recently added element is the first one to be removed."
  }
];