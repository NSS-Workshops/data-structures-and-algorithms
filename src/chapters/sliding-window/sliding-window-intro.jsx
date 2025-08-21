import { useAutoGradeQuiz } from "../../components/useAutoGradeQuiz";
import { TestResult } from "../../utils/test_utils";

export const slidingWindowIntroChapter = {
  id: 'sliding-window-intro',
  title: 'Introduction to Sliding Window - Financial Market Analysis',
  sectionId: 'sliding-window',
  previousChapterId: 'sliding-window-learning-objectives',
  content: `
## The Trading Floor Challenge

Sarah Martinez, a quantitative analyst at GreenCapital ESG Investments, stared at her screen displaying real-time sustainable stock price data. Her team needed to calculate moving averages and volatility measures for thousands of green energy and [ESG-compliant stocks](https://en.wikipedia.org/wiki/Environmental,_social,_and_governance), but their current approach was too slow for high-frequency sustainable trading decisions.

"We're recalculating the entire 20-day moving average from scratch every time a new price comes in," Sarah explained to her colleague, Alex Chen, a senior software engineer. "With ESG market data streaming in every millisecond, we can't afford this inefficiency."

Alex nodded, examining the price data: [100, 102, 98, 105, 103, 107, 104, 109, 106, 108, ...]

"This is a perfect case for the sliding window technique," Alex said. "Instead of recalculating everything, we can maintain a running calculation as we slide through the data."

## What is the Sliding Window Technique?

The sliding window technique is a computational method that maintains a "window" (a contiguous subarray) that slides through data to efficiently process sequences. It's particularly powerful for financial time-series analysis where you need to calculate indicators over moving periods.

Think of it like a magnifying glass moving across a chart - you examine one section at a time, but instead of lifting and repositioning the glass, you slide it smoothly to the next position.

## Two Forms of Sliding Window

### 1. Fixed-Size Window
The window size remains constant throughout the algorithm. Perfect for financial indicators like moving averages, where you always want the same period (e.g., 20-day moving average).

**Pseudocode Template:**
\`\`\`
FIXED_SIZE_SLIDING_WINDOW(data, windowSize):
    // Initialize first window
    windowSum = 0
    FOR i = 0 TO windowSize - 1:
        windowSum += data[i]
    
    result = [windowSum / windowSize]  // First moving average
    
    // Slide window through remaining data
    FOR i = windowSize TO data.length - 1:
        // Remove leftmost element, add rightmost element
        windowSum = windowSum - data[i - windowSize] + data[i]
        result.append(windowSum / windowSize)
    
    RETURN result
\`\`\`

### 2. Variable-Size Window
The window size can grow or shrink based on conditions. Useful for finding optimal trading periods or detecting patterns that meet specific criteria.

**Pseudocode Template:**
\`\`\`
VARIABLE_SIZE_SLIDING_WINDOW(data, condition):
    left = 0
    result = []
    
    FOR right = 0 TO data.length - 1:
        // Expand window by including data[right]
        ADD data[right] TO window
        
        // Contract window while condition is violated
        WHILE condition_violated(window):
            REMOVE data[left] FROM window
            left++
        
        // Update result with current optimal window
        IF condition_met(window):
            result.append(current_window_info)
    
    RETURN result
\`\`\`

## ⏱️ Sarah's First Challenge!

"Perfect!" exclaimed Alex, opening up a coding challenge interface on his workstation. "Let's put this sliding window knowledge into practice. For our ESG portfolio analysis, we need to implement a function that calculates moving averages - one of the most fundamental tools in sustainable investing."

"This is where theory meets practice," Alex explained. "When analyzing green energy stocks or ESG fund performance, moving averages help us smooth out daily volatility and identify long-term trends that align with sustainable investment strategies."

🔓 **Uncomment the below code section in the editor 👉:**
- Implement the \`calculateSMA()\` function using the fixed-size sliding window technique
- Use the provided template to optimize from O(n×k) to O(n) time complexity
- **Click Run Tests**
- **Inspect 📋 Console Output window and run test to check for correctness!**

"This challenge teaches you the core sliding window optimization that powers real-time financial analysis systems," Alex explained. "The same technique that helps us track sustainable investment performance in milliseconds rather than seconds."

## Financial Application: Moving Average Calculation

Let's see how Sarah optimized her moving average calculation:

**Naive Approach (O(n×k)):**
\`\`\`javascript
function calculateMovingAverages(prices, period) {
  const averages = [];
  
  // For each possible period, recalculate entire sum
  for (let i = 0; i <= prices.length - period; i++) {
    let sum = 0;
    for (let j = i; j < i + period; j++) {
      sum += prices[j];
    }
    averages.push(sum / period);
  }
  
  return averages;
}
\`\`\`

**Sliding Window Approach (O(n)):**
\`\`\`javascript
function calculateMovingAveragesOptimized(prices, period) {
  if (prices.length < period) return [];
  
  const averages = [];
  
  // Calculate first window sum
  let windowSum = 0;
  for (let i = 0; i < period; i++) {
    windowSum += prices[i];
  }
  averages.push(windowSum / period);
  
  // Slide window through remaining data
  for (let i = period; i < prices.length; i++) {
    // Remove oldest price, add newest price
    windowSum = windowSum - prices[i - period] + prices[i];
    averages.push(windowSum / period);
  }
  
  return averages;
}

// Test with stock prices
const stockPrices = [100, 102, 98, 105, 103, 107, 104, 109, 106, 108];
console.log("3-period moving averages:", calculateMovingAveragesOptimized(stockPrices, 3));
\`\`\`

## Performance Impact in Trading

The performance difference is crucial in financial markets:

- **Naive approach**: O(n×k) - For 1000 data points with 20-day period = 20,000 operations
- **Sliding window**: O(n) - For 1000 data points = 1000 operations
- **Speedup**: 20x faster!

In high-frequency trading where microseconds matter, this optimization can mean the difference between profit and loss.

## When to Use Sliding Window

The sliding window technique is appropriate when:

1. **You need to find something among all contiguous subarrays of a specific size** (fixed-size window)
2. **You need to find the optimal contiguous subarray that meets certain criteria** (variable-size window)
3. **You're dealing with time-series data** where temporal relationships matter
4. **You want to optimize from O(n²) or O(n×k) to O(n)** complexity

Common financial applications:
- Moving averages (SMA, EMA)
- Volatility calculations (rolling standard deviation)
- Maximum drawdown analysis
- Bollinger Bands calculations
- RSI (Relative Strength Index) computations

## Key Takeaways

- **Sliding window optimizes contiguous subarray/substring problems**
- **Two main forms: fixed-size and variable-size windows**
- **Reduces time complexity from O(n×k) to O(n) for fixed-size problems**
- **Essential for real-time financial data processing**
- **The technique maintains running calculations instead of recalculating from scratch**

## 🧠 Recall Practice

Test your understanding of the sliding window technique:
`,
  exercise: {
    starterCode: `/*
Problem: Calculate Simple Moving Average (SMA)

Given an array of stock prices and a period, calculate the Simple Moving Average
for each possible window using the sliding window technique.

Example:
prices = [100, 102, 98, 105, 103]
period = 3

Expected output: [100.0, 101.7, 102.0] 
(averages of [100,102,98], [102,98,105], [98,105,103])
*/

function calculateSMA(prices, period) {
  if (prices.length < period) return [];
  
  const smaValues = [];
  
  // TODO: Calculate sum of first window
  let windowSum = 0;
  // Your code here...
  
  // TODO: Add first SMA value
  // Your code here...
  
  // TODO: Slide window through remaining data
  // Your code here...
  
  return smaValues;
}

// Test your implementation
const testPrices = [100, 102, 98, 105, 103];
console.log("SMA values:", calculateSMA(testPrices, 3));`,
    solution: `/*
Problem: Calculate Simple Moving Average (SMA)

Complete solution using sliding window technique for financial analysis.
*/

function calculateSMA(prices, period) {
  if (prices.length < period) return [];
  
  const smaValues = [];
  
  // Calculate sum of first window
  let windowSum = 0;
  for (let i = 0; i < period; i++) {
    windowSum += prices[i];
  }
  
  // Add first SMA value
  smaValues.push(Number((windowSum / period).toFixed(1)));
  
  // Slide window through remaining data
  for (let i = period; i < prices.length; i++) {
    // Remove oldest price, add newest price
    windowSum = windowSum - prices[i - period] + prices[i];
    smaValues.push(Number((windowSum / period).toFixed(1)));
  }
  
  return smaValues;
}

// Test the implementation
const testPrices = [100, 102, 98, 105, 103];
console.log("SMA values:", calculateSMA(testPrices, 3)); // Should output [100.0, 101.7, 102.0]`,
    tests: [
      {
        name: "Test SMA calculation with sliding window",
        test: (code) => {
          try {
            const testCode = code + `
            // Test the function with various inputs
            const test1 = calculateSMA([100, 102, 98, 105, 103], 3);
            const test2 = calculateSMA([10, 20, 30, 40, 50], 2);
            const test3 = calculateSMA([100], 2); // Edge case: period > array length
            const test4 = calculateSMA([50, 60, 70], 3);
            
            return {
              test1: test1,
              test2: test2,
              test3: test3,
              test4: test4,
              hasFunction: typeof calculateSMA === 'function'
            };
            `;

            const testResult = new Function(testCode)();

            if (!testResult.hasFunction) {
              return new TestResult({ passed: false, message: "calculateSMA function not found or not implemented correctly." });
            }

            // Test 1: Basic SMA calculation
            const expected1 = [100.0, 101.7, 102.0];
            if (testResult.test1.length !== 3 || 
                Math.abs(testResult.test1[0] - expected1[0]) > 0.1 ||
                Math.abs(testResult.test1[1] - expected1[1]) > 0.1 ||
                Math.abs(testResult.test1[2] - expected1[2]) > 0.1) {
              return new TestResult({ passed: false, message: `Test 1 failed: Expected ${expected1}, but got ${testResult.test1}` });
            }

            // Test 2: Simple case
            const expected2 = [15.0, 25.0, 35.0, 45.0];
            if (testResult.test2.length !== 4) {
              return new TestResult({ passed: false, message: `Test 2 failed: Expected length 4, but got ${testResult.test2.length}` });
            }

            // Test 3: Edge case
            if (testResult.test3.length !== 0) {
              return new TestResult({ passed: false, message: `Test 3 failed: Expected empty array when period > array length, but got ${testResult.test3}` });
            }

            // Test 4: Exact period match
            if (testResult.test4.length !== 1 || Math.abs(testResult.test4[0] - 60.0) > 0.1) {
              return new TestResult({ passed: false, message: `Test 4 failed: Expected [60.0], but got ${testResult.test4}` });
            }

            return new TestResult({ passed: true });
          } catch (error) {
            return new TestResult({ passed: false, message: `Error: ${error.message}` });
          }
        },
        message: "SMA calculation test failed",
        successMessage: "✅ Great! Your sliding window SMA calculation works correctly."
      }
    ]
  },
  quiz: {
    component: () => {
      const CheckpointComponent = () => {
        useAutoGradeQuiz();

        return (
          <main>
            <h2>Sliding Window Introduction - Recall Practice</h2>
            <form className="auto-graded-quiz">
              <div className="question" data-answer="O(n)">
                <p>
                  What is the time complexity of the sliding window approach for calculating a moving average over k periods in an array of n stock prices?
                </p>
                <input type="text" required />
                <span className="feedback" />
                <div className="explanation">
                  The sliding window approach has <strong>O(n)</strong> time complexity. We make one pass through the array, and for each position we perform constant-time operations (one subtraction and one addition). This is much better than the naive O(n×k) approach that recalculates the sum for each window.
                </div>
              </div>

              <div className="question" data-answer="fixed-size">
                <p>
                  When calculating a 20-day moving average for stock prices, which type of sliding window should you use?
                </p>
                <input type="text" required />
                <span className="feedback" />
                <div className="explanation">
                  You should use a <strong>fixed-size</strong> sliding window because the moving average always uses the same number of periods (20 days). The window size remains constant as it slides through the price data, making it perfect for this type of financial indicator calculation.
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