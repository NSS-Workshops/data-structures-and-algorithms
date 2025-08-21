import { useAutoGradeQuiz } from "../../components/useAutoGradeQuiz";
import { TestResult } from "../../utils/test_utils";

export const subarraysSubstringsChapter = {
  id: 'subarrays-substrings',
  title: 'Variable-Size Windows - Optimal Trading Period Analysis',
  sectionId: 'sliding-window',
  previousChapterId: 'maintaining-window-state',
  content: `
## The Trading Strategy Challenge

Michael Chen, a quantitative trader at CleanEnergy Capital, needed to identify optimal trading periods for sustainable algorithmic strategies. Unlike fixed-period analysis, he needed to find variable-length periods that met specific ESG performance criteria.

"I need to find the longest consecutive period where our green energy strategy maintains at least a 15% annual return," Michael explained to his colleague, Lisa Park. "The period length can vary - it might be 30 days, 90 days, or even 200 days."

Lisa recognized this as a classic variable-size sliding window problem. "This requires the two-pointer technique where we expand and contract the window based on performance conditions."

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

## Key Differences: Fixed vs Variable Windows

### Fixed-Size Windows
- **Use case**: Moving averages, rolling volatility
- **Window size**: Constant (e.g., always 20 days)
- **Complexity**: O(n)
- **Pattern**: Slide by removing left, adding right

### Variable-Size Windows  
- **Use case**: Optimization problems, finding best periods
- **Window size**: Changes based on conditions
- **Complexity**: O(n) with two pointers
- **Pattern**: Expand right, contract left based on criteria

## When to Use Variable-Size Windows

Use variable-size sliding windows when you need to:

1. **Find optimal contiguous periods** meeting specific criteria
2. **Minimize or maximize** some metric over flexible time periods
3. **Solve optimization problems** with contiguous constraints
4. **Identify patterns** of variable length in time series

Common financial applications:
- Longest bull market period
- Shortest time to recovery
- Optimal rebalancing periods
- Maximum drawdown duration
- Best performing quarters

## Performance Characteristics

Variable-size windows maintain O(n) complexity because:
- Each element is visited at most twice (once by right pointer, once by left pointer)
- Inner while loop doesn't reset the left pointer
- Total operations remain linear with input size

## 🧠 Recall Practice

Test your understanding of variable-size sliding windows:
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
            <h2>Variable-Size Windows - Recall Practice</h2>
            <form className="auto-graded-quiz">
              <div className="question" data-answer="contiguous">
                <p>
                  What is the key characteristic that makes a sequence of elements qualify as a subarray (as opposed to a subsequence) in financial time-series analysis?
                </p>
                <input type="text" required />
                <span className="feedback" />
                <div className="explanation">
                  The key characteristic is that subarrays must be <strong>contiguous</strong>. This means the time periods must be adjacent to each other with no gaps, which is essential for financial analysis where temporal relationships matter (e.g., consecutive trading days, continuous performance periods).
                </div>
              </div>

              <div className="question" data-answer="variable-size sliding window">
                <p>
                  When you need to find the optimal trading period that meets certain criteria (like &quot;longest period with minimum 15% return&quot;), which sliding window approach should you use?
                </p>
                <input type="text" required />
                <span className="feedback" />
                <div className="explanation">
                  You should use a <strong>variable-size sliding window</strong> (also called the two-pointer technique). This approach expands the window by moving the right pointer and contracts it by moving the left pointer based on the performance criteria. It&apos;s perfect for optimization problems where you&apos;re looking for the best trading period of flexible length.
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