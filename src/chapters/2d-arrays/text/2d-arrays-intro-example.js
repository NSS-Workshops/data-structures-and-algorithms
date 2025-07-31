//For this exercise, you should write three functions that generate 2D arrays in different ways. 

const createPhoneLayout = () => {
    //TODO: Use literal notation to create a 3x3 matrix representing the placement of the numbers 1-9 on a telephone dialpad, then return that matrix
    return [];
}

const createLoveArray = (width, height) => {
    //TODO: use Array.from() and Array.fill() to create a 2D array of heart emojis. It should return a 2D array with the appropriate number of columns and rows, with '❤️' as the value for each element.
    return [];
};

const createCheckerboard = (width, height) => {
    //TODO: Using loops, create and return a checkerboard pattern of the specified size, with the values '⬛' and '⬜', alternating.
    return [];
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