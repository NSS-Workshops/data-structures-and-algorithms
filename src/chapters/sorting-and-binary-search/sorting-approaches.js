export const sortingApproachesChapter = {
  id: 'sorting-approaches',
  title: 'Common Sorting Approaches: Bubble, Selection, Merge',
  sectionId: 'sorting-and-binary-search',
  previousChapterId: null,
  content: `## Common Sorting Approaches

Sorting is a fundamental operation in computer science that arranges elements in a specific order. This chapter provides an overview of common sorting algorithms, focusing on bubble sort, selection sort, and merge sort.

TBD

## Why Sorting Matters

Sorting is essential for many reasons:

- It makes searching more efficient (enabling binary search)
- It simplifies problems like finding duplicates or merging datasets
- It's a prerequisite for many algorithms and data structures
- It helps in data analysis and visualization
- It's a common interview topic that tests algorithmic thinking

TBD

## Bubble Sort

Bubble sort is one of the simplest sorting algorithms. It repeatedly steps through the list, compares adjacent elements, and swaps them if they're in the wrong order.

### Implementation

\`\`\`javascript
function bubbleSort(arr) {
  const n = arr.length;
  
  for (let i = 0; i < n; i++) {
    // Flag to optimize if array is already sorted
    let swapped = false;
    
    // Last i elements are already in place
    for (let j = 0; j < n - i - 1; j++) {
      // Compare adjacent elements
      if (arr[j] > arr[j + 1]) {
        // Swap them if they are in the wrong order
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    
    // If no swapping occurred in this pass, array is sorted
    if (!swapped) break;
  }
  
  return arr;
}
\`\`\`

### Characteristics

- **Time Complexity**: O(n²) in worst and average cases, O(n) in best case (already sorted)
- **Space Complexity**: O(1) (in-place sorting)
- **Stability**: Stable (preserves the relative order of equal elements)
- **Adaptivity**: Adaptive (performs better on partially sorted arrays)
- **Use Cases**: Educational purposes, small arrays, nearly sorted data

TBD

## Selection Sort

Selection sort divides the input into a sorted and an unsorted region. It repeatedly selects the smallest (or largest) element from the unsorted region and moves it to the sorted region.

### Implementation

\`\`\`javascript
function selectionSort(arr) {
  const n = arr.length;
  
  for (let i = 0; i < n - 1; i++) {
    // Find the minimum element in the unsorted part
    let minIndex = i;
    
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    
    // Swap the found minimum element with the first element
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  
  return arr;
}
\`\`\`

### Characteristics

- **Time Complexity**: O(n²) in all cases
- **Space Complexity**: O(1) (in-place sorting)
- **Stability**: Not stable (can change the relative order of equal elements)
- **Adaptivity**: Not adaptive (performs the same regardless of initial order)
- **Use Cases**: Small arrays, situations where memory writes are expensive

TBD

## Merge Sort

Merge sort is a divide-and-conquer algorithm that divides the input array into two halves, recursively sorts them, and then merges the sorted halves.

### Implementation

\`\`\`javascript
function mergeSort(arr) {
  // Base case: arrays with 0 or 1 element are already sorted
  if (arr.length <= 1) {
    return arr;
  }
  
  // Divide the array into two halves
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  
  // Recursively sort both halves
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  
  // Compare elements from both arrays and add the smaller one to the result
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  
  // Add remaining elements from either array
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
\`\`\`

### Characteristics

- **Time Complexity**: O(n log n) in all cases
- **Space Complexity**: O(n) (not in-place)
- **Stability**: Stable
- **Adaptivity**: Not adaptive
- **Use Cases**: General-purpose sorting, external sorting, when stability is needed

TBD

## Comparison of Sorting Algorithms

| Algorithm | Time Complexity (Best) | Time Complexity (Average) | Time Complexity (Worst) | Space Complexity | Stable | Adaptive |
|-----------|------------------------|---------------------------|-------------------------|------------------|--------|----------|
| Bubble Sort | O(n) | O(n²) | O(n²) | O(1) | Yes | Yes |
| Selection Sort | O(n²) | O(n²) | O(n²) | O(1) | No | No |
| Merge Sort | O(n log n) | O(n log n) | O(n log n) | O(n) | Yes | No |
| Quick Sort* | O(n log n) | O(n log n) | O(n²) | O(log n) | No | No |
| Insertion Sort* | O(n) | O(n²) | O(n²) | O(1) | Yes | Yes |
| Heap Sort* | O(n log n) | O(n log n) | O(n log n) | O(1) | No | No |

*Not covered in detail in this chapter

TBD

## Choosing the Right Sorting Algorithm

The best sorting algorithm depends on several factors:

- **Input size**: For small arrays, simple algorithms like insertion sort may be faster
- **Memory constraints**: In-place algorithms are better when memory is limited
- **Stability requirements**: Some applications require preserving the order of equal elements
- **Data characteristics**: Nearly sorted data? Many duplicates? Random distribution?
- **External factors**: Hardware considerations, language implementations

TBD

## Sorting in JavaScript

JavaScript provides a built-in \`Array.prototype.sort()\` method, which we'll explore in the next chapter. The implementation varies by browser but is typically a hybrid algorithm like Timsort (a combination of merge sort and insertion sort) or QuickSort.

TBD`,
  exercise: null
};