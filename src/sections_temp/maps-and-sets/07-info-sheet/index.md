# Maps & Sets - Operations & Complexity Info Sheet

## Map Operations (Key-Value Pairs)

| **Operation**          | **Description**                       | **Big O (Time)** |
| ---------------------- | ------------------------------------- | ---------------- |
| **Set/Put**            | `map.set(key, value)`                 | O(1)*            |
| **Get**                | `map.get(key)`                        | O(1)*            |
| **Has/Contains**       | `map.has(key)`                        | O(1)*            |
| **Delete/Remove**      | `map.delete(key)`                     | O(1)*            |
| **Clear**              | `map.clear()`                         | O(n)             |
| **Size**               | `map.size`                            | O(1)             |
| **Keys**               | `map.keys()`                          | O(n)             |
| **Values**             | `map.values()`                        | O(n)             |
| **Entries**            | `map.entries()`                       | O(n)             |

## Set Operations (Unique Values)

| **Operation**          | **Description**                       | **Big O (Time)** |
| ---------------------- | ------------------------------------- | ---------------- |
| **Add**                | `set.add(value)`                      | O(1)*            |
| **Has/Contains**       | `set.has(value)`                      | O(1)*            |
| **Delete/Remove**      | `set.delete(value)`                   | O(1)*            |
| **Clear**              | `set.clear()`                         | O(n)             |
| **Size**               | `set.size`                            | O(1)             |
| **Values**             | `set.values()`                        | O(n)             |
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

## Performance Tips

### For Maps:
- Use consistent key types for better hash distribution
- Avoid using objects as keys unless necessary
- Consider Map size when choosing between Map and Object
- Use `has()` instead of `get() !== undefined` for existence checks

### For Sets:
- Use Sets instead of arrays for membership testing
- Leverage Set operations for data deduplication
- Consider Set size for memory-critical applications
- Use Sets for mathematical operations on collections

## Common Patterns

### Frequency Counting with Maps:
```javascript
const frequencies = new Map();
for (const item of items) {
  frequencies.set(item, (frequencies.get(item) || 0) + 1);
}
```

### Deduplication with Sets:
```javascript
const uniqueItems = [...new Set(items)];
```

### Caching with Maps:
```javascript
const cache = new Map();
function expensiveOperation(key) {
  if (cache.has(key)) {
    return cache.get(key);
  }
  const result = doExpensiveWork(key);
  cache.set(key, result);
  return result;
}