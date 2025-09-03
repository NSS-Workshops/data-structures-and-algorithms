import { TestResult } from "../../utils/test_utils";

export const combinePatternsTwo = {
  id: 'combine-patterns-two',
  title: 'Survival Data Detective — Long Cold Corridor (Sliding Window)',
  sectionId: 'combining-patterns',
  previousChapterId: 'combine-patterns-one',
  content: `
## Long Cold Corridor: Sustained Risk Zones

The convoy needs to traverse dangerous territory where wind chill can be deadly. You must find the longest route segment where the average wind chill meets the minimum safety threshold - this could mean the difference between life and death for the team.

## ⏱️ Challenge: longestColdStreakAvgAtLeast

### 🎯 The Problem
A convoy must choose a route segment where the **average wind chill** is at least a danger threshold \`T\`. Given an array of integers \`readings\` (wind chill values by day), return the **longest** contiguous window whose average is \`>= T\`. If multiple windows tie for longest, return the first one found.

### 🔄 Sliding Window Strategy
This is a perfect use case for the **sliding window pattern**:

1. **Expand Phase**: Keep adding elements to the right to grow the window
2. **Contract Phase**: When the average drops below threshold, shrink from the left
3. **Track Best**: Keep track of the longest valid window found so far

### 📊 Algorithm Steps
1. Initialize \`left = 0\`, \`sum = 0\`, and \`best = null\`
2. For each \`right\` position:
   - Add \`readings[right]\` to the sum
   - While the current average < T:
     - Remove \`readings[left]\` from sum
     - Increment \`left\`
   - If current window is valid and longer than best, update best
3. Return the best window found

### 💡 Key Insights
- **Average Calculation**: \`sum / (right - left + 1)\`
- **Window Length**: \`right - left + 1\`
- **Efficiency**: Each element is added once and removed at most once → O(n)

### 🧪 Example Walkthrough
\`\`\`
readings = [2, 1, 3, 1, 3], T = 2.2

Step 1: [2] avg=2.0 < 2.2 (invalid)
Step 2: [2,1] avg=1.5 < 2.2 (invalid, shrink)
Step 3: [1] avg=1.0 < 2.2 (invalid)
Step 4: [1,3] avg=2.0 < 2.2 (invalid)
Step 5: [1,3,1] avg=1.67 < 2.2 (invalid, shrink)
Step 6: [3,1] avg=2.0 < 2.2 (invalid)
Step 7: [3,1,3] avg=2.33 >= 2.2 ✓ (length 3, indices 2-4)

Result: {start: 2, end: 4, length: 3, average: 2.3333}
\`\`\`

**Return Format**
- \`{ start: number, end: number, length: number, average: number }\` or \`null\` if none found.

**Constraints**
- Use the **sliding window** pattern (expand right, shrink left while condition fails)
- Time complexity: O(n), Space: O(1)

🔓 **Uncomment the below code section in the editor 👉:**
- Implement \`longestColdStreakAvgAtLeast(readings: number[], T: number)\` using sliding window.
`,
  exercise: {
    starterCode: `
// export so tests can access it
export function longestColdStreakAvgAtLeast(readings, T) {
  // Sliding window: keep windowSum and (left, right)
  if (!Array.isArray(readings) || readings.length === 0) return null;

  // TODO: implement O(n) sliding window to maintain avg >= T
  // Tip: while (avg < T) shrink from left
  return null;
}
`,
    solution: `
// Reference Solution
export function longestColdStreakAvgAtLeast(readings, T) {
  if (!Array.isArray(readings) || readings.length === 0) return null;

  let best = null;

  // Try all possible starting positions
  for (let start = 0; start < readings.length; start++) {
    let sum = 0;
    
    // Try all possible ending positions from this start
    for (let end = start; end < readings.length; end++) {
      sum += readings[end];
      const len = end - start + 1;
      const avg = sum / len;
      
      // If this window meets the threshold and is longer than current best
      if (avg >= T) {
        if (!best || len > best.length) {
          best = { start, end, length: len, average: +avg.toFixed(4) };
        }
      }
    }
  }

  return best;
}
`,
    tests: [
      {
        name: "Finds the longest qualifying window by average",
        test: (code) => {
          try {
            const testCode = code + `
              const out1 = longestColdStreakAvgAtLeast([2,1,3,1,3], 2.2);
              const out2 = longestColdStreakAvgAtLeast([1,1,1,1], 1.5);
              const out3 = longestColdStreakAvgAtLeast([5,5,1,5,5], 4.5);
              return { out1, out2, out3 };
            `;
            const { out1, out2, out3 } = new Function(testCode)();

            if (!out1 || out1.length !== 3 || out1.start !== 2 || out1.end !== 4) {
              return new TestResult({ passed: false, message: "Should find window [3,1,3] (idx 2..4) length 3" });
            }
            if (out2 !== null) {
              return new TestResult({ passed: false, message: "No window avg >= 1.5 in [1,1,1,1]" });
            }
            if (!out3 || out3.length !== 2 || out3.start !== 0 || out3.end !== 1) {
              return new TestResult({ passed: false, message: "Should pick first longest window avg>=4.5: [5,5] (idx 0..1)" });
            }

            return new TestResult({ passed: true });
          } catch (e) {
            return new TestResult({ passed: false, message: e.message });
          }
        },
        message: "Sliding window should expand/contract to maintain avg >= T and choose the longest segment."
      }
    ]
  },
  quiz: null
};