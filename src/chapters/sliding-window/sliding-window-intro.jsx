import { useAutoGradeQuiz } from "@nss-workshops/nss-core";
import { TestResult } from "@nss-workshops/nss-core";

export const slidingWindowIntroChapter = {
  id: 'sliding-window-intro',
  title: 'Introduction to Sliding Window - Financial Market Analysis',
  sectionId: 'sliding-window',
  previousChapterId: 'sliding-window-learning-objectives',
  content: `
  **Sliding Window Technique Fundamentals**

<iframe width="560" height="315" src="https://www.youtube.com/embed/p-ss2JNynmw?si=PTDDDVpT4059Ekei" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

This video provides an introduction to the sliding window technique, explaining the core concepts and demonstrating how to identify when to use this approach. 

**Advanced Sliding Window Problems**

<iframe width="560" height="315" src="https://www.youtube.com/embed/dOonV4byDEg?si=nS8YpZTokqGaFtlu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

This video dives deeper into more complex sliding window problems, including variable-size windows and optimization challenges.


  ## Now that we have an intuition for the technique, let’s look at a real-world use case

  Let's have an inside look at the world of active traders buying and selling in the finnacial markets. These folks don’t just look at raw price charts, they rely on technical indicators. These are math-based tools, like the 20-day simple moving average (SMA), that smooth past price data to make trends and patterns easier to see.
  ▶️ Watch until 1:36 for a quick explanbation of what simple moving averages are:
  
  <iframe width="560" height="315" src="https://www.youtube.com/embed/IvvUbh-cnX4?si=58Kf4ru2Kgu2VzbS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## The Trading Floor Challenge  


Sarah Martinez, an analyst at GreenCapital ESG Investments, stared at her screen displaying real-time sustainable stock price data. Her team needed to calculate moving averages and volatility measures for thousands of green energy and ESG-compliant stocks, but their current approach was too slow for high-frequency sustainable trading decisions.







“We’re recalculating the entire 20-day moving average from scratch every time a new daily price comes in,” Sarah explained to her colleague, Alex Chen, a senior software engineer.


A 20-day moving average is the average of the last 20 days of data, updated each day.

For each day, we look back at the last 20 days of closing prices, add them all up, and then divide by 20 to get that day’s 20-day simple moving average.

This is what our inefficient function looks like calculating SMA20 
\`\`\`javascript
function calculateSMA(prices, period) {
  const result = [];

  for (let i = period - 1; i < prices.length; i++) {
    let sum = 0;
    // sum up the last period prices
    for (let j = i - period + 1; j <= i; j++) {
      sum += prices[j];
    }
    result.push(sum / period);
  }
  return result;
}
\`\`\`

This current solution has a far from optimal runtime compleity of  O(nk), said Alex, but maybe we can optimize this using the sliding window technique I learned in Nashville Software Schools Data Structure and algorithm course. 😉

Simple moving average using sliding window:

- On day 20, you add up days 1–20 and divide by 20.

- On day 21, you drop day 1, add day 21, and average days 2–21.

- On day 22, you average days 3–22.






A sliding window can help us calculate a stock’s 20-day simple moving average, where each new day’s price enters the window, the oldest drops out, and the rolling average helps our traders spot the trend without being distracted by short-term price fluctuations.

Sarah nodded, examining the price data for CarbonVault Systems a leader in carbon capture solutions: [100, 102, 98, 105, 103, 107, 104, 109, 106, 108, ...] Each number in the array is the daily closing price of CarbonVault Systems stock, so the 10 values shown correspond to 10 consecutive days of trading data.
"This is a perfect case for the sliding window technique," Alex said. "Instead of recalculating everything, we can maintain a running calculation as we slide through the data."

## What is the Sliding Window Technique?

The sliding window technique is a computational method that maintains a "window" (a contiguous subarray) that slides through data to efficiently process sequences. It's particularly powerful for financial time-series analysis where you need to calculate indicators over moving periods.

Think of it like a magnifying glass moving across a chart - you examine one section at a time, but instead of lifting and repositioning the glass, you slide it smoothly to the next position.

## Two Forms of Sliding Window Fixed and Variable size

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


## ⏱️ Sarah's First Challenge!

"Perfect!" exclaimed Alex, opening up a coding challenge interface on his workstation. "Let's put this sliding window knowledge into practice. For our ESG portfolio analysis, we need to implement a function that calculates moving averages - one of the most fundamental tools in sustainable investing."

"This is where theory meets practice," Alex explained. "When analyzing green energy stocks or ESG fund performance, moving averages help us smooth out daily volatility and identify long-term trends that align with sustainable investment strategies."

🔓 **Uncomment the below code section in the editor 👉:**
- Implement the \`calculateSMA()\` function using the fixed-size sliding window technique
- Use the provided template to optimize from O(nk) to O(n) time complexity
- **Click Run Tests**
- **Inspect 📋 Console Output window and run test to check for correctness!**

## Performance Impact in Trading

The performance difference is crucial in financial markets:

- **Naive approach**: O(nk) - For 1000 data points with 20-day period = 20,000 operations
- **Sliding window**: O(n) - For 1000 data points = 1000 operations
- **Speedup**: 20x faster!

In high-frequency trading where microseconds matter, this optimization can mean the difference between profit and loss.

## When to Use Sliding Window

The sliding window technique is appropriate when:

1. **You need to find something among all contiguous subarrays of a specific size** (fixed-size window)
2. **You need to find the optimal contiguous subarray that meets certain criteria** (variable-size window)
4. **You want to optimize from O(n²) or O(nk) to O(n)** complexity

## Key Takeaways

- **Sliding window optimizes contiguous subarray/substring problems**
- **Two main forms: fixed-size and variable-size windows**
- **Reduces time complexity from O(nk) to O(n) for fixed-size problems**
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
                  The sliding window approach has <strong>O(n)</strong> time complexity. We make one pass through the array, and for each position we perform constant-time operations (one subtraction and one addition). This is much better than the naive O(nk) approach that recalculates the sum for each window.
                </div>
              </div>

              <div className="question" data-answer="fixed">
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