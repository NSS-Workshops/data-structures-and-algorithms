import { QUESTION_TYPES } from '@nss-workshops/nss-core';

export default [
  {
    type: QUESTION_TYPES.TEXT,
    questionJsx: <p>Complete the missing condition in this variable-size sliding window code that detects when portfolio growth stops:</p>,
    correctAnswer: "portfolioValues[i] < portfolioValues[i - 1]",
    explanation: "The condition portfolioValues[i] < portfolioValues[i - 1] detects when the current value is less than the previous value, indicating that the growth period has ended. This triggers the window reset logic in the variable-size sliding window algorithm."
  },
  {
    type: QUESTION_TYPES.TEXT,
    questionJsx: <p>What is the time complexity of the variable-size sliding window algorithm for finding the longest growth period?</p>,
    correctAnswer: "O(n)",
    explanation: "The time complexity is O(n) where n is the length of the portfolio values array. Even though this is a variable-size sliding window, we only make one pass through the array with a single loop. Each element is visited exactly once, and the window reset operations are constant time, resulting in linear time complexity."
  }
];