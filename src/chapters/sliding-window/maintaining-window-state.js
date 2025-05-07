export const maintainingWindowStateChapter = {
  id: 'maintaining-window-state',
  title: 'Maintaining Window State',
  sectionId: 'sliding-window',
  previousChapterId: 'optimizing-nested-loops',
  content: `## Maintaining Window State

A key aspect of the sliding window technique is efficiently maintaining the state of the current window as it slides through the data. This chapter explores different approaches to tracking and updating window state.

TBD

## What is Window State?

Window state refers to the information we need to track about the current window as we slide it through the array or string. This state can include:

- Sum or product of elements in the window
- Maximum or minimum value in the window
- Frequency count of elements or characters
- Boolean flags indicating certain conditions
- Complex data structures representing the window's properties

Efficiently updating this state is crucial for the sliding window technique to maintain its O(n) time complexity.

TBD

## Simple Numeric State

The simplest form of window state is a single numeric value, such as the sum of elements in the window:

\`\`\`javascript
function maxSumSubarray(arr, k) {
  let windowSum = 0;
  let maxSum = 0;
  let windowStart = 0;
  
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    // Add the next element to the window
    windowSum += arr[windowEnd];
    
    // When we hit the window size, update max and slide the window
    if (windowEnd >= k - 1) {
      maxSum = Math.max(maxSum, windowSum);
      
      // Remove the element going out of the window
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }
  
  return maxSum;
}
\`\`\`

In this example, \`windowSum\` is our window state, and we update it by:
1. Adding the incoming element: \`windowSum += arr[windowEnd]\`
2. Removing the outgoing element: \`windowSum -= arr[windowStart]\`

TBD

## Using Hash Maps for Frequency Counting

For problems involving character or element frequencies, a hash map is often used to maintain window state:

\`\`\`javascript
function longestSubstringWithKDistinct(str, k) {
  const charFrequency = {};
  let windowStart = 0;
  let maxLength = 0;
  
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    
    // Add the current character to the frequency map
    charFrequency[rightChar] = (charFrequency[rightChar] || 0) + 1;
    
    // Shrink the window until we have at most k distinct characters
    while (Object.keys(charFrequency).length > k) {
      const leftChar = str[windowStart];
      
      // Decrease frequency of the outgoing character
      charFrequency[leftChar]--;
      
      // Remove the character if its frequency becomes zero
      if (charFrequency[leftChar] === 0) {
        delete charFrequency[leftChar];
      }
      
      windowStart++;
    }
    
    // Update the maximum length
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  
  return maxLength;
}
\`\`\`

Here, \`charFrequency\` is our window state, tracking the frequency of each character in the current window.

TBD

## Using Sets for Distinct Elements

When we only care about the presence of elements (not their frequency), a Set can be more efficient:

\`\`\`javascript
function longestSubstringWithoutRepeating(str) {
  const charSet = new Set();
  let windowStart = 0;
  let maxLength = 0;
  
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    
    // If the character is already in the window, shrink the window
    while (charSet.has(rightChar)) {
      charSet.delete(str[windowStart]);
      windowStart++;
    }
    
    // Add the current character to the set
    charSet.add(rightChar);
    
    // Update the maximum length
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  
  return maxLength;
}
\`\`\`

In this example, \`charSet\` is our window state, tracking the unique characters in the current window.

TBD

## Complex State with Multiple Variables

Some problems require tracking multiple state variables:

\`\`\`javascript
function smallestSubarrayWithGivenSum(arr, targetSum) {
  let windowSum = 0;
  let windowStart = 0;
  let minLength = Infinity;
  
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
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
  
  return minLength === Infinity ? 0 : minLength;
}
\`\`\`

Here, our window state includes:
- \`windowSum\`: The sum of elements in the current window
- \`minLength\`: The minimum length of a valid window found so far

TBD

## State Update Patterns

There are several common patterns for updating window state:

### 1. Add-Remove Pattern
- Add the incoming element to the state
- Remove the outgoing element from the state
- Used for fixed-size windows

\`\`\`javascript
// Add incoming element
windowSum += arr[windowEnd];

// Remove outgoing element
windowSum -= arr[windowStart];
windowStart++;
\`\`\`

### 2. Expand-Contract Pattern
- Expand the window by adding elements
- Contract the window when a condition is met
- Used for variable-size windows

\`\`\`javascript
// Expand window
windowSum += arr[windowEnd];

// Contract window while condition is met
while (condition) {
  windowSum -= arr[windowStart];
  windowStart++;
}
\`\`\`

### 3. Lazy Update Pattern
- Delay updating certain aspects of the state until necessary
- Optimize for cases where full state updates are expensive

\`\`\`javascript
// Only update max/min when needed
if (windowEnd >= k - 1) {
  maxResult = Math.max(maxResult, calculateResult());
  // ... update window
}
\`\`\`

TBD

## Handling Edge Cases in Window State

When maintaining window state, be careful with these common edge cases:

### 1. Empty Input
Always check if the input array or string is empty:

\`\`\`javascript
if (!arr || arr.length === 0) {
  return 0; // or appropriate default value
}
\`\`\`

### 2. Window Size Larger Than Input
Ensure the window size is valid:

\`\`\`javascript
if (k > arr.length) {
  return null; // or appropriate default value
}
\`\`\`

### 3. No Valid Window Found
Handle cases where no valid window exists:

\`\`\`javascript
// Initialize to a value that indicates "not found"
let result = Infinity; // or -1, null, etc.

// Check at the end if a valid result was found
return result === Infinity ? 0 : result;
\`\`\`

TBD

## Performance Considerations

When maintaining window state:

1. **Minimize Redundant Calculations**: Update state incrementally rather than recalculating
2. **Choose Appropriate Data Structures**: Use hash maps for frequency counting, sets for uniqueness
3. **Avoid Nested Loops**: The goal is to maintain O(n) time complexity
4. **Optimize Space Usage**: Only store what's necessary in your state
5. **Consider Amortized Costs**: Some operations (like resizing a hash map) have amortized costs

TBD`,
  exercise: null
};