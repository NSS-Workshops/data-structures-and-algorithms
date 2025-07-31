// Method 1: Use literal notation to create a 3x3 matrix representing the placement of the numbers 1-9 on a telephone dialpad
const createPhoneLayout = () => {
    const phoneLayout = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ];
    return phoneLayout;
}

// Method 2: use Array.from() to create a 2D array of heart emojis. It should return a 2D array with the appropriate number of columns and rows, with '❤️' as the value for each element
const createLoveArray = (width, height) => {
    const allHearts = Array.from({ length: height }, () => Array(width).fill('❤️'));
    return allHearts;
};

// Method 3: Using loops, create a checkerboard pattern of the specified size, with the values '⬛' and '⬜', alternating.
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

// Utility function to print any 2D array. Note the use of the array functions .forEach and .join
const print2DArray = (array, title) => {
    console.log(title);
    array.forEach(row => console.log(row.join(' ')));
};


// Create and print a phone layout
const dialpad = createPhoneLayout();
print2DArray(dialpad, 'Phone Layout');

// Create and print a 10x10 checkerboard
const checkerboard = createCheckerboard(10,10);
print2DArray(checkerboard, 'Checkerboard Pattern');

// Create and print a grid of hearts
const loveArray = createLoveArray(12,6);
print2DArray(loveArray, 'Love Array');