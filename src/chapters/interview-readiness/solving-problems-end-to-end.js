/**
 * Chapter: Solving Problems End-to-End
 * This chapter focuses on techniques for approaching and solving technical problems
 * under constraints during interviews.
 */

export const content = `
# Solving Problems End-to-End Under Constraints

In technical interviews, you'll often be asked to solve problems with specific constraints, such as time limits, space complexity requirements, or restricted use of certain data structures or algorithms. This chapter will help you develop strategies for tackling these challenges effectively.

## The End-to-End Problem-Solving Process

### 1. Understand the Problem
- Listen carefully to the problem statement
- Identify the inputs and expected outputs
- Clarify any ambiguities or edge cases
- Confirm your understanding with the interviewer

### 2. Develop a Plan
- Break down the problem into smaller, manageable parts
- Consider multiple approaches before committing to one
- Think about time and space complexity requirements
- Sketch out a high-level algorithm

### 3. Implement Your Solution
- Write clean, readable code
- Use meaningful variable and function names
- Handle edge cases appropriately
- Maintain consistent coding style

### 4. Test Your Solution
- Trace through your code with a simple example
- Test with edge cases (empty inputs, large inputs, etc.)
- Identify and fix any bugs or logical errors
- Analyze the time and space complexity

## Working Under Constraints

### Time Constraints
- Start with a brute force solution if you're stuck
- Gradually optimize your approach
- Communicate your thought process throughout
- Prioritize correctness over optimization initially

### Space Constraints
- Consider in-place algorithms when appropriate
- Be mindful of auxiliary space usage
- Understand the tradeoffs between time and space complexity
- Know when to use specific data structures to optimize space

### Coding Constraints
- Some interviews may restrict the use of certain libraries or functions
- Practice implementing common algorithms and data structures from scratch
- Be prepared to adapt your approach based on constraints

## Practice Strategies

1. **Time yourself**: Practice solving problems within a fixed time limit
2. **Verbalize your thoughts**: Get comfortable explaining your approach out loud
3. **Simulate constraints**: Practice with artificial constraints (e.g., no hash maps, O(1) space)
4. **Review and reflect**: After solving a problem, consider alternative approaches

Remember, the goal is not just to solve the problem, but to demonstrate your problem-solving process and ability to work effectively under constraints.
`;

export const exercise = {
  question: `
# Exercise: Solving a Problem End-to-End

You are given an array of integers and a target sum. Write a function that finds all unique pairs of integers in the array that sum up to the target value.

For example, given the array [1, 5, 3, 7, 2, 4, 9] and target sum 10, your function should return the pairs [[1, 9], [3, 7], [5, 5]].

Constraints:
- You must solve this in O(n) time complexity
- You can only use O(n) extra space
- Your solution should handle duplicate numbers appropriately

Follow the end-to-end problem-solving process:
1. Understand the problem and clarify any ambiguities
2. Develop a plan, considering the constraints
3. Implement your solution
4. Test your solution with various test cases
  `,
  starter_code: `
function findPairsWithSum(arr, targetSum) {
  // Your solution here
}

// Test cases
console.log(findPairsWithSum([1, 5, 3, 7, 2, 4, 9], 10));
console.log(findPairsWithSum([1, 1, 2, 3, 4, 5], 6));
console.log(findPairsWithSum([], 10));
console.log(findPairsWithSum([5, 5, 5, 5], 10));
  `,
  solution_code: `
function findPairsWithSum(arr, targetSum) {
  const seen = new Set();
  const result = [];
  const usedPairs = new Set();
  
  for (let num of arr) {
    const complement = targetSum - num;
    
    // Check if we've seen the complement before
    if (seen.has(complement)) {
      // Create a unique key for this pair to handle duplicates
      const pairKey = [Math.min(num, complement), Math.max(num, complement)].toString();
      
      // Only add the pair if we haven't seen it before
      if (!usedPairs.has(pairKey)) {
        result.push([complement, num]);
        usedPairs.add(pairKey);
      }
    }
    
    // Add current number to seen set
    seen.add(num);
  }
  
  return result;
}

// Test cases
console.log(findPairsWithSum([1, 5, 3, 7, 2, 4, 9], 10));
console.log(findPairsWithSum([1, 1, 2, 3, 4, 5], 6));
console.log(findPairsWithSum([], 10));
console.log(findPairsWithSum([5, 5, 5, 5], 10));
  `,
  hints: [
    "Consider using a hash set to keep track of numbers you've seen so far",
    "Think about how to handle duplicate pairs in your result",
    "Remember to check if (target - current number) exists in your set"
  ],
  solution_explanation: `
This solution uses a hash set approach to achieve O(n) time complexity:

1. We iterate through the array once, which gives us O(n) time complexity
2. For each number, we check if its complement (targetSum - num) has been seen before
3. To handle duplicate pairs, we create a unique key for each pair and track used pairs
4. We use a Set to store seen numbers, which gives us O(1) lookup time
5. The space complexity is O(n) for storing the sets and result array

This approach efficiently finds all unique pairs that sum to the target value while meeting the constraints.
  `
};