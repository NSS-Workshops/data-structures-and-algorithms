import { TestResult } from "../../utils/test_utils";

export const codeExcerciseFiveChapter = {
  id: 'b3a8d7c1',
  title: 'DSA Challenge 5 - Map & Set: frequency & dedup',
  sectionId: 'combining-patterns',
  previousChapterId: null,
  content: `
# Challenge 5: Map & Set — frequency & dedup

**Navigate:** [1](9b8a8427) | [2](a4b7c9d2) | [3](e8f1a5b3) | [4](c6d9e2f4) | 5 | [6](f9e4b2a7) | [7](d1c5f8e3) | [8](a7b2e9f6) | [9](c4f7a1d8)

**Why it matters:** Hash-based structures unlock O(1) average lookups and fast membership tests.

**Objectives:**
- Use \`Map\` to count frequencies; use \`Set\` to test duplicates.
- Explain typical O(1) for \`.get/.set/.has\` and how collisions change behavior.

**Time Estimate:** 20 minutes

## Problems to Solve:

1. **wordCount(text)** - Return a Map of word → count (case-insensitive, letters only)
2. **hasDuplicate(arr)** - Return true if array has any duplicate value (use Set)

## Big-O Analysis:
- **Average O(1)** for Map/Set operations (.get/.set/.has)
- **Worst-case degrades with collisions** but rare in practice
- **Space: O(n)** for storing unique elements`,

  exercise: {
    starterCode: `/*
Challenge 5: Map & Set — frequency & dedup

Implement the following functions:

1. wordCount(text) - Return a Map of word -> count (case-insensitive, letters only)
2. hasDuplicate(arr) - Return true if array has any duplicate value (use Set)

Use Map for frequency counting and Set for duplicate detection.
*/

function wordCount(text) {
  // Return a Map of word -> count (case-insensitive, letters only)
  // Use Map
  // Your code here
}

function hasDuplicate(arr) {
  // Return true if array has any duplicate value (use Set)
  // Your code here
}`,

    solution: `/*
Challenge 5: Map & Set — frequency & dedup
*/

function wordCount(text) {
  // Return a Map of word -> count (case-insensitive, letters only)
  const m = new Map();
  
  // Extract words (letters only, case-insensitive)
  const words = (text.toLowerCase().match(/[a-z]+/g) || []);
  
  for (const w of words) {
    m.set(w, (m.get(w) || 0) + 1);
  }
  
  return m;
}

function hasDuplicate(arr) {
  // Return true if array has any duplicate value (use Set)
  const s = new Set();
  
  for (const x of arr) { 
    if (s.has(x)) {
      return true; 
    }
    s.add(x); 
  }
  
  return false;
}

// Average O(1) for Map/Set ops; worst-case degrades with collisions.`,

    tests: [
      {
        name: "wordCount works correctly",
        test: (code) => {
          try {
            const func = new Function(`${code}; return { wordCount, hasDuplicate };`)();
            const wc = func.wordCount('One fish two fish, red fish blue fish.');
            
            const fishCount = wc.get('fish');
            const oneCount = wc.get('one');
            
            if (fishCount === 4 && oneCount === 1) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Fish count: ${fishCount}, One count: ${oneCount}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should count word frequencies correctly."
      },
      {
        name: "hasDuplicate detects duplicates",
        test: (code) => {
          try {
            const func = new Function(`${code}; return { wordCount, hasDuplicate };`)();
            
            const result1 = func.hasDuplicate([1, 2, 3, 2]);
            const result2 = func.hasDuplicate([1, 2, 3]);
            
            if (result1 === true && result2 === false) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `With duplicates: ${result1}, Without duplicates: ${result2}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should detect duplicates correctly."
      },
      {
        name: "Handles edge cases",
        test: (code) => {
          try {
            const func = new Function(`${code}; return { wordCount, hasDuplicate };`)();
            
            // Empty text
            const wc1 = func.wordCount('');
            
            // Text with no letters
            const wc2 = func.wordCount('123 !@# $%^');
            
            // Empty array
            const dup1 = func.hasDuplicate([]);
            
            // Single element
            const dup2 = func.hasDuplicate([1]);
            
            if (wc1.size === 0 && wc2.size === 0 && dup1 === false && dup2 === false) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Empty text: ${wc1.size}, No letters: ${wc2.size}, Empty array: ${dup1}, Single: ${dup2}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should handle edge cases correctly."
      }
    ]
  }
};