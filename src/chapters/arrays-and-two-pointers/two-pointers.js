export const twoPointersChapter = {
  id: 'two-pointers',
  title: 'Two-Pointer Logic for Pairwise Traversal',
  sectionId: 'arrays-and-two-pointers',
  previousChapterId: 'array-methods',
  content: `## Two-Pointer Technique

The two-pointer technique is a powerful pattern for solving array and string problems efficiently. It involves using two pointers to traverse an array or string, often moving them in different directions or at different speeds.

TBD

## When to Use Two Pointers

The two-pointer technique is particularly useful for:

- Finding pairs that satisfy certain conditions
- Detecting cycles or patterns
- Merging sorted arrays
- Partitioning arrays
- Finding subarrays with specific properties
- Palindrome detection

TBD

## Types of Two-Pointer Patterns

### 1. Opposite Direction (Converging Pointers)
- One pointer starts at the beginning, the other at the end
- Pointers move toward each other
- Useful for: searching in sorted arrays, finding pairs with a target sum

\`\`\`javascript
function twoSum(sortedArray, target) {
  let left = 0;
  let right = sortedArray.length - 1;
  
  while (left < right) {
    const sum = sortedArray[left] + sortedArray[right];
    
    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  
  return null; // No pair found
}
\`\`\`

TBD

### 2. Same Direction (Fast and Slow Pointers)
- Both pointers start at the beginning
- One moves faster than the other
- Useful for: cycle detection, finding middle elements, removing duplicates

\`\`\`javascript
function findMiddle(array) {
  let slow = 0;
  let fast = 0;
  
  while (fast < array.length && fast + 1 < array.length) {
    slow++;
    fast += 2;
  }
  
  return array[slow];
}
\`\`\`

TBD

### 3. Sliding Window
- Two pointers define the boundaries of a window
- Window expands or contracts based on conditions
- Useful for: subarrays with specific properties, substring problems

\`\`\`javascript
function maxSumSubarray(array, k) {
  let maxSum = 0;
  let windowSum = 0;
  let windowStart = 0;
  
  for (let windowEnd = 0; windowEnd < array.length; windowEnd++) {
    windowSum += array[windowEnd];
    
    if (windowEnd >= k - 1) {
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= array[windowStart];
      windowStart++;
    }
  }
  
  return maxSum;
}
\`\`\`

TBD

## Benefits of Two Pointers

The two-pointer technique offers several advantages:

- **Efficiency**: Often reduces time complexity from O(n²) to O(n)
- **Space Efficiency**: Typically uses O(1) extra space
- **Simplicity**: Often leads to cleaner, more readable code
- **Versatility**: Applicable to many different problem types

TBD

## Common Two-Pointer Problems

### Reverse an Array In-Place
\`\`\`javascript
function reverseArray(array) {
  let left = 0;
  let right = array.length - 1;
  
  while (left < right) {
    // Swap elements
    [array[left], array[right]] = [array[right], array[left]];
    left++;
    right--;
  }
  
  return array;
}
\`\`\`

### Remove Duplicates from Sorted Array
\`\`\`javascript
function removeDuplicates(sortedArray) {
  if (sortedArray.length === 0) return 0;
  
  let i = 0;
  
  for (let j = 1; j < sortedArray.length; j++) {
    if (sortedArray[j] !== sortedArray[i]) {
      i++;
      sortedArray[i] = sortedArray[j];
    }
  }
  
  return i + 1; // Length of array with duplicates removed
}
\`\`\`

TBD`,
  exercise: null
};