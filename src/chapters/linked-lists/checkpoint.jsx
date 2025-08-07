import Checkpoint, { QUESTION_TYPES } from "../../components/Checkpoint";

const questions = [
  // ✅ SCENARIO 1
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx: (
      <p>
        You’re building a ride-share app where users are matched in the order
        they request a ride. Which data structure would best model this?
      </p>
    ),
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
    questionJsx: (
      <p>
        You’re building a browser navigation feature. Users should be able to
        move backward and forward through visited pages. Which structure fits best?
      </p>
    ),
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
    questionJsx: (
      <p>
        What is the time complexity of accessing an element by index in a
        singly linked list?
      </p>
    ),
    answers: [
      "O(1) – Constant time",
      "O(log n) – Logarithmic time",
      "O(n) – Linear time",
      "O(n²) – Quadratic time"
    ],
    correctAnswer: 2
  },

  // ✅ BIG O 2
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx: (
      <p>
        What is the time complexity of inserting a node at the head of a singly
        linked list?
      </p>
    ),
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
    questionJsx: (
      <>
        <p>
          Fill in the blanks to iterate through a singly linked list:
        </p>
        <pre>{`let current = head;
while (__________) {
  console.log(current.value);
  current = __________;
}`}</pre>
      </>
    ),
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
    questionJsx: (
      <>
        <p>
          What code correctly adds a node with value <code>val</code> to the head of a singly linked list?
        </p>
        <pre>{`let newNode = new Node(val);
newNode.next = ____________;
head = ____________;`}</pre>
      </>
    ),
    answers: [
      "`null`, `newNode`",
      "`head`, `newNode`",
      "`newNode`, `head`",
      "`head.next`, `newNode`"
    ],
    correctAnswer: 1
  }
];

export const linkedListsCheckpointChapter = {
  id: 'linked-list-checkpoint',
  title: 'Checkpoint: Linked Lists',
  sectionId: 'linked-lists',
  previousChapterId: 'linked-lists-glossary',
  content: `
## Quiz: Linked Lists

Test your understanding of linked list operations, performance tradeoffs, and when to use them.
`,
  quiz: {
    component: () => <Checkpoint questions={questions} />
  }
};
