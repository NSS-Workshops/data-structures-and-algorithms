import { TestResult } from "../../utils/test_utils";

export const combinePatternsTwo = {
  id: 'combine-patterns-two',
  title: 'Lost weather monitors',
  sectionId: 'combining-patterns',
  previousChapterId: 'combine-patterns-one',
  content: `

The convoy's weather monitoring system has failed! Lost weather monitors are scattered across the frozen wasteland. Navigate through a 2D grid to collect these critical devices. Use a stack to keep track of monitors in the order you find them - this will help prioritize which ones to repair first.

## ⏱️ Challenge: Collect Weather Monitors with a Stack

### 🎯 The Problem
You're given a 2D grid with lost weather monitors (> 0) and empty areas (0).

You start from a given (row, col) position.

Follow the search moves (U, D, L, R).

Every time you find a monitor, push its serial number onto a stack.

At the end, return monitor serial numbers in the order you found them.

### 🗺️ 2D Array + Stack Strategy
This combines **2D array navigation** with **stack operations**:

1. **Start at given position** in the 2D grid
2. **Follow search commands** (U=up, D=down, L=left, R=right)
3. **Check each location** for monitors (values > 0)
4. **Push monitor serial numbers onto stack** as you find them
5. **Return stack contents** (in the order found for processing)

### 📊 Algorithm Steps
1. Initialize \`stack = []\` and current position \`(row, col)\`
2. For each move in the search pattern:
   - Update position based on direction (U/D/L/R)
   - Check bounds to ensure valid position
   - If current location has monitor (> 0), push serial number to stack
3. Return the stack (monitor serial numbers in the order found)

### 💡 Key Insights
- **2D navigation**: Update \`row\` and \`col\` based on direction
- **Bounds checking**: Ensure \`0 <= row < rows\` and \`0 <= col < cols\`
- **Stack operations**: \`push()\` to add monitor serial numbers
- **Movement mapping**: U=row-1, D=row+1, L=col-1, R=col+1

### 🧪 Example Walkthrough
\`\`\`
grid = [
  [0, 105, 0],
  [203, 0, 307],
  [0, 402, 0]
]
startRow = 1, startCol = 0
moves = ['U', 'R', 'D', 'R']

Step by step:
- Start at (1,0): monitor serial=203, push 203 → stack=[203]
- Move U to (0,0): empty=0, no monitor → stack=[203]
- Move R to (0,1): monitor serial=105, push 105 → stack=[203,105]
- Move D to (1,1): empty=0, no monitor → stack=[203,105]
- Move R to (1,2): monitor serial=307, push 307 → stack=[203,105,307]

Result: [203,105,307] (monitors found in this order)
\`\`\`

**Return Format**
- Array of monitor serial numbers: \`[serial1, serial2, ...]\` (in the order found)

**Constraints**
- Use **2D array indexing** and **stack operations**
- Handle **bounds checking** for invalid moves
- Time complexity: O(m) where m is number of moves
- Space complexity: O(t) where t is number of monitors found

🔓 **Uncomment the below code section in the editor 👉:**
- Implement \`collectWeatherMonitors(grid, startRow, startCol, moves)\` combining 2D arrays and stacks.
`,
  exercise: {
    starterCode: `
function collectWeatherMonitors(grid, startRow, startCol, moves) {
  // 2D array + stack: navigate grid and collect weather monitors
  if (!Array.isArray(grid) || grid.length === 0 || !Array.isArray(grid[0])) return [];

  const rows = grid.length;
  const cols = grid[0].length;
  const stack = [];
  let row = startRow;
  let col = startCol;

  // TODO: implement 2D navigation with stack operations
  // Tip: check starting position first, then follow moves (U/D/L/R)
  // Push monitor serial numbers onto stack as you find them
  return stack;
}
`,
    solution: `
// Reference Solution
function collectWeatherMonitors(grid, startRow, startCol, moves) {
  if (!Array.isArray(grid) || grid.length === 0 || !Array.isArray(grid[0])) return [];

  const rows = grid.length;
  const cols = grid[0].length;
  const stack = [];
  const collected = new Set(); // Track collected positions to avoid duplicates
  let row = startRow;
  let col = startCol;

  // Check starting position for weather monitor
  if (row >= 0 && row < rows && col >= 0 && col < cols && grid[row][col] > 0) {
    stack.push(grid[row][col]);
    collected.add(row + ',' + col); // Mark position as collected
  }

  // Process each search move
  for (const move of moves) {
    // Update position based on move direction
    switch (move) {
      case 'U':
        row--;
        break;
      case 'D':
        row++;
        break;
      case 'L':
        col--;
        break;
      case 'R':
        col++;
        break;
    }

    // Check bounds and collect monitor if present and not already collected
    if (row >= 0 && row < rows && col >= 0 && col < cols) {
      const posKey = row + ',' + col;
      if (grid[row][col] > 0 && !collected.has(posKey)) {
        stack.push(grid[row][col]); // Push monitor serial number onto stack
        collected.add(posKey); // Mark position as collected
      }
    }
    // If out of bounds, we just continue (ignore invalid moves)
  }

  return stack; // Returns monitor serial numbers in the order found
}
`,
    tests: [
      {
        name: "Collects weather monitors using 2D navigation and stack operations",
        test: (code) => {
          try {
            const testCode = code + `
              const grid1 = [
                [0, 105, 0],
                [203, 0, 307],
                [0, 402, 0]
              ];
              const out1 = collectWeatherMonitors(grid1, 1, 0, ['U', 'R', 'D', 'R']);
              
              const grid2 = [
                [101, 102],
                [103, 104]
              ];
              const out2 = collectWeatherMonitors(grid2, 0, 0, ['R', 'D', 'L']);
              
              const grid3 = [
                [0, 0, 0],
                [0, 999, 0],
                [0, 0, 0]
              ];
              const out3 = collectWeatherMonitors(grid3, 1, 1, ['U', 'D', 'L', 'R']);
              
              return { out1, out2, out3 };
            `;
            const { out1, out2, out3 } = new Function(testCode)();

            // Test 1: Should collect monitor serial numbers [203, 105, 307] in that order
            if (!Array.isArray(out1) || JSON.stringify(out1) !== JSON.stringify([203, 105, 307])) {
              return new TestResult({ passed: false, message: `Expected [203, 105, 307], got ${JSON.stringify(out1)}` });
            }
            
            // Test 2: Should collect monitor serial numbers [101, 102, 104, 103] following the path
            if (!Array.isArray(out2) || JSON.stringify(out2) !== JSON.stringify([101, 102, 104, 103])) {
              return new TestResult({ passed: false, message: `Expected [101, 102, 104, 103], got ${JSON.stringify(out2)}` });
            }
            
            // Test 3: Should collect only the starting monitor serial number [999]
            if (!Array.isArray(out3) || JSON.stringify(out3) !== JSON.stringify([999])) {
              return new TestResult({ passed: false, message: `Expected [999], got ${JSON.stringify(out3)}` });
            }

            return new TestResult({ passed: true });
          } catch (e) {
            return new TestResult({ passed: false, message: e.message });
          }
        },
        message: "Should navigate 2D grid following search moves and collect weather monitor serial numbers using stack operations."
      }
    ]
  },
  quiz: null
};