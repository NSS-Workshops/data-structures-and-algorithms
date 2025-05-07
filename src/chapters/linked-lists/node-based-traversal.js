export const nodeBasedTraversalChapter = {
  id: 'node-based-traversal',
  title: 'Node-Based Traversal and Manual Linking',
  sectionId: 'linked-lists',
  previousChapterId: 'linked-list-tradeoffs',
  content: `## Node-Based Traversal and Manual Linking

Working with linked lists requires a different approach compared to arrays. Instead of using indices, we traverse linked lists by following node references and manually manage the links between nodes.

TBD

## Basic Traversal Patterns

### Simple Traversal
The most basic pattern for traversing a linked list:

\`\`\`javascript
function traverse(linkedList) {
  let current = linkedList.head;
  
  while (current !== null) {
    // Process current node
    console.log(current.data);
    
    // Move to next node
    current = current.next;
  }
}
\`\`\`

TBD

### Traversal with a Counter
When you need to keep track of position:

\`\`\`javascript
function findPosition(linkedList, value) {
  let current = linkedList.head;
  let position = 0;
  
  while (current !== null) {
    if (current.data === value) {
      return position;
    }
    
    current = current.next;
    position++;
  }
  
  return -1; // Value not found
}
\`\`\`

TBD

## Manual Node Linking

### Inserting a Node Between Two Nodes
Inserting a node requires careful pointer manipulation:

\`\`\`javascript
function insertAfter(node, newData) {
  // Ensure the node exists
  if (node === null) {
    return false;
  }
  
  // Create new node
  const newNode = new Node(newData);
  
  // Link the new node
  newNode.next = node.next;
  node.next = newNode;
  
  return true;
}
\`\`\`

TBD

### Removing a Node
Removing a node requires bypassing it in the chain:

\`\`\`javascript
function removeAfter(node) {
  // Ensure the node exists and has a next node
  if (node === null || node.next === null) {
    return null;
  }
  
  // Get the node to remove
  const removedNode = node.next;
  
  // Bypass the removed node
  node.next = removedNode.next;
  
  // Optional: Clear the removed node's next pointer
  removedNode.next = null;
  
  return removedNode.data;
}
\`\`\`

TBD

## Advanced Traversal Techniques

### Two-Pointer Technique
Using two pointers at different speeds or positions:

\`\`\`javascript
function findMiddle(linkedList) {
  if (!linkedList.head) {
    return null;
  }
  
  let slow = linkedList.head;
  let fast = linkedList.head;
  
  // Fast pointer moves twice as fast as slow pointer
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  
  // When fast reaches the end, slow is at the middle
  return slow.data;
}
\`\`\`

TBD

### Recursive Traversal
Using recursion instead of iteration:

\`\`\`javascript
function printReverse(node) {
  // Base case
  if (node === null) {
    return;
  }
  
  // Recursive case: process the rest of the list first
  printReverse(node.next);
  
  // Then process the current node (prints in reverse order)
  console.log(node.data);
}
\`\`\`

TBD

## Common Pitfalls and Solutions

### Losing the Head Reference
- **Problem**: Updating the head without saving a reference
- **Solution**: Always store the original head when modifying it

\`\`\`javascript
// Incorrect
linkedList.head = linkedList.head.next;

// Correct
const oldHead = linkedList.head;
linkedList.head = linkedList.head.next;
// Now we can still use oldHead if needed
\`\`\`

TBD

### Null Pointer Exceptions
- **Problem**: Accessing properties of null nodes
- **Solution**: Always check for null before accessing node properties

\`\`\`javascript
// Incorrect
let data = node.next.data; // Crashes if node.next is null

// Correct
if (node.next !== null) {
  let data = node.next.data;
}
\`\`\`

TBD

### Infinite Loops
- **Problem**: Creating circular references accidentally
- **Solution**: Carefully track and update references, use cycle detection

\`\`\`javascript
function hasCycle(linkedList) {
  let slow = linkedList.head;
  let fast = linkedList.head;
  
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    
    if (slow === fast) {
      return true; // Cycle detected
    }
  }
  
  return false; // No cycle
}
\`\`\`

TBD

## Practical Tips for Working with Linked Lists

1. **Draw it out**: Visualize the nodes and pointers when designing algorithms
2. **Use helper pointers**: Keep track of previous, current, and next nodes as needed
3. **Handle edge cases**: Empty lists, single-node lists, and operations at the ends
4. **Consider using sentinel nodes**: Dummy nodes at the beginning/end to simplify edge cases
5. **Test thoroughly**: Verify your operations with various list sizes and configurations

TBD`,
  exercise: null
};