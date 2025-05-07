export const subarraysSubstringsChapter = {
  id: 'subarrays-substrings',
  title: 'Subarrays and Substrings',
  sectionId: 'sliding-window',
  previousChapterId: 'maintaining-window-state',
  content: `## Subarrays and Substrings

The sliding window technique is particularly effective for problems involving subarrays (contiguous portions of arrays) and substrings (contiguous portions of strings). This chapter explores common patterns and solutions for these problems.

TBD

## Fixed-Length Subarrays/Substrings

Many problems involve finding or analyzing subarrays or substrings of a fixed length. The sliding window approach is ideal for these scenarios.

### Maximum Sum Subarray of Size K

Find the maximum sum of any contiguous subarray of size k:

\`\`\`javascript
function maxSumSubarray(arr, k) {
  let maxSum = 0;
  let windowSum = 0;
  let windowStart = 0;
  
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];
    
    if (windowEnd >= k - 1) {
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }
  
  return maxSum;
}

// Example
const array = [2, 1, 5, 1, 3, 2];
const k = 3;
console.log(maxSumSubarray(array, k)); // Output: 9 (subarray [5, 1, 3])
\`\`\`

TBD

### Find All Anagrams in a String

Find all start indices of anagrams of a pattern in a string:

\`\`\`javascript
function findAnagrams(s, p) {
  const result = [];
  const charCount = {};
  
  // Create frequency map for pattern
  for (const char of p) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  
  let matched = 0;
  let windowStart = 0;
  
  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    const rightChar = s[windowEnd];
    
    // Decrement count for the current character
    if (rightChar in charCount) {
      charCount[rightChar]--;
      if (charCount[rightChar] === 0) {
        matched++;
      }
    }
    
    // If we've matched all characters, we found an anagram
    if (matched === Object.keys(charCount).length) {
      result.push(windowStart);
    }
    
    // If window size exceeds pattern length, shrink window
    if (windowEnd >= p.length - 1) {
      const leftChar = s[windowStart];
      windowStart++;
      
      if (leftChar in charCount) {
        if (charCount[leftChar] === 0) {
          matched--;
        }
        charCount[leftChar]++;
      }
    }
  }
  
  return result;
}

// Example
const s = "cbaebabacd";
const p = "abc";
console.log(findAnagrams(s, p)); // Output: [0, 6]
\`\`\`

TBD

## Variable-Length Subarrays/Substrings

Some problems require finding subarrays or substrings of variable length that satisfy certain conditions. These typically use the expand-contract pattern.

### Smallest Subarray with Sum Greater Than or Equal to Target

Find the length of the smallest contiguous subarray whose sum is greater than or equal to the target:

\`\`\`javascript
function minSubArrayLen(target, nums) {
  let minLength = Infinity;
  let windowSum = 0;
  let windowStart = 0;
  
  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    windowSum += nums[windowEnd];
    
    // Contract window as long as sum is greater than or equal to target
    while (windowSum >= target) {
      minLength = Math.min(minLength, windowEnd - windowStart + 1);
      windowSum -= nums[windowStart];
      windowStart++;
    }
  }
  
  return minLength === Infinity ? 0 : minLength;
}

// Example
const nums = [2, 3, 1, 2, 4, 3];
const target = 7;
console.log(minSubArrayLen(target, nums)); // Output: 2 (subarray [4, 3])
\`\`\`

TBD

### Longest Substring Without Repeating Characters

Find the length of the longest substring without repeating characters:

\`\`\`javascript
function lengthOfLongestSubstring(s) {
  const charIndexMap = {};
  let maxLength = 0;
  let windowStart = 0;
  
  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    const rightChar = s[windowEnd];
    
    // If the character is already in the current window, update window start
    if (rightChar in charIndexMap) {
      // Move window start to the position after the last occurrence of the character
      // But don't move it backward (hence the Math.max)
      windowStart = Math.max(windowStart, charIndexMap[rightChar] + 1);
    }
    
    // Update the last seen index of the character
    charIndexMap[rightChar] = windowEnd;
    
    // Update the maximum length
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  
  return maxLength;
}

// Example
const str = "abcabcbb";
console.log(lengthOfLongestSubstring(str)); // Output: 3 (substring "abc")
\`\`\`

TBD

## Subarrays/Substrings with Constraints

Some problems involve finding subarrays or substrings that satisfy specific constraints.

### Longest Substring with At Most K Distinct Characters

Find the length of the longest substring with at most k distinct characters:

\`\`\`javascript
function lengthOfLongestSubstringKDistinct(s, k) {
  const charFrequency = {};
  let windowStart = 0;
  let maxLength = 0;
  
  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    const rightChar = s[windowEnd];
    
    // Add the current character to the frequency map
    charFrequency[rightChar] = (charFrequency[rightChar] || 0) + 1;
    
    // Shrink the window until we have at most k distinct characters
    while (Object.keys(charFrequency).length > k) {
      const leftChar = s[windowStart];
      
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

// Example
const s = "eceba";
const k = 2;
console.log(lengthOfLongestSubstringKDistinct(s, k)); // Output: 3 (substring "ece")
\`\`\`

TBD

### Maximum Sum Subarray of Size K with No More Than M Zeros

Find the maximum sum of a subarray of size k that contains no more than m zeros:

\`\`\`javascript
function maxSumSubarrayWithZeroConstraint(arr, k, m) {
  let maxSum = 0;
  let windowSum = 0;
  let windowStart = 0;
  let zeroCount = 0;
  
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    // If current element is 0, increment zero count
    if (arr[windowEnd] === 0) {
      zeroCount++;
    }
    
    windowSum += arr[windowEnd];
    
    // If window has more than m zeros, shrink it from the left
    while (zeroCount > m) {
      if (arr[windowStart] === 0) {
        zeroCount--;
      }
      windowSum -= arr[windowStart];
      windowStart++;
    }
    
    // If window size is k and zero constraint is satisfied, update max sum
    if (windowEnd - windowStart + 1 === k) {
      maxSum = Math.max(maxSum, windowSum);
      
      // Remove the leftmost element for the next iteration
      if (arr[windowStart] === 0) {
        zeroCount--;
      }
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }
  
  return maxSum;
}

// Example
const array = [1, 0, 0, 1, 1, 0, 1, 0, 1];
const k = 4;
const m = 1;
console.log(maxSumSubarrayWithZeroConstraint(array, k, m)); // Output: 3 (subarray [1, 1, 0, 1])
\`\`\`

TBD

## Tips for Subarray/Substring Problems

1. **Identify the Window Criteria**: Determine what makes a valid window (size, sum, character constraints, etc.)
2. **Choose the Right Window Type**: Fixed-size or variable-size
3. **Select Appropriate Data Structures**: Use hash maps for frequency counting, sets for uniqueness
4. **Handle Edge Cases**: Empty inputs, no valid windows, etc.
5. **Optimize Space Usage**: Only store what's necessary in your window state

TBD`,
  exercise: null
};