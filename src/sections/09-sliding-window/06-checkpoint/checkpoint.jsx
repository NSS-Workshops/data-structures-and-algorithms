import { QUESTION_TYPES } from '@nss-workshops/nss-core';

export default [
  {
    type: QUESTION_TYPES.TEXT,
    questionJsx: <p>What is the time complexity of the sliding window approach for calculating a 20-day moving average on n days of stock price data?</p>,
    correctAnswer: "O(n)",
    explanation: "The sliding window approach has O(n) time complexity. We make one pass through the data, performing constant-time operations (one subtraction and one addition) for each window slide. This is much better than the naive O(n×k) approach that recalculates the sum for each window."
  },
  {
    type: QUESTION_TYPES.TEXT,
    questionJsx: <p>Complete this sliding window code for calculating moving averages: windowSum = windowSum - prices[i - k] + prices[i]</p>,
    correctAnswer: "windowSum = windowSum - prices[i - k] + prices[i]",
    explanation: "windowSum = windowSum - prices[i - k] + prices[i] is correct. We subtract the price leaving the window (prices[i - k]) and add the price entering the window (prices[i]). This maintains the running sum efficiently without recalculating the entire window."
  },
  {
    type: QUESTION_TYPES.TEXT,
    questionJsx: <p>Which type of sliding window should you use for problems like "find the longest trading period with at least 15% return"?</p>,
    correctAnswer: "variable",
    explanation: "You should use a variable-size sliding window (two-pointer technique). This approach expands and contracts the window based on performance conditions, making it perfect for optimization problems where you're looking for the best trading period of flexible length."
  },
  {
    type: QUESTION_TYPES.TEXT,
    questionJsx: <p>When tracking dynamic categories (like sectors or currencies) in portfolio analysis, what JavaScript data structure is most appropriate for frequency counting?</p>,
    correctAnswer: "Map",
    explanation: "A Map is most appropriate for tracking dynamic categories. Maps handle unknown keys efficiently, provide better performance for frequent additions/deletions, and make it easy to delete keys when their count reaches zero, preventing memory leaks in financial analysis applications."
  },
  {
    type: QUESTION_TYPES.TEXT,
    questionJsx: <p>When calculating a 30-day rolling volatility for risk management, which type of sliding window should you use?</p>,
    correctAnswer: "fixed",
    explanation: "You should use a fixed-size sliding window because volatility calculations require a consistent time period (30 days). The window size remains constant as it slides through the price data, making it perfect for this type of financial risk indicator."
  }
];