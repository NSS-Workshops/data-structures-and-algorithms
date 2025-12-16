/*
Problem: Calculate Simple Moving Average (SMA)

Complete solution using sliding window technique for financial analysis.
*/

function calculateSMA(prices, period) {
  if (prices.length < period) return [];
  
  const smaValues = [];
  
  // Calculate sum of first window
  let windowSum = 0;
  for (let i = 0; i < period; i++) {
    windowSum += prices[i];
  }
  
  // Add first SMA value
  smaValues.push(Number((windowSum / period).toFixed(1)));
  
  // Slide window through remaining data
  for (let i = period; i < prices.length; i++) {
    // Remove oldest price, add newest price
    windowSum = windowSum - prices[i - period] + prices[i];
    smaValues.push(Number((windowSum / period).toFixed(1)));
  }
  
  return smaValues;
}

// Test the implementation
const testPrices = [100, 102, 98, 105, 103];
console.log("SMA values:", calculateSMA(testPrices, 3)); // Should output [100.0, 101.7, 102.0]