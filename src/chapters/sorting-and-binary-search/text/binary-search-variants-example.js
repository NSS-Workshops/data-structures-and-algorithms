function findClosestElement(arr, target) {

  //if the array is empty, return -1
  
  // If target is less than the smallest element, return zero

  // If target is greater than the largest element, return the index of the last element
  
  //set left to 0 and right to the index of the last element
  
  //while left is less than or equal to right...
  
    //find the midpoint index
    //if this is an exact match, return this index
    
    // If target is less than element at midpoint, set right to just below mid to search left half
    
    // otherwise, set left to just above midpoint to search right half\

  //end while loop
  
  
  // At this point, left > right
  // Compare the closest elements on both sides and return whichever is closer (absolute value of the difference)
  
}

// Example
const array = [1, 3, 5, 7, 9];
console.log(array[findClosestElement(array, 4)]); // Output: 3 or 5
console.log(array[findClosestElement(array, 6)]); // Output: 5 or 7