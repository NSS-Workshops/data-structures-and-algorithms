import { TestResult } from "../../utils/test_utils";

export const combinePatternsFour = {
  id: 'combine-patterns-four',
  title: 'Survival Data Detective — First Unsafe Ice (Binary Search)',
  sectionId: 'combining-patterns',
  previousChapterId: 'combine-patterns-three',
  content: `
## First Unsafe Ice: Early Warning via Binary Search

Survey drones have mapped the ice thickness along a critical escape route. The ice gets progressively thinner as you move forward - once it becomes unsafe, all subsequent sections are also unsafe. You need to find exactly where the danger begins.

## ⏱️ Challenge: findFirstBelowThreshold

### 🎯 The Problem
Survey drones record **ice thickness** along a corridor, producing a non-increasing safety profile: once the ice becomes unsafe, all later points are also unsafe. Given an array \`thicknesses\` (numbers) and a minimum safe thickness \`minSafe\`, return the **first index** where \`thickness < minSafe\`. If all sections are safe, return \`-1\`.

### 🔍 Binary Search Strategy
This is a classic **"find first occurrence"** problem with a monotonic property:
- **Safe zone**: \`thickness >= minSafe\` (false for our predicate)
- **Danger zone**: \`thickness < minSafe\` (true for our predicate)
- **Pattern**: [safe, safe, safe, **DANGER**, danger, danger...]

We're looking for the **first true** in this boolean sequence.

### 📊 Algorithm Steps (Lower Bound Binary Search)
1. Initialize \`lo = 0\`, \`hi = length - 1\`, \`result = -1\`
2. While \`lo <= hi\`:
   - Calculate \`mid = lo + Math.floor((hi - lo) / 2)\`
   - If \`thicknesses[mid] < minSafe\`:
     - This could be our answer, save it: \`result = mid\`
     - Look for an earlier occurrence: \`hi = mid - 1\`
   - Else (still safe):
     - Look further right: \`lo = mid + 1\`
3. Return \`result\`

### 💡 Key Insights
- **Monotonic Property**: Once unsafe, everything after is unsafe
- **Lower Bound**: We want the leftmost position where condition is true
- **Efficiency**: O(log n) vs O(n) linear search
- **Edge Cases**: All safe (return -1), all unsafe (return 0)

### 🧪 Example Walkthrough
\`\`\`
thicknesses = [12, 11, 9, 9, 7, 7, 4, 2], minSafe = 8

Searching for first thickness < 8:

lo=0, hi=7, mid=3: thicknesses[3]=9 >= 8 (safe) → lo=4
lo=4, hi=7, mid=5: thicknesses[5]=7 < 8 (unsafe!) → result=5, hi=4
lo=4, hi=4, mid=4: thicknesses[4]=7 < 8 (unsafe!) → result=4, hi=3
lo=4, hi=3: lo > hi, stop

Result: 4 (first index where thickness < 8)
\`\`\`

### 🔧 Implementation Template
\`\`\`javascript
function findFirstBelowThreshold(thicknesses, minSafe) {
  let lo = 0, hi = thicknesses.length - 1;
  let result = -1;
  
  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    if (thicknesses[mid] < minSafe) {
      result = mid;        // Found candidate
      hi = mid - 1;        // Look for earlier occurrence
    } else {
      lo = mid + 1;        // Still safe, go right
    }
  }
  
  return result;
}
\`\`\`

**Return Value**
- Index of first unsafe section, or \`-1\` if all are safe

**Constraints**
- Assume the predicate "unsafe" is **monotonic** (false…false, then true…true)
- Implement **binary search** (O(log n))
- Handle edge cases: empty array, all safe, all unsafe

🔓 **Uncomment the below code section in the editor 👉:**
- Implement \`findFirstBelowThreshold(thicknesses: number[], minSafe: number)\` using binary search.
`,
  exercise: {
    starterCode: `
// export so tests can access it
export function findFirstBelowThreshold(thicknesses, minSafe) {
  // Binary search for the first index where thickness < minSafe
  let lo = 0, hi = thicknesses.length - 1;
  let ans = -1;

  // TODO: classic lower-bound style search on predicate (x < minSafe)
  return ans;
}
`,
    solution: `
// Reference Solution
export function findFirstBelowThreshold(thicknesses, minSafe) {
  let lo = 0, hi = thicknesses.length - 1;
  let ans = -1;

  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    if (thicknesses[mid] < minSafe) {
      ans = mid;      // candidate; try to find an earlier one
      hi = mid - 1;
    } else {
      lo = mid + 1;   // still safe, move right
    }
  }
  return ans;
}
`,
    tests: [
      {
        name: "Finds earliest unsafe index via binary search",
        test: (code) => {
          try {
            const testCode = code + `
              const a = findFirstBelowThreshold([12,11,9,9,7,7,4,2], 8);   // first <8 is idx 6 (4)
              const b = findFirstBelowThreshold([10,9,9,8,8,8,8], 8);      // first <8 is -1 (none)
              const c = findFirstBelowThreshold([9,7,7,7,6], 7.5);          // first <7.5 is idx 1 (7)
              const d = findFirstBelowThreshold([], 5);                     // -1
              return { a, b, c, d };
            `;
            const { a, b, c, d } = new Function(testCode)();

            if (a !== 6) return new TestResult({ passed: false, message: "Case a should be index 6" });
            if (b !== -1) return new TestResult({ passed: false, message: "Case b should be -1 (none unsafe)" });
            if (c !== 1) return new TestResult({ passed: false, message: "Case c should be index 1" });
            if (d !== -1) return new TestResult({ passed: false, message: "Case d should be -1 for empty input" });

            return new TestResult({ passed: true });
          } catch (e) {
            return new TestResult({ passed: false, message: e.message });
          }
        },
        message: "Use a lower-bound binary search to find the first index where thickness < minSafe."
      }
    ]
  },
  quiz: null
};