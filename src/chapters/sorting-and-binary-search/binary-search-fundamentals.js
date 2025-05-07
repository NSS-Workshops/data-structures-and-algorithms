export const binarySearchFundamentalsChapter = {
  id: 'binary-search-fundamentals',
  title: 'Binary Search Fundamentals',
  sectionId: 'sorting-and-binary-search',
  previousChapterId: 'sort-method',
  content: `## Binary Search Fundamentals

Binary search is a highly efficient algorithm for finding an element in a sorted array. It works by repeatedly dividing the search interval in half, making it significantly faster than linear search for large datasets.

TBD

## The Binary Search Algorithm

Binary search follows a divide-and-conquer approach:

1. Start with the middle element of the sorted array
2. If the target value equals the middle element, return the index
3. If the target value is less than the middle element, search the left half
4. If the target value is greater than the middle element, search the right half
5. Repeat until the element is found or the search interval is empty

TBD

## Basic Implementation

Here's a straightforward implementation of binary search:

\`\`\`javascript
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    // Calculate middle index (avoiding integer overflow)
    const mid = Math.floor(left + (right - left) / 2);
    
    // Check if target is present at mid
    if (arr[mid] === target) {
      return mid;
    }
    
    // If target is greater, ignore left half
    if (arr[mid] < target) {
      left = mid + 1;
    }
    // If target is smaller, ignore right half
    else {
      right = mid - 1;
    }
  }
  
  // Target not found
  return -1;
}

// Example usage
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17];
console.log(binarySearch(sortedArray, 7));  // Output: 3
console.log(binarySearch(sortedArray, 6));  // Output: -1
\`\`\`

TBD

## Recursive Implementation

Binary search can also be implemented recursively:

\`\`\`javascript
function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
  // Base case: element not found
  if (left > right) {
    return -1;
  }
  
  // Calculate middle index
  const mid = Math.floor(left + (right - left) / 2);
  
  // Check if target is present at mid
  if (arr[mid] === target) {
    return mid;
  }
  
  // If target is greater, search right half
  if (arr[mid] < target) {
    return binarySearchRecursive(arr, target, mid + 1, right);
  }
  
  // If target is smaller, search left half
  return binarySearchRecursive(arr, target, left, mid - 1);
}

// Example usage
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17];
console.log(binarySearchRecursive(sortedArray, 11)); // Output: 5
console.log(binarySearchRecursive(sortedArray, 4));  // Output: -1
\`\`\`

TBD

## Time and Space Complexity

Binary search has excellent performance characteristics:

- **Time Complexity**: O(log n)
  - Each step eliminates half of the remaining elements
  - For an array of 1 million elements, binary search takes at most 20 comparisons
  
- **Space Complexity**:
  - Iterative: O(1) - uses constant extra space
  - Recursive: O(log n) - due to the call stack

TBD

## Comparison with Linear Search

To appreciate binary search, let's compare it with linear search:

\`\`\`javascript
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
\`\`\`

| Array Size | Linear Search (worst case) | Binary Search (worst case) |
|------------|----------------------------|----------------------------|
| 10         | 10 comparisons             | 4 comparisons              |
| 100        | 100 comparisons            | 7 comparisons              |
| 1,000      | 1,000 comparisons          | 10 comparisons             |
| 1,000,000  | 1,000,000 comparisons      | 20 comparisons             |
| 1 billion  | 1 billion comparisons      | 30 comparisons             |

TBD

## Prerequisites for Binary Search

Binary search requires:

1. **Sorted Data**: The array must be sorted for binary search to work
2. **Random Access**: The data structure must support efficient random access (O(1) time)

This means binary search works well with:
- Arrays
- Array-like data structures with O(1) access by index

But not with:
- Linked lists (no efficient random access)
- Unsorted collections

TBD

## Common Pitfalls and Edge Cases

When implementing binary search, watch out for:

### 1. Integer Overflow

In some languages, calculating the middle index as \`(left + right) / 2\` can cause integer overflow. Use \`left + (right - left) / 2\` instead.

### 2. Infinite Loops

Ensure your termination condition and index updates are correct to avoid infinite loops.

### 3. Off-by-One Errors

Be careful with the boundary conditions (left <= right vs. left < right).

### 4. Empty Arrays

Handle empty arrays appropriately.

### 5. Duplicate Elements

Standard binary search finds any matching element, not necessarily the first or last occurrence.

TBD

## Binary Search in JavaScript

JavaScript doesn't have a built-in binary search method, but you can use the implementations shown above. For sorted arrays, you can also use:

\`\`\`javascript
// Find the insertion point for target in a sorted array
function findInsertionPoint(arr, target) {
  let left = 0;
  let right = arr.length;
  
  while (left < right) {
    const mid = Math.floor(left + (right - left) / 2);
    
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  
  return left;
}

// Check if element exists using the insertion point
function includes(arr, target) {
  const index = findInsertionPoint(arr, target);
  return index < arr.length && arr[index] === target;
}
\`\`\`

TBD

## Real-World Applications

Binary search is used in many practical applications:

1. **Database Indexing**: Finding records in sorted indexes
2. **Dictionary Lookups**: Finding words in a dictionary
3. **Debugging**: Finding the first occurrence of a bug in a version control history
4. **Machine Learning**: Finding optimal hyperparameters
5. **Computer Graphics**: Intersection detection in ray tracing
6. **Network Routing**: Finding the best route in a routing table

TBD

## Beyond Basic Binary Search

Binary search can be extended to solve more complex problems:

1. **Finding the first or last occurrence** of an element in a sorted array with duplicates
2. **Finding the closest element** to a target value
3. **Searching in rotated sorted arrays**
4. **Finding the peak element** in a bitonic array
5. **Binary search on answer space** for optimization problems

We'll explore these variants in the next chapter.

TBD`,
  exercise: null
};