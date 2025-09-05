function findClosestElement(arr, target) {
  if (arr.length === 0) {
    return -1;
  }
  
  // If target is less than the smallest element
  if (target <= arr[0]) {
    return 0;
  }
  
  // If target is greater than the largest element
  if (target >= arr[arr.length - 1]) {
    return arr.length - 1;
  }
  
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    
    // Found exact match
    if (arr[mid] === target) {
      return mid;
    }
    
    // If target is less than mid, search left half
    if (arr[mid] > target) {
      right = mid - 1;
    }
    // If target is greater than mid, search right half
    else {
      left = mid + 1;
    }
  }
  
  // At this point, left > right
  // Compare the closest elements on both sides
  if (Math.abs(arr[left] - target) < Math.abs(arr[right] - target)) {
    return left;
  } else {
    return right;
  }
}

// Example
const array = [1, 3, 5, 7, 9];
console.log(array[findClosestElement(array, 4)]); // Output: 3 or 5
console.log(array[findClosestElement(array, 6)]); // Output: 5 or 7