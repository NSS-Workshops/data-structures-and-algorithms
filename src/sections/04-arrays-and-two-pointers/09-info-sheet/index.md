## Common Array Operations

| **Operation**          | **Description**                       | **Big O (Time)** |
| ---------------------- | ------------------------------------- | ---------------- |
| **Access by Index**    | `arr[i]` retrieves element            | O(1)             |
| **Search for Value**   | `arr.includes(x)` or `arr.indexOf(x)` | O(n)             |
| **Insert at End**      | `arr.push(x)`                         | O(1)             |
| **Insert at Start**    | `arr.unshift(x)`                      | O(n)             |
| **Insert in Middle**   | `arr.splice(i, 0, x)`                 | O(n)             |
| **Delete from End**    | `arr.pop()`                           | O(1)             |
| **Delete from Start**  | `arr.shift()`                         | O(n)             |
| **Delete from Middle** | `arr.splice(i, 1)`                    | O(n)             |
| **Update by Index**    | `arr[i] = x`                          | O(1)             |

## Key Insights

### Why O(1) for End Operations?
- Arrays maintain a pointer to the end
- Adding/removing at the end doesn't require shifting other elements

### Why O(n) for Start/Middle Operations?
- Inserting or deleting requires shifting all subsequent elements
- In worst case, this affects every element in the array

### Memory Layout
- Arrays store elements in contiguous memory locations
- This enables O(1) random access by index
- Cache-friendly for sequential access patterns

## Space Complexity
- **Storage**: O(n) where n is the number of elements
- **Operations**: Most operations use O(1) additional space
- **Dynamic Resizing**: May temporarily use O(n) space during resize operations

## When to Use Arrays
✅ **Good for:**
- Random access to elements by index
- Iterating through all elements
- Adding/removing elements at the end
- Memory-efficient storage of homogeneous data

❌ **Avoid when:**
- Frequent insertions/deletions at the beginning
- Unknown or highly variable size requirements
- Need for efficient middle insertions/deletions