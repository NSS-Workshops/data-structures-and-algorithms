import { QUESTION_TYPES } from '@nss-workshops/nss-core';

export default [
  {
    type: QUESTION_TYPES.CHECKBOX,
    questionJsx: "Which statements about different linked list types are correct?",
    answers: [
      "⟷ Doubly linked lists enable bidirectional navigation",
      "🔄 Circular linked lists create infinite loops",
      "💾 Singly linked lists use less memory per node",
      "⚡ All linked list types have the same performance characteristics",
      "🚫 Circular linked lists cannot be traversed",
      "📈 Doubly linked lists require more memory than singly linked lists"
    ],
    correctAnswers: [0,1,2],
    // explanation: {
    //   "⟷ Doubly linked lists enable bidirectional navigation": "✅ Correct — Doubly linked lists have both next and prev pointers.",
    //   "🔄 Circular linked lists create infinite loops": "✅ Correct — Circular lists loop back to the beginning.",
    //   "💾 Singly linked lists use less memory per node": "✅ Correct — Singly linked lists only need one pointer per node.",
    //   "⚡ All linked list types have the same performance characteristics": "❌ Incorrect — Different types have different performance characteristics.",
    //   "🚫 Circular linked lists cannot be traversed": "❌ Incorrect — Circular lists can be traversed with proper loop detection.",
    //   "📈 Doubly linked lists require more memory than singly linked lists": "✅ Correct — Two pointers per node vs one."
    // }
  },
  {
    type: QUESTION_TYPES.TEXT,
    questionJsx: "In a doubly linked list, what property allows backward navigation from any node?",
    correctAnswer: "prev",
    explanation: "The **prev** (or previous) pointer in each node allows backward navigation, making doubly linked lists bidirectional."
  }
];