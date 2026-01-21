/*
Problem: Remove Element

Given an array nums and a value val, remove all occurrences of val in-place and return the new length of the array.
The order of elements can change. Do not use extra space for another array.
*/

function removeElement(nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }
  nums.length = k;
  return k;
}