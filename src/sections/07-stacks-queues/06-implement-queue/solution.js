// Complete Queue implementation

class Queue {
  constructor() {
    this.items = [];
  }
  
  // Add an item to the back of the queue
  enqueue(item) {
    this.items.push(item);
  }
  
  // Remove and return the front item from the queue
  // Return null if queue is empty
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }
  
  // Return the front item without removing it
  // Return null if queue is empty
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0];
  }
  
  // Return true if queue is empty, false otherwise
  isEmpty() {
    return this.items.length === 0;
  }
  
  // Return the number of items in the queue
  size() {
    return this.items.length;
  }
}