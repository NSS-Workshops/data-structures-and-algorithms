export const setsIntroChapter = {
  id: 'sets-intro',
  title: 'Introduction to Sets',
  sectionId: 'maps-and-sets',
  previousChapterId: 'maps-intro',
  content: `## Introduction to Sets

A Set is a collection of unique values where duplicates are not allowed. Sets are ideal for managing collections where membership is more important than order or frequency.

TBD

## Set Fundamentals

Sets are data structures that store unique values and provide efficient operations for adding, removing, and checking membership.

Key characteristics of Sets include:
- Each value in a set is unique
- Sets do not maintain an insertion order (though JavaScript's Set does)
- Sets typically provide fast lookup operations
- Sets are ideal for removing duplicates from collections
- Sets support mathematical set operations like union, intersection, and difference

TBD

## JavaScript Set Implementation

JavaScript provides a built-in Set object that was introduced in ES6:

\`\`\`javascript
// Creating a new Set
const colors = new Set();

// Adding values
colors.add('red');
colors.add('green');
colors.add('blue');

// Adding a duplicate (will be ignored)
colors.add('red');

// Checking the size
console.log(colors.size); // 3

// Checking if a value exists
console.log(colors.has('green')); // true
console.log(colors.has('yellow')); // false

// Deleting a value
colors.delete('blue');
console.log(colors.size); // 2

// Iterating over values
for (const color of colors) {
  console.log(color);
}

// Creating a Set from an array
const numbers = new Set([1, 2, 3, 4, 4, 5, 5, 5]);
console.log(numbers.size); // 5 (duplicates are automatically removed)

// Converting a Set back to an array
const uniqueArray = [...numbers];
console.log(uniqueArray); // [1, 2, 3, 4, 5]

// Clearing the set
colors.clear();
console.log(colors.size); // 0
\`\`\`

TBD

## Set Operations and Time Complexity

Sets provide efficient operations with the following time complexities:

| Operation | Time Complexity | Description |
|-----------|-----------------|-------------|
| add(value) | O(1) average | Add a value to the set |
| has(value) | O(1) average | Check if a value exists in the set |
| delete(value) | O(1) average | Remove a value from the set |
| size | O(1) | Get the number of values in the set |
| clear() | O(n) | Remove all values from the set |
| forEach() | O(n) | Execute a function for each value |

TBD

## Set Iteration Methods

JavaScript Sets provide several methods for iteration:

\`\`\`javascript
const fruits = new Set(['apple', 'banana', 'orange']);

// Method 1: Using for...of
for (const fruit of fruits) {
  console.log(fruit);
}

// Method 2: Using forEach
fruits.forEach(fruit => {
  console.log(fruit);
});

// Method 3: Using values() method with for...of
for (const fruit of fruits.values()) {
  console.log(fruit);
}

// Converting to array and using array methods
const fruitArray = [...fruits];
fruitArray.forEach(fruit => {
  console.log(fruit);
});
\`\`\`

TBD

## Implementing Set Operations

While JavaScript's Set doesn't directly provide mathematical set operations, we can implement them:

\`\`\`javascript
// Union: A ∪ B (all elements from both sets)
function union(setA, setB) {
  const result = new Set(setA);
  for (const elem of setB) {
    result.add(elem);
  }
  return result;
}

// Intersection: A ∩ B (elements common to both sets)
function intersection(setA, setB) {
  const result = new Set();
  for (const elem of setA) {
    if (setB.has(elem)) {
      result.add(elem);
    }
  }
  return result;
}

// Difference: A - B (elements in A but not in B)
function difference(setA, setB) {
  const result = new Set(setA);
  for (const elem of setB) {
    result.delete(elem);
  }
  return result;
}

// Symmetric Difference: A △ B (elements in either set but not in both)
function symmetricDifference(setA, setB) {
  const result = new Set(setA);
  for (const elem of setB) {
    if (result.has(elem)) {
      result.delete(elem);
    } else {
      result.add(elem);
    }
  }
  return result;
}

// Is Subset: A ⊆ B (all elements of A are also in B)
function isSubset(setA, setB) {
  for (const elem of setA) {
    if (!setB.has(elem)) {
      return false;
    }
  }
  return true;
}

// Example usage
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);

console.log([...union(setA, setB)]); // [1, 2, 3, 4, 5, 6]
console.log([...intersection(setA, setB)]); // [3, 4]
console.log([...difference(setA, setB)]); // [1, 2]
console.log([...symmetricDifference(setA, setB)]); // [1, 2, 5, 6]
console.log(isSubset(new Set([3, 4]), setA)); // true
\`\`\`

TBD

## Set Use Cases

Sets are ideal for many common programming scenarios:

1. **Removing duplicates**: Convert an array to a Set and back to get unique values
2. **Membership testing**: Efficiently check if an element exists in a collection
3. **Tracking visited items**: Mark items as visited during traversal algorithms
4. **Implementing mathematical set operations**: Union, intersection, difference
5. **Filtering unique values**: Process only unique items in a data stream
6. **Spell checking**: Store dictionary words for fast lookup
7. **Distinct counting**: Count unique occurrences of events or items

TBD`,
  exercise: null
};