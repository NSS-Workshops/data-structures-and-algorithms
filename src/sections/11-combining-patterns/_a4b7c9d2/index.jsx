import { TestResult } from "@nss-workshops/nss-core";

export default {
  id: 'a4b7c9d2',
  title: 'DSA Challenge 2 - 2D Arrays: neighbors & updates',
  sectionId: 'combining-patterns',
  previousChapterId: null,
  content: `
# Challenge 2: 2D Arrays — neighbors & updates

**Navigate:** [1](9b8a8427) | 2 | [3](e8f1a5b3) | [4](c6d9e2f4) | [5](b3a8d7c1) | [6](f9e4b2a7) | [7](d1c5f8e3) | [8](a7b2e9f6) | [9](c4f7a1d8)

## 👥 Pair Programming Instructions

**Work in pairs for this challenge!** One person should be the **Driver** (writing code) and the other the **Navigator** (reviewing and guiding). **Switch roles for each function** you implement.

<iframe width="560" height="315" src="https://www.youtube.com/embed/jqGmL6Hf23k?si=qXmQcnQigfo1adTb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

**Why it matters:** Grid problems are everywhere (games, pathfinding, image processing). Neighbor logic is foundational.

**Objectives:**
- Find neighbors of a cell.
- Update values in a 2D array; reason about runtime (per cell O(1) neighbors; whole grid O(R*C)).

**Time Estimate:** 20 minutes

## Problems to Solve:

1. **countNeighbors(grid, r, c, target)** - Count 8-direction neighbors that match a target value
   - Example: \`countNeighbors([[1,1,0],[0,1,0],[0,0,1]], 0, 0, 1)\` → \`2\` (neighbors at (0,1) and (1,1))
   - Example: \`countNeighbors([[1,0],[0,1]], 1, 1, 0)\` → \`2\` (neighbors at (0,1) and (1,0))

2. **neighborCountGrid(grid, target)** - For each cell, set it to the number of matching neighbors (new grid)
   - Example: \`neighborCountGrid([[1,0],[0,1]], 1)\` → \`[[1,2],[2,1]]\`
   - Example: \`neighborCountGrid([[0,0],[0,0]], 1)\` → \`[[0,0],[0,0]]\`

## Big-O Analysis:
- **Runtime: O(R*C)** since each cell looks at constant 8 neighbors
- **Space: O(R*C)** for the output grid`,

  exercise: {
    starterCode: `/*
Challenge 2: 2D Arrays — neighbors & updates

Implement the following functions:

1. countNeighbors(grid, r, c, target) - Count 8-direction neighbors that match a target value
2. neighborCountGrid(grid, target) - For each cell, set it to the number of matching neighbors (new grid)

grid is an array of arrays (rows)
*/

function countNeighbors(grid, r, c, target) {
  // Count 8-direction neighbors that match a target value
  // Your code here
}

function neighborCountGrid(grid, target) {
  // For each cell, set it to the number of matching neighbors (new grid)
  // Your code here
}`,

    solution: `/*
Challenge 2: 2D Arrays — neighbors & updates
*/

function countNeighbors(grid, r, c, target) {
  // Count 8-direction neighbors that match a target value
  const dirs = [-1, 0, 1];
  let count = 0;
  
  for (const dr of dirs) {
    for (const dc of dirs) {
      if (dr === 0 && dc === 0) continue; // Skip the center cell
      
      const nr = r + dr;
      const nc = c + dc;
      
      // Check bounds
      if (nr >= 0 && nr < grid.length && nc >= 0 && nc < grid[0].length) {
        if (grid[nr][nc] === target) {
          count++;
        }
      }
    }
  }
  
  return count;
}

function neighborCountGrid(grid, target) {
  // For each cell, set it to the number of matching neighbors (new grid)
  const rows = grid.length;
  const cols = grid[0].length;
  const out = Array.from({length: rows}, () => Array(cols).fill(0));
  
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      out[r][c] = countNeighbors(grid, r, c, target);
    }
  }
  
  return out;
}

// Runtime: O(R*C) since each cell looks at constant 8 neighbors.`,

    tests: [
      {
        name: "countNeighbors works correctly",
        test: (code) => {
          try {
            const func = new Function(`${code}; \n return { countNeighbors, neighborCountGrid };`)();
            const g = [
              [1,1,0],
              [0,1,0],
              [0,0,1]
            ];
            const result = func.countNeighbors(g, 0, 0, 1);
            
            if (result === 2) { // (0,1) and (1,1)
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Expected 2, got ${result}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should count neighbors correctly."
      },
      {
        name: "neighborCountGrid works correctly",
        test: (code) => {
          try {
            const func = new Function(`${code}; \n return { countNeighbors, neighborCountGrid };`)();
            const result = func.neighborCountGrid([[1,0],[0,1]], 1);
            const expected = [[1,2],[2,1]];
            
            if (JSON.stringify(result) === JSON.stringify(expected)) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Expected ${JSON.stringify(expected)}, got ${JSON.stringify(result)}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should create neighbor count grid correctly."
      },
      {
        name: "Handles edge cases",
        test: (code) => {
          try {
            const func = new Function(`${code}; \n return { countNeighbors, neighborCountGrid };`)();
            
            // Single cell grid
            const result1 = func.countNeighbors([[1]], 0, 0, 1);
            
            // Corner cell in larger grid
            const grid2 = [[1,1],[1,0]];
            const result2 = func.countNeighbors(grid2, 0, 0, 1);
            
            if (result1 === 0 && result2 === 2) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Single cell: ${result1}, Corner: ${result2}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should handle edge cases correctly."
      }
    ]
  }
};