# Sorting and Binary Search Assessment Questions

## Question 1: Binary Search Prerequisites
What are the two essential requirements for binary search to work effectively?

A) The array must be sorted and support random access (O(1) indexing)
B) The array must be sorted and contain only unique elements
C) The array must be large and stored in memory
D) The array must be numeric and have no null values

**Answer: A**

## Question 2: Binary Search Time Complexity
What is the time complexity of binary search, and why is it so efficient?

A) O(n) because it checks every element once
B) O(log n) because it eliminates half the remaining elements with each comparison
C) O(n²) because it compares elements in nested loops
D) O(1) because it finds elements instantly

**Answer: B**

## Question 3: Finding First Occurrence
When using binary search to find the FIRST occurrence of a target value in a sorted array with duplicates, what should you do when you find a match?

A) Return the index immediately since you found the target
B) Continue searching in the right half to find more occurrences
C) Save the current index as a potential result and continue searching in the left half
D) Check both left and right halves simultaneously

**Answer: C**

## Question 4: Insertion Point Binary Search
What does the "insertion point" variant of binary search help you find?

A) The exact location where a duplicate element exists
B) The position where a new element should be inserted to maintain sorted order
C) The middle element of any array
D) The last occurrence of a target element

**Answer: B**

## Question 5: JavaScript sort() Method Default Behavior
What happens when you call `array.sort()` on an array of numbers like `[1.99, 15.99, 100.99, 20.99, 3.99]` without providing a comparator function?

A) It sorts numerically: `[1.99, 3.99, 15.99, 20.99, 100.99]`
B) It sorts as strings: `[1.99, 100.99, 15.99, 20.99, 3.99]`
C) It throws an error because numbers need a comparator
D) It returns the array unchanged

**Answer: B**

## Question 6: Comparator Function Return Values
In a JavaScript comparator function `(a, b) => { ... }`, what should you return if element `a` should come BEFORE element `b` in the sorted order?

A) A positive number (greater than 0)
B) Zero (0)
C) A negative number (less than 0)
D) The boolean value `true`

**Answer: C**

## Question 7: Sorting Algorithm Characteristics
Which sorting algorithm has O(n log n) time complexity in ALL cases (best, average, and worst) and is stable (preserves relative order of equal elements)?

A) Bubble Sort
B) Selection Sort
C) Merge Sort
D) Quick Sort

**Answer: C**

## Question 8: Multi-level Sorting Strategy
When implementing multi-level sorting (e.g., sort by artist, then by year within each artist), what is the correct approach in your comparator function?

A) Always sort by the primary criterion only
B) Compare the primary criterion first; if equal, then compare the secondary criterion
C) Sort by secondary criterion first, then primary criterion
D) Use separate sort() calls for each criterion

**Answer: B**

---

## Answer Key Summary:
1. A - Binary search requires sorted array with random access
2. B - O(log n) complexity due to halving search space
3. C - Save result and continue searching left for first occurrence
4. B - Insertion point finds where to insert new element
5. B - Default sort() converts to strings, causing unexpected numeric ordering
6. C - Return negative value when first element should come before second
7. C - Merge sort has consistent O(n log n) and is stable
8. B - Multi-level sorting compares primary first, then secondary if equal