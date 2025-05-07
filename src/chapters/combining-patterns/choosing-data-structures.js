export const choosingDataStructuresChapter = {
  id: 'choosing-data-structures',
  title: 'Choosing the Right Structure for the Job',
  sectionId: 'combining-patterns',
  previousChapterId: 'recognizing-patterns',
  content: `## Choosing the Right Structure for the Job

Selecting the appropriate data structure is a critical decision that can significantly impact the efficiency and clarity of your solution. This chapter explores how to choose the right data structure based on the problem requirements.

TBD

## The Impact of Data Structure Choice

The choice of data structure affects:

- **Time complexity** of operations (access, insertion, deletion, search)
- **Space complexity** of your solution
- **Code readability and maintainability**
- **Ability to model the problem domain accurately**
- **Scalability** of your solution as input size grows

TBD

## Key Considerations for Selection

When choosing a data structure, consider:

1. **Required Operations**: What operations will be performed most frequently?
2. **Access Patterns**: How will you access the data (sequential, random, by key)?
3. **Data Volume**: How much data will you be handling?
4. **Memory Constraints**: Are there limitations on memory usage?
5. **Insertion/Deletion Frequency**: How often will the data change?
6. **Ordering Requirements**: Does the order of elements matter?
7. **Uniqueness**: Do you need to enforce uniqueness of elements?

TBD

## Common Data Structures and Their Strengths

### Arrays

**Best for:**
- Random access by index (O(1))
- Sequential access (O(n))
- Simple, fixed collections of elements
- When memory locality matters

**Not ideal for:**
- Frequent insertions/deletions in the middle
- Unknown or highly variable size
- Searching without an index

**Example use case:** "Store a fixed number of temperature readings and access them by their time index."

TBD

### Linked Lists

**Best for:**
- Frequent insertions/deletions at any position
- Dynamic size requirements
- Implementation of other data structures (stacks, queues)

**Not ideal for:**
- Random access
- Memory-constrained environments
- Cache-sensitive operations

**Example use case:** "Implement a music playlist where songs can be added or removed from any position."

TBD

### Stacks

**Best for:**
- LIFO (Last-In-First-Out) access pattern
- Function call tracking
- Expression evaluation
- Backtracking algorithms

**Not ideal for:**
- Random access to elements
- Searching for specific elements

**Example use case:** "Implement undo functionality in a text editor."

TBD

### Queues

**Best for:**
- FIFO (First-In-First-Out) access pattern
- Order processing
- BFS algorithms
- Resource scheduling

**Not ideal for:**
- Random access to elements
- Searching for specific elements

**Example use case:** "Implement a print spooler that processes print jobs in the order received."

TBD

### Hash Tables (Maps/Sets)

**Best for:**
- Key-value lookups (O(1) average)
- Removing duplicates
- Caching data
- Counting frequencies

**Not ideal for:**
- Ordered data
- Range queries
- Finding closest elements

**Example use case:** "Track the frequency of words in a document."

TBD

### Trees

**Best for:**
- Hierarchical data
- Efficient search, insertion, deletion (O(log n) for balanced trees)
- Ordered data
- Range queries

**Not ideal for:**
- Simple linear data
- When balancing overhead is a concern

**Example use case:** "Implement a file system directory structure."

TBD

### Graphs

**Best for:**
- Representing relationships between objects
- Network flows
- Path finding
- Dependency analysis

**Not ideal for:**
- Simple linear or hierarchical data
- Memory-constrained environments

**Example use case:** "Find the shortest route between two locations on a map."

TBD

### Heaps

**Best for:**
- Priority queues
- Finding min/max elements efficiently
- Partial sorting
- Graph algorithms (Dijkstra's, Prim's)

**Not ideal for:**
- Searching for arbitrary elements
- Stable ordering

**Example use case:** "Maintain a list of tasks sorted by priority."

TBD

## Data Structure Selection Guide

| If you need to... | Consider using... |
|-------------------|-------------------|
| Access elements by position | Array |
| Add/remove at beginning/end | Linked List, Deque |
| Add/remove in the middle | Linked List |
| LIFO access | Stack |
| FIFO access | Queue |
| Key-based lookup | Hash Table (Map) |
| Remove duplicates | Set |
| Find min/max frequently | Heap |
| Maintain sorted order | Balanced BST |
| Range queries | Balanced BST |
| Represent hierarchies | Tree |
| Represent connections | Graph |
| Frequency counting | Hash Table |
| Ordered iteration | Balanced BST, Sorted Array |

TBD

## Combining Data Structures

Often, the best solution involves combining multiple data structures:

### Example 1: LRU Cache

An LRU (Least Recently Used) Cache combines:
- **Hash Table**: For O(1) lookups by key
- **Doubly Linked List**: To maintain access order and enable O(1) removal

\`\`\`javascript
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map(); // Key -> Node mapping
    this.head = new Node(0, 0); // Dummy head
    this.tail = new Node(0, 0); // Dummy tail
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }
  
  get(key) {
    if (!this.cache.has(key)) {
      return -1;
    }
    
    // Remove node from current position
    const node = this.cache.get(key);
    this.removeNode(node);
    
    // Move to front (most recently used)
    this.addToFront(node);
    
    return node.value;
  }
  
  put(key, value) {
    // Remove existing node if present
    if (this.cache.has(key)) {
      this.removeNode(this.cache.get(key));
    }
    
    // Create new node
    const node = new Node(key, value);
    this.cache.set(key, node);
    this.addToFront(node);
    
    // Evict least recently used if over capacity
    if (this.cache.size > this.capacity) {
      const lru = this.tail.prev;
      this.removeNode(lru);
      this.cache.delete(lru.key);
    }
  }
  
  removeNode(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }
  
  addToFront(node) {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
  }
}

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}
\`\`\`

TBD

### Example 2: Trie for Autocomplete

A Trie (prefix tree) combines:
- **Tree structure**: For prefix matching
- **Hash Tables**: At each node to store children
- **Boolean flags**: To mark complete words

\`\`\`javascript
class TrieNode {
  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  
  insert(word) {
    let current = this.root;
    
    for (const char of word) {
      if (!current.children.has(char)) {
        current.children.set(char, new TrieNode());
      }
      current = current.children.get(char);
    }
    
    current.isEndOfWord = true;
  }
  
  search(word) {
    let current = this.root;
    
    for (const char of word) {
      if (!current.children.has(char)) {
        return false;
      }
      current = current.children.get(char);
    }
    
    return current.isEndOfWord;
  }
  
  startsWith(prefix) {
    let current = this.root;
    
    for (const char of prefix) {
      if (!current.children.has(char)) {
        return false;
      }
      current = current.children.get(char);
    }
    
    return true;
  }
}
\`\`\`

TBD

## Adapting Data Structures

Sometimes, you need to adapt a data structure to fit your specific needs:

### Example: Using a Map as a Counter

\`\`\`javascript
function countFrequencies(arr) {
  const counter = new Map();
  
  for (const item of arr) {
    counter.set(item, (counter.get(item) || 0) + 1);
  }
  
  return counter;
}

// Example usage
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const fruitCounts = countFrequencies(fruits);
console.log(fruitCounts); // Map { 'apple' => 3, 'banana' => 2, 'orange' => 1 }
\`\`\`

TBD

## Making the Decision

To choose the right data structure:

1. **Analyze the problem requirements** carefully
2. **Identify the most frequent operations** your solution will perform
3. **Consider the constraints** (time, space, etc.)
4. **Evaluate tradeoffs** between different data structures
5. **Prototype and test** if necessary
6. **Be willing to change** your choice if requirements evolve

TBD`,
  exercise: null
};