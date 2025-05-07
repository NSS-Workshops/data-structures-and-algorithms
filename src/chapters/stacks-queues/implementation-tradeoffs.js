export const implementationTradeoffsChapter = {
  id: 'implementation-tradeoffs',
  title: 'Tradeoffs of Array vs Linked List Implementations',
  sectionId: 'stacks-queues',
  previousChapterId: 'queues-intro',
  content: `## Tradeoffs of Array vs Linked List Implementations

Both stacks and queues can be implemented using either arrays or linked lists. Each approach has its own advantages and disadvantages, which we'll explore in this chapter.

TBD

## Array-Based Implementations

### Array-Based Stack

\`\`\`javascript
class ArrayStack {
  constructor() {
    this.items = [];
  }
  
  push(element) {
    this.items.push(element);
  }
  
  pop() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.pop();
  }
  
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }
  
  isEmpty() {
    return this.items.length === 0;
  }
  
  size() {
    return this.items.length;
  }
}
\`\`\`

### Array-Based Queue

\`\`\`javascript
class ArrayQueue {
  constructor() {
    this.items = [];
  }
  
  enqueue(element) {
    this.items.push(element);
  }
  
  dequeue() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.shift();
  }
  
  front() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
  }
  
  isEmpty() {
    return this.items.length === 0;
  }
  
  size() {
    return this.items.length;
  }
}
\`\`\`

TBD

## Linked List-Based Implementations

### Linked List-Based Stack

\`\`\`javascript
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedListStack {
  constructor() {
    this.top = null;
    this.size = 0;
  }
  
  push(element) {
    const newNode = new Node(element);
    newNode.next = this.top;
    this.top = newNode;
    this.size++;
  }
  
  pop() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    
    const data = this.top.data;
    this.top = this.top.next;
    this.size--;
    return data;
  }
  
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.top.data;
  }
  
  isEmpty() {
    return this.top === null;
  }
  
  getSize() {
    return this.size;
  }
}
\`\`\`

### Linked List-Based Queue

\`\`\`javascript
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedListQueue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }
  
  enqueue(element) {
    const newNode = new Node(element);
    
    if (this.isEmpty()) {
      this.front = newNode;
    } else {
      this.rear.next = newNode;
    }
    
    this.rear = newNode;
    this.size++;
  }
  
  dequeue() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    
    const data = this.front.data;
    this.front = this.front.next;
    
    if (this.front === null) {
      this.rear = null;
    }
    
    this.size--;
    return data;
  }
  
  peek() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.front.data;
  }
  
  isEmpty() {
    return this.front === null;
  }
  
  getSize() {
    return this.size;
  }
}
\`\`\`

TBD

## Performance Comparison

| Operation | Array-Based Stack | Linked List Stack | Array-Based Queue | Linked List Queue |
|-----------|-------------------|-------------------|-------------------|-------------------|
| Push/Enqueue | O(1)* | O(1) | O(1)* | O(1) |
| Pop | O(1) | O(1) | O(n) | O(1) |
| Dequeue | O(n) | O(1) | O(n) | O(1) |
| Peek | O(1) | O(1) | O(1) | O(1) |
| Space Efficiency | Better | Worse | Better | Worse |
| Dynamic Sizing | Requires resizing | Natural | Requires resizing | Natural |

*Amortized O(1) for dynamic arrays

TBD

## Memory Considerations

### Array-Based Implementations
- **Pros**:
  - Contiguous memory allocation
  - Less overhead per element
  - Better cache locality
- **Cons**:
  - May waste memory with pre-allocated space
  - Resizing operations can be expensive
  - For queues, shifting elements is inefficient

### Linked List-Based Implementations
- **Pros**:
  - Dynamic memory allocation
  - No need for resizing
  - Efficient insertions and deletions
- **Cons**:
  - Extra memory for pointers
  - Poorer cache locality
  - Higher memory overhead per element

TBD

## Implementation Tradeoff Scenarios

### When to Use Array-Based Implementations
- When the maximum size is known in advance
- When memory efficiency is a priority
- For stacks (where operations are all O(1))
- When frequent access to elements by index is needed
- When the data structure is relatively small

### When to Use Linked List-Based Implementations
- When the size is highly variable or unknown
- For queues (to avoid O(n) dequeue operations)
- When frequent insertions and deletions are required
- When memory fragmentation is not a concern
- When constant-time operations are critical

TBD

## Circular Array Queue: A Hybrid Approach

A circular array queue offers a compromise between array and linked list implementations:

\`\`\`javascript
class CircularArrayQueue {
  constructor(capacity = 10) {
    this.capacity = capacity;
    this.items = new Array(capacity);
    this.front = 0;
    this.rear = 0;
    this.size = 0;
  }
  
  enqueue(element) {
    if (this.isFull()) {
      this.resize();
    }
    
    this.items[this.rear] = element;
    this.rear = (this.rear + 1) % this.capacity;
    this.size++;
  }
  
  dequeue() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    
    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.size--;
    
    return item;
  }
  
  peek() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[this.front];
  }
  
  isEmpty() {
    return this.size === 0;
  }
  
  isFull() {
    return this.size === this.capacity;
  }
  
  getSize() {
    return this.size;
  }
  
  resize() {
    const newCapacity = this.capacity * 2;
    const newItems = new Array(newCapacity);
    
    for (let i = 0; i < this.size; i++) {
      newItems[i] = this.items[(this.front + i) % this.capacity];
    }
    
    this.items = newItems;
    this.front = 0;
    this.rear = this.size;
    this.capacity = newCapacity;
  }
}
\`\`\`

This approach offers:
- O(1) operations for both enqueue and dequeue
- Better memory efficiency than linked lists
- More efficient use of array space than simple array queues
- Occasional resizing operations when capacity is reached

TBD`,
  exercise: null
};