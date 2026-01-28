import { QUESTION_TYPES } from '@nss-workshops/nss-core';

export default [
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx: <p>When using binary search to find the FIRST occurrence of a target value in a sorted array with duplicates, what should you do when you find a match?</p>,
    answers: [
      "Return the index immediately since you found the target",
      "Continue searching in the right half to find more occurrences",
      "Save the current index as a potential result and continue searching in the left half",
      "Check both left and right halves simultaneously"
    ],
    correctAnswer: 2
  },
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx: <p>What does the "insertion point" variant of binary search help you find?</p>,
    answers: [
      "The exact location where a duplicate element exists",
      "The position where a new element should be inserted to maintain sorted order",
      "The middle element of any array",
      "The last occurrence of a target element"
    ],
    correctAnswer: 1
  }
];