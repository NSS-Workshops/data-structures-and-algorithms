/*
Problem: Find First Occurrence (Binary Search Variant)

Given a sorted array that may contain duplicates, find the first occurrence of target.
*/

function searchFirst(nums, target) {
  // Initialize left and right pointers
  let left = 0;
  let right = nums.length - 1;
  let result = -1; // Store the first occurrence index
  
  // Continue searching while search space is valid
  while (left <= right) {
    // Calculate middle index (avoid overflow)
    const mid = Math.floor(left + (right - left) / 2);
    
    // Check if we found the target
    if (nums[mid] === target) {
      result = mid; // Record this occurrence
      // Continue searching left for first occurrence
      right = mid - 1;
    }
    // If target is smaller, search left half
    else if (nums[mid] > target) {
      right = mid - 1;
    }
    // If target is larger, search right half
    else {
      left = mid + 1;
    }
  }
  
  // Return first occurrence index or -1 if not found
  return result;
  
  // Time Complexity: O(log n) - we eliminate half the search space each iteration
  // Space Complexity: O(1) - only using constant extra space for pointers
}