import { useAutoGradeQuiz } from "@nss-workshops/nss-core";
import { TestResult } from "@nss-workshops/nss-core";

export const optimalTradingPeriod = {
  id: 'optimal-trading-period',
  title: 'Variable-Size Windows - Optimal Trading Period Analysis',
  sectionId: 'sliding-window',
  previousChapterId: 'sliding-window-intro',
  content: `
## The Trading Strategy Challenge

Michael Chen, a quantitative trader at CleanEnergy Capital, needed to identify optimal trading periods for sustainable algorithmic strategies. Unlike fixed-period analysis, he needed to find variable-length periods that met specific ESG performance criteria.

"I need to find the longest consecutive period where our green energy strategy maintains at least a 15% annual return," Michael explained to his colleague, Lisa Park. "The period length can vary - it might be 30 days, 90 days, or even 200 days."

Lisa recognized this as a classic variable-size sliding window problem from her Data Structures and Algorithms class at Nashville Software School. "This requires the two-pointer technique where we expand and contract the window based on performance conditions."

## Understanding Variable-Size Windows

Variable-size sliding windows adjust their boundaries based on conditions, making them perfect for optimization problems in finance:

- **Longest period** with minimum return threshold
- **Shortest period** to achieve target profit
- **Optimal window** meeting risk-adjusted criteria

### Two-Pointer Technique Template

\`\`\`
VARIABLE_SIZE_SLIDING_WINDOW(data, condition):
    left = 0
    bestResult = null
    
    FOR right = 0 TO data.length - 1:
        // Expand window by including data[right]
        ADD data[right] TO current_window
        
        // Contract window while condition allows optimization
        WHILE can_optimize(current_window):
            // Update best result if current window is better
            IF is_better(current_window, bestResult):
                bestResult = current_window_copy
            
            // Shrink window from left
            REMOVE data[left] FROM current_window
            left++
        
    RETURN bestResult
\`\`\`

## 📈 Financial Example: Quickest Time to Hit Profit Target

Given a list of daily profits, find the minimum number of consecutive days needed to reach a target cumulative profit.

This models: “How quickly can I reach my profit goal with consecutive trading days?”
\`\`\`javascript
// Find the shortest streak of days where cumulative profit ≥ target
function quickestProfitTarget(profits, target) {
  let left = 0;        // start of window
  let sum = 0;         // running sum of current window
  let minLen = Infinity; // track best (smallest) window length

  // Expand the window one day at a time
  for (let right = 0; right < profits.length; right++) {
    sum += profits[right];

    // Once we’ve reached the target, try to shrink from the left
    // Shrinking keeps it valid while removing extra "baggage" days
    while (sum >= target) {
      minLen = Math.min(minLen, right - left + 1); // update best length
      sum -= profits[left++]; // shrink from left
    }
  }

  // If never reached target, return 0
  return minLen === Infinity ? 0 : minLen;
}

// Example: How quickly can we reach $7 profit?
console.log(quickestProfitTarget([2, 3, 1, 2, 4, 3], 7));
// → 2  (profits [4,3] reach $7 in just 2 days)
\`\`\`

## ⏱️ Michael's First Challenge!

🔓 **Uncomment the below code section in the editor 👉:**
- Implement the \`findLongestGrowthPeriod()\` function using the variable-size sliding window technique
- Use the two-pointer approach to track consecutive non-decreasing portfolio values
- **Click Run Tests**
- **Inspect 📋 Console Output window and run test to check for correctness!**

"This challenge teaches you the variable-size sliding window optimization that powers sophisticated trading algorithms," Lisa explained. "The same technique that helps us identify optimal holding periods and validate sustainable investment performance over time."

`,
  exercise: {
    starterCode: `/*
Problem: Find Longest Period with Consistent Growth

Given an array of daily portfolio values, find the longest consecutive period
where the portfolio shows consistent growth (each day's value >= previous day's value).

Example:
portfolioValues = [100, 102, 105, 103, 107, 110, 115, 112, 118, 120]

Find the longest subarray where values are non-decreasing.
*/

function findLongestGrowthPeriod(portfolioValues) {
  if (portfolioValues.length <= 1) return { startDay: 0, endDay: 0, length: portfolioValues.length };
  
  let maxLength = 1;
  let bestPeriod = { startDay: 0, endDay: 0, length: 1 };
  
  // TODO: Implement variable-size sliding window
  // Hint: Expand window while values are non-decreasing
  // Reset when growth stops
  
  let currentStart = 0;
  
  for (let i = 1; i < portfolioValues.length; i++) {
    // TODO: Check if current value maintains growth
    // If not, update best period and reset window
    // Your code here...
  }
  
  return bestPeriod;
}

// Test your implementation
const testValues = [100, 102, 105, 103, 107, 110, 115, 112, 118, 120];
console.log("Longest growth period:", findLongestGrowthPeriod(testValues));`,
    solution: `/*
Problem: Find Longest Period with Consistent Growth

Complete solution using variable-size sliding window to find
the longest consecutive period of non-decreasing portfolio values.
*/

function findLongestGrowthPeriod(portfolioValues) {
  if (portfolioValues.length <= 1) return { startDay: 0, endDay: 0, length: portfolioValues.length };
  
  let maxLength = 1;
  let bestPeriod = { startDay: 0, endDay: 0, length: 1 };
  let currentStart = 0;
  
  for (let i = 1; i < portfolioValues.length; i++) {
    // Check if current value maintains growth (non-decreasing)
    if (portfolioValues[i] < portfolioValues[i - 1]) {
      // Growth stopped, check if current period is the longest
      const currentLength = i - currentStart;
      if (currentLength > maxLength) {
        maxLength = currentLength;
        bestPeriod = {
          startDay: currentStart,
          endDay: i - 1,
          length: currentLength
        };
      }
      
      // Reset window start to current position
      currentStart = i;
    }
  }
  
  // Check final period (in case array ends with growth)
  const finalLength = portfolioValues.length - currentStart;
  if (finalLength > maxLength) {
    bestPeriod = {
      startDay: currentStart,
      endDay: portfolioValues.length - 1,
      length: finalLength
    };
  }
  
  return bestPeriod;
}

// Test the implementation
const testValues = [100, 102, 105, 103, 107, 110, 115, 112, 118, 120];
console.log("Longest growth period:", findLongestGrowthPeriod(testValues));`,
    tests: [
      {
        name: "Test longest growth period detection",
        test: (code) => {
          try {
            const testCode = code + `
            // Test the function with various inputs
            const test1 = findLongestGrowthPeriod([100, 102, 105, 103, 107, 110, 115, 112, 118, 120]);
            const test2 = findLongestGrowthPeriod([10, 20, 30, 40, 50]);
            const test3 = findLongestGrowthPeriod([50, 40, 30, 20, 10]);
            const test4 = findLongestGrowthPeriod([100]);
            
            return {
              test1: test1,
              test2: test2,
              test3: test3,
              test4: test4,
              hasFunction: typeof findLongestGrowthPeriod === 'function'
            };
            `;

            const testResult = new Function(testCode)();

            if (!testResult.hasFunction) {
              return new TestResult({ passed: false, message: "findLongestGrowthPeriod function not found or not implemented correctly." });
            }

            // Test 1: Mixed growth periods
            if (testResult.test1.length < 3) {
              return new TestResult({ passed: false, message: `Test 1 failed: Expected length >= 3, but got ${testResult.test1.length}` });
            }

            // Test 2: All increasing - should return entire array
            if (testResult.test2.length !== 5) {
              return new TestResult({ passed: false, message: `Test 2 failed: Expected length 5 for all increasing array, but got ${testResult.test2.length}` });
            }

            // Test 3: All decreasing - should return length 1
            if (testResult.test3.length !== 1) {
              return new TestResult({ passed: false, message: `Test 3 failed: Expected length 1 for all decreasing array, but got ${testResult.test3.length}` });
            }

            // Test 4: Single element
            if (testResult.test4.length !== 1) {
              return new TestResult({ passed: false, message: `Test 4 failed: Expected length 1 for single element, but got ${testResult.test4.length}` });
            }

            return new TestResult({ passed: true });
          } catch (error) {
            return new TestResult({ passed: false, message: `Error: ${error.message}` });
          }
        },
        message: "Longest growth period detection test failed",
        successMessage: "✅ Excellent! Your variable-size sliding window correctly finds the longest growth period."
      }
    ]
  },
  quiz: {
    component: () => {
      const CheckpointComponent = () => {
        useAutoGradeQuiz();

        return (
          <main>
            <h2>🧠 Recall Practice</h2>
            <form className="auto-graded-quiz">
              <div className="question" data-answer="portfolioValues[i] < portfolioValues[i - 1]">
                <p>
                  Complete the missing condition in this variable-size sliding window code that detects when portfolio growth stops:
                </p>
                <pre><code>{`
for (let i = 1; i \< portfolioValues.length; i++\) {
  // Check if current value maintains growth
  if (_______________) {
    // Growth stopped, update best period
    const currentLength = i - currentStart;
    // ... rest of logic
  }
}`}</code></pre>
                <input type="text" required />
                <span className="feedback" />
                <div className="explanation">
                  The condition <strong>{`portfolioValues[i] < portfolioValues[i - 1]`}</strong> detects when the current value is less than the previous value, indicating that the growth period has ended. This triggers the window reset logic in the variable-size sliding window algorithm.
                </div>
              </div>

              <div className="question" data-answer="O(n)">
                <p>
                  Analyze the time complexity of this variable-size sliding window algorithm:
                </p>
                <pre><code>{`
function findLongestGrowthPeriod(portfolioValues) {
  let maxLength = 1;
  let currentStart = 0;
  
  for (let i = 1; i < portfolioValues.length; i++) {
    if (portfolioValues[i] < portfolioValues[i - 1]) {
      // Update best period and reset window
      currentStart = i;
    }
  }
  return bestPeriod;
}`}</code></pre>
                <input type="text" required />
                <span className="feedback" />
                <div className="explanation">
                  The time complexity is <strong>O(n)</strong> where n is the length of the portfolio values array. Even though this is a variable-size sliding window, we only make one pass through the array with a single loop. Each element is visited exactly once, and the window reset operations are constant time, resulting in linear time complexity.
                </div>
              </div>

              <button className="code-button test-button" type="submit">
                Submit
              </button>
            </form>
          </main>
        );
      };

      return <CheckpointComponent />;
    },
  },
};