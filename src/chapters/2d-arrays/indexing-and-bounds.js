export const indexingAndBoundsChapter = {
  id: 'indexing-and-bounds',
  title: 'Indexing and Bounds Checking in Grids',
  sectionId: '2d-arrays',
  previousChapterId: '2d-arrays-intro',
  content: `## Indexing and Bounds Checking in Grids

Working with 2D arrays requires careful attention to indexing and bounds checking to avoid errors and ensure correct grid traversal.

TBD

## Accessing Elements in 2D Arrays

To access an element in a 2D array, you need two indices: one for the row and one for the column.

\`\`\`javascript
const grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Accessing element at row 1, column 2
const element = grid[1][2]; // 6
\`\`\`

TBD

## Understanding Array Dimensions

When working with 2D arrays, it's important to understand their dimensions:

- **Number of rows**: The length of the outer array
- **Number of columns**: The length of each inner array (assuming uniform dimensions)

\`\`\`javascript
const grid = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12]
];

const rows = grid.length; // 3
const columns = grid[0].length; // 4
\`\`\`

TBD

## Bounds Checking

Bounds checking is crucial to prevent "index out of bounds" errors when accessing array elements.

### Why Bounds Checking Matters
- Prevents runtime errors
- Ensures algorithms work correctly at grid edges
- Handles edge cases properly

### Common Bounds Checking Pattern
\`\`\`javascript
function isValidCell(grid, row, col) {
  return (
    row >= 0 && 
    row < grid.length && 
    col >= 0 && 
    col < grid[0].length
  );
}

// Usage
if (isValidCell(grid, row, col)) {
  // Safe to access grid[row][col]
}
\`\`\`

TBD

## Traversing 2D Arrays

There are several common patterns for traversing 2D arrays:

### Row-Major Traversal
\`\`\`javascript
function traverseRowMajor(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      // Process grid[i][j]
      console.log(grid[i][j]);
    }
  }
}
\`\`\`

### Column-Major Traversal
\`\`\`javascript
function traverseColumnMajor(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  
  for (let j = 0; j < cols; j++) {
    for (let i = 0; i < rows; i++) {
      // Process grid[i][j]
      console.log(grid[i][j]);
    }
  }
}
\`\`\`

TBD

## Handling Irregular Grids

Not all 2D arrays have uniform dimensions. In JavaScript, each row can have a different length, creating a "jagged" array.

\`\`\`javascript
const jaggedGrid = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8, 9]
];

// Safe traversal of jagged array
function traverseJagged(grid) {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      console.log(grid[i][j]);
    }
  }
}
\`\`\`

TBD

## Common Pitfalls and Solutions

### Pitfall 1: Forgetting Bounds Checks
- **Problem**: Accessing invalid indices causes runtime errors
- **Solution**: Always validate indices before access

### Pitfall 2: Row/Column Confusion
- **Problem**: Mixing up row and column indices
- **Solution**: Use consistent naming (row/i, col/j) and order

### Pitfall 3: Off-by-One Errors
- **Problem**: Incorrect loop boundaries
- **Solution**: Double-check loop conditions, use inclusive/exclusive bounds consistently

TBD`,
  exercise: null
};