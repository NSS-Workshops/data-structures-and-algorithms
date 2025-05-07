export const implementLinkedListChapter = {
  id: 'implement-linked-list',
  title: 'Implement a Singly Linked List Class',
  sectionId: 'linked-lists',
  previousChapterId: 'node-based-traversal',
  content: `## Implementing a Singly Linked List Class

In this chapter, we'll build a complete singly linked list implementation with the core operations: add, remove, insertAt, and get.

TBD

## Node Class

First, we need a Node class to represent each element in our linked list:

\`\`\`javascript
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
\`\`\`

TBD

## LinkedList Class Structure

Now, let's define the basic structure of our LinkedList class:

\`\`\`javascript
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null; // Optional: for O(1) insertions at the end
    this.size = 0;
  }
  
  // Methods will be implemented below
}
\`\`\`

TBD

## Implementing Core Operations

### 1. add(data) - Add to the End

This method adds a new node to the end of the list:

\`\`\`javascript
add(data) {
  // Create a new node
  const newNode = new Node(data);
  
  // If the list is empty
  if (this.head === null) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    // Add to the end and update tail
    this.tail.next = newNode;
    this.tail = newNode;
  }
  
  this.size++;
  return this;
}
\`\`\`

TBD

### 2. remove(data) - Remove by Value

This method removes the first occurrence of a value:

\`\`\`javascript
remove(data) {
  // If the list is empty
  if (!this.head) {
    return null;
  }
  
  // If the head needs to be removed
  if (this.head.data === data) {
    const removedNode = this.head;
    this.head = this.head.next;
    
    // If the list becomes empty, update tail
    if (!this.head) {
      this.tail = null;
    }
    
    this.size--;
    return removedNode.data;
  }
  
  // Find the node before the one to remove
  let current = this.head;
  while (current.next && current.next.data !== data) {
    current = current.next;
  }
  
  // If the value was found
  if (current.next) {
    const removedNode = current.next;
    current.next = removedNode.next;
    
    // If removing the tail, update tail reference
    if (removedNode === this.tail) {
      this.tail = current;
    }
    
    this.size--;
    return removedNode.data;
  }
  
  // Value not found
  return null;
}
\`\`\`

TBD

### 3. insertAt(data, index) - Insert at Specific Position

This method inserts a new node at a specific position:

\`\`\`javascript
insertAt(data, index) {
  // Check for valid index
  if (index < 0 || index > this.size) {
    return false;
  }
  
  // Create a new node
  const newNode = new Node(data);
  
  // Insert at the beginning
  if (index === 0) {
    newNode.next = this.head;
    this.head = newNode;
    
    // If this is the first node
    if (!this.tail) {
      this.tail = newNode;
    }
    
    this.size++;
    return true;
  }
  
  // Insert at the end
  if (index === this.size) {
    return this.add(data);
  }
  
  // Find the node before the insertion point
  let current = this.head;
  for (let i = 0; i < index - 1; i++) {
    current = current.next;
  }
  
  // Insert the new node
  newNode.next = current.next;
  current.next = newNode;
  
  this.size++;
  return true;
}
\`\`\`

TBD

### 4. get(index) - Get Element at Index

This method retrieves the element at a specific position:

\`\`\`javascript
get(index) {
  // Check for valid index
  if (index < 0 || index >= this.size) {
    return null;
  }
  
  // Traverse to the node at the specified index
  let current = this.head;
  for (let i = 0; i < index; i++) {
    current = current.next;
  }
  
  return current.data;
}
\`\`\`

TBD

## Additional Useful Methods

### isEmpty() - Check if List is Empty

\`\`\`javascript
isEmpty() {
  return this.size === 0;
}
\`\`\`

### getSize() - Get List Size

\`\`\`javascript
getSize() {
  return this.size;
}
\`\`\`

### toString() - Convert List to String

\`\`\`javascript
toString() {
  if (!this.head) {
    return '';
  }
  
  let result = '';
  let current = this.head;
  
  while (current) {
    result += current.data;
    if (current.next) {
      result += ' -> ';
    }
    current = current.next;
  }
  
  return result;
}
\`\`\`

TBD

## Complete Implementation

Here's the complete implementation of our LinkedList class:

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
    this.tail = null;
    this.size = 0;
  }
  
  // Add to the end
  add(data) {
    const newNode = new Node(data);
    
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    
    this.size++;
    return this;
  }
  
  // Remove by value
  remove(data) {
    if (!this.head) {
      return null;
    }
    
    if (this.head.data === data) {
      const removedNode = this.head;
      this.head = this.head.next;
      
      if (!this.head) {
        this.tail = null;
      }
      
      this.size--;
      return removedNode.data;
    }
    
    let current = this.head;
    while (current.next && current.next.data !== data) {
      current = current.next;
    }
    
    if (current.next) {
      const removedNode = current.next;
      current.next = removedNode.next;
      
      if (removedNode === this.tail) {
        this.tail = current;
      }
      
      this.size--;
      return removedNode.data;
    }
    
    return null;
  }
  
  // Insert at specific position
  insertAt(data, index) {
    if (index < 0 || index > this.size) {
      return false;
    }
    
    const newNode = new Node(data);
    
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      
      if (!this.tail) {
        this.tail = newNode;
      }
      
      this.size++;
      return true;
    }
    
    if (index === this.size) {
      return this.add(data);
    }
    
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    
    newNode.next = current.next;
    current.next = newNode;
    
    this.size++;
    return true;
  }
  
  // Get element at index
  get(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }
    
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    
    return current.data;
  }
  
  // Check if list is empty
  isEmpty() {
    return this.size === 0;
  }
  
  // Get list size
  getSize() {
    return this.size;
  }
  
  // Convert list to string
  toString() {
    if (!this.head) {
      return '';
    }
    
    let result = '';
    let current = this.head;
    
    while (current) {
      result += current.data;
      if (current.next) {
        result += ' -> ';
      }
      current = current.next;
    }
    
    return result;
  }
}
\`\`\`

TBD

## Usage Example

Here's how to use our LinkedList implementation:

\`\`\`javascript
// Create a new linked list
const list = new LinkedList();

// Add elements
list.add(10);
list.add(20);
list.add(30);
console.log(list.toString()); // "10 -> 20 -> 30"

// Insert at specific position
list.insertAt(15, 1);
console.log(list.toString()); // "10 -> 15 -> 20 -> 30"

// Get element at index
console.log(list.get(2)); // 20

// Remove element
list.remove(15);
console.log(list.toString()); // "10 -> 20 -> 30"

// Check size
console.log(list.getSize()); // 3
\`\`\`

TBD`,
  exercise: null
};