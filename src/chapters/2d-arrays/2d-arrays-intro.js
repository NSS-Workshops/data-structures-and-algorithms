export const twoDArraysIntroChapter = {
  id: '2d-arrays-intro',
  title: 'Introduction to 2D Arrays',
  sectionId: '2d-arrays',
  previousChapterId: '2d-arrays-learning-objectives',
  content: `## Introduction to 2D Arrays

Let's dive into one of the most fascinating data structures you'll encounter in programming - two-dimensional arrays. Think of them as a digital spreadsheet or a game board where you can organize data in rows and columns. Pretty neat, right?

When we talk about a 2D array (also known as a matrix, in mathematical contexts), we're really just talking about an array of arrays. This structure iss perfect for representing two dimensional grids, or organizing data in rows and columns. If you're creating a game of Tic-tac-toe or planning out a seating chart for a wedding, these are perfect real-world examples of where 2D arrays shine.

## Structure of 2D Arrays

Let's break down how 2D arrays work in a way that's easy to visualize. Here's what it looks like. In particular, consider the row and column coordinates shown, and note that these are zero-indexed.

\`\`\`
       Col 0  Col 1  Col 2
Row 0  [0,0]  [0,1]  [0,2]
Row 1  [1,0]  [1,1]  [1,2]
Row 2  [2,0]  [2,1]  [2,2]
\`\`\`

In JavaScript, we create these grid-like structures using arrays nested within arrays. Each inner array represents a row, and each element within those arrays represents a value within a column. Here's how we write it in code:

\`\`\`javascript
const grid = [
  [1, 2, 3],  // Row 0
  [4, 5, 6],  // Row 1
  [7, 8, 9]   // Row 2
];
\`\`\`

Think of it like building a digital apartment complex: each array is a floor (row), and each element is a room. Just as you'd locate an apartment using floor and room numbers, you access elements in a 2D array using row and column indices.

## Creating 2D Arrays

There are several ways to create 2D arrays in JavaScript, and I'll walk you through each one with some friendly examples:

### Method 1: Literal Notation
This is the most straightforward way - you just write out your array exactly as you want it. This is useful for setting up a small, simple array. You just list all the contents, comma separated within square brackets (as we always do when defining an array). But here, each of the items in that array is an array, with its own elements separated by commas. It's not necessary to write it out on mulitple lines like this, but that does make it easier to read and understand:

\`\`\`javascript
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
\`\`\`

### Method 2: Using Array.from()
This method is handy and elegant when you need to create a grid of a specific size, with all elements set to the same value. It's like priming a blank canvas. This example creates a 3x4 matrix filled with zeros. This approach can be perfect for game boards or initial states:

\`\`\`javascript
const rows = 3;
const cols = 4;
const matrix = Array.from({ length: rows }, () => Array(cols).fill(0));
\`\`\`

### Method 3: Using Loops
Often, you will need more control over how your array is populated. Using nested loops gives you that flexibility. You iterate through the rows, and then address each element by iterating through the columns within that row. Think of it like cleaning a hotel. You focus on one floor at a time, starting on the first floor. Once you get out of the elevator on a floor, you roll your cart down the hall and stop at each room, one at a time. When you're done, you do the same thing on the next floor.

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

## Common Applications of 2D Arrays

2D arrays are used in lots of ways 

### Game Development
- Chess/checkers and other board games: Perfect for representing the game state
- Tile-based games: Games like Minecraft or Tetris - each block in the game world is a cell in a 2D array
- Collision detection grids: Modeling physics and interactions in a two-dimensional space

### Image Processing
- Pixel manipulation: Each pixel in an image can be represented as an element in a 2D array
- Filters and transformations: Algorithmic image manipulation to stylize pictures
- Computer vision algorithms: Create logic for a computers understand graphical content

### Scientific Computing
- Matrices for linear algebra: Essential for 3D graphics and machine learning
- Data tables for statistical analysis: Organize your research data efficiently
- Simulation grids: Model everything from weather patterns to population growth

### Graph Algorithms
- Adjacency matrices: Map connections between points in a network
- Distance matrices: Calculate shortest paths between locations
- State transition tables: Model how systems change over time

## Performance Considerations

Here are some important concepts to keep in mind when working with 2D arrays:

- **Memory usage**: Just like renting a huge apartment, a large 2D array takes up significant memory. An array with 10,000 elements is very manageable. A 10,000x10,000 2D array has 100 million elements, which can be very unwieldy.

- **Cache locality**: Accessing elements row by row is usually faster than column by column. It's like reading a book - going line by line is more efficient than reading all the first words, then all the second words, etc.

- **Jagged arrays**: Unlike some other languages, JavaScript lets you have rows of different lengths. While this flexibility is nice, it can make some operations trickier to handle, and make behavior unpredictable

- **Passing by reference**: When you pass a 2D array to a function, you're giving it the keys to your apartment - any changes it makes affect the original array. This can be powerful but requires careful handling!

Remember, choosing the right tool for the job is crucial in programming. 2D arrays are fantastic for grid-based data, but they might not be the best choice for every situation. Consider your needs and constraints when deciding whether to use a 2D array in your project.`,

  exercise: {
    question: `
# Exercise Question
    `,
    starterCode: `
//your code goes here
const myFunction = (input)=>{
  return "fail"; // <- make this return this instead: imput+" success"
} //end myFunction
    `,
    solution: `
console.log("Solved")
    `,
    tests: [
      {
        name: "Arbitrary Test",
        test: function(code) {
          try {
            const x = 3;
            
            return {
              passed: x >= 5,
              messages: [
                "Unfortunately, " + x + " is less than 5",
                x >= 5 ?
                  "Less than five" :
                  "OK"
              ]
            };
          } catch (error) {
            return {
              passed: false,
              messages: ["Error analyzing clarifying questions: " + error.message]
            };
          }
        },
        message: "Arbitrary Test Failed"
      },
      {
        name: "Implementation Correctness",
        test: function(code) {
          try {
            const functionStart = code.indexOf("const myFunction = ()=>{");
            const functionEnd = code.indexOf("} //end myFunction", functionStart);
            
            if (functionStart === -1) {
              return {
                passed: false,
                messages: ["Could not find myFunction function"]
              };
            }
            
            const functionCode = code.substring(
              functionStart,
              functionEnd !== -1 ? functionEnd : undefined
            );
            
            const runFunction = new Function(functionCode)();
            
            const testCases = [
              {
                arg: "hello",
                expected: "hello success"
              }
            ];
            
            const results = testCases.map(tc => {
              const result = runFunction(tc.arg);
              const isCorrect = result == tc.expected;
              return {
                passed: isCorrect,
                message: isCorrect ?
                  "implemented Correctly" :
                  "incorrect!"
              };
            });
            
            const allPassed = results.every(r => r.passed);
            
            return {
              passed: allPassed,
              messages: results.map(r => r.message)
            };
          } catch (error) {
            return {
              passed: false,
              messages: ["Error testing implementation: " + error.message]
            };
          }
        },
        message: "incorrect!!!!"
      }
    ],
    hints: [
      "hint 1",
      "hint 2",
      "hint 3",
    ],
    solution_explanation: `
# Solution Explanation
it goes like this
    `
  }
};