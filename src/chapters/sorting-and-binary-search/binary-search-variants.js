export const binarySearchVariantsChapter = {
  id: 'binary-search-variants',
  title: 'Binary Search Variants',
  sectionId: 'sorting-and-binary-search',
  previousChapterId: 'binary-search-fundamentals',
  content: `## Binary Search Variants

While the standard binary search algorithm finds any occurrence of a target value in a sorted array, many practical problems require variations of this algorithm. This chapter explores common binary search variants and their applications.

TBD

## Finding the First Occurrence

When a sorted array contains duplicate elements, you might need to find the first occurrence of a target value:

\`\`\`javascript
function findFirstOccurrence(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let result = -1;
  
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    
    // If target is found, save the index but continue searching left
    if (arr[mid] === target) {
      result = mid;
      right = mid - 1; // Look in the left half
    }
    // If target is greater, search right half
    else if (arr[mid] < target) {
      left = mid + 1;
    }
    // If target is smaller, search left half
    else {
      right = mid - 1;
    }
  }
  
  return result;
}

// Example
const array = [1, 2, 2, 2, 3, 4, 5, 5, 5, 6];
console.log(findFirstOccurrence(array, 2)); // Output: 1
console.log(findFirstOccurrence(array, 5)); // Output: 6
\`\`\`

TBD

## Finding the Last Occurrence

Similarly, you might need to find the last occurrence of a target value:

\`\`\`javascript
function findLastOccurrence(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let result = -1;
  
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    
    // If target is found, save the index but continue searching right
    if (arr[mid] === target) {
      result = mid;
      left = mid + 1; // Look in the right half
    }
    // If target is greater, search right half
    else if (arr[mid] < target) {
      left = mid + 1;
    }
    // If target is smaller, search left half
    else {
      right = mid - 1;
    }
  }
  
  return result;
}

// Example
const array = [1, 2, 2, 2, 3, 4, 5, 5, 5, 6];
console.log(findLastOccurrence(array, 2)); // Output: 3
console.log(findLastOccurrence(array, 5)); // Output: 8
\`\`\`

TBD

## Finding the Range of Occurrences

Using the first and last occurrence functions, you can find the range of a target value:

\`\`\`javascript
function findRange(arr, target) {
  const first = findFirstOccurrence(arr, target);
  
  // If target doesn't exist, return [-1, -1]
  if (first === -1) {
    return [-1, -1];
  }
  
  const last = findLastOccurrence(arr, target);
  return [first, last];
}

// Example
const array = [1, 2, 2, 2, 3, 4, 5, 5, 5, 6];
console.log(findRange(array, 2)); // Output: [1, 3]
console.log(findRange(array, 5)); // Output: [6, 8]
console.log(findRange(array, 7)); // Output: [-1, -1]
\`\`\`

TBD

## Finding the Insertion Point

To find where a value should be inserted to maintain sorted order:

\`\`\`javascript
function findInsertionPoint(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return left;
}

// Example
const array = [1, 3, 5, 7, 9];
console.log(findInsertionPoint(array, 4)); // Output: 2
console.log(findInsertionPoint(array, 10)); // Output: 5
\`\`\`

TBD

## Searching in Rotated Sorted Array

A rotated sorted array is a sorted array that has been rotated at some pivot point. For example, \`[4, 5, 6, 7, 0, 1, 2]\` is a rotated version of \`[0, 1, 2, 4, 5, 6, 7]\`.

\`\`\`javascript
function searchInRotatedArray(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    
    // Found the target
    if (arr[mid] === target) {
      return mid;
    }
    
    // Check if left half is sorted
    if (arr[left] <= arr[mid]) {
      // Check if target is in the left half
      if (arr[left] <= target && target < arr[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    // Right half is sorted
    else {
      // Check if target is in the right half
      if (arr[mid] < target && target <= arr[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  
  return -1;
}

// Example
const rotatedArray = [4, 5, 6, 7, 0, 1, 2];
console.log(searchInRotatedArray(rotatedArray, 0)); // Output: 4
console.log(searchInRotatedArray(rotatedArray, 3)); // Output: -1
\`\`\`

TBD

## Finding the Closest Element

To find the element closest to a target value:

\`\`\`javascript
function findClosestElement(arr, target) {
  if (arr.length === 0) {
    return -1;
  }
  
  // If target is less than the smallest element
  if (target <= arr[0]) {
    return 0;
  }
  
  // If target is greater than the largest element
  if (target >= arr[arr.length - 1]) {
    return arr.length - 1;
  }
  
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    
    // Found exact match
    if (arr[mid] === target) {
      return mid;
    }
    
    // If target is less than mid, search left half
    if (arr[mid] > target) {
      right = mid - 1;
    }
    // If target is greater than mid, search right half
    else {
      left = mid + 1;
    }
  }
  
  // At this point, left > right
  // Compare the closest elements on both sides
  if (Math.abs(arr[left] - target) < Math.abs(arr[right] - target)) {
    return left;
  } else {
    return right;
  }
}

// Example
const array = [1, 3, 5, 7, 9];
console.log(array[findClosestElement(array, 4)]); // Output: 3 or 5
console.log(array[findClosestElement(array, 6)]); // Output: 5 or 7
\`\`\`

TBD

## Binary Search on Answer Space

Sometimes, binary search can be applied to the answer space rather than the input array. This is useful for optimization problems where you can check if a solution is valid.

### Example: Find the minimum size subarray with sum >= target

\`\`\`javascript
function minSubArrayLen(target, nums) {
  let left = 1; // Minimum possible length
  let right = nums.length; // Maximum possible length
  let result = 0;
  
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    
    if (isValidSubarraySize(nums, mid, target)) {
      // Found a valid size, try to find a smaller one
      result = mid;
      right = mid - 1;
    } else {
      // Current size is too small, try a larger one
      left = mid + 1;
    }
  }
  
  return result;
}

// Check if there's a subarray of size 'size' with sum >= target
function isValidSubarraySize(nums, size, target) {
  let sum = 0;
  
  // Calculate sum of first 'size' elements
  for (let i = 0; i < size; i++) {
    sum += nums[i];
  }
  
  if (sum >= target) {
    return true;
  }
  
  // Slide the window
  for (let i = size; i < nums.length; i++) {
    sum = sum + nums[i] - nums[i - size];
    if (sum >= target) {
      return true;
    }
  }
  
  return false;
}
\`\`\`

TBD

## Finding Peak Element

A peak element is an element that is greater than its neighbors. For an array with distinct elements, there is always at least one peak element.

\`\`\`javascript
function findPeakElement(nums) {
  let left = 0;
  let right = nums.length - 1;
  
  while (left < right) {
    const mid = Math.floor(left + (right - left) / 2);
    
    // If mid is a decreasing part, peak is in the left half
    if (nums[mid] > nums[mid + 1]) {
      right = mid;
    }
    // If mid is an increasing part, peak is in the right half
    else {
      left = mid + 1;
    }
  }
  
  // When left === right, we've found the peak
  return left;
}

// Example
const array = [1, 3, 4, 3, 5, 6, 4];
console.log(findPeakElement(array)); // Output: 5 (index of 6)
\`\`\`

TBD

## Tips for Binary Search Variants

1. **Identify the Search Space**: Clearly define what you're searching for (an element, a position, a value)
2. **Define the Condition**: What makes a mid-point the answer or guides the search direction?
3. **Handle Edge Cases**: Empty arrays, single elements, duplicates, etc.
4. **Avoid Off-by-One Errors**: Be careful with boundary conditions and index calculations
5. **Test with Examples**: Verify your algorithm with simple examples and edge cases

TBD`,
  exercise: null
};