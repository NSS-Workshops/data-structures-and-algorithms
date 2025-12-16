//For this exercise, complete a function that demonstrates the difference between row and column traversal

// Demonstrating row-wise vs column-wise traversal performance by logging the time for each
const measureTraversalPerformance = (matrix) => {
    console.log('----- Performance Test: -----');
    let placeholder = 0;

    let startTime = Date.now();
    //TODO: Traverse the specified matrix by rows, then by columns within each row. With each element, set placeholder to that element's value
    let endTime = Date.now();
    console.log(`Row-wise traversal: ${endTime - startTime}ms`);

    // Column-wise traversal
    startTime = Date.now();
    //TODO: Traverse the specified matrix by columns, then by row within each column. With each element, set placeholder to that element's value
    endTime = Date.now();
    console.log(`Column-wise traversal: ${endTime - startTime}ms`);
};

// Utility function to print any 2D array. Note the use of the array functions .forEach and .join
const print2DArray = (array, title) => {
    console.log(title);
    array.forEach(row => console.log(row.join(' ')));
};

// Demonstrate performance difference with a large matrix
const largeMatrix = Array.from({ length: 10000 }, () => Array(10000).fill(0));
measureTraversalPerformance(largeMatrix);