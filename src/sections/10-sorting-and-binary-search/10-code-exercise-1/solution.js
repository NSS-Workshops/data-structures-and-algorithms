/*
Problem: Binary Search

Given a sorted array of integers and a target value, return the index of the target if it exists.
If the target doesn't exist, return -1.
*/

function search(nums, target) {
  // Initialize left and right pointers
  let left = 0;
  let right = nums.length - 1;
  
  // Continue searching while search space is valid
  while (left <= right) {
    // Calculate middle index (avoid overflow)
    const mid = Math.floor(left + (right - left) / 2);
    
    // Check if we found the target
    if (nums[mid] === target) {
      return mid;
    }
    
    // If target is smaller, search left half
    if (nums[mid] > target) {
      right = mid - 1;
    } 
    // If target is larger, search right half
    else {
      left = mid + 1;
    }
  }
  
  // Target not found
  return -1;
  
  // Time Complexity: O(log n) - we eliminate half the search space each iteration
  // Space Complexity: O(1) - only using constant extra space for pointers
}