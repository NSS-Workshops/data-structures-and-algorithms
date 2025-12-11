import { QUESTION_TYPES } from '@nss-workshops/nss-core';

export default [
  // ✅ SCENARIO 1
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx: "You're building a ride-share app where users are matched in the order they request a ride. Which data structure would best model this?",
    answers: [
      "Stack – LIFO for faster access",
      "Linked List – Flexible insert/delete",
      "Queue – FIFO to serve in order",
      "Hash Map – Match by request ID"
    ],
    correctAnswer: 2
  },

  // ✅ SCENARIO 2
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx: "You're building a browser navigation feature. Users should be able to move backward and forward through visited pages. Which structure fits best?",
    answers: [
      "Singly Linked List",
      "Queue",
      "Doubly Linked List",
      "Stack"
    ],
    correctAnswer: 2
  },

  // ✅ BIG O 1
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx: "What is the time complexity of accessing an element by index in a singly linked list?",
    answers: [
      "O(1) – Constant time",
      "O(log n) – Logarithmic time",
      "O(n) – Linear time",
      "O(n²) – Quadratic time"
    ],
    correctAnswer:2
  },

  // ✅ BIG O 2
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx: "What is the time complexity of inserting a node at the head of a singly linked list?",
    answers: [
      "O(1) – Constant time",
      "O(n) – Linear time",
      "O(log n) – Logarithmic time",
      "O(n²) – Quadratic time"
    ],
    correctAnswer: 0
  },

  // ✅ CODE SNIPPET 1
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx: "Fill in the blanks to iterate through a singly linked list:\n\n```\nlet current = head;\nwhile (__________) {\n  console.log(current.value);\n  current = __________;\n}\n```",
    answers: [
      "`current !== null`, `current.next`",
      "`head !== null`, `head.next`",
      "`current === null`, `next.next.next`",
      "`current !== undefined`, `head.next.value`"
    ],
    correctAnswer: 0
  },

  // ✅ CODE SNIPPET 2
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx: "What code correctly adds a node with value `val` to the head of a singly linked list?\n\n```\nlet newNode = new Node(val);\nnewNode.next = ____________;\nhead = ____________;\n```",
    answers: [
      "`null`, `newNode`",
      "`head`, `newNode`",
      "`newNode`, `head`",
      "`head.next`, `newNode`"
    ],
    correctAnswer: 1
  }
];