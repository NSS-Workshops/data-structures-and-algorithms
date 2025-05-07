export const implementSetChapter = {
  id: 'implement-set',
  title: 'Implement a Set Structure',
  sectionId: 'maps-and-sets',
  previousChapterId: 'implement-map',
  content: `## Implementing a Set Structure

In this chapter, we'll build a custom Set implementation with add, delete, and has operations. This will help us understand how Sets work internally.

TBD

## Set Implementation Approaches

There are several ways to implement a Set:

1. **Hash-based**: Similar to a HashMap but only storing keys (most common)
2. **Tree-based**: Using a balanced binary search tree for ordered sets
3. **Bit vector**: For sets with a small, known range of possible values
4. **Bloom filter**: For approximate membership testing with space efficiency

We'll focus on a hash-based implementation, which offers O(1) average time complexity for the core operations.

TBD

## Basic HashSet Implementation

We'll implement our HashSet by leveraging the HashMap we created in the previous chapter. This is a common approach since a Set can be viewed as a Map where we only care about the keys:

\`\`\`javascript
class HashSet {
  constructor(initialCapacity = 16, loadFactor = 0.75) {
    // We'll use our HashMap implementation internally
    this.map = new HashMap(initialCapacity, loadFactor);
  }
  
  /**
   * Add a value to the set
   * @param {*} value - The value to add
   * @returns {boolean} True if the value was added, false if it already existed
   */
  add(value) {
    if (this.has(value)) {
      return false;
    }
    
    this.map.set(value, true);
    return true;
  }
  
  /**
   * Check if a value exists in the set
   * @param {*} value - The value to check
   * @returns {boolean} True if the value exists, false otherwise
   */
  has(value) {
    return this.map.has(value);
  }
  
  /**
   * Delete a value from the set
   * @param {*} value - The value to delete
   * @returns {boolean} True if deleted, false if value not found
   */
  delete(value) {
    return this.map.delete(value);
  }
  
  /**
   * Get the number of values in the set
   * @returns {number} The size of the set
   */
  size() {
    return this.map.getSize();
  }
  
  /**
   * Clear all values from the set
   */
  clear() {
    this.map.clear();
  }
  
  /**
   * Get all values in the set
   * @returns {Array} Array of all values
   */
  values() {
    return this.map.keys();
  }
  
  /**
   * Execute a function for each value in the set
   * @param {Function} callback - Function to execute for each value
   */
  forEach(callback) {
    this.map.forEach((_, value) => {
      callback(value, value, this);
    });
  }
}
\`\`\`

TBD

## Implementing Set Operations

Let's add methods for common set operations:

\`\`\`javascript
class HashSet {
  // ... previous methods ...
  
  /**
   * Create a new set with all values from this set and another set
   * @param {HashSet} otherSet - The other set to union with
   * @returns {HashSet} A new set containing the union
   */
  union(otherSet) {
    const resultSet = new HashSet();
    
    // Add all values from this set
    this.forEach(value => {
      resultSet.add(value);
    });
    
    // Add all values from the other set
    otherSet.forEach(value => {
      resultSet.add(value);
    });
    
    return resultSet;
  }
  
  /**
   * Create a new set with values that exist in both this set and another set
   * @param {HashSet} otherSet - The other set to intersect with
   * @returns {HashSet} A new set containing the intersection
   */
  intersection(otherSet) {
    const resultSet = new HashSet();
    
    // Add values that exist in both sets
    this.forEach(value => {
      if (otherSet.has(value)) {
        resultSet.add(value);
      }
    });
    
    return resultSet;
  }
  
  /**
   * Create a new set with values from this set that don't exist in another set
   * @param {HashSet} otherSet - The other set to difference with
   * @returns {HashSet} A new set containing the difference
   */
  difference(otherSet) {
    const resultSet = new HashSet();
    
    // Add values from this set that don't exist in the other set
    this.forEach(value => {
      if (!otherSet.has(value)) {
        resultSet.add(value);
      }
    });
    
    return resultSet;
  }
  
  /**
   * Check if this set is a subset of another set
   * @param {HashSet} otherSet - The other set to check against
   * @returns {boolean} True if this set is a subset, false otherwise
   */
  isSubsetOf(otherSet) {
    // If this set is larger, it can't be a subset
    if (this.size() > otherSet.size()) {
      return false;
    }
    
    // Check if all values in this set exist in the other set
    let isSubset = true;
    this.forEach(value => {
      if (!otherSet.has(value)) {
        isSubset = false;
      }
    });
    
    return isSubset;
  }
}
\`\`\`

TBD

## Using Our HashSet Implementation

Let's see how to use our custom HashSet:

\`\`\`javascript
// Create a new set
const colors = new HashSet();

// Add some values
colors.add('red');
colors.add('green');
colors.add('blue');
colors.add('red'); // Duplicate, won't be added

// Check the size
console.log(colors.size()); // 3

// Check if a value exists
console.log(colors.has('green')); // true
console.log(colors.has('yellow')); // false

// Delete a value
colors.delete('blue');
console.log(colors.size()); // 2

// Get all values
console.log(colors.values()); // ['red', 'green']

// Iterate over all values
colors.forEach(color => {
  console.log(color);
});

// Set operations
const primaryColors = new HashSet();
primaryColors.add('red');
primaryColors.add('blue');
primaryColors.add('yellow');

const secondaryColors = new HashSet();
secondaryColors.add('green');
secondaryColors.add('purple');
secondaryColors.add('orange');

// Union: all colors
const allColors = primaryColors.union(secondaryColors);
console.log(allColors.values()); // ['red', 'blue', 'yellow', 'green', 'purple', 'orange']

// Intersection: colors in both sets
const commonColors = primaryColors.intersection(colors);
console.log(commonColors.values()); // ['red']

// Difference: colors in primaryColors but not in colors
const uniqueColors = primaryColors.difference(colors);
console.log(uniqueColors.values()); // ['blue', 'yellow']
\`\`\`

TBD

## Performance Analysis

Let's analyze the time complexity of our HashSet operations:

| Operation | Average Case | Worst Case | Description |
|-----------|--------------|------------|-------------|
| add(value) | O(1) | O(n) | Add a value to the set |
| has(value) | O(1) | O(n) | Check if a value exists |
| delete(value) | O(1) | O(n) | Remove a value from the set |
| size() | O(1) | O(1) | Get the number of values |
| clear() | O(1) | O(1) | Remove all values |
| values() | O(n) | O(n) | Get all values |
| forEach() | O(n) | O(n) | Execute a function for each value |
| union() | O(n+m) | O(n+m) | Create union with another set |
| intersection() | O(n) | O(n) | Create intersection with another set |
| difference() | O(n) | O(n) | Create difference with another set |
| isSubsetOf() | O(n) | O(n) | Check if subset of another set |

Where n is the size of this set and m is the size of the other set.

TBD

## Applications of Custom Set Implementations

While JavaScript provides a built-in Set class, understanding how to implement your own Set is valuable for several reasons:

1. **Custom functionality**: Adding specialized methods for your application
2. **Performance optimization**: Tailoring the implementation for specific use cases
3. **Learning**: Understanding the underlying data structures and algorithms
4. **Specialized sets**: Implementing ordered sets, multi-sets, or other variants
5. **Platform constraints**: Working in environments where built-in Sets aren't available

TBD

## Limitations and Improvements

Our basic implementation has some limitations:

1. **Depends on HashMap**: Our implementation relies on a HashMap implementation
2. **Simple hash function**: Limited to the capabilities of our HashMap
3. **No iteration order**: Unlike JavaScript's Set, our implementation doesn't preserve insertion order
4. **Limited value types**: Our hash function may not handle all value types well

Possible improvements:
- Implement a standalone HashSet without relying on HashMap
- Add support for maintaining insertion order
- Implement specialized set types (SortedSet, MultiSet, etc.)
- Optimize set operations for large datasets

TBD`,
  exercise: null
};