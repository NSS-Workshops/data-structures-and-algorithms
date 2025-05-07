export const comparingComplexitiesChapter = {
  id: 'comparing-complexities',
  title: 'Comparing Common Complexities',
  sectionId: 'algorithmic-thinking',
  previousChapterId: 'big-o-notation',
  content: `## Comparing Common Complexities

Understanding how different time and space complexities compare is essential for algorithm analysis and optimization. This chapter explores the most common complexity classes and their practical implications.

TBD

## O(1) - Constant Time

Constant time algorithms perform the same number of operations regardless of input size.

- **Characteristics**: Execution time remains constant regardless of input size
- **Examples**: Array access by index, hash table insertion/lookup (average case)
- **When it's good**: Ideal for operations that need to be extremely fast
- **Real-world analogy**: Finding a book on your desk when you know exactly where it is

TBD

## O(log n) - Logarithmic Time

Logarithmic time algorithms reduce the problem size by a factor (usually 2) with each step.

- **Characteristics**: Execution time grows very slowly as input size increases
- **Examples**: Binary search, balanced binary tree operations
- **When it's good**: Excellent for large datasets where linear search would be too slow
- **Real-world analogy**: Finding a word in a dictionary using divide-and-conquer approach

TBD

## O(n) - Linear Time

Linear time algorithms process each input element exactly once.

- **Characteristics**: Execution time grows linearly with input size
- **Examples**: Array traversal, linear search
- **When it's good**: Efficient for processing all elements once
- **Real-world analogy**: Reading every page in a book from start to finish

TBD

## O(n log n) - Linearithmic Time

Linearithmic algorithms combine linear and logarithmic behaviors.

- **Characteristics**: More efficient than quadratic but slower than linear
- **Examples**: Efficient sorting algorithms (merge sort, quicksort, heapsort)
- **When it's good**: Often the best possible time complexity for sorting-related problems
- **Real-world analogy**: Sorting a deck of cards using an efficient strategy

TBD

## O(n²) - Quadratic Time

Quadratic time algorithms process each element in relation to every other element.

- **Characteristics**: Execution time grows with the square of the input size
- **Examples**: Nested loops, bubble sort, insertion sort
- **When it's good**: Acceptable for small inputs, but problematic for large datasets
- **Real-world analogy**: Checking every possible pair in a group of people

TBD

## Complexity Comparison Chart

| Complexity | 10 elements | 100 elements | 1000 elements |
|------------|-------------|--------------|---------------|
| O(1)       | 1           | 1            | 1             |
| O(log n)   | ~3          | ~7           | ~10           |
| O(n)       | 10          | 100          | 1,000         |
| O(n log n) | ~30         | ~700         | ~10,000       |
| O(n²)      | 100         | 10,000       | 1,000,000     |

TBD

## Practical Considerations

When analyzing algorithm complexity:

- Constants matter in practice, even if they're dropped in Big-O notation
- Lower complexity doesn't always mean faster for small inputs
- Consider both average and worst-case scenarios
- Space complexity is increasingly important in memory-constrained environments
- The specific use case should guide algorithm selection

TBD`,
  exercise: null
};