// ✅ Prebuilt Stack class - intentionally compressed to a single line — all methods (push, pop, peek, isEmpty, size) are implemented correctly.
// 🔒 You can trust it works. Focus on how to use it, not how it's built in this exercise.
class Stack{constructor(){this.items=[]}push(item){this.items.push(item)}pop(){if(this.isEmpty())throw new Error("Stack is empty - cannot pop");return this.items.pop()}peek(){if(this.isEmpty())throw new Error("Stack is empty - cannot peek");return this.items[this.items.length-1]}isEmpty(){return this.items.length===0}size(){return this.items.length}}
/*
Problem: Using Stack Operations to Process Library Returns

Complete solution showing how to use stack operations effectively.
*/

function processAllReturns(returnCart) {
  // Process all books in the return cart (stack)
  // Return an array of processed books in the order they were processed
  const processedBooks = [];
  
  // Keep processing until cart is empty
  while (!returnCart.isEmpty()) {
    const book = returnCart.pop();
    processedBooks.push(book);
    console.log("Processed:", book);
  }
  
  return processedBooks;
}

function findSpecialBook(returnCart, targetTitle) {
  // Look through the return cart to see if a specific book is there
  // WITHOUT permanently removing books from the cart
  const tempStack = new Stack();
  let found = false;
  
  // Move books to temp stack while searching
  while (!returnCart.isEmpty()) {
    const book = returnCart.pop();
    tempStack.push(book);
    
    if (book === targetTitle) {
      found = true;
    }
  }
  
  // Put all books back in original order
  while (!tempStack.isEmpty()) {
    returnCart.push(tempStack.pop());
  }
  
  return found;
}

function processUntilTarget(returnCart, targetTitle) {
  // Process books from the cart until you find the target book
  // Return an array of all processed books (including the target)
  const processedBooks = [];
  
  while (!returnCart.isEmpty()) {
    const book = returnCart.pop();
    processedBooks.push(book);
    console.log("Processed:", book);
    
    // Stop if we found our target
    if (book === targetTitle) {
      break;
    }
  }
  
  return processedBooks;
}