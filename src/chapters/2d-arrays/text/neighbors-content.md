## Finding Neighbors in Grid-Based Problems

Next, we're going to dive into the world of finding neighboring cells in a grid. This is an important concept that you'll use all the time in game development, image processing, and other applications.

When we talk about finding neighbors in a grid, we're looking at how to find and work with cells that are adjacent to a given position. Think of it like finding all the neighboring houses on a street, or all the adjacent squares on a chess board. It's a fundamental operation that opens up so many possibilities in grid-based programming.

## Cardinal Directions (4-Way)

Let's start with the most common scenario - finding neighbors in the four cardinal directions (up, down, left, and right). Imagine you're creating a Pac-Man game. You will need to check which directions your character can move, and this calculation will be part of that.

### Direction Arrays Approach

One way to handle directional movement using what we call "direction arrays" that specify how to change the coordinate to move in each direction:

```javascript
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
```

This approach is really elegant. Instead of writing separate code for each direction, we use these direction arrays as a standard pattern for movement. The dr and dc tell you exactly how to move in each direction! Also, note that we're including a boundary check to be sure we only include neighbors that actually exist in the matrix.

The time complexity for finding cardinal neighbors of a cell is linear, or O(1), since we always check exactly 4 directions, regardless of grid size. The space complexity is also O(1) as we store at most 4 neighboring positions. This is much more efficient than scanning the entire grid, which would be O(n*m).

## Diagonal Directions (8-Way)

Sometimes four directions just aren't enough. Maybe you're making a chess game where pieces can move diagonally, or creating a pathfinding algorithm that needs to consider all possible directions. That's where 8-way movement comes in. It works the same way, just with more options:

```javascript
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
```

Similar to cardinal neighbors, finding 8-way neighbors has O(1) time and space complexity since we're checking a fixed number of directions (8) regardless of the grid's size. This constant-time operation is crucial for efficient pathfinding and game algorithms that need to frequently check adjacent cells.

## Knight's Moves

We can also use this pattern in more unique situations. What if we need to find cells that are reachable by a knight in chess? Knights move in that special L-shape pattern, and it's a perfect example of how flexible our neighbor-finding code can be:

```javascript
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
```


## Side Note: An Alternative to Parallel Arrays

It's worth noting that parallel arrays (as used here to store movement in two directions) are generally considered an anti-pattern. They can be harder to read and maintain as associated data, and it's easy to introduce errors if they get out of sync. A cleaner way to structure this would be with objects and named properties, as shown here:

```javascript
const DIRECTIONS = {
  UP: { dr: -1, dc: 0 },
  RIGHT: { dr: 0, dc: 1 },
  DOWN: { dr: 1, dc: 0 },
  LEFT: { dr: 0, dc: -1 }
};
```

This has advantages in being clear, avoiding errors, and using meaningful property names instead of obscure index numbers. However... in practice, it's more common to use the parallel array solution for a few reasons:

- Performance: Parallel arrays are more memory-efficient and processing them is faster
- Simplicity: For simple cardinal directions, parallel arrays are concise and the pattern relationship is visible at a glance
- Conventional: This pattern is commonplace in algorithm textbooks and in practice, making it familiar to many developers.

So, while it's not suggested to use this object-based solution, it's worth noting the trade-offs, and why we're focusing on the parallel array solution.

## Conditional Neighbors

Sometimes we don't just want any neighbors - we want neighbors that meet specific conditions. Maybe we're making a match-3 game and need to find adjacent cells with the same color, or we're creating a maze solver that can only move through empty spaces.

### Example: Same-Value Neighbors
```javascript
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
```




## Island Perimeter

Here's a practical example where checking neighbors helps solve a common interview problem:
- You are given a grid that represents a nautical map (where 1 represents land and 0 represents water)
- That map contains a single island (a group of 1 values all connected horizontally or vertically)
- Calculate the perimeter of the island (the total number of edges that border water or the grid boundary)

```javascript
function calculateIslandPerimeter(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    let perimeter = 0;
    
    // Direction arrays for up, right, down, left
    const dr = [-1, 0, 1, 0];
    const dc = [0, 1, 0, -1];
    
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            // Skip water cells
            if (grid[row][col] === 0) continue;
            
            // For each land cell, count edges that face water or boundary
            for (let i = 0; i < 4; i++) {
                const newRow = row + dr[i];
                const newCol = col + dc[i];
                
                //if this edge face water or a boundary, add it to the perimeter
                if (
                    newRow < 0 || newRow >= rows ||
                    newCol < 0 || newCol >= cols ||
                    grid[newRow][newCol] === 0
                ) {
                    perimeter++;
                }
            }
        }
    }
    
    return perimeter;
}

// Example usage:
const islandGrid = [
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0]
];
const perimeter = calculateIslandPerimeter(islandGrid);
console.log(perimeter); // Output: 16
```

Remember, finding neighbors is all about exploring relationships between cells in your grid. Whether you're making games, processing images, or solving puzzles, these patterns will come in handy time and time again. The key is to choose the right neighbor pattern for your specific problem and always remember to check those boundaries!


# Practice Exercise

Before moving on, look at the program code in the right pane and complete it so that it logs the correct information to the inline console.