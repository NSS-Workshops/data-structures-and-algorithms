import { Checkpoint, QUESTION_TYPES } from '@nss-workshops/nss-core';

const questions = [
  // ✅ SCENARIO 1
  {
    type: QUESTION_TYPES.RADIO,
    question: "You're building a ride-share app where users are matched in the order they request a ride. Which data structure would best model this?",
    options: [
      "Stack – LIFO for faster access",
      "Linked List – Flexible insert/delete",
      "Queue – FIFO to serve in order",
      "Hash Map – Match by request ID"
    ],
    correctAnswer: "Queue – FIFO to serve in order"
  },

  // ✅ SCENARIO 2
  {
    type: QUESTION_TYPES.RADIO,
    question: "You're building a browser navigation feature. Users should be able to move backward and forward through visited pages. Which structure fits best?",
    options: [
      "Singly Linked List",
      "Queue",
      "Doubly Linked List",
      "Stack"
    ],
    correctAnswer: "Doubly Linked List"
  },

  // ✅ BIG O 1
  {
    type: QUESTION_TYPES.RADIO,
    question: "What is the time complexity of accessing an element by index in a singly linked list?",
    options: [
      "O(1) – Constant time",
      "O(log n) – Logarithmic time",
      "O(n) – Linear time",
      "O(n²) – Quadratic time"
    ],
    correctAnswer: "O(n) – Linear time"
  },

  // ✅ BIG O 2
  {
    type: QUESTION_TYPES.RADIO,
    question: "What is the time complexity of inserting a node at the head of a singly linked list?",
    options: [
      "O(1) – Constant time",
      "O(n) – Linear time",
      "O(log n) – Logarithmic time",
      "O(n²) – Quadratic time"
    ],
    correctAnswer: "O(1) – Constant time"
  },

  // ✅ CODE SNIPPET 1
  {
    type: QUESTION_TYPES.RADIO,
    question: "Fill in the blanks to iterate through a singly linked list:\n\n```\nlet current = head;\nwhile (__________) {\n  console.log(current.value);\n  current = __________;\n}\n```",
    options: [
      "`current !== null`, `current.next`",
      "`head !== null`, `head.next`",
      "`current === null`, `next.next.next`",
      "`current !== undefined`, `head.next.value`"
    ],
    correctAnswer: "`current !== null`, `current.next`"
  },

  // ✅ CODE SNIPPET 2
  {
    type: QUESTION_TYPES.RADIO,
    question: "What code correctly adds a node with value `val` to the head of a singly linked list?\n\n```\nlet newNode = new Node(val);\nnewNode.next = ____________;\nhead = ____________;\n```",
    options: [
      "`null`, `newNode`",
      "`head`, `newNode`",
      "`newNode`, `head`",
      "`head.next`, `newNode`"
    ],
    correctAnswer: "`head`, `newNode`"
  }
];

export default function LinkedListsCheckpoint() {
  return (
    <Checkpoint
      title="Quiz: Linked Lists"
      questions={questions}
    />
  );
}