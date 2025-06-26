export const mapsAndSetsInfoSheetChapter = {
  id: 'maps-sets-info-sheet',
  title: 'Maps & Sets - Operations & Complexity Info Sheet',
  sectionId: 'maps-and-sets',
  previousChapterId: 'implement-set',
  nextChapterId: 'maps-and-sets-supplemental-materials',
  content: `
## Map Operations (Key-Value Pairs)

| **Operation**          | **Description**                       | **Big O (Time)** |
| ---------------------- | ------------------------------------- | ---------------- |
| **Set/Put**            | \`map.set(key, value)\`                 | O(1)*            |
| **Get**                | \`map.get(key)\`                        | O(1)*            |
| **Has/Contains**       | \`map.has(key)\`                        | O(1)*            |
| **Delete/Remove**      | \`map.delete(key)\`                     | O(1)*            |
| **Clear**              | \`map.clear()\`                         | O(n)             |
| **Size**               | \`map.size\`                            | O(1)             |
| **Keys**               | \`map.keys()\`                          | O(n)             |
| **Values**             | \`map.values()\`                        | O(n)             |
| **Entries**            | \`map.entries()\`                       | O(n)             |

## Set Operations (Unique Values)

| **Operation**          | **Description**                       | **Big O (Time)** |
| ---------------------- | ------------------------------------- | ---------------- |
| **Add**                | \`set.add(value)\`                      | O(1)*            |
| **Has/Contains**       | \`set.has(value)\`                      | O(1)*            |
| **Delete/Remove**      | \`set.delete(value)\`                   | O(1)*            |
| **Clear**              | \`set.clear()\`                         | O(n)             |
| **Size**               | \`set.size\`                            | O(1)             |
| **Values**             | \`set.values()\`                        | O(n)             |
| **Union**              | Combine two sets                      | O(m + n)         |
| **Intersection**       | Common elements between sets          | O(min(m, n))     |
| **Difference**         | Elements in one set but not another   | O(m)             |

*Average case for hash-based implementations. Worst case can be O(n) with poor hash function.

## Key Insights

### Hash-Based Implementation
- Uses hash function to map keys/values to array indices
- Provides average O(1) access time
- Performance depends on hash function quality and load factor

### Map Characteristics
- **Key-Value Storage**: Associates unique keys with values
- **Any Key Type**: Keys can be objects, primitives, functions
- **Insertion Order**: Modern implementations maintain insertion order
- **No Duplicate Keys**: Each key appears only once

### Set Characteristics
- **Unique Values**: Automatically prevents duplicates
- **Value Equality**: Uses SameValueZero comparison
- **Iteration Order**: Maintains insertion order
- **Any Value Type**: Can store objects, primitives, functions

## Space Complexity
- **Storage**: O(n) where n is the number of key-value pairs or values
- **Hash Table**: Additional O(n) space for internal hash table structure
- **Operations**: Most operations use O(1) additional space

## When to Use Maps
✅ **Good for:**
- Caching and memoization
- Counting frequencies
- Lookup tables and dictionaries
- Associating metadata with objects
- When you need non-string keys

## When to Use Sets
✅ **Good for:**
- Removing duplicates from collections
- Membership testing
- Mathematical set operations
- Tracking unique visitors/items
- Fast lookups for existence checks

❌ **Avoid when:**
- Need ordered access by index
- Memory usage is critical
- Simple key-value needs (consider objects)
- Need to store duplicate values
`,
  exercise: null
};