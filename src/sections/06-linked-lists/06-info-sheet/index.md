
## Common Linked List Operations

| **Operation**          | **Description**                       | **Big O (Time)** |
| ---------------------- | ------------------------------------- | ---------------- |
| **Access by Index**    | Traverse to nth node                 | O(n)             |
| **Search for Value**   | Linear search through nodes          | O(n)             |
| **Insert at Head**     | Add new node at beginning             | O(1)             |
| **Insert at Tail**     | Add new node at end                   | O(n) / O(1)*     |
| **Insert in Middle**   | Insert after given node              | O(1) / O(n)**    |
| **Delete from Head**   | Remove first node                     | O(1)             |
| **Delete from Tail**   | Remove last node                      | O(n)             |
| **Delete from Middle** | Remove given node                     | O(1) / O(n)**    |
| **Update Node Value**  | Change value of existing node         | O(1) / O(n)**    |

*O(1) if tail pointer is maintained  
**O(1) if you have reference to the node, O(n) if you need to find it first

## Key Insights

### Memory Layout
- Nodes are scattered throughout memory (not contiguous)
- Each node contains data and pointer(s) to next node(s)
- Dynamic memory allocation as needed

### Types of Linked Lists
- **Singly Linked**: Each node points to next node
- **Doubly Linked**: Each node has pointers to both next and previous
- **Circular**: Last node points back to first node

### Pointer Management
- Always update pointers carefully to avoid losing nodes
- Consider edge cases: empty list, single node, last node
- Memory leaks possible if nodes aren't properly deallocated

## Space Complexity
- **Storage**: O(n) where n is the number of nodes
- **Extra Memory**: O(1) per node for pointer(s)
- **Operations**: Most operations use O(1) additional space

## When to Use Linked Lists
✅ **Good for:**
- Frequent insertions/deletions at the beginning
- Unknown or dynamic size requirements
- Implementing other data structures (stacks, queues)
- When you don't need random access

❌ **Avoid when:**
- Need frequent random access by index
- Memory usage is critical (pointer overhead)
- Cache performance is important
- Need to frequently access elements by position