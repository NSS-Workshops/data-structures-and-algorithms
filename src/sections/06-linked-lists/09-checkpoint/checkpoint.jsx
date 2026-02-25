import { QUESTION_TYPES } from '@nss-workshops/nss-core';

export default [
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
    questionJsx: <div>
  <p>Fill in the blanks to iterate through a singly linked list:</p>
  <pre>
{`let current = head;
while (_________) {
  console.log(current.value);
  current = __________;
}`}
  </pre>
</div>,
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
    questionJsx: <div>
  <p>
    What code correctly adds a node with value <code>val</code> to the head of a singly linked list?
  </p>
  <pre>
{`let newNode = new Node(val);
newNode.next = ____________;
head = ____________;
`}
  </pre>
</div>,
    answers: [
      "`null`, `newNode`",
      "`head`, `newNode`",
      "`newNode`, `head`",
      "`head.next`, `newNode`"
    ],
    correctAnswer: 1
  }
];