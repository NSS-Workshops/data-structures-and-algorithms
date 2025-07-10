// Method 1: Literal Notation - Creating a simple maze layout
const createSimpleMaze = () => {
    const simpleMaze = [
        ['S', '#', ' ', ' '],
        [' ', '#', '#', ' '],
        [' ', ' ', ' ', ' '],
        ['#', '#', '#', 'E']
    ];
    return simpleMaze;
}


// Method 2: Array.from() - Creating a uniform matrix
const createLoveArray = (width, height) => {
    const allHearts = Array.from({ length: height }, () => Array(width).fill('❤️'));
    return allHearts;
};

// Method 3: Using loops - Creating a checkerboard pattern
const createCheckerboard = (width, height) => {
    const board = [];
    for (let i = 0; i < height; i++) {
        board[i] = [];
        for (let j = 0; j < width; j++) {
            board[i][j] = (i + j) % 2 === 0 ? '⬛' : '⬜';
        }
    }
    return board;
};

// Demonstrating row-wise vs column-wise traversal performance
const measureTraversalPerformance = (matrix) => {
    console.log('\nPerformance Test:');
    
    // Row-wise traversal
    let startTime = Date.now();
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            const element = matrix[i][j];
        }
    }
    let endTime = Date.now();
    console.log(`Row-wise traversal: ${endTime - startTime}ms`);

    // Column-wise traversal
    startTime = Date.now();
    for (let j = 0; j < matrix[0].length; j++) {
        for (let i = 0; i < matrix.length; i++) {
            const element = matrix[i][j];
        }
    }
    endTime = Date.now();
    console.log(`Column-wise traversal: ${endTime - startTime}ms`);
};

// Utility function to print any 2D array
const print2DArray = (array, title) => {
    console.log(`\n${title}:`);
    array.forEach(row => console.log(row.join(' ')));
};


// Print the simple maze
const simpleMaze = createSimpleMaze();
print2DArray(simpleMaze, 'Simple Maze');

// Create and print a 5x5 checkerboard
const checkerboard = createCheckerboard(10,10);
print2DArray(checkerboard, 'Checkerboard Pattern');

const loveArray = createLoveArray(12,6);
print2DArray(loveArray, 'Love Array');

// Demonstrate performance difference with a larger matrix
const largeMatrix = Array.from({ length: 10000 }, () => Array(10000).fill(0));
measureTraversalPerformance(largeMatrix);