/*
Problem: Maximum Sum Subarray of Size K

Given an array of integers and a number k, find the maximum sum of any contiguous subarray of size k.
*/

function maxSumSubarray(arr, k) {
  // Handle edge cases
  if (!arr || arr.length === 0 || k <= 0 || k > arr.length) {
    return 0;
  }
  
  // Calculate sum of first window
  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  
  // Initialize max sum with first window sum
  let maxSum = windowSum;
  
  // Slide the window from left to right
  for (let i = k; i < arr.length; i++) {
    // Remove the leftmost element of previous window
    // Add the rightmost element of current window
    windowSum = windowSum - arr[i - k] + arr[i];
    
    // Update maximum sum if current window sum is larger
    maxSum = Math.max(maxSum, windowSum);
  }
  
  return maxSum;
  
  // Time Complexity: O(n) - we visit each element at most twice
  // Space Complexity: O(1) - only using constant extra space
  
  // Brute force would be O(n*k) - for each position, calculate sum of k elements
  // Sliding window optimizes this to O(n) by reusing previous calculations
}