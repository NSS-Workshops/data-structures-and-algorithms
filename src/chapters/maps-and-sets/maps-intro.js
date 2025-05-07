export const mapsIntroChapter = {
  id: 'maps-intro',
  title: 'Introduction to Maps',
  sectionId: 'maps-and-sets',
  previousChapterId: null,
  content: `## Introduction to Maps

A Map is a collection of key-value pairs where each key is unique. Maps provide an efficient way to store and retrieve data based on keys, making them essential for many programming tasks.

TBD

## Map Fundamentals

Maps (also known as dictionaries, associative arrays, or hash maps in different languages) are data structures that store key-value pairs and provide efficient lookup operations.

Key characteristics of Maps include:
- Each key in a map is unique
- Each key maps to exactly one value
- Keys can be of any data type (in JavaScript)
- Values can be of any data type
- Efficient lookup, insertion, and deletion operations

TBD

## JavaScript Map Implementation

JavaScript provides a built-in Map object that was introduced in ES6:

\`\`\`javascript
// Creating a new Map
const userMap = new Map();

// Adding key-value pairs
userMap.set('user123', { name: 'Alice', role: 'Admin' });
userMap.set('user456', { name: 'Bob', role: 'Editor' });
userMap.set('user789', { name: 'Charlie', role: 'Viewer' });

// Getting a value by key
const user = userMap.get('user456');
console.log(user); // { name: 'Bob', role: 'Editor' }

// Checking if a key exists
console.log(userMap.has('user123')); // true
console.log(userMap.has('user999')); // false

// Deleting a key-value pair
userMap.delete('user789');

// Getting the size of the map
console.log(userMap.size); // 2

// Iterating over key-value pairs
for (const [userId, userData] of userMap) {
  console.log(\`\${userId}: \${userData.name}, \${userData.role}\`);
}

// Clearing the map
userMap.clear();
console.log(userMap.size); // 0
\`\`\`

TBD

## Map vs Object in JavaScript

JavaScript has both Map and Object types for storing key-value pairs, but they have important differences:

| Feature | Map | Object |
|---------|-----|--------|
| Key types | Any value (including functions, objects) | Only strings and symbols |
| Key order | Insertion order preserved | Not guaranteed (though generally preserved in modern engines) |
| Size | Available via size property | Requires manual tracking |
| Iteration | Directly iterable | Requires Object.entries() |
| Performance | Better for frequent additions/removals | Better for static structure |
| Default keys | No default keys | Has prototype keys |
| JSON | No direct JSON support | Native JSON support |

TBD

## Map Operations and Time Complexity

Maps provide efficient operations with the following time complexities:

| Operation | Time Complexity | Description |
|-----------|-----------------|-------------|
| set(key, value) | O(1) average | Add or update a key-value pair |
| get(key) | O(1) average | Retrieve a value by key |
| has(key) | O(1) average | Check if a key exists |
| delete(key) | O(1) average | Remove a key-value pair |
| size | O(1) | Get the number of entries |
| clear() | O(n) | Remove all entries |
| forEach() | O(n) | Execute a function for each entry |

TBD

## Map Iteration Methods

JavaScript Maps provide several methods for iteration:

\`\`\`javascript
const fruitInventory = new Map([
  ['apples', 50],
  ['bananas', 30],
  ['oranges', 25]
]);

// Method 1: Using for...of with entries()
for (const [fruit, count] of fruitInventory.entries()) {
  console.log(\`\${fruit}: \${count}\`);
}

// Method 2: Using for...of directly (same as entries())
for (const [fruit, count] of fruitInventory) {
  console.log(\`\${fruit}: \${count}\`);
}

// Method 3: Using forEach
fruitInventory.forEach((count, fruit) => {
  console.log(\`\${fruit}: \${count}\`);
});

// Getting all keys
console.log([...fruitInventory.keys()]); // ['apples', 'bananas', 'oranges']

// Getting all values
console.log([...fruitInventory.values()]); // [50, 30, 25]
\`\`\`

TBD

## Map Use Cases

Maps are ideal for many common programming scenarios:

1. **Caching results**: Store computed values for quick lookup
2. **Frequency counting**: Count occurrences of items
3. **User sessions**: Store user data with user IDs as keys
4. **Object metadata**: Associate metadata with objects without modifying them
5. **Unique mappings**: Ensure one-to-one relationships between items
6. **Configuration settings**: Store settings with named keys
7. **Graph representations**: Store adjacency lists with nodes as keys

TBD`,
  exercise: null
};