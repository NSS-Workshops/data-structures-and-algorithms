import { TestResult } from "../../utils/test_utils";

export const codeExcerciseTwoChapter = {
  id: 'a2a37823',
  title: 'Module 10 - Code Excercise 2',
  sectionId: 'interview-readiness',
  previousChapterId: null,
  content: `
  Hi 👋,
You'll be guiding your partner through the coding problem on the right side of your screen. 

⚠️ **Please do not share this URL / problem before class.**  
Revealing the question early defeats the purpose of simulating a real-world interview, where candidates do not know the problem in advance. Let's give your partner the chance to experience the challenge authentically.

🧠 **Before class:**  
Take time to study the problem. During the session, you'll have 90 minutes in your breakout room to run a mock interview with your partner. Be sure to take turns acting as the interviewer and interviewee.

🗣️ **As the interviewer, your responsibilities are:**
- Send this URL to your partner (copy and past the whole url and slack it directly to you partner)
- Briefly introduce the problem
- Never give away the answer
- Take notes and provide feedback
- Fill out this [feedback form](https://forms.gle/sXK3tJaGNEk52jm4A)

🗣️ **As the interviewee, your responsibilities are:**
- Ask clarifying questions
- Follow the steps in the [solving guide](https://forms.gle/sXK3tJaGNEk52jm4A):
    Step 1: Clarify
    Step 2: Plan
    Step 3: Implement
    Step 4: Test
    Step 5: Optimize

🪞 **After the first interview:**  
Leave 10–15 minutes to reflect, share feedback, and then switch roles.

Best of luck, and enjoy the practice! 🚀

## Problem: Best Time to Buy and Sell Stock

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

### Follow-up Questions:
- What is the time complexity of your solution?
- What is the space complexity?
- What if you could make multiple transactions?`,
  exercise: {
    starterCode:`/*
Problem: Best Time to Buy and Sell Stock

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Examples:
Input: [7, 1, 5, 3, 6, 4]
Output: 5 (buy at price 1, sell at price 6)

Input: [7, 6, 4, 3, 1]
Output: 0 (no profit possible)

Input: [1, 2, 3, 4, 5]
Output: 4 (buy at price 1, sell at price 5)

Follow-up Questions:
- What is the time complexity of your solution?
- What is the space complexity?
- What if you could make multiple transactions?
*/

function maxProfit(prices) {
  // Approach: Track minimum price seen so far and maximum profit
  // For each price, calculate profit if we sell today
  // Update maximum profit if current profit is better
  // Update minimum price if current price is lower
  
  // Your code here
}`,
    solution:`/*
Problem: Best Time to Buy and Sell Stock

Find maximum profit from buying and selling stock once.
*/

function maxProfit(prices) {
  // Handle edge cases
  if (!prices || prices.length < 2) {
    return 0;
  }
  
  let minPrice = prices[0];  // Minimum price seen so far
  let maxProfit = 0;         // Maximum profit achievable
  
  // Iterate through prices starting from day 1
  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i];
    
    // Calculate profit if we sell today
    const currentProfit = currentPrice - minPrice;
    
    // Update maximum profit if current profit is better
    maxProfit = Math.max(maxProfit, currentProfit);
    
    // Update minimum price if current price is lower
    minPrice = Math.min(minPrice, currentPrice);
  }
  
  return maxProfit;
  
  // Time Complexity: O(n) - single pass through the array
  // Space Complexity: O(1) - only using constant extra space
  
  // Key insight: We need to buy before we sell, so we track the minimum
  // price seen so far and calculate profit for selling at current price
}`,
    tests:[
      {
        name: "Basic profit calculation",
        test: (code) => {
          try {
            const maxProfit = new Function(`${code}; return maxProfit;`)();
            
            const test1 = maxProfit([7, 1, 5, 3, 6, 4]) === 5; // Buy at 1, sell at 6
            const test2 = maxProfit([1, 2, 3, 4, 5]) === 4; // Buy at 1, sell at 5
            const test3 = maxProfit([2, 4, 1]) === 2; // Buy at 2, sell at 4
            
            if (test1 && test2 && test3) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Basic cases failed. [7,1,5,3,6,4]: ${maxProfit([7, 1, 5, 3, 6, 4])}, [1,2,3,4,5]: ${maxProfit([1, 2, 3, 4, 5])}, [2,4,1]: ${maxProfit([2, 4, 1])}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should calculate maximum profit correctly."
      },
      {
        name: "Handle no profit scenarios",
        test: (code) => {
          try {
            const maxProfit = new Function(`${code}; return maxProfit;`)();
            
            const test1 = maxProfit([7, 6, 4, 3, 1]) === 0; // Decreasing prices
            const test2 = maxProfit([5, 5, 5, 5]) === 0; // Same prices
            const test3 = maxProfit([10, 9, 8, 7, 6]) === 0; // Strictly decreasing
            
            if (test1 && test2 && test3) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `No profit cases failed. [7,6,4,3,1]: ${maxProfit([7, 6, 4, 3, 1])}, [5,5,5,5]: ${maxProfit([5, 5, 5, 5])}, [10,9,8,7,6]: ${maxProfit([10, 9, 8, 7, 6])}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should return 0 when no profit is possible."
      },
      {
        name: "Handle edge cases",
        test: (code) => {
          try {
            const maxProfit = new Function(`${code}; return maxProfit;`)();
            
            const test1 = maxProfit([]) === 0; // Empty array
            const test2 = maxProfit([5]) === 0; // Single price
            const test3 = maxProfit([1, 2]) === 1; // Two prices
            const test4 = maxProfit([2, 1]) === 0; // Two prices, decreasing
            
            if (test1 && test2 && test3 && test4) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Edge cases failed. []: ${maxProfit([])}, [5]: ${maxProfit([5])}, [1,2]: ${maxProfit([1, 2])}, [2,1]: ${maxProfit([2, 1])}`
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
      },
      {
        name: "Handle complex patterns",
        test: (code) => {
          try {
            const maxProfit = new Function(`${code}; return maxProfit;`)();
            
            const test1 = maxProfit([3, 2, 6, 5, 0, 3]) === 4; // Buy at 2, sell at 6
            const test2 = maxProfit([1, 5, 3, 6, 4]) === 5; // Buy at 1, sell at 6
            const test3 = maxProfit([2, 1, 2, 1, 0, 1, 2]) === 2; // Buy at 0, sell at 2
            
            if (test1 && test2 && test3) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Complex cases failed. [3,2,6,5,0,3]: ${maxProfit([3, 2, 6, 5, 0, 3])}, [1,5,3,6,4]: ${maxProfit([1, 5, 3, 6, 4])}, [2,1,2,1,0,1,2]: ${maxProfit([2, 1, 2, 1, 0, 1, 2])}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should handle complex price patterns."
      }
    ]
  }
};