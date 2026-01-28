**Sliding Window Technique Fundamentals**

<iframe width="560" height="315" src="https://www.youtube.com/embed/p-ss2JNynmw?si=PTDDDVpT4059Ekei" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

This video provides an introduction to the sliding window technique, explaining the core concepts and demonstrating how to identify when to use this approach. 

**Advanced Sliding Window Problems**

<iframe width="560" height="315" src="https://www.youtube.com/embed/dOonV4byDEg?si=nS8YpZTokqGaFtlu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

This video dives deeper into more complex sliding window problems, including variable-size windows and optimization challenges.


## Now that we have an intuition for the technique, let's look at a real-world use case

Let's have an inside look at the world of active traders buying and selling in the finnacial markets. These folks don't just look at raw price charts, they rely on technical indicators. These are math-based tools, like the 20-day simple moving average (SMA), that smooth past price data to make trends and patterns easier to see.
▶️ Watch until 1:36 for a quick explanbation of what simple moving averages are:

<iframe width="560" height="315" src="https://www.youtube.com/embed/IvvUbh-cnX4?si=58Kf4ru2Kgu2VzbS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## The Trading Floor Challenge  


Sarah Martinez, an analyst at GreenCapital ESG Investments, stared at her screen displaying real-time sustainable stock price data. Her team needed to calculate moving averages and volatility measures for thousands of green energy and ESG-compliant stocks, but their current approach was too slow for high-frequency sustainable trading decisions.







"We're recalculating the entire 20-day moving average from scratch every time a new daily price comes in," Sarah explained to her colleague, Alex Chen, a senior software engineer.


A 20-day moving average is the average of the last 20 days of data, updated each day.

For each day, we look back at the last 20 days of closing prices, add them all up, and then divide by 20 to get that day's 20-day simple moving average.

This is what our inefficient function looks like calculating SMA20 
```javascript
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
```

This current solution has a far from optimal runtime compleity of  O(nk), said Alex, but maybe we can optimize this using the sliding window technique I learned in Nashville Software Schools Data Structure and algorithm course. 😉

Simple moving average using sliding window:

- On day 20, you add up days 1–20 and divide by 20.

- On day 21, you drop day 1, add day 21, and average days 2–21.

- On day 22, you average days 3–22.






A sliding window can help us calculate a stock's 20-day simple moving average, where each new day's price enters the window, the oldest drops out, and the rolling average helps our traders spot the trend without being distracted by short-term price fluctuations.

Sarah nodded, examining the price data for CarbonVault Systems a leader in carbon capture solutions: [100, 102, 98, 105, 103, 107, 104, 109, 106, 108, ...] Each number in the array is the daily closing price of CarbonVault Systems stock, so the 10 values shown correspond to 10 consecutive days of trading data.
"This is a perfect case for the sliding window technique," Alex said. "Instead of recalculating everything, we can maintain a running calculation as we slide through the data."

## What is the Sliding Window Technique?

The sliding window technique is a computational method that maintains a "window" (a contiguous subarray) that slides through data to efficiently process sequences. It's particularly powerful for financial time-series analysis where you need to calculate indicators over moving periods.

Think of it like a magnifying glass moving across a chart - you examine one section at a time, but instead of lifting and repositioning the glass, you slide it smoothly to the next position.

## Two Forms of Sliding Window Fixed and Variable size

### 1. Fixed-Size Window
The window size remains constant throughout the algorithm. Perfect for financial indicators like moving averages, where you always want the same period (e.g., 20-day moving average).

**Pseudocode Template:**
```
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
```


## ⏱️ Sarah's First Challenge!

"Perfect!" exclaimed Alex, opening up a coding challenge interface on his workstation. "Let's put this sliding window knowledge into practice. For our ESG portfolio analysis, we need to implement a function that calculates moving averages - one of the most fundamental tools in sustainable investing."

"This is where theory meets practice," Alex explained. "When analyzing green energy stocks or ESG fund performance, moving averages help us smooth out daily volatility and identify long-term trends that align with sustainable investment strategies."

🔓 **Uncomment the below code section in the editor 👉:**
- Implement the `calculateSMA()` function using the fixed-size sliding window technique
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