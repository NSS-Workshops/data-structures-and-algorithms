export const slidingWindowIntroChapter = {
  id: 'sliding-window-intro',
  title: 'Introduction to Sliding Window Technique',
  sectionId: 'sliding-window',
  previousChapterId: null,
  content: `## Introduction to Sliding Window Technique

The sliding window technique is a powerful algorithmic pattern used to solve array or string problems with contiguous subarrays or substrings. It efficiently processes these data structures by maintaining a "window" that slides through the data.

TBD

## What is a Sliding Window?

A sliding window is a computational technique that involves creating a "window" (a subarray or substring) that slides through the data structure one element at a time. This approach allows us to process the data in a single pass, often reducing the time complexity from O(n²) to O(n).

The window can be:
- **Fixed-size**: The window size remains constant throughout the algorithm
- **Dynamic-size**: The window size grows or shrinks based on certain conditions

TBD

## When to Use Sliding Window

The sliding window technique is particularly useful when:

1. You need to find subarrays or substrings that satisfy certain conditions
2. You're dealing with contiguous sequences of elements
3. The problem involves calculating something among all subarrays of a specific size
4. You need to minimize the time complexity from O(n²) to O(n)

Common problem types include:
- Finding the maximum/minimum sum of k consecutive elements
- Finding the longest substring with k distinct characters
- Finding the smallest subarray with a sum greater than or equal to a value
- Calculating a moving average

TBD

## Fixed-Size Window Example

Let's look at a classic example: finding the maximum sum of k consecutive elements in an array.

**Naive Approach (O(n*k)):**
\`\`\`javascript
function maxSumNaive(arr, k) {
  const n = arr.length;
  let maxSum = 0;
  
  // Consider all blocks of size k
  for (let i = 0; i <= n - k; i++) {
    let currentSum = 0;
    
    // Calculate sum of current block
    for (let j = 0; j < k; j++) {
      currentSum += arr[i + j];
    }
    
    // Update maximum sum
    maxSum = Math.max(maxSum, currentSum);
  }
  
  return maxSum;
}
\`\`\`

**Sliding Window Approach (O(n)):**
\`\`\`javascript
function maxSumSlidingWindow(arr, k) {
  const n = arr.length;
  
  // Handle edge cases
  if (n < k) {
    return null;
  }
  
  // Compute sum of first window
  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  
  let maxSum = windowSum;
  
  // Slide the window and update the maximum sum
  for (let i = k; i < n; i++) {
    // Add the next element and remove the first element of the previous window
    windowSum = windowSum + arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }
  
  return maxSum;
}
\`\`\`

TBD

## Dynamic-Size Window Example

For problems where the window size can vary, we adjust the window boundaries based on certain conditions. Here's an example of finding the smallest subarray with a sum greater than or equal to a target value:

\`\`\`javascript
function smallestSubarrayWithSum(arr, targetSum) {
  const n = arr.length;
  let windowSum = 0;
  let minLength = Infinity;
  let windowStart = 0;
  
  for (let windowEnd = 0; windowEnd < n; windowEnd++) {
    // Add the next element to the window
    windowSum += arr[windowEnd];
    
    // Shrink the window as small as possible while maintaining the sum >= targetSum
    while (windowSum >= targetSum) {
      // Update the minimum length
      minLength = Math.min(minLength, windowEnd - windowStart + 1);
      
      // Remove the leftmost element
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }
  
  // Return the minimum length or 0 if no such subarray exists
  return minLength === Infinity ? 0 : minLength;
}
\`\`\`

TBD

## Sliding Window vs. Two Pointers

The sliding window technique is closely related to the two-pointer technique, but with some key differences:

| Sliding Window | Two Pointers |
|----------------|--------------|
| Always maintains a contiguous sequence | May not maintain a contiguous sequence |
| Typically uses windowStart and windowEnd pointers | Can use any two pointers in various ways |
| Often tracks a running calculation within the window | May not track a running calculation |
| Primarily for subarrays/substrings | Used for a wider range of problems |

In fact, sliding window can be considered a specialized application of the two-pointer technique.

TBD

## Key Sliding Window Patterns

1. **Fixed-Size Window**:
   - Initialize the window with the first k elements
   - Slide the window by adding one element and removing one element
   - Update the result after each slide

2. **Dynamic-Size Window with Expansion and Contraction**:
   - Expand the window by adding elements from the right
   - Contract the window from the left when a condition is met
   - Update the result during expansion or contraction

3. **Window with Auxiliary Data Structure**:
   - Use a HashMap or Set to track elements in the window
   - Useful for problems involving distinct elements or character frequencies

TBD`,
  exercise: null
};