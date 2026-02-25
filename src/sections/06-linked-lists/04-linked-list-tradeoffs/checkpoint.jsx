import { QUESTION_TYPES } from '@nss-workshops/nss-core';

export default [
  {
    type: QUESTION_TYPES.CHECKBOX,
    questionJsx: "Which statements about array vs linked list performance are correct?",
    answers: [
      "Arrays provide O(1) random access",
      "Linked lists provide O(1) insertion at beginning",
      "Arrays require shifting elements for middle insertions",
      "Linked lists provide O(1) random access",
      "Arrays and linked lists have identical performance",
    ],
    correctAnswers: [0,1,2],
    explanation: (
    <ul>
      <li>Arrays provide O(1) random access — ✅ Correct: Arrays can access any element by index in O(1) time.</li>
      <li>Linked lists provide O(1) insertion at beginning — ✅ Correct: Just update the head pointer in O(1) time.</li>
      <li>Arrays require shifting elements for middle insertions — ✅ Correct: Elements after the insertion point must shift.</li>
      <li>Linked lists provide O(1) random access — ❌ Incorrect: You must traverse from the head, which takes O(n) time.</li>
      <li>Arrays and linked lists have identical performance — ❌ Incorrect: They have different strengths and weaknesses.</li>
    </ul>
    )
  },
  {
    type: QUESTION_TYPES.TEXT,
    questionJsx: "What is the time complexity for accessing the 50th element in a linked list?",
    correctAnswer: "O(n)",
    explanation: ("Accessing the 50th element requires traversing from the head through 49 nodes, making it **O(n)** time complexity, where n is the position of the element.")
  }
]