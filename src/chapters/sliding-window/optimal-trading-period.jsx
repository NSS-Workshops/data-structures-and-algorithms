import { useAutoGradeQuiz } from "../../components/useAutoGradeQuiz";
import { TestResult } from "../../utils/test_utils";

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

## Financial Application: Longest Profitable Period

Let's implement Michael's strategy analysis:

\`\`\`javascript
// Find longest consecutive period with minimum return threshold
function findLongestProfitablePeriod(dailyReturns, minThreshold = 0.15) {
  if (dailyReturns.length === 0) return null;
  
  let left = 0;
  let maxLength = 0;
  let bestPeriod = null;
  let windowSum = 0;
  
  // Expand window with right pointer
  for (let right = 0; right < dailyReturns.length; right++) {
    // Add new return to window
    windowSum += dailyReturns[right];
    
    // Contract window while average return is below threshold
    while (left <= right && (windowSum / (right - left + 1)) < minThreshold) {
      windowSum -= dailyReturns[left];
      left++;
    }
    
    // Update best period if current window is longer
    const currentLength = right - left + 1;
    if (currentLength > maxLength) {
      maxLength = currentLength;
      bestPeriod = {
        startDay: left,
        endDay: right,
        length: currentLength,
        averageReturn: (windowSum / currentLength).toFixed(4),
        totalReturn: windowSum.toFixed(4)
      };
    }
  }
  
  return bestPeriod;
}

// Test with sample daily returns (as decimals)
const dailyReturns = [0.12, 0.18, 0.16, 0.14, 0.20, 0.13, 0.11, 0.19, 0.17, 0.15];
console.log("Longest profitable period:", findLongestProfitablePeriod(dailyReturns, 0.15));
\`\`\`

## Advanced Application: Minimum Risk Period

Finding the shortest period to achieve a target return while minimizing risk:
Identify the smallest time window where the target return is reached, because shorter holding periods expose you to less market risk.
Shorter holding periods mean less time for the price to move against you, so you hit your target faster and reduce exposure to market risk.

\`\`\`javascript
// Find shortest period to achieve target cumulative return
function findShortestTargetPeriod(dailyReturns, targetReturn = 1.0) {
  if (dailyReturns.length === 0) return null;
  
  let left = 0;
  let minLength = Infinity;
  let bestPeriod = null;
  let windowSum = 0;
  
  // Expand window with right pointer
  for (let right = 0; right < dailyReturns.length; right++) {
    // Add new return to window
    windowSum += dailyReturns[right];
    
    // Contract window while we exceed target return
    while (windowSum >= targetReturn) {
      const currentLength = right - left + 1;
      
      // Update best period if current window is shorter
      if (currentLength < minLength) {
        minLength = currentLength;
        bestPeriod = {
          startDay: left,
          endDay: right,
          length: currentLength,
          totalReturn: windowSum.toFixed(4),
          averageReturn: (windowSum / currentLength).toFixed(4)
        };
      }
      
      // Shrink window from left
      windowSum -= dailyReturns[left];
      left++;
    }
  }
  
  return bestPeriod;
}

// Test with cumulative returns
const cumulativeReturns = [0.05, 0.12, 0.08, 0.15, 0.22, 0.18, 0.25, 0.30, 0.28, 0.35];
console.log("Shortest target period:", findShortestTargetPeriod(cumulativeReturns, 0.20));
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