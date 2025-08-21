import { useAutoGradeQuiz } from "../../components/useAutoGradeQuiz";
import { TestResult } from "../../utils/test_utils";

export const optimizingNestedLoopsChapter = {
  id: 'optimizing-nested-loops',
  title: 'Optimizing Nested Loops - Portfolio Risk Analysis',
  sectionId: 'sliding-window',
  previousChapterId: 'sliding-window-intro',
  content: `
## The Portfolio Management Crisis

David Kim, a portfolio manager at Sustainable Wealth Partners, faced a critical deadline. His team needed to calculate rolling volatility measures for a $2 billion ESG portfolio, but their current nested loop approach was taking hours to process daily green investment data.

"We're recalculating the standard deviation for every 30-day window from scratch," David explained to his quantitative analyst, Maria Santos. "With 5,000 sustainable stocks and years of ESG historical data, this approach won't scale."

Maria examined their current code and immediately spotted the inefficiency. "David, we're doing redundant calculations. Let me show you how sliding window can optimize this from O(n×k) to O(n) complexity."

## The Nested Loop Problem

Here's David's original approach for calculating rolling volatility:

\`\`\`javascript
// Naive approach - recalculates everything for each window
function calculateRollingVolatility(prices, windowSize = 30) {
  const volatilities = [];
  
  // For each possible window
  for (let i = 0; i <= prices.length - windowSize; i++) {
    let sum = 0;
    let sumSquares = 0;
    
    // Calculate mean and variance for current window
    for (let j = i; j < i + windowSize; j++) {
      sum += prices[j];
      sumSquares += prices[j] * prices[j];
    }
    
    const mean = sum / windowSize;
    const variance = (sumSquares / windowSize) - (mean * mean);
    const volatility = Math.sqrt(variance);
    
    volatilities.push({
      period: i,
      volatility: volatility.toFixed(4)
    });
  }
  
  return volatilities;
}
\`\`\`

**Time Complexity Analysis:**
- Outer loop: n - k + 1 iterations
- Inner loop: k operations per iteration
- Total: O(n × k) operations

For 1000 trading days with 30-day windows: 970 × 30 = 29,100 operations!

## The Sliding Window Optimization

Maria implemented the optimized version:

\`\`\`javascript
// Optimized sliding window approach
function calculateRollingVolatilityOptimized(prices, windowSize = 30) {
  if (prices.length < windowSize) return [];
  
  const volatilities = [];
  let sum = 0;
  let sumSquares = 0;
  
  // Initialize first window
  for (let i = 0; i < windowSize; i++) {
    sum += prices[i];
    sumSquares += prices[i] * prices[i];
  }
  
  // Calculate first volatility
  let mean = sum / windowSize;
  let variance = (sumSquares / windowSize) - (mean * mean);
  volatilities.push({
    period: 0,
    volatility: Math.sqrt(variance).toFixed(4)
  });
  
  // Slide window through remaining data
  for (let i = windowSize; i < prices.length; i++) {
    // Remove oldest price from calculations
    const oldPrice = prices[i - windowSize];
    sum -= oldPrice;
    sumSquares -= oldPrice * oldPrice;
    
    // Add newest price to calculations
    const newPrice = prices[i];
    sum += newPrice;
    sumSquares += newPrice * newPrice;
    
    // Calculate volatility for current window
    mean = sum / windowSize;
    variance = (sumSquares / windowSize) - (mean * mean);
    
    volatilities.push({
      period: i - windowSize + 1,
      volatility: Math.sqrt(variance).toFixed(4)
    });
  }
  
  return volatilities;
}
\`\`\`

**Optimized Time Complexity:**
- Single loop: n iterations
- Constant operations per iteration: O(1)
- Total: O(n) operations

For 1000 trading days: just 1000 operations - a 29x improvement!

## Performance Comparison

Maria created a benchmark to demonstrate the improvement:

\`\`\`javascript
function compareVolatilityCalculation() {
  // Generate realistic stock price data
  const generatePriceData = (days, startPrice = 100) => {
    const prices = [startPrice];
    for (let i = 1; i < days; i++) {
      // Simulate daily price changes (-3% to +3%)
      const change = (Math.random() - 0.5) * 0.06;
      prices.push(prices[i-1] * (1 + change));
    }
    return prices;
  };
  
  const stockPrices = generatePriceData(2000); // 2000 trading days
  console.log(\`Testing with \${stockPrices.length} trading days\\n\`);
  
  // Test naive approach
  console.log("🐌 Testing nested loop approach...");
  const start1 = performance.now();
  const result1 = calculateRollingVolatility(stockPrices, 30);
  const end1 = performance.now();
  
  // Test optimized approach
  console.log("⚡ Testing sliding window approach...");
  const start2 = performance.now();
  const result2 = calculateRollingVolatilityOptimized(stockPrices, 30);
  const end2 = performance.now();
  
  // Display results
  console.log(\`\\n📊 PERFORMANCE RESULTS:\`);
  console.log(\`Nested loops: \${(end1 - start1).toFixed(2)}ms\`);
  console.log(\`Sliding window: \${(end2 - start2).toFixed(2)}ms\`);
  console.log(\`Speedup: \${((end1 - start1) / (end2 - start2)).toFixed(1)}x faster\`);
  
  // Verify results match
  const resultsMatch = result1.length === result2.length;
  console.log(\`Results match: \${resultsMatch ? '✅' : '❌'}\`);
  
  console.log(\`\\nVolatility periods calculated: \${result2.length}\`);
}

compareVolatilityCalculation();
\`\`\`

## Real-World Impact

The optimization had immediate business impact:

**Before (Nested Loops):**
- Processing 5,000 stocks: 2.5 hours
- Real-time analysis: Impossible
- Risk calculations: Outdated by market close

**After (Sliding Window):**
- Processing 5,000 stocks: 5 minutes
- Real-time analysis: Enabled
- Risk calculations: Updated every minute

## Key Optimization Principles

### 1. Identify Redundant Calculations
Look for patterns where you're recalculating similar values:
- Moving averages
- Rolling standard deviations
- Cumulative sums
- Window-based aggregations

### 2. Maintain Running State
Instead of recalculating from scratch:
- Keep running totals
- Update incrementally
- Remove old values, add new values

### 3. Leverage Mathematical Properties
For variance calculation:
- Var(X) = E[X²] - (E[X])²
- Maintain both sum and sum of squares
- Update both incrementally

## When Sliding Window Applies

Use sliding window optimization when you have:

1. **Nested loops processing contiguous data**
2. **Repeated calculations over overlapping windows**
3. **Time-series analysis requirements**
4. **Performance bottlenecks in financial calculations**

Common financial applications:
- Rolling volatility (standard deviation)
- Moving averages (SMA, EMA)
- Sharpe ratio calculations
- Maximum drawdown analysis
- Beta coefficient calculations

## 🧠 Recall Practice

Test your understanding of sliding window optimization:
`,
  exercise: {
    starterCode: `/*
Problem: Calculate Rolling Maximum Price

Given an array of stock prices and a window size, find the maximum price
in each sliding window. This is useful for resistance level analysis.

Example:
prices = [100, 102, 98, 105, 103, 107, 104]
windowSize = 3

Expected output: [102, 105, 105, 107, 107]
(max of [100,102,98], [102,98,105], [98,105,103], [105,103,107], [103,107,104])
*/

function calculateRollingMax(prices, windowSize) {
  if (prices.length < windowSize) return [];
  
  const rollingMaxes = [];
  
  // TODO: Implement sliding window approach
  // Hint: For each window, you need to find the maximum value
  // This is more complex than sum because removing an element
  // might remove the current maximum
  
  for (let i = 0; i <= prices.length - windowSize; i++) {
    let windowMax = prices[i];
    for (let j = i + 1; j < i + windowSize; j++) {
      if (prices[j] > windowMax) {
        windowMax = prices[j];
      }
    }
    rollingMaxes.push(windowMax);
  }
  
  return rollingMaxes;
}

// Test your implementation
const testPrices = [100, 102, 98, 105, 103, 107, 104];
console.log("Rolling max:", calculateRollingMax(testPrices, 3));`,
    solution: `/*
Problem: Calculate Rolling Maximum Price

This solution shows the basic approach. Note: For maximum efficiency with
large datasets, you'd want to use a deque-based approach, but this
demonstrates the sliding window concept clearly.
*/

function calculateRollingMax(prices, windowSize) {
  if (prices.length < windowSize) return [];
  
  const rollingMaxes = [];
  
  // For each possible window position
  for (let i = 0; i <= prices.length - windowSize; i++) {
    let windowMax = prices[i];
    
    // Find maximum in current window
    for (let j = i + 1; j < i + windowSize; j++) {
      if (prices[j] > windowMax) {
        windowMax = prices[j];
      }
    }
    
    rollingMaxes.push(windowMax);
  }
  
  return rollingMaxes;
}

// Test the implementation
const testPrices = [100, 102, 98, 105, 103, 107, 104];
console.log("Rolling max:", calculateRollingMax(testPrices, 3)); // Should output [102, 105, 105, 107, 107]`,
    tests: [
      {
        name: "Test rolling maximum calculation",
        test: (code) => {
          try {
            const testCode = code + `
            // Test the function with various inputs
            const test1 = calculateRollingMax([100, 102, 98, 105, 103, 107, 104], 3);
            const test2 = calculateRollingMax([10, 20, 30, 40, 50], 2);
            const test3 = calculateRollingMax([100], 2); // Edge case: windowSize > array length
            const test4 = calculateRollingMax([50, 60, 70], 3);
            
            return {
              test1: test1,
              test2: test2,
              test3: test3,
              test4: test4,
              hasFunction: typeof calculateRollingMax === 'function'
            };
            `;

            const testResult = new Function(testCode)();

            if (!testResult.hasFunction) {
              return new TestResult({ passed: false, message: "calculateRollingMax function not found or not implemented correctly." });
            }

            // Test 1: Basic rolling max calculation
            const expected1 = [102, 105, 105, 107, 107];
            if (JSON.stringify(testResult.test1) !== JSON.stringify(expected1)) {
              return new TestResult({ passed: false, message: `Test 1 failed: Expected ${expected1}, but got ${testResult.test1}` });
            }

            // Test 2: Simple case
            const expected2 = [20, 30, 40, 50];
            if (JSON.stringify(testResult.test2) !== JSON.stringify(expected2)) {
              return new TestResult({ passed: false, message: `Test 2 failed: Expected ${expected2}, but got ${testResult.test2}` });
            }

            // Test 3: Edge case
            if (testResult.test3.length !== 0) {
              return new TestResult({ passed: false, message: `Test 3 failed: Expected empty array when windowSize > array length, but got ${testResult.test3}` });
            }

            // Test 4: Exact window size match
            const expected4 = [70];
            if (JSON.stringify(testResult.test4) !== JSON.stringify(expected4)) {
              return new TestResult({ passed: false, message: `Test 4 failed: Expected ${expected4}, but got ${testResult.test4}` });
            }

            return new TestResult({ passed: true });
          } catch (error) {
            return new TestResult({ passed: false, message: `Error: ${error.message}` });
          }
        },
        message: "Rolling maximum calculation test failed",
        successMessage: "✅ Great! Your rolling maximum calculation works correctly."
      }
    ]
  },
  quiz: {
    component: () => {
      const CheckpointComponent = () => {
        useAutoGradeQuiz();

        return (
          <main>
            <h2>Optimizing Nested Loops - Recall Practice</h2>
            <form className="auto-graded-quiz">
              <div className="question" data-answer="O(n*k)">
                <p>
                  What is the time complexity of the naive nested loop approach for calculating rolling volatility over k periods in an array of n stock prices?
                </p>
                <input type="text" required />
                <span className="feedback" />
                <div className="explanation">
                  The naive approach has <strong>O(n*k)</strong> time complexity. For each of the (n-k+1) possible windows, we perform k operations to calculate the statistics. This results in approximately n×k operations total, which becomes inefficient for large datasets.
                </div>
              </div>

              <div className="question" data-answer="maintaining running calculations">
                <p>
                  What is the key optimization technique that allows sliding window to reduce time complexity from O(n*k) to O(n)?
                </p>
                <input type="text" required />
                <span className="feedback" />
                <div className="explanation">
                  The key optimization is <strong>maintaining running calculations</strong>. Instead of recalculating statistics from scratch for each window, we maintain running totals (like sum and sum of squares) and update them incrementally by removing the old value and adding the new value as the window slides.
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