import { QUESTION_TYPES } from '@nss-workshops/nss-core';

export default [
  {
    type: QUESTION_TYPES.CHECKBOX,
    questionJsx: "Which are best practices for safe linked list traversal?",
    answers: [
      "🔒 Use a separate current pointer to preserve the head",
      "✅ Always check for null before accessing node properties",
      "🔄 The basic while loop pattern works for most traversal operations",
      "❌ Modify the head pointer directly during traversal",
      "⚡ Skip null checks for better performance"
    ],
    correctAnswers: [0,1,2],
    // explanation: {
    //   "🔒 Use a separate current pointer to preserve the head": "✅ Correct — Preserves the original head reference.",
    //   "✅ Always check for null before accessing node properties": "✅ Correct — Prevents crashes when accessing properties.",
    //   "🔄 The basic while loop pattern works for most traversal operations": "✅ Correct — The fundamental traversal approach.",
    //   "❌ Modify the head pointer directly during traversal": "❌ Incorrect — This loses the original reference.",
    //   "⚡ Skip null checks for better performance": "❌ Incorrect — This can cause runtime errors."
    // }
  }
];