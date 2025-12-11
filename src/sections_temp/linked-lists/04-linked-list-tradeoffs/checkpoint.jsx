import { Checkpoint, QUESTION_TYPES } from '@nss-workshops/nss-core';

const questions = [
  {
    type: QUESTION_TYPES.CHECKBOX,
    question: "Which statements about array vs linked list performance are correct?",
    options: [
      "Arrays provide O(1) random access",
      "Linked lists provide O(1) insertion at beginning",
      "Arrays require shifting elements for middle insertions",
      "Linked lists provide O(1) random access",
      "Arrays and linked lists have identical performance",
      "Linked lists use less memory than arrays"
    ],
    correctAnswers: [
      "Arrays provide O(1) random access",
      "Linked lists provide O(1) insertion at beginning",
      "Arrays require shifting elements for middle insertions"
    ],
    explanation: {
      "Arrays provide O(1) random access": "✅ Correct — Arrays can access any element by index in O(1) time.",
      "Linked lists provide O(1) insertion at beginning": "✅ Correct — Just update head pointer in O(1) time.",
      "Arrays require shifting elements for middle insertions": "✅ Correct — Elements after insertion point must shift.",
      "Linked lists provide O(1) random access": "❌ Incorrect — Must traverse from head, O(n) time.",
      "Arrays and linked lists have identical performance": "❌ Incorrect — They have different strengths and weaknesses.",
      "Linked lists use less memory than arrays": "❌ Incorrect — Extra pointers increase memory usage."
    }
  },
  {
    type: QUESTION_TYPES.TEXT,
    question: "What is the time complexity for accessing the 50th element in a linked list?",
    correctAnswer: "O(n)",
    explanation: "Accessing the 50th element requires traversing from the head through 49 nodes, making it **O(n)** time complexity, where n is the position of the element."
  }
];

export default function LinkedListTradeoffsCheckpoint() {
  return (
    <Checkpoint
      title="Playlist Performance Questions"
      questions={questions}
    />
  );
}