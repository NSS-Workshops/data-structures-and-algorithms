export const linkedListsIntroChapter = {
  id: 'linked-lists-intro',
  title: 'Introduction to Linked Lists',
  sectionId: 'linked-lists',
  previousChapterId: null,
  content: `## Introduction to Linked Lists

A linked list is a linear data structure where elements are stored in nodes, and each node points to the next node in the sequence. Unlike arrays, linked lists don't require contiguous memory allocation, offering more flexibility for dynamic data.

TBD

## Basic Structure of a Linked List

A linked list consists of nodes, where each node contains:
1. Data (the value stored)
2. A reference (or pointer) to the next node

\`\`\`javascript
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  
  // Methods will be added here
}
\`\`\`

TBD

## Visualizing a Linked List

A linked list can be visualized as a chain of connected nodes:

\`\`\`
head
 ↓
[A] → [B] → [C] → [D] → null
\`\`\`

Each box represents a node containing data, and the arrows represent the next pointers.

TBD

## Key Characteristics of Linked Lists

- **Dynamic Size**: Can grow or shrink during execution
- **No Random Access**: Must traverse from the head to access elements
- **Efficient Insertions/Deletions**: When position is known, O(1) time
- **Extra Memory**: Requires additional memory for storing pointers
- **Sequential Access**: Elements must be accessed in sequence

TBD

## Linked Lists vs. Arrays

| Operation | Array | Linked List |
|-----------|-------|-------------|
| Access | O(1) | O(n) |
| Insert at beginning | O(n) | O(1) |
| Insert at end | O(1)* | O(n) or O(1)** |
| Insert in middle | O(n) | O(n) |
| Delete at beginning | O(n) | O(1) |
| Delete at end | O(1) | O(n) or O(1)** |
| Delete in middle | O(n) | O(n) |
| Memory allocation | Contiguous | Scattered |

*Amortized for dynamic arrays
**O(1) if tail pointer is maintained

TBD

## Real-World Applications

Linked lists are used in various applications:

- **Implementation of other data structures**: Stacks, queues, and hash tables
- **Symbol tables in compiler design**
- **Undo functionality in applications**
- **Music playlists**: Songs linked in sequence
- **Browser history**: Forward and backward navigation
- **Image viewers**: Next and previous functionality

TBD`,
  exercise: null
};