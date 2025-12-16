/*
Problem: Find Longest Period with Consistent Growth

Complete solution using variable-size sliding window to find
the longest consecutive period of non-decreasing portfolio values.
*/

function findLongestGrowthPeriod(portfolioValues) {
  if (portfolioValues.length <= 1) return { startDay: 0, endDay: 0, length: portfolioValues.length };
  
  let maxLength = 1;
  let bestPeriod = { startDay: 0, endDay: 0, length: 1 };
  let currentStart = 0;
  
  for (let i = 1; i < portfolioValues.length; i++) {
    // Check if current value maintains growth (non-decreasing)
    if (portfolioValues[i] < portfolioValues[i - 1]) {
      // Growth stopped, check if current period is the longest
      const currentLength = i - currentStart;
      if (currentLength > maxLength) {
        maxLength = currentLength;
        bestPeriod = {
          startDay: currentStart,
          endDay: i - 1,
          length: currentLength
        };
      }
      
      // Reset window start to current position
      currentStart = i;
    }
  }
  
  // Check final period (in case array ends with growth)
  const finalLength = portfolioValues.length - currentStart;
  if (finalLength > maxLength) {
    bestPeriod = {
      startDay: currentStart,
      endDay: portfolioValues.length - 1,
      length: finalLength
    };
  }
  
  return bestPeriod;
}

// Test the implementation
const testValues = [100, 102, 105, 103, 107, 110, 115, 112, 118, 120];
console.log("Longest growth period:", findLongestGrowthPeriod(testValues));