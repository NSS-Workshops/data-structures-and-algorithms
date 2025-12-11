import { CodeExercise } from "@nss-workshops/nss-core";

const starterCode = `
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
`;

const solution = `
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
`;

const tests = [
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
          return { passed: false, message: `Expected [203, 105, 307], got ${JSON.stringify(out1)}` };
        }
        
        // Test 2: Should collect monitor serial numbers [101, 102, 104, 103] following the path
        if (!Array.isArray(out2) || JSON.stringify(out2) !== JSON.stringify([101, 102, 104, 103])) {
          return { passed: false, message: `Expected [101, 102, 104, 103], got ${JSON.stringify(out2)}` };
        }
        
        // Test 3: Should collect only the starting monitor serial number [999]
        if (!Array.isArray(out3) || JSON.stringify(out3) !== JSON.stringify([999])) {
          return { passed: false, message: `Expected [999], got ${JSON.stringify(out3)}` };
        }

        return { passed: true };
      } catch (e) {
        return { passed: false, message: e.message };
      }
    },
    message: "Should navigate 2D grid following search moves and collect weather monitor serial numbers using stack operations."
  }
];

export default function LostWeatherMonitors() {
  return (
    <CodeExercise
      starterCode={starterCode}
      solution={solution}
      tests={tests}
    />
  );
}