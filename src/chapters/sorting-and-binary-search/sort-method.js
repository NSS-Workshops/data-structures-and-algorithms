export const sortMethodChapter = {
  id: 'sort-method',
  title: 'Using .sort() with Comparators',
  sectionId: 'sorting-and-binary-search',
  previousChapterId: 'sorting-approaches',
  content: `## Using .sort() with Comparators

JavaScript provides a built-in \`Array.prototype.sort()\` method that makes sorting arrays convenient. This chapter explores how to use this method effectively, particularly with custom comparator functions.

TBD

## Basic Usage of sort()

The \`sort()\` method sorts the elements of an array in place and returns the sorted array:

\`\`\`javascript
const numbers = [3, 1, 4, 1, 5, 9, 2, 6];
numbers.sort();
console.log(numbers); // [1, 1, 2, 3, 4, 5, 6, 9]

const fruits = ['banana', 'apple', 'orange', 'grape'];
fruits.sort();
console.log(fruits); // ['apple', 'banana', 'grape', 'orange']
\`\`\`

TBD

## The Default Sorting Behavior

By default, the \`sort()\` method converts elements to strings and sorts them based on UTF-16 code units. This leads to some unexpected results:

\`\`\`javascript
const numbers = [1, 5, 10, 20, 3, 100];
numbers.sort();
console.log(numbers); // [1, 10, 100, 20, 3, 5]
\`\`\`

The result is not numerically sorted because the numbers are converted to strings first, so "10" comes before "5" in lexicographical order.

TBD

## Using Comparator Functions

To customize the sorting behavior, you can provide a comparator function:

\`\`\`javascript
const numbers = [1, 5, 10, 20, 3, 100];

// Sort numbers in ascending order
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 3, 5, 10, 20, 100]

// Sort numbers in descending order
numbers.sort((a, b) => b - a);
console.log(numbers); // [100, 20, 10, 5, 3, 1]
\`\`\`

TBD

## How Comparator Functions Work

A comparator function takes two arguments (let's call them a and b) and returns:
- A negative value if a should come before b
- A positive value if a should come after b
- Zero if a and b are equal in terms of sorting order

\`\`\`javascript
function compareNumbers(a, b) {
  if (a < b) {
    return -1; // a comes before b
  }
  if (a > b) {
    return 1;  // a comes after b
  }
  return 0;    // a and b are equal
}

// Simplified version
function compareNumbers(a, b) {
  return a - b;
}
\`\`\`

TBD

## Sorting Objects by Property

When sorting arrays of objects, you'll typically sort based on a specific property:

\`\`\`javascript
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 20 },
  { name: 'David', age: 35 }
];

// Sort by age (ascending)
people.sort((a, b) => a.age - b.age);
console.log(people);
// [
//   { name: 'Charlie', age: 20 },
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'David', age: 35 }
// ]

// Sort by name (alphabetically)
people.sort((a, b) => a.name.localeCompare(b.name));
console.log(people);
// [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 20 },
//   { name: 'David', age: 35 }
// ]
\`\`\`

TBD

## Sorting Strings with localeCompare()

For string comparisons, especially with international characters, use \`String.prototype.localeCompare()\`:

\`\`\`javascript
const names = ['Émilie', 'Zoe', 'Ángel', 'Adam', 'ñandu'];

// Basic sort (may not handle accents correctly)
names.sort();
console.log(names); // ['Adam', 'Zoe', 'Ángel', 'Émilie', 'ñandu']

// Using localeCompare for proper internationalization
names.sort((a, b) => a.localeCompare(b));
console.log(names); // ['Adam', 'Ángel', 'Émilie', 'ñandu', 'Zoe']
\`\`\`

TBD

## Multi-Level Sorting

Sometimes you need to sort by multiple criteria:

\`\`\`javascript
const students = [
  { name: 'Alice', grade: 'A', age: 22 },
  { name: 'Bob', grade: 'B', age: 20 },
  { name: 'Charlie', grade: 'A', age: 21 },
  { name: 'David', grade: 'B', age: 20 }
];

// Sort by grade, then by age
students.sort((a, b) => {
  // First, compare by grade
  if (a.grade !== b.grade) {
    return a.grade.localeCompare(b.grade);
  }
  
  // If grades are equal, compare by age
  return a.age - b.age;
});

console.log(students);
// [
//   { name: 'Charlie', grade: 'A', age: 21 },
//   { name: 'Alice', grade: 'A', age: 22 },
//   { name: 'David', grade: 'B', age: 20 },
//   { name: 'Bob', grade: 'B', age: 20 }
// ]
\`\`\`

TBD

## Stable vs. Unstable Sorting

A stable sort preserves the relative order of equal elements. JavaScript's \`sort()\` is required to be stable as of ES2019:

\`\`\`javascript
const items = [
  { id: 1, value: 'B' },
  { id: 2, value: 'A' },
  { id: 3, value: 'B' },
  { id: 4, value: 'A' }
];

// Sort by value
items.sort((a, b) => a.value.localeCompare(b.value));

console.log(items);
// [
//   { id: 2, value: 'A' },
//   { id: 4, value: 'A' },
//   { id: 1, value: 'B' },
//   { id: 3, value: 'B' }
// ]
// Note that id:2 comes before id:4, and id:1 comes before id:3
\`\`\`

TBD

## Performance Considerations

The time complexity of \`sort()\` depends on the browser implementation:
- Most modern browsers use Timsort or similar algorithms with O(n log n) complexity
- The space complexity is typically O(log n) to O(n)

For very large arrays or performance-critical applications, consider:
- Using a specialized sorting library
- Implementing a specific algorithm optimized for your data
- Pre-sorting data when possible to avoid repeated sorts

TBD

## Common Sorting Patterns

### Numeric Sorting

\`\`\`javascript
// Ascending
numbers.sort((a, b) => a - b);

// Descending
numbers.sort((a, b) => b - a);
\`\`\`

### String Sorting

\`\`\`javascript
// Case-sensitive
strings.sort();

// Case-insensitive
strings.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

// With internationalization
strings.sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));
\`\`\`

### Date Sorting

\`\`\`javascript
// Ascending (oldest first)
dates.sort((a, b) => a.getTime() - b.getTime());

// Descending (newest first)
dates.sort((a, b) => b.getTime() - a.getTime());
\`\`\`

### Custom Priority Sorting

\`\`\`javascript
const priorities = { high: 3, medium: 2, low: 1 };

tasks.sort((a, b) => priorities[b.priority] - priorities[a.priority]);
\`\`\`

TBD`,
  exercise: null
};