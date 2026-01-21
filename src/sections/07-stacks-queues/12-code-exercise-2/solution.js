/*
Problem: Implement Queue using Two Stacks

Implement a first-in-first-out (FIFO) queue using only two stacks.
*/

var MyQueue = function() {
  // Use two stacks to simulate queue behavior
  this.inputStack = [];   // Stack for enqueue operations
  this.outputStack = [];  // Stack for dequeue operations
};

MyQueue.prototype.enqueue = function(x) {
  // Always push new elements to input stack
  // Time Complexity: O(1)
  this.inputStack.push(x);
};

MyQueue.prototype.dequeue = function() {
  // Ensure output stack has elements for dequeue
  if (this.outputStack.length === 0) {
    // Move all elements from input to output
    // This reverses the order, making FIFO possible
    while (this.inputStack.length > 0) {
      this.outputStack.push(this.inputStack.pop());
    }
  }
  
  // Pop from output stack (FIFO order)
  // Amortized Time Complexity: O(1)
  return this.outputStack.pop();
};

MyQueue.prototype.peek = function() {
  // Ensure output stack has elements for peek
  if (this.outputStack.length === 0) {
    // Move all elements from input to output
    // This reverses the order, making FIFO possible
    while (this.inputStack.length > 0) {
      this.outputStack.push(this.inputStack.pop());
    }
  }
  
  // Return top of output stack without removing
  // Amortized Time Complexity: O(1)
  return this.outputStack[this.outputStack.length - 1];
};

MyQueue.prototype.empty = function() {
  // Queue is empty if both stacks are empty
  // Time Complexity: O(1)
  return this.inputStack.length === 0 && this.outputStack.length === 0;
};

// Time Complexities:
// - enqueue: O(1) - always constant time
// - dequeue: Amortized O(1) - each element moved at most twice
// - peek: Amortized O(1) - same as dequeue without removal
// - empty: O(1) - constant time check

// Space Complexity: O(n) - where n is the number of elements in queue