export const linkedListsIntroChapter = {
  id: 'linked-lists-intro',
  title: 'Introduction to Linked Lists',
  sectionId: 'linked-lists',
  previousChapterId: 'linked-lists-learning-objectives',
  content: `## Introduction to Linked Lists

A linked list is a linear data structure where elements are stored in nodes, and each node points to the next node in the sequence. Unlike arrays, linked lists don't require contiguous memory allocation, offering more flexibility for dynamic data.

## Before We Dive Into Linked Lists: A Quick Detour
Before we can build or manipulate linked lists in JavaScript, we need to take a quick detour to understand how references work. Unlike primitive values (like numbers or strings), objects in JavaScript are assigned and passed by reference. This means when you assign one object to another variable, both variables point to the same underlying data. Grasping this behavior is essential for safely navigating and modifying linked structures, where each node "points" to the next via a reference. Without this foundation, linked list logic can seem confusing or error-prone.

Understanding references in JavaScript is crucial for working with linked lists and the algorithms that operate on them. In a linked list, each node holds a value and a reference to the next node, forming a chain. When we assign one reference variable to another—like let b = a—both variables point to the same object in memory. This means changes made through one variable affect the other. This behavior is especially important in linked list operations, where caching a reference (like let current = head) allows us to safely traverse or update the list without losing our place. Mastering this concept is key to building and debugging linked data structures.

The foundation course has a workshop on this topic. Please review these concept and be sure to complete the coding exercises:

[Primitive vs. Reference Values – Foundations Course](https://nashville-software-school.github.io/foundations-course/primitive-vs-reference)

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