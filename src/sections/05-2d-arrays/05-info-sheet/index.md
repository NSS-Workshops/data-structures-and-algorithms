## Common 2D Array Operations

| **Operation**          | **Description**                       | **Big O (Time)** |
| ---------------------- | ------------------------------------- | ---------------- |
| **Access by Index**    | `arr[i][j]` retrieves element         | O(1)             |
| **Search for Value**   | Linear search through all elements   | O(m × n)         |
| **Insert Row at End**  | `arr.push(newRow)`                    | O(1)             |
| **Insert Row at Start**| `arr.unshift(newRow)`                 | O(m)             |
| **Insert Column**      | Add element to each row               | O(m)             |
| **Delete Row from End**| `arr.pop()`                           | O(1)             |
| **Delete Row from Start**| `arr.shift()`                       | O(m)             |
| **Delete Column**      | Remove element from each row          | O(m × n)         |
| **Update by Index**    | `arr[i][j] = x`                       | O(1)             |

## Key Insights

### Matrix Dimensions
- **m**: Number of rows
- **n**: Number of columns  
- **Total elements**: m × n

### Memory Layout
- 2D arrays are arrays of arrays (jagged arrays in JavaScript)
- Each row is a separate array object
- Not necessarily contiguous in memory like true matrices

### Common Traversal Patterns
```javascript
// Row-major traversal
for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        // Process arr[i][j]
    }
}

// Column-major traversal
for (let j = 0; j < cols; j++) {
    for (let i = 0; i < rows; i++) {
        // Process arr[i][j]
    }
}
```

## Space Complexity
- **Storage**: O(m × n) where m = rows, n = columns
- **Operations**: Most operations use O(1) additional space
- **Neighbor operations**: O(1) space for immediate neighbors

## When to Use 2D Arrays
✅ **Good for:**
- Representing grids, matrices, game boards
- Image processing (pixel manipulation)
- Dynamic programming tables
- Coordinate-based problems

❌ **Avoid when:**
- Sparse data (mostly empty/null values)
- Need for efficient row/column insertions
- Memory usage is critical and data is sparse