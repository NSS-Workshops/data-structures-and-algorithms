import { formatGlossary } from "../../utils/format_utils";

const data = [];

const data = [
  { term: "Algorithm", definition: "A step-by-step procedure or set of rules designed to perform a specific task or solve a particular problem.", week: 1 },
  { term: "Data Structure", definition: "A specialized format for organizing, processing, retrieving and storing data to suit a specific purpose.", week: 1 },
  { term: "Time Complexity", definition: "A measure of the amount of time an algorithm takes to complete as a function of the length of the input.", week: 1 },
  { term: "Space Complexity", definition: "A measure of the amount of memory an algorithm uses as a function of the length of the input.", week: 1 },
  { term: "Big O Notation", definition: "A mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity. Used to classify algorithms according to their growth rates.", week: 1 },
  { term: "O(1)", definition: "Constant time complexity - the operation takes the same amount of time regardless of the input size.", week: 1 },
  { term: "O(log n)", definition: "Logarithmic time complexity - the operation's time increases logarithmically as the input size grows.", week: 1 },
  { term: "O(n)", definition: "Linear time complexity - the operation's time increases linearly with the input size.", week: 1 },
  { term: "O(n log n)", definition: "Linearithmic time complexity - common in efficient sorting algorithms like merge sort and heap sort.", week: 1 },
  { term: "O(n²)", definition: "Quadratic time complexity - often seen in algorithms with nested iterations over the data set.", week: 1 },
  { term: "Array", definition: "A data structure consisting of a collection of elements, each identified by an index or a key.", week: 2 },
  { term: "Index", definition: "A numerical value used to identify an element's position within an array (usually zero-based in JavaScript).", week: 2 },
  { term: "Element", definition: "A single item stored in an array.", week: 2 },
  { term: "Length", definition: "The number of elements in an array.", week: 2 },
  { term: "Two Pointers", definition: "A technique that uses two references (pointers) to traverse an array or list, often moving at different speeds or directions.", week: 2 },
  { term: "In-place Operation", definition: "An algorithm that transforms input using no auxiliary data structure, though a small amount of extra storage space is allowed for auxiliary variables.", week: 2 },
  { term: "Subarray", definition: "A contiguous sequence of elements within an array.", week: 2 },
  { term: "Sliding Window", definition: "A computational technique that uses a window that slides through an array to track a subset of elements.", week: 2 },
  { term: "2D Array", definition: "An array of arrays, creating a matrix-like structure with rows and columns.", week: 3 },
  { term: "Matrix", definition: "A rectangular array of numbers, symbols, or expressions, arranged in rows and columns.", week: 3 },
  { term: "Linked List", definition: "A linear data structure where each element (node) contains data and a reference to the next node in the sequence.", week: 4 },
  { term: "Node", definition: "The basic building block of a linked list, containing data and a reference to the next node.", week: 4 },
  { term: "Stack", definition: "A linear data structure that follows the Last In, First Out (LIFO) principle.", week: 5 },
  { term: "Queue", definition: "A linear data structure that follows the First In, First Out (FIFO) principle.", week: 5 },
  { term: "Map", definition: "A collection of key-value pairs where each key is unique and maps to exactly one value.", week: 6 },
  { term: "Set", definition: "A collection of unique values with no duplicates allowed.", week: 6 },
  { term: "Sorting", definition: "The process of arranging elements in a specific order (usually ascending or descending).", week: 7 },
  { term: "Comparison Sort", definition: "A sorting algorithm that compares elements to determine their relative order.", week: 7 },
  { term: "Stable Sort", definition: "A sorting algorithm that preserves the relative order of equal elements.", week: 7 },
  { term: "Unstable Sort", definition: "A sorting algorithm that may change the relative order of equal elements.", week: 7 },
  { term: "In-place Sort", definition: "A sorting algorithm that requires O(1) extra space.", week: 7 },
  { term: "Bubble Sort", definition: "A simple comparison-based sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. O(n²) time complexity.", week: 7 },
  { term: "Selection Sort", definition: "A sorting algorithm that divides the input into a sorted and an unsorted region, and repeatedly selects the smallest element from the unsorted region and moves it to the sorted region. O(n²) time complexity.", week: 7 },
  { term: "Insertion Sort", definition: "A sorting algorithm that builds the final sorted array one item at a time by repeatedly taking the next element and inserting it into its correct position. O(n²) time complexity.", week: 7 },
  { term: "Merge Sort", definition: "A divide-and-conquer sorting algorithm that divides the input array into two halves, sorts them, and then merges the sorted halves. O(n log n) time complexity.", week: 7 },
  { term: "Quick Sort", definition: "A divide-and-conquer sorting algorithm that selects a 'pivot' element and partitions the array around the pivot. O(n log n) average time complexity, O(n²) worst case.", week: 7 },
  { term: "Heap Sort", definition: "A comparison-based sorting algorithm that uses a binary heap data structure. O(n log n) time complexity.", week: 7 },
  { term: "Counting Sort", definition: "A non-comparison sorting algorithm that works by counting the number of objects that have each distinct key value. O(n + k) time complexity, where k is the range of the input.", week: 7 },
  { term: "Radix Sort", definition: "A non-comparison sorting algorithm that sorts data with integer keys by grouping keys by individual digits. O(nk) time complexity, where k is the number of digits.", week: 7 },
  { term: "Binary Search", definition: "A search algorithm that finds the position of a target value within a sorted array by repeatedly dividing the search interval in half. O(log n) time complexity.", week: 7 },
  { term: "Search Space", definition: "The set of all possible solutions to a problem, which is systematically reduced in binary search.", week: 7 },
  { term: "Mid Point", definition: "The middle element in the current search range in binary search.", week: 7 },
  { term: "Target", definition: "The value being searched for in binary search.", week: 7 },
  { term: "Lower Bound", definition: "The smallest index in a sorted array where a value greater than or equal to the target appears.", week: 7 },
  { term: "Upper Bound", definition: "The smallest index in a sorted array where a value greater than the target appears.", week: 7 },
  { term: "Rotated Sorted Array", definition: "A sorted array that has been rotated around a pivot point, often used in binary search variants.", week: 7 },
  { term: "Stable Sorting Algorithm", definition: "If two items are the same, they stay in the same order they were in before sorting.", week: 7 },
  { term: "Unstable Sorting Algorithm", definition: "If two items are the same, their order might change after sorting.", week: 7 }
];


export const glossaryChapter = {
  id: 'sorting-and-binary-search-glossary',
  title: 'Glossary: Sorting and Binary Search',
  sectionId: 'sorting-and-binary-search',
  previousChapterId: 'sorting-and-binary-search-supplemental-materials',
  content: `## Glossary: Sorting and Binary Search

${formatGlossary(data)}
`,
  exercise: null
};