/*
Problem: Implement Queue using Two Stacks

Implement a first-in-first-out (FIFO) queue using only two stacks.

The implemented queue should support:
- enqueue(x) - Pushes element x to the back of the queue
- dequeue() - Removes the element from the front of the queue and returns it
- peek() - Returns the element at the front of the queue
- empty() - Returns true if the queue is empty, false otherwise

Example:
var queue = new MyQueue();
queue.enqueue(1);
queue.enqueue(2);
queue.peek();     // returns 1
queue.dequeue();  // returns 1
queue.empty();    // returns false

Follow-up Questions:
- What are the time complexities of each operation?
- What is the space complexity?
- How does this compare to a queue implemented with a linked list?
*/

var MyQueue = function() {
  // Use two stacks to simulate queue behavior
  this.inputStack = [];   // Stack for enqueue operations
  this.outputStack = [];  // Stack for dequeue operations
};

MyQueue.prototype.enqueue = function(x) {
  // Add element to the back of the queue
  // Your code here
};

MyQueue.prototype.dequeue = function() {
  // Remove and return element from the front of the queue
  // Your code here
};

MyQueue.prototype.peek = function() {
  // Return the element at the front of the queue without removing it
  // Your code here
};

MyQueue.prototype.empty = function() {
  // Return true if the queue is empty
  // Your code here
};