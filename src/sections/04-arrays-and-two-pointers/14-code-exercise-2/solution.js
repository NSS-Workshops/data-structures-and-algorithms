/*
Problem: Remove Duplicates from Sorted Array

Given a sorted array, remove duplicates in-place and return the new length. You must modify the array in-place with O(1) extra space.

Follow-up Questions:
- What is the time complexity of your solution?
- What is the space complexity?
*/

function removeDuplicates(nums) {
  // Remove duplicates from sorted array in-place
  // Requirements:
  // - Array is sorted in ascending order
  // - Remove duplicates in-place (modify original array)
  // - Return new length after removing duplicates
  // - First k elements should contain unique elements
  // - Use O(1) extra space complexity
  // - Use two-pointer technique
  //
  // Example:
  // Input: nums = [1, 1, 2, 2, 3]
  // Output: 3 (array becomes [1, 2, 3, _, _], return 3)
  
  // Handle edge case: empty array
  if (nums.length === 0) {
    return 0;
  }
  
  // Initialize slow pointer
  let i = 0;
  
  // Fast pointer starts from second element
  for (let j = 1; j < nums.length; j++) {
    // If current element is different from previous unique element
    if (nums[j] !== nums[i]) {
      // Move slow pointer and update with new unique element
      i++;
      nums[i] = nums[j];
    }
  }
  
  // Truncate array to new length
  nums.length = i + 1;
  
  // Return new length (i + 1 because i is 0-indexed)
  return i + 1;
  
  // Time Complexity: O(n) - we visit each element once
  // Space Complexity: O(1) - only using constant extra space
}