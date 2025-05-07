export const findingNeighborsChapter = {
  id: 'finding-neighbors',
  title: 'Finding Neighbors (Up/Down/Left/Right)',
  sectionId: '2d-arrays',
  previousChapterId: 'indexing-and-bounds',
  content: `## Finding Neighbors in Grid-Based Problems

Many grid-based problems require identifying and processing neighboring cells. This chapter explores techniques for finding adjacent cells in different directional patterns.

TBD

## Cardinal Directions (4-Way)

The most common neighbor pattern involves the four cardinal directions: up, down, left, and right.

### Direction Arrays Approach

A clean way to handle directional movement is using direction arrays:

\`\`\`javascript
// Direction arrays for up, right, down, left
const dr = [-1, 0, 1, 0]; // Row direction
const dc = [0, 1, 0, -1]; // Column direction

function getCardinalNeighbors(grid, row, col) {
  const rows = grid.length;
  const cols = grid[0].length;
  const neighbors = [];
  
  for (let i = 0; i < 4; i++) {
    const newRow = row + dr[i];
    const newCol = col + dc[i];
    
    // Check bounds
    if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
      neighbors.push([newRow, newCol]);
    }
  }
  
  return neighbors;
}
\`\`\`

TBD

## Diagonal Directions (8-Way)

Some problems require considering all eight surrounding cells, including diagonals.

\`\`\`javascript
// Direction arrays for all 8 directions
const dr = [-1, -1, 0, 1, 1, 1, 0, -1]; // Row direction
const dc = [0, 1, 1, 1, 0, -1, -1, -1]; // Column direction

function getAllNeighbors(grid, row, col) {
  const rows = grid.length;
  const cols = grid[0].length;
  const neighbors = [];
  
  for (let i = 0; i < 8; i++) {
    const newRow = row + dr[i];
    const newCol = col + dc[i];
    
    // Check bounds
    if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
      neighbors.push([newRow, newCol]);
    }
  }
  
  return neighbors;
}
\`\`\`

TBD

## Knight's Moves

Chess-inspired problems might require knight's moves (L-shaped pattern).

\`\`\`javascript
// Knight's move patterns
const dr = [-2, -1, 1, 2, 2, 1, -1, -2]; // Row direction
const dc = [1, 2, 2, 1, -1, -2, -2, -1]; // Column direction

function getKnightMoves(grid, row, col) {
  const rows = grid.length;
  const cols = grid[0].length;
  const moves = [];
  
  for (let i = 0; i < 8; i++) {
    const newRow = row + dr[i];
    const newCol = col + dc[i];
    
    // Check bounds
    if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
      moves.push([newRow, newCol]);
    }
  }
  
  return moves;
}
\`\`\`

TBD

## Conditional Neighbors

Sometimes, neighbors are determined by conditions beyond just direction:

### Example: Same-Value Neighbors
\`\`\`javascript
function getSameValueNeighbors(grid, row, col) {
  const rows = grid.length;
  const cols = grid[0].length;
  const neighbors = [];
  const value = grid[row][col];
  
  // Direction arrays for up, right, down, left
  const dr = [-1, 0, 1, 0];
  const dc = [0, 1, 0, -1];
  
  for (let i = 0; i < 4; i++) {
    const newRow = row + dr[i];
    const newCol = col + dc[i];
    
    // Check bounds and same value
    if (
      newRow >= 0 && newRow < rows && 
      newCol >= 0 && newCol < cols &&
      grid[newRow][newCol] === value
    ) {
      neighbors.push([newRow, newCol]);
    }
  }
  
  return neighbors;
}
\`\`\`

TBD

## Applications in Grid-Based Algorithms

Finding neighbors is a fundamental operation in many grid-based algorithms:

### Flood Fill
Used in paint applications and image processing to fill connected regions.

\`\`\`javascript
function floodFill(grid, row, col, newColor) {
  const originalColor = grid[row][col];
  if (originalColor === newColor) return grid;
  
  function fill(r, c) {
    if (
      r < 0 || r >= grid.length || 
      c < 0 || c >= grid[0].length || 
      grid[r][c] !== originalColor
    ) {
      return;
    }
    
    grid[r][c] = newColor;
    
    // Visit all 4 neighbors
    fill(r-1, c);
    fill(r+1, c);
    fill(r, c-1);
    fill(r, c+1);
  }
  
  fill(row, col);
  return grid;
}
\`\`\`

### Island Counting
Used to count connected components in a grid.

\`\`\`javascript
function countIslands(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;
  
  function dfs(r, c) {
    if (
      r < 0 || r >= rows || 
      c < 0 || c >= cols || 
      grid[r][c] === '0'
    ) {
      return;
    }
    
    // Mark as visited
    grid[r][c] = '0';
    
    // Visit all 4 neighbors
    dfs(r-1, c);
    dfs(r+1, c);
    dfs(r, c-1);
    dfs(r, c+1);
  }
  
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === '1') {
        count++;
        dfs(r, c);
      }
    }
  }
  
  return count;
}
\`\`\`

TBD`,
  exercise: null
};