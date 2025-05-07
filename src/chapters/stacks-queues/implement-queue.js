export const implementQueueChapter = {
  id: 'implement-queue',
  title: 'Implement a Queue Class',
  sectionId: 'stacks-queues',
  previousChapterId: 'implement-stack',
  content: `## Implementing a Queue Class

In this chapter, we'll build a complete queue implementation with the core operations: enqueue, dequeue, and peek.

TBD

## Queue Interface

Before we start implementing, let's define the interface our queue should provide:

- **enqueue(element)**: Add an element to the back of the queue
- **dequeue()**: Remove and return the front element from the queue
- **peek()**: Return the front element without removing it
- **isEmpty()**: Check if the queue is empty
- **size()**: Return the number of elements in the queue
- **clear()**: Remove all elements from the queue

TBD

## Array-Based Queue Implementation

Let's implement a queue using JavaScript's built-in array:

\`\`\`javascript
class Queue {
  constructor() {
    this.items = [];
  }
  
  /**
   * Add an element to the back of the queue
   * @param {*} element - The element to add
   * @returns {number} The new size of the queue
   */
  enqueue(element) {
    this.items.push(element);
    return this.items.length;
  }
  
  /**
   * Remove and return the front element from the queue
   * @returns {*} The removed element, or null if the queue is empty
   */
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }
  
  /**
   * Return the front element without removing it
   * @returns {*} The front element, or null if the queue is empty
   */
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0];
  }
  
  /**
   * Check if the queue is empty
   * @returns {boolean} True if the queue is empty, false otherwise
   */
  isEmpty() {
    return this.items.length === 0;
  }
  
  /**
   * Return the number of elements in the queue
   * @returns {number} The number of elements in the queue
   */
  size() {
    return this.items.length;
  }
  
  /**
   * Remove all elements from the queue
   */
  clear() {
    this.items = [];
  }
  
  /**
   * Convert the queue to a string
   * @returns {string} A string representation of the queue
   */
  toString() {
    if (this.isEmpty()) {
      return "Queue: []";
    }
    
    let result = "Queue: [";
    for (let i = 0; i < this.items.length; i++) {
      result += this.items[i];
      if (i < this.items.length - 1) {
        result += ", ";
      }
    }
    result += "] <- Front: " + this.items[0] + ", Back: " + this.items[this.items.length - 1];
    
    return result;
  }
}
\`\`\`

TBD

## Optimized Queue Implementation: Circular Queue

The simple array-based queue has a performance issue: the dequeue operation is O(n) because it requires shifting all elements. Let's implement a more efficient circular queue:

\`\`\`javascript
class CircularQueue {
  constructor(capacity = 10) {
    this.capacity = capacity;
    this.items = new Array(capacity);
    this.front = 0;
    this.rear = 0;
    this.size = 0;
  }
  
  /**
   * Add an element to the back of the queue
   * @param {*} element - The element to add
   * @returns {boolean} True if the element was added, false if the queue is full
   */
  enqueue(element) {
    if (this.isFull()) {
      this.resize();
    }
    
    this.items[this.rear] = element;
    this.rear = (this.rear + 1) % this.capacity;
    this.size++;
    
    return true;
  }
  
  /**
   * Remove and return the front element from the queue
   * @returns {*} The removed element, or null if the queue is empty
   */
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    
    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.size--;
    
    return item;
  }
  
  /**
   * Return the front element without removing it
   * @returns {*} The front element, or null if the queue is empty
   */
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    
    return this.items[this.front];
  }
  
  /**
   * Check if the queue is empty
   * @returns {boolean} True if the queue is empty, false otherwise
   */
  isEmpty() {
    return this.size === 0;
  }
  
  /**
   * Check if the queue is full
   * @returns {boolean} True if the queue is full, false otherwise
   */
  isFull() {
    return this.size === this.capacity;
  }
  
  /**
   * Return the number of elements in the queue
   * @returns {number} The number of elements in the queue
   */
  getSize() {
    return this.size;
  }
  
  /**
   * Resize the queue when it's full
   * @private
   */
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
  
  /**
   * Convert the queue to a string
   * @returns {string} A string representation of the queue
   */
  toString() {
    if (this.isEmpty()) {
      return "Queue: []";
    }
    
    let result = "Queue: [";
    let count = 0;
    
    for (let i = 0; i < this.size; i++) {
      const index = (this.front + i) % this.capacity;
      result += this.items[index];
      
      if (i < this.size - 1) {
        result += ", ";
      }
    }
    
    result += "] <- Front: " + this.items[this.front] + ", Back: " + this.items[(this.rear - 1 + this.capacity) % this.capacity];
    
    return result;
  }
}
\`\`\`

TBD

## Usage Examples

Let's see how to use our Queue implementation:

\`\`\`javascript
// Create a new queue
const queue = new Queue();

// Enqueue elements
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.toString()); // "Queue: [10, 20, 30] <- Front: 10, Back: 30"

// Peek at the front element
console.log(queue.peek()); // 10

// Dequeue elements
console.log(queue.dequeue()); // 10
console.log(queue.toString()); // "Queue: [20, 30] <- Front: 20, Back: 30"

// Check if the queue is empty
console.log(queue.isEmpty()); // false

// Get the size of the queue
console.log(queue.size()); // 2

// Clear the queue
queue.clear();
console.log(queue.isEmpty()); // true
\`\`\`

TBD

## Common Queue Applications

### 1. Task Scheduler

A simple task scheduler using a queue:

\`\`\`javascript
class Task {
  constructor(id, description) {
    this.id = id;
    this.description = description;
  }
  
  execute() {
    console.log(\`Executing task \${this.id}: \${this.description}\`);
  }
}

class TaskScheduler {
  constructor() {
    this.taskQueue = new Queue();
  }
  
  addTask(task) {
    this.taskQueue.enqueue(task);
    console.log(\`Task \${task.id} added to the queue\`);
  }
  
  executeNext() {
    if (this.taskQueue.isEmpty()) {
      console.log("No tasks in the queue");
      return false;
    }
    
    const task = this.taskQueue.dequeue();
    task.execute();
    return true;
  }
  
  executeAll() {
    while (!this.taskQueue.isEmpty()) {
      this.executeNext();
    }
  }
}

// Test the task scheduler
const scheduler = new TaskScheduler();
scheduler.addTask(new Task(1, "Send email"));
scheduler.addTask(new Task(2, "Process payment"));
scheduler.addTask(new Task(3, "Generate report"));

scheduler.executeNext(); // Executes task 1
scheduler.executeAll(); // Executes tasks 2 and 3
\`\`\`

TBD

### 2. Breadth-First Search

Queues are essential for breadth-first search algorithms:

\`\`\`javascript
class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
  
  breadthFirstSearch(startVertex) {
    const queue = new Queue();
    const result = [];
    const visited = {};
    
    queue.enqueue(startVertex);
    visited[startVertex] = true;
    
    while (!queue.isEmpty()) {
      const currentVertex = queue.dequeue();
      result.push(currentVertex);
      
      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.enqueue(neighbor);
        }
      });
    }
    
    return result;
  }
}

// Test the breadth-first search
const graph = new Graph();
['A', 'B', 'C', 'D', 'E', 'F'].forEach(vertex => graph.addVertex(vertex));
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

console.log(graph.breadthFirstSearch('A')); // ['A', 'B', 'C', 'D', 'E', 'F']
\`\`\`

TBD`,
  exercise: null
};