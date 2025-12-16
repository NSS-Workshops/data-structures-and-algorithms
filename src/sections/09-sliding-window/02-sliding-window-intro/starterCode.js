/*
Problem: Calculate Simple Moving Average (SMA)

Given an array of stock prices and a period, calculate the Simple Moving Average
for each possible window using the sliding window technique.

Example:
prices = [100, 102, 98, 105, 103]
period = 3

Expected output: [100.0, 101.7, 102.0] 
(averages of [100,102,98], [102,98,105], [98,105,103])
*/

function calculateSMA(prices, period) {
  if (prices.length < period) return [];
  
  const smaValues = [];
  
  // TODO: Calculate sum of first window
  let windowSum = 0;
  // Your code here...
  
  // TODO: Add first SMA value
  // Your code here...
  
  // TODO: Slide window through remaining data
  // Your code here...
  
  return smaValues;
}

// Test your implementation
const testPrices = [100, 102, 98, 105, 103];
console.log("SMA values:", calculateSMA(testPrices, 3));