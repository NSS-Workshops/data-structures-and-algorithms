/**
 * Chapter: Clean, Testable, Efficient Solutions
 * This chapter focuses on writing code that is clean, testable, and optimized for performance
 * during technical interviews.
 */

export const content = `
# Clean, Testable, Efficient Solutions

In technical interviews, the quality of your code matters just as much as getting the correct answer. This chapter will help you develop skills for writing solutions that are clean, testable, and efficient—qualities that demonstrate your professionalism as a software engineer.

## Why Code Quality Matters in Interviews

Interviewers evaluate not just whether your code works, but how well it's written. Clean, well-structured code:

- Demonstrates your professional standards
- Shows you can write maintainable code that others can understand
- Indicates how you would contribute to their codebase
- Differentiates you from candidates who only focus on correctness

## Writing Clean Code

### Meaningful Names

- Use descriptive variable and function names
- Avoid single-letter variables (except for simple loop counters or mathematical notations)
- Choose names that reveal intent

**Poor:**
\`\`\`javascript
function f(a, b) {
  let r = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b) r.push(a[i]);
  }
  return r;
}
\`\`\`

**Better:**
\`\`\`javascript
function filterGreaterThan(array, threshold) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > threshold) {
      result.push(array[i]);
    }
  }
  return result;
}
\`\`\`

### Consistent Formatting

- Use consistent indentation and spacing
- Group related code together
- Add line breaks between logical sections
- Follow standard conventions for the language

### Keep Functions Small and Focused

- Each function should do one thing well
- Extract helper functions for complex operations
- Aim for functions that fit on one screen

**Poor:**
\`\`\`javascript
function processData(data) {
  // Sort data
  data.sort((a, b) => a.value - b.value);
  
  // Filter invalid entries
  const validData = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].value >= 0 && data[i].name) {
      validData.push(data[i]);
    }
  }
  
  // Calculate statistics
  let sum = 0;
  for (let i = 0; i < validData.length; i++) {
    sum += validData[i].value;
  }
  const average = sum / validData.length;
  
  return { validData, average };
}
\`\`\`

**Better:**
\`\`\`javascript
function sortByValue(data) {
  return [...data].sort((a, b) => a.value - b.value);
}

function filterValidEntries(data) {
  return data.filter(item => item.value >= 0 && item.name);
}

function calculateAverage(data) {
  const sum = data.reduce((acc, item) => acc + item.value, 0);
  return sum / data.length;
}

function processData(data) {
  const sortedData = sortByValue(data);
  const validData = filterValidEntries(sortedData);
  const average = calculateAverage(validData);
  
  return { validData, average };
}
\`\`\`

### Use Comments Judiciously

- Comment on "why" rather than "what"
- Use comments to explain complex algorithms or non-obvious decisions
- Let your code be self-explanatory when possible

## Writing Testable Code

### Design for Testability

- Write pure functions when possible (same input always produces same output)
- Avoid side effects and global state
- Make dependencies explicit through parameters

### Handle Edge Cases

- Consider empty inputs, null values, and boundary conditions
- Validate inputs when appropriate
- Be explicit about what your function expects

### Include Test Cases

- Demonstrate your solution with example inputs and expected outputs
- Include edge cases in your test examples
- Show how your code handles invalid inputs

\`\`\`javascript
function findMaxSubarraySum(arr) {
  if (!arr || arr.length === 0) return 0;
  
  let maxSoFar = arr[0];
  let maxEndingHere = arr[0];
  
  for (let i = 1; i < arr.length; i++) {
    maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }
  
  return maxSoFar;
}

// Test cases
console.log(findMaxSubarraySum([1, 2, 3, 4])); // 10 (entire array)
console.log(findMaxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6 (from index 3 to 6)
console.log(findMaxSubarraySum([])); // 0 (empty array)
console.log(findMaxSubarraySum([-1, -2, -3])); // -1 (single element)
\`\`\`

## Writing Efficient Solutions

### Optimize for the Right Things

- Focus first on the correct algorithm (right approach)
- Then optimize for time complexity (speed)
- Then optimize for space complexity (memory usage)
- Finally, optimize for readability and maintainability

### Understand Time and Space Complexity

- Analyze your solution's Big O complexity
- Be prepared to explain the tradeoffs you've made
- Know when to prioritize time over space or vice versa

### Common Optimization Techniques

1. **Avoid unnecessary work**
   - Exit early when possible
   - Use appropriate data structures (hash maps for lookups, etc.)
   - Avoid redundant calculations

2. **Reduce space usage**
   - Consider in-place algorithms when appropriate
   - Reuse variables instead of creating new ones
   - Be mindful of creating large temporary data structures

3. **Leverage language features**
   - Use built-in methods that are optimized
   - Understand the performance characteristics of language features
   - Choose appropriate data structures for operations you need

## Balancing Competing Concerns

In real interviews, you'll need to balance multiple factors:

- **Correctness**: Does your solution work for all inputs?
- **Efficiency**: Is your solution optimized for time and space?
- **Readability**: Is your code clear and maintainable?
- **Robustness**: Does your solution handle edge cases?
- **Time constraints**: Can you complete the solution in the time available?

### Prioritization Strategy

1. First, get a working solution (even if suboptimal)
2. Explain your current approach and its limitations
3. Optimize incrementally, explaining your improvements
4. Clean up your code as you go

## Example: Evolution of a Solution

**Problem**: Find the first non-repeating character in a string.

**Initial Solution (Correct but Inefficient):**
\`\`\`javascript
function firstNonRepeatingChar(str) {
  for (let i = 0; i < str.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < str.length; j++) {
      if (i !== j && str[i] === str[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) return str[i];
  }
  return null;
}
\`\`\`

**Improved Solution (Better Time Complexity):**
\`\`\`javascript
function firstNonRepeatingChar(str) {
  const charCount = {};
  
  // Count occurrences of each character
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  
  // Find first character with count of 1
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }
  
  return null;
}
\`\`\`

**Final Solution (Clean, Efficient, and Testable):**
\`\`\`javascript
/**
 * Finds the first non-repeating character in a string.
 * @param {string} str - The input string
 * @returns {string|null} The first non-repeating character or null if none exists
 */
function firstNonRepeatingChar(str) {
  // Handle edge cases
  if (!str || str.length === 0) return null;
  if (str.length === 1) return str;
  
  const charCount = new Map();
  
  // Count occurrences of each character
  for (let char of str) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }
  
  // Find first character with count of 1
  for (let char of str) {
    if (charCount.get(char) === 1) {
      return char;
    }
  }
  
  return null;
}

// Test cases
console.log(firstNonRepeatingChar("aabcc")); // 'b'
console.log(firstNonRepeatingChar("aabbcc")); // null
console.log(firstNonRepeatingChar("z")); // 'z'
console.log(firstNonRepeatingChar("")); // null
\`\`\`

This final solution:
- Handles edge cases explicitly
- Uses appropriate data structures (Map instead of object)
- Includes clear documentation
- Demonstrates correctness with test cases
- Has optimal time complexity (O(n))
- Is clean and readable
`;

export const exercise = {
  question: `
# Exercise: Clean, Testable, Efficient Solutions

You are given the following problem:

**Problem**: Implement a function that determines if two strings are anagrams of each other. An anagram is a word formed by rearranging the letters of another word, using all the original letters exactly once.

Below is a working but suboptimal solution:

\`\`\`javascript
function areAnagrams(s1, s2) {
  if (s1.length !== s2.length) return false;
  
  const sorted1 = s1.split('').sort().join('');
  const sorted2 = s2.split('').sort().join('');
  
  return sorted1 === sorted2;
}
\`\`\`

Your task is to:

1. Analyze the current solution (time and space complexity, readability, etc.)
2. Implement an improved version that is more efficient
3. Make your solution clean, well-documented, and testable
4. Include test cases that cover normal cases and edge cases
5. Explain the improvements you made and why they matter
  `,
  starter_code: `
/**
 * Your improved anagram function here
 */
function areAnagrams(s1, s2) {
  // Your improved implementation
}

// Your test cases here

// Your explanation as comments:
/*

*/
  `,
  solution_code: `
/**
 * Determines if two strings are anagrams of each other.
 * An anagram is a word formed by rearranging the letters of another word,
 * using all the original letters exactly once.
 * 
 * @param {string} s1 - The first string
 * @param {string} s2 - The second string
 * @returns {boolean} True if the strings are anagrams, false otherwise
 */
function areAnagrams(s1, s2) {
  // Handle edge cases
  if (s1 === s2) return true; // Same string is an anagram of itself
  if (!s1 || !s2) return false; // Handle null or undefined inputs
  if (s1.length !== s2.length) return false; // Anagrams must have the same length
  
  // Use a character frequency counter approach
  const charCount = new Map();
  
  // Count occurrences of each character in the first string
  for (let char of s1) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }
  
  // Decrement counts for each character in the second string
  for (let char of s2) {
    const count = charCount.get(char);
    
    // If character doesn't exist in first string or count is already 0, not an anagram
    if (!count) return false;
    
    charCount.set(char, count - 1);
  }
  
  // All characters should have a count of 0 if strings are anagrams
  return true;
}

// Test cases
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world")); // false
console.log(areAnagrams("anagram", "nagaram")); // true
console.log(areAnagrams("rat", "car")); // false
console.log(areAnagrams("", "")); // true (empty strings are anagrams of each other)
console.log(areAnagrams("a", "a")); // true (single character)
console.log(areAnagrams("aab", "aba")); // true (with repeated characters)

// Your explanation as comments:
/*
Analysis of the original solution:

1. Time Complexity: O(n log n) due to the sorting operations
2. Space Complexity: O(n) for creating the sorted strings
3. Readability: Simple and easy to understand
4. Testability: Works correctly but lacks explicit handling of edge cases

Improvements in my solution:

1. Time Complexity: Improved to O(n) by using a character frequency counter approach
   instead of sorting, which eliminates the log n factor

2. Space Complexity: Still O(n) in the worst case, but potentially better for strings
   with limited character sets as we only store unique characters

3. Readability and Maintainability:
   - Added comprehensive documentation with JSDoc comments
   - Used meaningful variable names
   - Structured the code with clear logical sections
   - Added explicit edge case handling

4. Testability:
   - Included a variety of test cases covering normal usage and edge cases
   - Added early returns for common edge cases to improve efficiency

5. Efficiency Optimizations:
   - Added an early return for identical strings
   - Added an early return when we find a character mismatch
   - Used Map instead of Object for potentially better performance with
     non-string keys (though not relevant for this specific case)

The character frequency approach is more efficient because:
- It avoids the O(n log n) cost of sorting
- It can return early as soon as a mismatch is found
- It only requires a single pass through each string

This solution balances correctness, efficiency, readability, and robustness,
making it more suitable for a production environment.
*/
  `,
  hints: [
    "Consider using a character frequency counter instead of sorting",
    "Think about edge cases like empty strings, identical strings, or strings with special characters",
    "Look for opportunities to return early when you can determine the result without processing the entire string"
  ],
  solution_explanation: `
The exercise demonstrates how to improve a working but suboptimal solution by focusing on:

1. **Algorithmic efficiency**: The original solution uses sorting, which has O(n log n) time complexity. The improved solution uses a character frequency counter approach with O(n) time complexity.

2. **Code quality**: The improved solution includes:
   - Clear documentation with JSDoc comments
   - Explicit edge case handling
   - Meaningful variable names
   - Logical code structure

3. **Testability**: The solution includes test cases that cover:
   - Normal cases (valid anagrams and non-anagrams)
   - Edge cases (empty strings, single characters, identical strings)
   - Strings with repeated characters

4. **Optimization techniques**:
   - Early returns for quick determination
   - Efficient data structures (Map)
   - Single-pass algorithm

The key insight is that anagrams must have exactly the same characters with the same frequencies. By counting character occurrences instead of sorting, we achieve a more efficient solution while also making the code more readable and robust.

This approach demonstrates the balance between correctness, efficiency, readability, and robustness that interviewers look for in technical interviews.
  `
};