import { QUESTION_TYPES } from '@nss-workshops/nss-core';

export default [
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx: <p>Which sorting algorithm has O(n log n) time complexity in ALL cases (best, average, and worst) and is stable (preserves relative order of equal elements)?</p>,
    answers: [
      "Bubble Sort",
      "Selection Sort", 
      "Merge Sort",
      "Quick Sort"
    ],
    correctAnswer: 2
  }
];