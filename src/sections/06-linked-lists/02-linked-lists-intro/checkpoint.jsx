import { QUESTION_TYPES } from '@nss-workshops/nss-core';

export default [
  {
    type: QUESTION_TYPES.CHECKBOX,
    questionJsx: "Which of the following are key characteristics of linked lists?",
    answers: [
      "🔗 Each node contains data and a reference to the next node",
      "📦 Elements are stored in contiguous memory locations",
      "⚡ Insertions and deletions only require changing connections",
      "🎯 Random access to elements is O(1)",
      "➡️ Sequential access through following next pointers",
      "📏 Fixed size determined at creation time"
    ],
    correctAnswers: [0,2,4]
    // explanation: {
    //   "🔗 Each node contains data and a reference to the next node": "✅ Correct — Each node contains data and a next reference.",
    //   "📦 Elements are stored in contiguous memory locations": "❌ Incorrect — Linked lists use non-contiguous memory.",
    //   "⚡ Insertions and deletions only require changing connections": "✅ Correct — Only connections need to change.",
    //   "🎯 Random access to elements is O(1)": "❌ Incorrect — Random access is O(n) in linked lists.",
    //   "➡️ Sequential access through following next pointers": "✅ Correct — Must follow next pointers to traverse.",
    //   "📏 Fixed size determined at creation time": "❌ Incorrect — Linked lists are dynamic in size."
    // }
  },
  {
    type: QUESTION_TYPES.TEXT,
    questionJsx: "What is the time complexity for accessing the 50th song in a linked list playlist?",
    correctAnswer: "O(n)",
    explanation: "Accessing the 50th element requires traversing from the head through 49 connections, making it **O(n)** time complexity. Unlike arrays which provide O(1) random access, linked lists require sequential traversal."
  }
];