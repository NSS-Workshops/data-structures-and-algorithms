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

```
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
```

## 📈 Financial Example: Quickest Time to Hit Profit Target

Given a list of daily profits, find the minimum number of consecutive days needed to reach a target cumulative profit.

This models: "How quickly can I reach my profit goal with consecutive trading days?"
```javascript
// Find the shortest streak of days where cumulative profit ≥ target
function quickestProfitTarget(profits, target) {
  let left = 0;        // start of window
  let sum = 0;         // running sum of current window
  let minLen = Infinity; // track best (smallest) window length

  // Expand the window one day at a time
  for (let right = 0; right < profits.length; right++) {
    sum += profits[right];

    // Once we've reached the target, try to shrink from the left
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
```

## ⏱️ Michael's First Challenge!

🔓 **Uncomment the below code section in the editor 👉:**
- Implement the `findLongestGrowthPeriod()` function using the variable-size sliding window technique
- Use the two-pointer approach to track consecutive non-decreasing portfolio values
- **Click Run Tests**
- **Inspect 📋 Console Output window and run test to check for correctness!**

"This challenge teaches you the variable-size sliding window optimization that powers sophisticated trading algorithms," Lisa explained. "The same technique that helps us identify optimal holding periods and validate sustainable investment performance over time."