export const thinkingAloudChapter = {
  id: 'thinking-aloud',
  title: 'Thinking Aloud and Clarifying Requirements',
  sectionId: 'interview-readiness',
  previousChapterId: 'explaining-code-tradeoffs',
  nextChapterId: 'clean-solutions',
  content: `# Thinking Aloud and Clarifying Requirements

One of the most valuable skills in technical interviews is the ability to think aloud and ask clarifying questions. This chapter will help you develop techniques for effectively communicating your thought process and ensuring you fully understand the problem before diving into a solution.

## The Importance of Thinking Aloud

When interviewers ask you to solve a problem, they're not just interested in whether you can find the correct answer—they want to understand how you approach problems. Thinking aloud:

- Demonstrates your problem-solving process
- Shows how you break down complex problems
- Reveals your analytical thinking skills
- Allows interviewers to provide hints if you're stuck
- Creates an interactive experience rather than a silent struggle

## Effective Thinking Aloud Techniques

### 1. Narrate Your Understanding of the Problem

Start by restating the problem in your own words:

"So, I understand that I need to implement a function that finds the longest substring without repeating characters in a given string. For example, in 'abcabcbb', the longest substring would be 'abc' with a length of 3."

This accomplishes two things:
- Confirms your understanding of the problem
- Gives the interviewer a chance to correct any misunderstandings

### 2. Discuss Your Initial Thoughts

Share your first instincts about potential approaches:

"My first thought is to use a sliding window approach with a hash set to keep track of characters we've seen. Another option might be to use a hash map to store the most recent position of each character."

This shows:
- You can generate multiple approaches
- You're not rushing to code the first idea that comes to mind
- You're considering different strategies

### 3. Talk Through Tradeoffs Before Deciding

Verbalize the pros and cons of different approaches:

"The sliding window with a hash set would be O(n) time complexity and O(min(m,n)) space complexity, where m is the size of the character set. The hash map approach would have similar complexity but might be slightly more efficient for certain inputs."

This demonstrates:
- Critical thinking skills
- Ability to evaluate different solutions
- Understanding of algorithmic complexity

### 4. Explain Your Chosen Approach Step by Step

Before coding, outline your approach:

"I'm going to use the sliding window approach with a hash set. I'll maintain two pointers, left and right, both starting at the beginning of the string. I'll expand the right pointer and add characters to my set until I find a duplicate. When I find a duplicate, I'll move the left pointer forward, removing characters from the set until the duplicate is gone."

This shows:
- Organized thinking
- Clear plan before implementation
- Ability to communicate algorithms

### 5. Narrate While Coding

As you write code, explain what you're doing:

"Now I'm initializing my hash set and my two pointers. Next, I'll set up a variable to track the maximum length we've seen so far..."

This helps:
- Keep the interviewer engaged
- Demonstrate your coding thought process
- Catch errors as you verbalize your logic

## Clarifying Requirements

Asking clarifying questions is not a sign of weakness—it shows thoroughness and attention to detail. Good engineers don't start coding until they fully understand the problem.

### Key Questions to Ask

1. **Input Clarification**
   - "What are the constraints on the input? Size? Data types?"
   - "Can the input be empty or null? How should I handle that?"
   - "Are there any specific formats or patterns in the input I should be aware of?"

2. **Output Expectations**
   - "What exactly should the output format be?"
   - "For multiple valid answers, should I return all of them or just one?"
   - "How should I handle error cases in the output?"

3. **Edge Cases**
   - "How should I handle duplicate values?"
   - "What about extreme values like empty strings, negative numbers, or very large inputs?"
   - "Are there any special cases I should consider?"

4. **Performance Requirements**
   - "Are there any time or space complexity requirements I should aim for?"
   - "Is optimization for average case or worst case more important?"
   - "Should I prioritize readability or performance in my solution?"

5. **Assumptions Verification**
   - "I'm assuming X about the problem. Is that correct?"
   - "Can I assume the input will always be valid?"
   - "Is it safe to assume the data will fit in memory?"

### Example of Clarifying a Problem

**Problem Statement**: "Write a function to find the kth largest element in an array."

**Poor Approach**: Immediately start coding a sorting algorithm.

**Strong Approach**:

"Before I start, I'd like to clarify a few things:
1. By 'kth largest', do we mean the kth distinct value, or can there be duplicates? For example, in [3,3,2,1], is the 2nd largest 3 or 2?
2. Can the array contain negative numbers or only positive?
3. What should I return if k is larger than the array size?
4. Are there any constraints on the array size or the range of values?
5. Should I optimize for time or space complexity?
6. Can I modify the input array, or should I leave it unchanged?"

## Balancing Thinking Aloud with Progress

While thinking aloud is valuable, it's important to balance it with making progress:

- Don't overthink simple problems
- Avoid excessive verbalization that slows you down
- If you're stuck, verbalize what you're stuck on specifically
- Be concise but informative

Remember, the goal is to demonstrate your problem-solving process while efficiently working toward a solution.`,
  exercise: {
    question: `
# Exercise: Thinking Aloud and Clarifying Requirements

You are given the following problem in an interview:

**Problem**: Implement a function that merges two sorted arrays into one sorted array.

Your task is to:

1. Write down at least 5 clarifying questions you would ask the interviewer before solving this problem
2. Record a brief "thinking aloud" script that demonstrates how you would verbalize your thought process for this problem
3. Implement the solution based on your clarified understanding

For this exercise, assume the following answers to your clarifying questions:
- The arrays contain only integers
- The output should be a new array (don't modify the input arrays)
- The arrays can be of different lengths
- The arrays might be empty
- There might be duplicate values in the arrays
    `,
    starterCode: `
// Your clarifying questions (as comments):
/*
1.
2.
3.
4.
5.
*/

// Your "thinking aloud" script (as comments):
/*

*/

// Your implementation:
function mergeSortedArrays(arr1, arr2) {
  // Your solution here
}

// Test cases
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));
console.log(mergeSortedArrays([], [1, 2, 3]));
console.log(mergeSortedArrays([1, 1, 3, 5], [1, 2, 3, 4]));
    `,
    solution: `
// Your clarifying questions (as comments):
/*
1. Are the input arrays already sorted? If so, in what order (ascending or descending)?
2. What should I return if both input arrays are empty?
3. Can the arrays contain duplicate values, and if so, should all duplicates be preserved in the output?
4. Are there any constraints on the array sizes or the range of values in the arrays?
5. Are there any specific time or space complexity requirements for the solution?
*/

// Your "thinking aloud" script (as comments):
/*
Alright, so I need to merge two sorted arrays into one sorted array. Let me think about this...

First, I understand that both input arrays are already sorted in ascending order, and I need to produce a new sorted array that contains all elements from both arrays.

A simple approach would be to concatenate the two arrays and then sort the result, but that wouldn't take advantage of the fact that the inputs are already sorted. That would be O((n+m)log(n+m)) time complexity where n and m are the lengths of the input arrays.

Instead, I can use a more efficient approach similar to the merge step in merge sort. Since both arrays are already sorted, I can use two pointers, one for each array, and compare the elements at those pointers. I'll take the smaller element, add it to my result array, and move that pointer forward. This way, I'll build the merged array in a single pass through both input arrays.

This approach will have O(n+m) time complexity, which is optimal since we need to examine each element at least once. The space complexity will also be O(n+m) for the output array.

Let me implement this approach:
*/

// Your implementation:
function mergeSortedArrays(arr1, arr2) {
  const merged = [];
  let i = 0; // Pointer for arr1
  let j = 0; // Pointer for arr2
  
  // Compare elements from both arrays and add the smaller one to the result
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }
  
  // Add any remaining elements from arr1
  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }
  
  // Add any remaining elements from arr2
  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }
  
  return merged;
}

// Test cases
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));
console.log(mergeSortedArrays([], [1, 2, 3]));
console.log(mergeSortedArrays([1, 1, 3, 5], [1, 2, 3, 4]));
    `,
    tests: [
      {
        name: "Clarifying Questions",
        test: function(code) {
          try {
            // Check if the code contains at least 5 clarifying questions
            const commentStart = code.indexOf("/*", code.indexOf("Your clarifying questions"));
            const commentEnd = code.indexOf("*/", commentStart);
            
            if (commentStart === -1 || commentEnd === -1) {
              return {
                passed: false,
                messages: ["Could not find clarifying questions section"]
              };
            }
            
            const questionsComment = code.substring(commentStart + 2, commentEnd);
            const questionLines = questionsComment.split('\n')
              .filter(line => line.trim().match(/^\d+\./)); // Lines starting with a number and period
            
            return {
              passed: questionLines.length >= 5,
              messages: [
                `Found ${questionLines.length} clarifying questions`,
                questionLines.length >= 5 ?
                  "Good job asking sufficient clarifying questions!" :
                  "You need to ask at least 5 clarifying questions"
              ]
            };
          } catch (error) {
            return {
              passed: false,
              messages: [`Error analyzing clarifying questions: ${error.message}`]
            };
          }
        },
        message: "You should include at least 5 relevant clarifying questions about the problem."
      },
      {
        name: "Thinking Aloud Script",
        test: function(code) {
          try {
            // Check if the code contains a thinking aloud script
            const commentStart = code.indexOf("/*", code.indexOf("Your \"thinking aloud\" script"));
            const commentEnd = code.indexOf("*/", commentStart);
            
            if (commentStart === -1 || commentEnd === -1) {
              return {
                passed: false,
                messages: ["Could not find thinking aloud script section"]
              };
            }
            
            const thinkingScript = code.substring(commentStart + 2, commentEnd);
            const wordCount = thinkingScript.split(/\s+/).filter(word => word.trim().length > 0).length;
            
            // Check for key elements in the thinking process
            const mentionsApproach = thinkingScript.includes("approach");
            const mentionsComplexity = thinkingScript.includes("complexity") ||
                                      thinkingScript.includes("O(") ||
                                      thinkingScript.includes("time") && thinkingScript.includes("space");
            const mentionsAlgorithm = thinkingScript.includes("algorithm") ||
                                     thinkingScript.includes("pointer") ||
                                     thinkingScript.includes("merge");
            
            return {
              passed: wordCount >= 50 && mentionsApproach && (mentionsComplexity || mentionsAlgorithm),
              messages: [
                `Thinking aloud script has ${wordCount} words`,
                mentionsApproach ? "Discusses approach" : "Does not discuss approach",
                mentionsComplexity ? "Discusses complexity" : "Does not discuss complexity",
                mentionsAlgorithm ? "Discusses algorithm details" : "Does not discuss algorithm details"
              ]
            };
          } catch (error) {
            return {
              passed: false,
              messages: [`Error analyzing thinking aloud script: ${error.message}`]
            };
          }
        },
        message: "Your thinking aloud script should demonstrate your problem-solving process, including approach consideration, complexity analysis, and algorithm details."
      },
      {
        name: "Implementation Correctness",
        test: function(code) {
          try {
            // Extract the implementation
            const functionStart = code.indexOf("function mergeSortedArrays");
            const functionEnd = code.indexOf("// Test cases", functionStart);
            
            if (functionStart === -1) {
              return {
                passed: false,
                messages: ["Could not find mergeSortedArrays function"]
              };
            }
            
            const functionCode = code.substring(
              functionStart,
              functionEnd !== -1 ? functionEnd : undefined
            );
            
            const mergeSortedArrays = new Function(
              functionCode + '; return mergeSortedArrays;'
            )();
            
            // Test cases
            const testCases = [
              {
                arr1: [1, 3, 5],
                arr2: [2, 4, 6],
                expected: [1, 2, 3, 4, 5, 6]
              },
              {
                arr1: [],
                arr2: [1, 2, 3],
                expected: [1, 2, 3]
              },
              {
                arr1: [1, 1, 3, 5],
                arr2: [1, 2, 3, 4],
                expected: [1, 1, 1, 2, 3, 3, 4, 5]
              },
              {
                arr1: [],
                arr2: [],
                expected: []
              }
            ];
            
            const results = testCases.map(tc => {
              const result = mergeSortedArrays(tc.arr1, tc.arr2);
              const isCorrect = JSON.stringify(result) === JSON.stringify(tc.expected);
              return {
                passed: isCorrect,
                message: isCorrect ?
                  `Correctly merged ${JSON.stringify(tc.arr1)} and ${JSON.stringify(tc.arr2)}` :
                  `Failed to merge ${JSON.stringify(tc.arr1)} and ${JSON.stringify(tc.arr2)}. Expected ${JSON.stringify(tc.expected)}, got ${JSON.stringify(result)}`
              };
            });
            
            const allPassed = results.every(r => r.passed);
            
            return {
              passed: allPassed,
              messages: results.map(r => r.message)
            };
          } catch (error) {
            return {
              passed: false,
              messages: [`Error testing implementation: ${error.message}`]
            };
          }
        },
        message: "Your implementation should correctly merge two sorted arrays into one sorted array."
      }
    ],
    hints: [
      "Think about what information you would need to know to implement the solution correctly",
      "Consider edge cases like empty arrays or arrays with duplicate values",
      "The most efficient solution takes advantage of the fact that the input arrays are already sorted"
    ],
    solution_explanation: `
This exercise demonstrates how to approach a problem by first clarifying requirements and then thinking aloud through your solution process.

The clarifying questions cover important aspects:
1. Confirming the sorting order of input arrays
2. Handling edge cases (empty arrays)
3. Handling duplicates
4. Understanding constraints on input size and values
5. Clarifying performance expectations

The thinking aloud script shows a structured approach:
1. Restating the problem to confirm understanding
2. Considering multiple approaches (concatenate-and-sort vs. two-pointer)
3. Analyzing time and space complexity
4. Explaining why the chosen approach is optimal
5. Outlining the implementation strategy before coding

The implementation uses the two-pointer technique, which is optimal for this problem:
- Time complexity: O(n+m) where n and m are the lengths of the input arrays
- Space complexity: O(n+m) for the output array
- The solution correctly handles all the test cases, including empty arrays and duplicates

This approach demonstrates both technical competence and strong communication skills, which are equally important in interview settings.
    `
  }
};