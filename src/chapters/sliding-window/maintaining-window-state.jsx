import { useAutoGradeQuiz } from "../../components/useAutoGradeQuiz";
import { TestResult } from "../../utils/test_utils";

export const maintainingWindowStateChapter = {
  id: 'maintaining-window-state',
  title: 'Maintaining Window State - Multi-Asset Portfolio Analysis',
  sectionId: 'sliding-window',
  previousChapterId: 'optimizing-nested-loops',
  content: `
## The Multi-Asset Challenge

Jennifer Walsh, a senior portfolio analyst at EcoVest Climate Solutions, faced a complex problem. She needed to track the correlation between different sustainable asset classes (green stocks, green bonds, renewable commodities) using rolling 60-day windows, but maintaining multiple statistical measures simultaneously was proving challenging.

"I need to track not just the sum, but also the count of different sustainable asset types in each window," Jennifer explained to her colleague, Robert Kim. "Each window needs to maintain frequency counts of how many green stocks, ESG bonds, and renewable commodities we're analyzing."

Robert examined the data stream and realized this required more sophisticated state management than simple sum calculations.

## Complex Window State Management

Unlike simple moving averages that only track a sum, portfolio analysis often requires maintaining multiple pieces of information about each window:

- **Frequency counts** of different asset types
- **Running statistics** for multiple metrics
- **Dynamic tracking** of changing compositions

### Example: Asset Allocation Tracking

\`\`\`javascript
// Track asset allocation in rolling windows
function trackAssetAllocation(portfolio, windowSize = 60) {
  if (portfolio.length < windowSize) return [];
  
  const results = [];
  
  // Initialize frequency counter for first window
  const assetCounts = {
    stocks: 0,
    bonds: 0,
    commodities: 0,
    cash: 0
  };
  
  // Count assets in first window
  for (let i = 0; i < windowSize; i++) {
    const asset = portfolio[i];
    assetCounts[asset.type]++;
  }
  
  // Record first window allocation
  results.push(createAllocationRecord(0, windowSize - 1, assetCounts, windowSize));
  
  // Slide window through remaining data
  for (let i = windowSize; i < portfolio.length; i++) {
    // Remove asset leaving the window
    const leavingAsset = portfolio[i - windowSize];
    assetCounts[leavingAsset.type]--;
    
    // Add asset entering the window
    const enteringAsset = portfolio[i];
    assetCounts[enteringAsset.type]++;
    
    // Record current window allocation
    results.push(createAllocationRecord(i - windowSize + 1, i, assetCounts, windowSize));
  }
  
  return results;
}

function createAllocationRecord(start, end, counts, total) {
  return {
    windowStart: start,
    windowEnd: end,
    stocksPercent: ((counts.stocks / total) * 100).toFixed(1),
    bondsPercent: ((counts.bonds / total) * 100).toFixed(1),
    commoditiesPercent: ((counts.commodities / total) * 100).toFixed(1),
    cashPercent: ((counts.cash / total) * 100).toFixed(1),
    totalAssets: total
  };
}
\`\`\`

## Dynamic Frequency Tracking

For more complex scenarios where asset types aren't known in advance, use a Map for dynamic key tracking:

\`\`\`javascript
// Track sector allocation with unknown sectors
function trackSectorAllocation(holdings, windowSize = 30) {
  if (holdings.length < windowSize) return [];
  
  const results = [];
  const sectorCounts = new Map();
  
  // Initialize first window
  for (let i = 0; i < windowSize; i++) {
    const sector = holdings[i].sector;
    sectorCounts.set(sector, (sectorCounts.get(sector) || 0) + 1);
  }
  
  // Record first window
  results.push(createSectorRecord(0, windowSize - 1, sectorCounts, windowSize));
  
  // Slide window
  for (let i = windowSize; i < holdings.length; i++) {
    // Remove leaving holding
    const leavingSector = holdings[i - windowSize].sector;
    const leavingCount = sectorCounts.get(leavingSector);
    if (leavingCount === 1) {
      sectorCounts.delete(leavingSector); // Clean up zero counts
    } else {
      sectorCounts.set(leavingSector, leavingCount - 1);
    }
    
    // Add entering holding
    const enteringSector = holdings[i].sector;
    sectorCounts.set(enteringSector, (sectorCounts.get(enteringSector) || 0) + 1);
    
    // Record current window
    results.push(createSectorRecord(i - windowSize + 1, i, sectorCounts, windowSize));
  }
  
  return results;
}

function createSectorRecord(start, end, sectorCounts, total) {
  // Convert Map to sorted array of sectors by allocation
  const sortedSectors = Array.from(sectorCounts.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([sector, count]) => ({
      sector,
      count,
      percentage: ((count / total) * 100).toFixed(1)
    }));
  
  return {
    windowStart: start,
    windowEnd: end,
    topSectors: sortedSectors.slice(0, 5), // Top 5 sectors
    uniqueSectors: sectorCounts.size,
    diversificationScore: calculateDiversification(sectorCounts, total)
  };
}

function calculateDiversification(sectorCounts, total) {
  // Higher score = more diversified (lower concentration)
  let concentrationIndex = 0;
  for (const count of sectorCounts.values()) {
    const weight = count / total;
    concentrationIndex += weight * weight;
  }
  return (1 - concentrationIndex).toFixed(3);
}
\`\`\`

## Key Patterns for Financial Window State

### Pattern 1: Fixed Categories (Asset Classes)
\`\`\`javascript
// Use object when categories are known
const windowState = {
  stocks: 0,
  bonds: 0,
  commodities: 0,
  cash: 0
};

// Update when sliding
windowState[leavingAsset.type]--;
windowState[enteringAsset.type]++;
\`\`\`

### Pattern 2: Dynamic Categories (Sectors, Countries)
\`\`\`javascript
// Use Map when categories are unknown
const frequencyMap = new Map();

// Adding item
frequencyMap.set(key, (frequencyMap.get(key) || 0) + 1);

// Removing item (with cleanup)
const count = frequencyMap.get(key);
if (count === 1) {
  frequencyMap.delete(key); // Prevent memory leaks
} else {
  frequencyMap.set(key, count - 1);
}
\`\`\`

## Performance Considerations

Proper state management is crucial for real-time financial analysis:

- **Memory efficiency**: Clean up zero counts to prevent memory leaks
- **Update consistency**: Always update all related state together
- **Edge case handling**: Handle missing data gracefully

## 🧠 Recall Practice

Test your understanding of maintaining window state:
`,
  exercise: {
    starterCode: `/*
Problem: Track Currency Exposure in Portfolio

You need to track the currency exposure in a rolling window of international holdings.
Each holding has a currency property (USD, EUR, GBP, JPY, etc.).

Example:
holdings = [
  {symbol: "AAPL", currency: "USD"},
  {symbol: "SAP", currency: "EUR"},
  {symbol: "ASML", currency: "EUR"},
  {symbol: "SONY", currency: "JPY"}
]
windowSize = 3

Track the currency distribution in each 3-holding window.
*/

function trackCurrencyExposure(holdings, windowSize) {
  if (holdings.length < windowSize) return [];
  
  const results = [];
  const currencyCounts = new Map();
  
  // TODO: Initialize frequency map for first window
  // Your code here...
  
  // TODO: Record first window
  results.push(createCurrencyRecord(0, windowSize - 1, currencyCounts, windowSize));
  
  // TODO: Slide window through remaining holdings
  // Your code here...
  
  return results;
}

function createCurrencyRecord(start, end, currencyCounts, total) {
  const exposure = {};
  for (const [currency, count] of currencyCounts) {
    exposure[currency] = ((count / total) * 100).toFixed(1) + '%';
  }
  
  return {
    windowStart: start,
    windowEnd: end,
    currencyExposure: exposure,
    uniqueCurrencies: currencyCounts.size
  };
}

// Test your implementation
const testHoldings = [
  {symbol: "AAPL", currency: "USD"},
  {symbol: "SAP", currency: "EUR"},
  {symbol: "ASML", currency: "EUR"},
  {symbol: "SONY", currency: "JPY"}
];
console.log("Currency exposure:", trackCurrencyExposure(testHoldings, 3));`,
    solution: `/*
Problem: Track Currency Exposure in Portfolio

Complete solution showing how to maintain currency frequency state
as a sliding window moves through international holdings.
*/

function trackCurrencyExposure(holdings, windowSize) {
  if (holdings.length < windowSize) return [];
  
  const results = [];
  const currencyCounts = new Map();
  
  // Initialize frequency map for first window
  for (let i = 0; i < windowSize; i++) {
    const currency = holdings[i].currency;
    currencyCounts.set(currency, (currencyCounts.get(currency) || 0) + 1);
  }
  
  // Record first window
  results.push(createCurrencyRecord(0, windowSize - 1, currencyCounts, windowSize));
  
  // Slide window through remaining holdings
  for (let i = windowSize; i < holdings.length; i++) {
    // Remove currency leaving the window
    const leavingCurrency = holdings[i - windowSize].currency;
    const leavingCount = currencyCounts.get(leavingCurrency);
    if (leavingCount === 1) {
      currencyCounts.delete(leavingCurrency); // Remove if count becomes 0
    } else {
      currencyCounts.set(leavingCurrency, leavingCount - 1);
    }
    
    // Add currency entering the window
    const enteringCurrency = holdings[i].currency;
    currencyCounts.set(enteringCurrency, (currencyCounts.get(enteringCurrency) || 0) + 1);
    
    // Record current window state
    results.push(createCurrencyRecord(i - windowSize + 1, i, currencyCounts, windowSize));
  }
  
  return results;
}

function createCurrencyRecord(start, end, currencyCounts, total) {
  const exposure = {};
  for (const [currency, count] of currencyCounts) {
    exposure[currency] = ((count / total) * 100).toFixed(1) + '%';
  }
  
  return {
    windowStart: start,
    windowEnd: end,
    currencyExposure: exposure,
    uniqueCurrencies: currencyCounts.size
  };
}

// Test the implementation
const testHoldings = [
  {symbol: "AAPL", currency: "USD"},
  {symbol: "SAP", currency: "EUR"},
  {symbol: "ASML", currency: "EUR"},
  {symbol: "SONY", currency: "JPY"}
];
console.log("Currency exposure:", trackCurrencyExposure(testHoldings, 3));`,
    tests: [
      {
        name: "Test currency exposure tracking in sliding window",
        test: (code) => {
          try {
            const testCode = code + `
            // Test the function with various inputs
            const holdings1 = [
              {symbol: "AAPL", currency: "USD"},
              {symbol: "SAP", currency: "EUR"},
              {symbol: "ASML", currency: "EUR"},
              {symbol: "SONY", currency: "JPY"}
            ];
            
            const test1 = trackCurrencyExposure(holdings1, 3);
            const test2 = trackCurrencyExposure(holdings1, 2);
            const test3 = trackCurrencyExposure(holdings1, 5); // Edge case: windowSize > array length
            
            return {
              test1: test1,
              test2: test2,
              test3: test3,
              hasFunction: typeof trackCurrencyExposure === 'function'
            };
            `;

            const testResult = new Function(testCode)();

            if (!testResult.hasFunction) {
              return new TestResult({ passed: false, message: "trackCurrencyExposure function not found or not implemented correctly." });
            }

            // Test 1: Basic functionality - 4 holdings with window size 3
            if (testResult.test1.length !== 2) {
              return new TestResult({ passed: false, message: `Test 1 failed: Expected 2 windows for 4 holdings with windowSize 3, but got ${testResult.test1.length}` });
            }

            // Check first window has correct currency counts
            const firstWindow = testResult.test1[0];
            if (firstWindow.uniqueCurrencies !== 2) { // USD and EUR
              return new TestResult({ passed: false, message: `First window should have 2 unique currencies, but got ${firstWindow.uniqueCurrencies}` });
            }

            // Test 2: Window size 2
            if (testResult.test2.length !== 3) {
              return new TestResult({ passed: false, message: `Test 2 failed: Expected 3 windows for 4 holdings with windowSize 2, but got ${testResult.test2.length}` });
            }

            // Test 3: Edge case - windowSize > array length
            if (testResult.test3.length !== 0) {
              return new TestResult({ passed: false, message: `Test 3 failed: Expected empty array when windowSize > array length, but got length ${testResult.test3.length}` });
            }

            return new TestResult({ passed: true });
          } catch (error) {
            return new TestResult({ passed: false, message: `Error: ${error.message}` });
          }
        },
        message: "Currency exposure tracking test failed",
        successMessage: "✅ Excellent! Your sliding window currency exposure tracking works correctly."
      }
    ]
  },
  quiz: {
    component: () => {
      const CheckpointComponent = () => {
        useAutoGradeQuiz();

        return (
          <main>
            <h2>Maintaining Window State - Recall Practice</h2>
            <form className="auto-graded-quiz">
              <div className="question" data-answer="Map">
                <p>
                  When tracking dynamic categories (like sectors or currencies) in a sliding window, which JavaScript data structure is most appropriate for maintaining the frequency counts?
                </p>
                <input type="text" required />
                <span className="feedback" />
                <div className="explanation">
                  A <strong>Map</strong> is most appropriate for tracking dynamic categories in sliding windows. Unlike objects, Maps can efficiently handle unknown keys, provide better performance for frequent additions/deletions, and make it easy to delete keys when their count reaches zero to prevent memory leaks.
                </div>
              </div>

              <div className="question" data-answer="delete the key from the map">
                <p>
                  In sliding window frequency tracking, what should you do when removing an item causes a frequency count to reach zero?
                </p>
                <input type="text" required />
                <span className="feedback" />
                <div className="explanation">
                  You should <strong>delete the key from the map</strong> when its count reaches zero. This prevents memory leaks and keeps the map clean by not storing keys with zero counts. The pattern is: if (count === 1) {'{'}map.delete(key);{'}'} else {'{'}map.set(key, count - 1);{'}'}
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