export const linkedListTypesChapter = {
  id: 'linked-list-types',
  title: 'Singly vs Doubly vs Circular Linked Lists',
  sectionId: 'linked-lists',
  previousChapterId: 'linked-lists-intro',
  content: `## Types of Linked Lists

There are several variations of linked lists, each with unique characteristics and use cases. The three main types are singly linked lists, doubly linked lists, and circular linked lists.

TBD

## Singly Linked Lists

A singly linked list is the most basic type where each node points only to the next node in the sequence.

### Structure
\`\`\`javascript
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
\`\`\`

### Visualization
\`\`\`
head
 ↓
[A] → [B] → [C] → [D] → null
\`\`\`

### Characteristics
- **Memory Efficiency**: Uses less memory (only one pointer per node)
- **Simplicity**: Easier to implement and maintain
- **Traversal**: Can only move forward through the list
- **Deletion**: Requires tracking the previous node

TBD

## Doubly Linked Lists

In a doubly linked list, each node contains pointers to both the next and previous nodes.

### Structure
\`\`\`javascript
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}
\`\`\`

### Visualization
\`\`\`
      head
       ↓
null ← [A] ⟷ [B] ⟷ [C] ⟷ [D] → null
\`\`\`

### Characteristics
- **Bidirectional Traversal**: Can move both forward and backward
- **Memory Usage**: Requires more memory (two pointers per node)
- **Deletion**: More efficient as previous node is directly accessible
- **Complexity**: Slightly more complex to implement and maintain

TBD

## Circular Linked Lists

A circular linked list is a variation where the last node points back to the first node, creating a circle.

### Singly Circular Linked List
\`\`\`
    head
     ↓
    [A] → [B] → [C] → [D]
     ↑               ↓
     └───────────────┘
\`\`\`

### Doubly Circular Linked List
\`\`\`
    head
     ↓
    [A] ⟷ [B] ⟷ [C] ⟷ [D]
     ↑               ↓
     └───────────────┘
\`\`\`

### Characteristics
- **No Null Termination**: The list has no end
- **Continuous Traversal**: Can traverse the entire list starting from any node
- **Applications**: Round-robin scheduling, circular buffers
- **Implementation**: Requires careful handling to avoid infinite loops

TBD

## Comparison of Linked List Types

| Feature | Singly Linked | Doubly Linked | Circular |
|---------|---------------|---------------|----------|
| Memory per node | Less (1 pointer) | More (2 pointers) | Varies |
| Traversal | Forward only | Both directions | Continuous |
| Insertion at beginning | O(1) | O(1) | O(1) |
| Insertion at end | O(n) or O(1)* | O(1)* | O(1)* |
| Deletion | Requires previous node | Direct | Varies |
| Implementation | Simpler | More complex | Most complex |
| Use cases | Memory-constrained environments | Frequent backward traversal | Circular applications |

*With tail pointer

TBD

## Choosing the Right Linked List Type

The choice between linked list types depends on specific requirements:

- **Use Singly Linked Lists when**:
  - Memory efficiency is critical
  - Only forward traversal is needed
  - Simplicity is preferred

- **Use Doubly Linked Lists when**:
  - Bidirectional traversal is required
  - Quick deletions are important
  - Memory constraints are not an issue

- **Use Circular Linked Lists when**:
  - Continuous cycling through elements is needed
  - Implementing round-robin algorithms
  - Working with circular buffers

TBD`,
  exercise: null
};