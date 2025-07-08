export const findingNeighborsChapter = {
  id: 'finding-neighbors',
  title: 'Finding Neighbors (Up/Down/Left/Right)',
  sectionId: '2d-arrays',
  previousChapterId: 'indexing-and-bounds',
  content: `## Finding Neighbors in Grid-Based Problems

Hey there! Ready to explore one of the most exciting aspects of working with 2D arrays? We're going to dive into the world of finding neighboring cells in a grid. This is a super important concept that you'll use all the time in game development, image processing, and many other cool applications!

When we talk about finding neighbors in a grid, we're basically looking at how to find and work with cells that are adjacent to a given position. Think of it like finding all the neighboring houses on a street, or all the adjacent squares on a chess board. It's a fundamental operation that opens up so many possibilities in grid-based programming!

## Cardinal Directions (4-Way)

Let's start with the most common scenario - finding neighbors in the four cardinal directions (up, down, left, and right). Imagine you're creating a Pac-Man game, and you need to check which directions your character can move. This is exactly where cardinal direction neighbors come in handy!

### Direction Arrays Approach

Here's a really clever way to handle directional movement using what we call "direction arrays." It's like having a compass that tells you exactly how to move in each direction:

\`\`\`javascript
// Direction arrays for up, right, down, left
const dr = [-1, 0, 1, 0];  // Row direction
const dc = [0, 1, 0, -1];  // Column direction

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

This approach is super elegant! Instead of writing separate code for each direction, we use these direction arrays as a kind of recipe for movement. Think of dr and dc as your GPS coordinates - they tell you exactly how to move in each direction!

## Diagonal Directions (8-Way)

Sometimes four directions just aren't enough. Maybe you're making a chess game where pieces can move diagonally, or creating a pathfinding algorithm that needs to consider all possible directions. That's where 8-way movement comes in - it's like giving your grid superpowers!

\`\`\`javascript
// Direction arrays for all 8 directions (starting from top, going clockwise)
const dr = [-1, -1, 0, 1, 1, 1, 0, -1];  // Row direction
const dc = [0, 1, 1, 1, 0, -1, -1, -1];  // Column direction

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

## Knight's Moves

Now here's something really cool - what if we need to find cells that are reachable by a knight in chess? Knights move in that special L-shape pattern, and it's a perfect example of how flexible our neighbor-finding code can be:

\`\`\`javascript
// Knight's move patterns (all possible L-shapes)
const dr = [-2, -1, 1, 2, 2, 1, -1, -2];  // Row direction
const dc = [1, 2, 2, 1, -1, -2, -2, -1];  // Column direction

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

## Conditional Neighbors

Here's where things get really interesting! Sometimes we don't just want any neighbors - we want neighbors that meet specific conditions. Maybe we're making a match-3 game and need to find adjacent cells with the same color, or we're creating a maze solver that can only move through empty spaces.

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

## Applications in Grid-Based Algorithms

Let's look at some real-world applications where finding neighbors is crucial. These examples will show you just how powerful this concept can be!

### Flood Fill
This is the algorithm that powers the "paint bucket" tool in drawing programs. It's like dropping paint that spreads to all connected cells of the same color:

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
    fill(r-1, c);  // Up
    fill(r+1, c);  // Down
    fill(r, c-1);  // Left
    fill(r, c+1);  // Right
  }
  
  fill(row, col);
  return grid;
}
\`\`\`

### Island Counting
This is a classic problem where we need to count connected groups of cells. Think of it like counting the number of islands on a map where water is '0' and land is '1':

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
    
    // Mark as visited by changing to water
    grid[r][c] = '0';
    
    // Explore all 4 neighbors
    dfs(r-1, c);  // Up
    dfs(r+1, c);  // Down
    dfs(r, c-1);  // Left
    dfs(r, c+1);  // Right
  }
  
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === '1') {
        count++;  // Found a new island
        dfs(r, c);  // Mark all connected land
      }
    }
  }
  
  return count;
}
\`\`\`

Remember, finding neighbors is all about exploring relationships between cells in your grid. Whether you're making games, processing images, or solving puzzles, these patterns will come in handy time and time again. The key is to choose the right neighbor pattern for your specific problem and always remember to check those boundaries!`,
  exercise: null
};