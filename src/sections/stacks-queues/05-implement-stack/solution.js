// Complete Stack implementation with all methods

class Stack {
  constructor() {
    this.items = [];
  }
  
  // Add an item to the top of the stack
  push(item) {
    this.items.push(item);
    return this.items.length;
  }
  
  // Remove and return the top item from the stack
  // Throw an error if stack is empty
  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    return this.items.pop();
  }
  
  // Return the top item without removing it
  // Throw an error if stack is empty
  peek() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    return this.items[this.items.length - 1];
  }
  
  // Return true if stack is empty, false otherwise
  isEmpty() {
    return this.items.length === 0;
  }
  
  // Return the number of items in the stack
  size() {
    return this.items.length;
  }
}