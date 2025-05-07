export const optimizingNestedLoopsChapter = {
  id: 'optimizing-nested-loops',
  title: 'Optimizing Nested Loops',
  sectionId: 'sliding-window',
  previousChapterId: 'sliding-window-intro',
  content: `## Optimizing Nested Loops with Sliding Window

Many array and string problems involve nested loops that lead to O(n²) time complexity. The sliding window technique can often optimize these solutions to O(n), providing significant performance improvements.

TBD

## The Problem with Nested Loops

Nested loops are common in array processing, but they can lead to inefficient solutions:

\`\`\`javascript
// O(n²) approach to find subarrays of size k
function processSubarraysNaive(arr, k) {
  const n = arr.length;
  const results = [];
  
  for (let i = 0; i <= n - k; i++) {
    // For each starting position
    const subarray = [];
    
    // Process k elements (nested loop)
    for (let j = 0; j < k; j++) {
      subarray.push(arr[i + j]);
    }
    
    results.push(subarray);
  }
  
  return results;
}
\`\`\`

This approach has O(n*k) time complexity, which becomes O(n²) when k is proportional to n.

TBD

## Identifying Optimization Opportunities

You can often optimize nested loops with sliding window when:

1. The inner loop processes a contiguous sequence of elements
2. There's significant overlap between consecutive iterations of the outer loop
3. You can derive the next state from the current state without recomputing everything

TBD

## From O(n²) to O(n): A Transformation

Let's transform a nested loop solution to a sliding window solution step by step:

### Problem: Find the maximum sum of any contiguous subarray of size k

**Step 1: Identify the naive solution with nested loops**
\`\`\`javascript
function maxSubarraySumNaive(arr, k) {
  const n = arr.length;
  let maxSum = 0;
  
  // Outer loop: starting position of subarray
  for (let i = 0; i <= n - k; i++) {
    let currentSum = 0;
    
    // Inner loop: calculate sum of k elements
    for (let j = 0; j < k; j++) {
      currentSum += arr[i + j];
    }
    
    maxSum = Math.max(maxSum, currentSum);
  }
  
  return maxSum;
}
\`\`\`

**Step 2: Identify the redundant calculations**
- When we move from position i to i+1, we recalculate the sum of k-1 elements that we've already processed
- We only need to:
  - Remove the element at position i
  - Add the new element at position i+k

**Step 3: Implement the sliding window solution**
\`\`\`javascript
function maxSubarraySumSlidingWindow(arr, k) {
  const n = arr.length;
  
  // Handle edge cases
  if (n < k) {
    return null;
  }
  
  // Calculate sum of first window
  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  
  let maxSum = windowSum;
  
  // Slide the window
  for (let i = k; i < n; i++) {
    // Add new element and remove first element of previous window
    windowSum = windowSum + arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }
  
  return maxSum;
}
\`\`\`

TBD

## Performance Analysis

Let's compare the performance of both approaches:

| Approach | Time Complexity | Space Complexity |
|----------|-----------------|------------------|
| Nested Loops | O(n*k) | O(1) |
| Sliding Window | O(n) | O(1) |

For large arrays or when k is large, the sliding window approach provides significant performance benefits.

TBD

## More Examples of Nested Loop Optimization

### Example 1: Finding Averages of Subarrays

**Nested Loop Approach:**
\`\`\`javascript
function findAveragesNaive(arr, k) {
  const n = arr.length;
  const result = [];
  
  for (let i = 0; i <= n - k; i++) {
    let sum = 0;
    for (let j = 0; j < k; j++) {
      sum += arr[i + j];
    }
    result.push(sum / k);
  }
  
  return result;
}
\`\`\`

**Sliding Window Approach:**
\`\`\`javascript
function findAveragesSlidingWindow(arr, k) {
  const n = arr.length;
  const result = [];
  
  let windowSum = 0;
  let windowStart = 0;
  
  for (let windowEnd = 0; windowEnd < n; windowEnd++) {
    windowSum += arr[windowEnd];
    
    // When we hit the window size, calculate average and slide the window
    if (windowEnd >= k - 1) {
      result.push(windowSum / k);
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }
  
  return result;
}
\`\`\`

### Example 2: Count Occurrences of Anagrams

**Nested Loop Approach:**
\`\`\`javascript
function countAnagramsNaive(text, pattern) {
  const n = text.length;
  const m = pattern.length;
  let count = 0;
  
  // Function to check if two strings are anagrams
  function areAnagrams(s1, s2) {
    const charCount = {};
    
    // Count characters in s1
    for (const char of s1) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
    
    // Decrement counts for s2
    for (const char of s2) {
      if (!charCount[char]) return false;
      charCount[char]--;
    }
    
    // Check if all counts are zero
    return Object.values(charCount).every(count => count === 0);
  }
  
  // Check each substring of length m
  for (let i = 0; i <= n - m; i++) {
    const substring = text.substring(i, i + m);
    if (areAnagrams(substring, pattern)) {
      count++;
    }
  }
  
  return count;
}
\`\`\`

**Sliding Window Approach:**
\`\`\`javascript
function countAnagramsSlidingWindow(text, pattern) {
  const n = text.length;
  const m = pattern.length;
  let count = 0;
  
  // Create frequency map for pattern
  const patternFreq = {};
  for (const char of pattern) {
    patternFreq[char] = (patternFreq[char] || 0) + 1;
  }
  
  let windowStart = 0;
  let matched = 0;
  
  // Sliding window
  for (let windowEnd = 0; windowEnd < n; windowEnd++) {
    const rightChar = text[windowEnd];
    
    // If character is in pattern, decrement its count
    if (rightChar in patternFreq) {
      patternFreq[rightChar]--;
      
      // If frequency becomes zero, we've matched one character completely
      if (patternFreq[rightChar] === 0) {
        matched++;
      }
    }
    
    // If all characters have been matched, we found an anagram
    if (matched === Object.keys(patternFreq).length) {
      count++;
    }
    
    // If window size exceeds pattern length, shrink window
    if (windowEnd >= m - 1) {
      const leftChar = text[windowStart];
      windowStart++;
      
      // If the outgoing character was part of pattern, adjust counts
      if (leftChar in patternFreq) {
        if (patternFreq[leftChar] === 0) {
          matched--;
        }
        patternFreq[leftChar]++;
      }
    }
  }
  
  return count;
}
\`\`\`

TBD

## Key Takeaways

1. **Identify Redundancy**: Look for calculations that are repeated in nested loops
2. **Reuse Previous Results**: Use the result of the previous window to calculate the next window
3. **Maintain State**: Keep track of the window's state as you slide it
4. **Adjust Window Size**: For fixed-size windows, add one element and remove one element in each step
5. **Time Complexity**: Aim to reduce O(n*k) or O(n²) solutions to O(n)

TBD`,
  exercise: null
};