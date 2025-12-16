import { QUESTION_TYPES } from '@nss-workshops/nss-core';

export default [
  {
    type: QUESTION_TYPES.TEXT,
    questionJsx: <p>What is the time complexity of the sliding window approach for calculating a moving average over k periods in an array of n stock prices?</p>,
    correctAnswer: "O(n)",
    explanation: "The sliding window approach has O(n) time complexity. We make one pass through the array, and for each position we perform constant-time operations (one subtraction and one addition). This is much better than the naive O(nk) approach that recalculates the sum for each window."
  },
  {
    type: QUESTION_TYPES.TEXT,
    questionJsx: <p>When calculating a 20-day moving average for stock prices, which type of sliding window should you use?</p>,
    correctAnswer: "fixed",
    explanation: "You should use a fixed-size sliding window because the moving average always uses the same number of periods (20 days). The window size remains constant as it slides through the price data, making it perfect for this type of financial indicator calculation."
  }
];