export const glossaryChapter = {
  id: 'sorting-and-binary-search-glossary',
  title: 'Glossary: Sorting and Binary Search',
  sectionId: 'sorting-and-binary-search',
  previousChapterId: 'binary-search-variants',
  content: `## Glossary: Sorting and Binary Search

This glossary contains important terms and concepts related to sorting algorithms and binary search. Understanding these terms will help you communicate effectively about algorithms and data structures during interviews and technical discussions.

| Term | Definition | Week |
|------|------------|------|
| Algorithm | A step-by-step procedure or set of rules designed to perform a specific task or solve a particular problem. | 1 |
| Data Structure | A specialized format for organizing, processing, retrieving and storing data to suit a specific purpose. | 1 |
| Time Complexity | A measure of the amount of time an algorithm takes to complete as a function of the length of the input. | 1 |
| Space Complexity | A measure of the amount of memory an algorithm uses as a function of the length of the input. | 1 |
| Big O Notation | A mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity. Used to classify algorithms according to their growth rates. | 1 |
| O(1) | Constant time complexity - the operation takes the same amount of time regardless of the input size. | 1 |
| O(log n) | Logarithmic time complexity - the operation's time increases logarithmically as the input size grows. | 1 |
| O(n) | Linear time complexity - the operation's time increases linearly with the input size. | 1 |
| O(n log n) | Linearithmic time complexity - common in efficient sorting algorithms like merge sort and heap sort. | 1 |
| O(n²) | Quadratic time complexity - often seen in algorithms with nested iterations over the data set. | 1 |
| Array | A data structure consisting of a collection of elements, each identified by an index or a key. | 2 |
| Index | A numerical value used to identify an element's position within an array (usually zero-based in JavaScript). | 2 |
| Element | A single item stored in an array. | 2 |
| Length | The number of elements in an array. | 2 |
| Two Pointers | A technique that uses two references (pointers) to traverse an array or list, often moving at different speeds or directions. | 2 |
| In-place Operation | An algorithm that transforms input using no auxiliary data structure, though a small amount of extra storage space is allowed for auxiliary variables. | 2 |
| Subarray | A contiguous sequence of elements within an array. | 2 |
| Sliding Window | A computational technique that uses a window that slides through an array to track a subset of elements. | 2 |
| 2D Array | An array of arrays, creating a matrix-like structure with rows and columns. | 3 |
| Matrix | A rectangular array of numbers, symbols, or expressions, arranged in rows and columns. | 3 |
| Linked List | A linear data structure where each element (node) contains data and a reference to the next node in the sequence. | 4 |
| Node | The basic building block of a linked list, containing data and a reference to the next node. | 4 |
| Stack | A linear data structure that follows the Last In, First Out (LIFO) principle. | 5 |
| Queue | A linear data structure that follows the First In, First Out (FIFO) principle. | 5 |
| Map | A collection of key-value pairs where each key is unique and maps to exactly one value. | 6 |
| Set | A collection of unique values with no duplicates allowed. | 6 |
| Sorting | The process of arranging elements in a specific order (usually ascending or descending). | 7 |
| Comparison Sort | A sorting algorithm that compares elements to determine their relative order. | 7 |
| Stable Sort | A sorting algorithm that preserves the relative order of equal elements. | 7 |
| Unstable Sort | A sorting algorithm that may change the relative order of equal elements. | 7 |
| In-place Sort | A sorting algorithm that requires O(1) extra space. | 7 |
| Bubble Sort | A simple comparison-based sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. O(n²) time complexity. | 7 |
| Selection Sort | A sorting algorithm that divides the input into a sorted and an unsorted region, and repeatedly selects the smallest element from the unsorted region and moves it to the sorted region. O(n²) time complexity. | 7 |
| Insertion Sort | A sorting algorithm that builds the final sorted array one item at a time by repeatedly taking the next element and inserting it into its correct position. O(n²) time complexity. | 7 |
| Merge Sort | A divide-and-conquer sorting algorithm that divides the input array into two halves, recursively sorts them, and then merges the sorted halves. O(n log n) time complexity. | 7 |
| Quick Sort | A divide-and-conquer sorting algorithm that selects a 'pivot' element and partitions the array around the pivot. O(n log n) average time complexity, O(n²) worst case. | 7 |
| Heap Sort | A comparison-based sorting algorithm that uses a binary heap data structure. O(n log n) time complexity. | 7 |
| Counting Sort | A non-comparison sorting algorithm that works by counting the number of objects that have each distinct key value. O(n + k) time complexity, where k is the range of the input. | 7 |
| Radix Sort | A non-comparison sorting algorithm that sorts data with integer keys by grouping keys by individual digits. O(nk) time complexity, where k is the number of digits. | 7 |
| Binary Search | A search algorithm that finds the position of a target value within a sorted array by repeatedly dividing the search interval in half. O(log n) time complexity. | 7 |
| Search Space | The set of all possible solutions to a problem, which is systematically reduced in binary search. | 7 |
| Mid Point | The middle element in the current search range in binary search. | 7 |
| Target | The value being searched for in binary search. | 7 |
| Lower Bound | The smallest index in a sorted array where a value greater than or equal to the target appears. | 7 |
| Upper Bound | The smallest index in a sorted array where a value greater than the target appears. | 7 |
| Rotated Sorted Array | A sorted array that has been rotated around a pivot point, often used in binary search variants. | 7 |
`,
  exercise: null
};