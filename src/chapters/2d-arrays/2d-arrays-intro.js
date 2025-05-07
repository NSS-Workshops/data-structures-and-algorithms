export const twoDArraysIntroChapter = {
  id: '2d-arrays-intro',
  title: 'Introduction to 2D Arrays',
  sectionId: '2d-arrays',
  previousChapterId: null,
  content: `## Introduction to 2D Arrays

Two-dimensional (2D) arrays, also known as matrices, are arrays of arrays. They represent data in a grid-like structure with rows and columns, making them ideal for representing tabular data, game boards, images, and other grid-based structures.

TBD

## Structure of 2D Arrays

A 2D array can be visualized as a table with rows and columns:

\`\`\`
    Col 0  Col 1  Col 2
Row 0  [0,0]  [0,1]  [0,2]
Row 1  [1,0]  [1,1]  [1,2]
Row 2  [2,0]  [2,1]  [2,2]
\`\`\`

In JavaScript, 2D arrays are implemented as arrays of arrays:

\`\`\`javascript
const grid = [
  [1, 2, 3],  // Row 0
  [4, 5, 6],  // Row 1
  [7, 8, 9]   // Row 2
];
\`\`\`

TBD

## Creating 2D Arrays

There are several ways to create 2D arrays in JavaScript:

### Method 1: Literal Notation
\`\`\`javascript
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
\`\`\`

### Method 2: Using Array.from()
\`\`\`javascript
const rows = 3;
const cols = 4;
const matrix = Array.from({ length: rows }, () => Array(cols).fill(0));
// Creates a 3x4 matrix filled with zeros
\`\`\`

### Method 3: Using Loops
\`\`\`javascript
const rows = 3;
const cols = 3;
const matrix = [];

for (let i = 0; i < rows; i++) {
  matrix[i] = [];
  for (let j = 0; j < cols; j++) {
    matrix[i][j] = i * cols + j + 1;
  }
}
// Creates a 3x3 matrix with values 1 through 9
\`\`\`

TBD

## Common Applications of 2D Arrays

2D arrays are versatile data structures used in many applications:

### Game Development
- Chess/checkers boards
- Tile-based games (Tetris, Minesweeper)
- Collision detection grids

### Image Processing
- Pixel manipulation
- Filters and transformations
- Computer vision algorithms

### Scientific Computing
- Matrices for linear algebra
- Data tables for statistical analysis
- Simulation grids (cellular automata, fluid dynamics)

### Graph Algorithms
- Adjacency matrices
- Distance matrices
- State transition tables

TBD

## Performance Considerations

When working with 2D arrays, keep in mind:

- **Memory usage**: A 1000×1000 array of integers requires significant memory
- **Cache locality**: Accessing elements in row-major order is typically faster due to memory layout
- **Jagged arrays**: In JavaScript, rows can have different lengths (unlike some other languages)
- **Pass by reference**: Modifying a 2D array passed to a function changes the original array

TBD`,
  exercise: null
};