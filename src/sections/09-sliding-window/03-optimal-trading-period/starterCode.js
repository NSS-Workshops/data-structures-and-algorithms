/*
Problem: Find Longest Period with Consistent Growth

Given an array of daily portfolio values, find the longest consecutive period
where the portfolio shows consistent growth (each day's value >= previous day's value).

Example:
portfolioValues = [100, 102, 105, 103, 107, 110, 115, 112, 118, 120]

Find the longest subarray where values are non-decreasing.
*/

function findLongestGrowthPeriod(portfolioValues) {
  if (portfolioValues.length <= 1) return { startDay: 0, endDay: 0, length: portfolioValues.length };
  
  let maxLength = 1;
  let bestPeriod = { startDay: 0, endDay: 0, length: 1 };
  
  // TODO: Implement variable-size sliding window
  // Hint: Expand window while values are non-decreasing
  // Reset when growth stops
  
  let currentStart = 0;
  
  for (let i = 1; i < portfolioValues.length; i++) {
    // TODO: Check if current value maintains growth
    // If not, update best period and reset window
    // Your code here...
  }
  
  return bestPeriod;
}

// Test your implementation
const testValues = [100, 102, 105, 103, 107, 110, 115, 112, 118, 120];
console.log("Longest growth period:", findLongestGrowthPeriod(testValues));