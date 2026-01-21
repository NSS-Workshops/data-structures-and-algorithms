## Binary Search Operations (Sorted Arrays Only)

| **Operation**          | **Description**                       | **Big O (Time)** |
| ---------------------- | ------------------------------------- | ---------------- |
| **Search**             | Find target value in sorted array    | O(log n)         |
| **Find First**         | Find first occurrence of target      | O(log n)         |
| **Find Last**          | Find last occurrence of target       | O(log n)         |
| **Find Insert Position** | Find where to insert to keep sorted | O(log n)         |
| **Range Search**       | Find all elements in range [a, b]    | O(log n + k)*    |

*k is the number of elements in the range

## Common Sorting Algorithms

| **Algorithm**          | **Best Case**    | **Average Case** | **Worst Case**   | **Space**        | **In Place?**    |
| ---------------------- | ---------------- | ---------------- | ---------------- | ---------------- | ---------------- |
| **Bubble Sort**        | O(n)             | O(n²)            | O(n²)            | O(1)             | Yes              |
| **Selection Sort**     | O(n²)            | O(n²)            | O(n²)            | O(1)             | Yes              |
| **Insertion Sort**     | O(n)             | O(n²)            | O(n²)            | O(1)             | Yes              |
| **Merge Sort**         | O(n log n)       | O(n log n)       | O(n log n)       | O(n)             | No               |
| **Quick Sort**         | O(n log n)       | O(n log n)       | O(n²)            | O(log n)         | Yes              |
| **Heap Sort**          | O(n log n)       | O(n log n)       | O(n log n)       | O(1)             | Yes              |
| **JavaScript .sort()** | O(n log n)       | O(n log n)       | O(n log n)       | O(log n)         | Yes              |

## Key Insights

### Binary Search Requirements
- **Sorted Data**: Array must be sorted before searching
- **Random Access**: Requires ability to access middle elements efficiently
- **Divide and Conquer**: Eliminates half of search space each iteration

### Binary Search Process
1. Compare target with middle element
2. If equal, found the target
3. If target is smaller, search left half
4. If target is larger, search right half
5. Repeat until found or search space is empty

### Sorting Considerations
- **Stability**: Does algorithm preserve relative order of equal elements?
- **In-place**: Does algorithm sort without extra memory?
- **Adaptive**: Does algorithm perform better on partially sorted data?

## Space Complexity
- **Binary Search**: O(1)
- **Sorting**: Varies by algorithm (see table above)

## When to Use Binary Search
✅ **Good for:**
- Searching in large sorted datasets
- Finding insertion points
- Range queries on sorted data
- When you need O(log n) search performance

❌ **Requirements:**
- Data must be sorted first
- Need random access to elements
- Sorting cost must be justified by multiple searches

## When to Use Different Sorts
✅ **Merge Sort**: Stable sort needed, guaranteed O(n log n)
✅ **Quick Sort**: Average case performance, in-place sorting
✅ **Insertion Sort**: Small datasets, nearly sorted data
✅ **Heap Sort**: Guaranteed O(n log n), constant space
✅ **JavaScript .sort()**: General purpose, optimized implementation

❌ **Avoid Bubble/Selection Sort**: Generally inefficient for large datasets