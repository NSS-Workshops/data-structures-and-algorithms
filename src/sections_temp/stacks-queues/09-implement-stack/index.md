# Implement a Stack Class - Building the Book Cart System

## Alex's Third Day: From Concept to Code

Monday morning found Alex at Willowbrook Library with a new sense of purpose. After learning about stacks and queues through the book return cart and hold request systems, they were eager to take the next step.

"Ready to build something?" Maya asked, settling down at a computer workstation with Alex. "Today we're going to create a digital version of our book return cart system. You'll implement your very own stack class."

Alex's eyes lit up. "We're actually going to write code?"

"Absolutely. Remember how our physical book cart worked? We're going to recreate that behavior in JavaScript, with all the operations we discussed - push, pop, peek, and more."

Sam joined them, carrying a steaming cup of coffee. "Are we building the system that'll prevent me from making mistakes like I did with the hold requests?"

Maya laughed. "Exactly, Sam. Good data structures help prevent errors by making the right way to do things the obvious way."

## Designing Our BookCart Class

Maya opened a code editor and created a new file. "Let's start by thinking about what our BookCart class needs to do. Alex, what operations did we perform with the physical cart?"

Alex thought back to their first day. "We added books to the top - that was push. We took books from the top to process them - that was pop. And sometimes we looked at the top book without taking it - that was peek."

"Perfect! And what else might be useful to know about our cart?"

"Whether it's empty," Sam chimed in. "And maybe how many books are in it?"

"Excellent. So our BookCart class needs these methods:" Maya began typing:

```javascript
class BookCart {
  constructor() {
    // What should we use to store our books?
  }
  
  // Add a book to the top of the cart
  addBook(book) {
    // This is our 'push' operation
  }
  
  // Remove and return the top book
  processNextBook() {
    // This is our 'pop' operation
  }
  
  // Look at the top book without removing it
  peekAtTopBook() {
    // This is our 'peek' operation
  }
  
  // Check if the cart is empty
  isEmpty() {
    // Returns true if no books in cart
  }
  
  // Count how many books are in the cart
  getBookCount() {
    // Returns the number of books
  }
}
```

"Now," Maya said, "what should we use to store the books inside our class?"

Alex thought for a moment. "An array? We can add to the end and remove from the end?"

"Exactly! JavaScript arrays are perfect for implementing stacks because they have built-in methods that work just like our cart operations."

## Building the BookCart Implementation

Maya guided Alex through implementing each method:

```javascript
class BookCart {
  constructor() {
    this.books = []; // Our array to store books
    console.log("📚 New book cart created!");
  }
  
  /**
   * Add a book to the top of the cart (like placing it on the pile)
   * @param {string} book - The book title to add
   * @returns {number} The new number of books in the cart
   */
  addBook(book) {
    this.books.push(book); // Add to the end of array (top of stack)
    console.log(`📖 Added "${book}" to the cart`);
    return this.books.length;
  }
  
  /**
   * Remove and return the top book from the cart
   * @returns {string|null} The book that was removed, or null if cart is empty
   */
  processNextBook() {
    if (this.isEmpty()) {
      console.log("❌ Cannot process book - cart is empty!");
      return null;
    }
    
    const book = this.books.pop(); // Remove from end of array (top of stack)
    console.log(`✅ Processed "${book}"`);
    return book;
  }
  
  /**
   * Look at the top book without removing it
   * @returns {string|null} The top book, or null if cart is empty
   */
  peekAtTopBook() {
    if (this.isEmpty()) {
      console.log("👀 Cart is empty - nothing to peek at");
      return null;
    }
    
    const topBook = this.books[this.books.length - 1];
    console.log(`👀 Top book is: "${topBook}"`);
    return topBook;
  }
  
  /**
   * Check if the cart is empty
   * @returns {boolean} True if cart is empty, false otherwise
   */
  isEmpty() {
    return this.books.length === 0;
  }
  
  /**
   * Get the number of books in the cart
   * @returns {number} The number of books in the cart
   */
  getBookCount() {
    return this.books.length;
  }
  
  /**
   * Display the current state of the cart
   * @returns {string} A visual representation of the cart
   */
  displayCart() {
    if (this.isEmpty()) {
      return "📚 Book Cart: [Empty]";
    }
    
    let display = "📚 Book Cart:\n";
    // Show books from top to bottom (end to beginning of array)
    for (let i = this.books.length - 1; i >= 0; i--) {
      const isTop = i === this.books.length - 1;
      display += `  ${isTop ? "🔝" : "  "} "${this.books[i]}"\n`;
    }
    return display;
  }
  
  /**
   * Remove all books from the cart
   */
  clearCart() {
    const count = this.books.length;
    this.books = [];
    console.log(`🧹 Cleared cart - removed ${count} books`);
  }
}
```

"Wow," Alex said, studying the code. "It's like we're recreating exactly what we did with the physical cart, but in code!"

"That's the beauty of good abstractions," Maya replied. "The code mirrors the real-world behavior we already understand."

## Testing Our BookCart

"Let's test our implementation," Maya said. "Sam, want to help us simulate a busy morning?"

Sam nodded eagerly. Maya created a new instance of their BookCart class:

```javascript
// Create a new book cart for testing
const morningReturns = new BookCart();

// Simulate books being returned throughout the morning
console.log("=== Morning Book Returns ===");

// Books come in throughout the morning
morningReturns.addBook("The Great Gatsby");
morningReturns.addBook("To Kill a Mockingbird");
morningReturns.addBook("1984");
morningReturns.addBook("Pride and Prejudice");

// Check what's on top
morningReturns.peekAtTopBook();

// Display the current cart state
console.log(morningReturns.displayCart());

// Process some returns
console.log("\n=== Processing Returns ===");
morningReturns.processNextBook(); // Should process "Pride and Prejudice"
morningReturns.processNextBook(); // Should process "1984"

// Check the cart again
console.log(morningReturns.displayCart());

// Check how many books are left
console.log(`📊 Books remaining: ${morningReturns.getBookCount()}`);
```

When they ran the code, the output showed:

```
📚 New book cart created!
=== Morning Book Returns ===
📖 Added "The Great Gatsby" to the cart
📖 Added "To Kill a Mockingbird" to the cart
📖 Added "1984" to the cart
📖 Added "Pride and Prejudice" to the cart
👀 Top book is: "Pride and Prejudice"
📚 Book Cart:
  🔝 "Pride and Prejudice"
     "1984"
     "To Kill a Mockingbird"
     "The Great Gatsby"

=== Processing Returns ===
✅ Processed "Pride and Prejudice"
✅ Processed "1984"
📚 Book Cart:
  🔝 "To Kill a Mockingbird"
     "The Great Gatsby"
📊 Books remaining: 2
```

"Perfect!" Alex exclaimed. "It's working exactly like our physical cart. The last book we added was the first one we processed."

## Understanding the Performance

Maya pulled up a whiteboard. "Now let's talk about why this implementation is so efficient. Alex, how long does it take to add a book to our cart?"

"Well, we just put it on top, so... it's always the same amount of time?"

"Exactly! Whether we have 1 book or 1000 books, adding to the top takes the same amount of time. That's **O(1)** - constant time."

She drew a diagram:

```
Array Implementation of Stack:

[Book1][Book2][Book3][Book4] ← Add/Remove here (end of array)
                        ↑
                    Always O(1)

Why it's fast:
- push() adds to end of array: O(1)
- pop() removes from end of array: O(1)
- peek() looks at last element: O(1)
- No shifting of other elements needed!
```

"The key insight," Maya explained, "is that we only ever work with one end of the array. We never need to move other books around."

Sam raised his hand. "What if we tried to remove books from the bottom of the stack?"

"Great question! Let's see what would happen:" Maya wrote on the whiteboard:

```
If we removed from the beginning of array:

[Book1][Book2][Book3][Book4]
   ↑ Remove here
   
After removal:
[Book2][Book3][Book4][     ]
   ↑       ↑       ↑
All these books had to shift left!

This would be O(n) - slow!
```

"That's why stacks only allow access to the top," Maya concluded. "It keeps all operations fast."

## 💻 Alex's Implementation Challenge!

"Now comes the exciting part," Maya said, pulling out her laptop. "Alex, you've seen how stacks work conceptually and you've used them to solve problems. But now I want you to build your own Stack class from scratch!"

Alex's eyes widened with excitement. "Really? I get to implement the actual data structure?"

"Absolutely! You understand the theory, you've seen the applications, and now it's time to write the code that makes it all work. This is where computer science theory meets practical programming."

Maya opened a code editor and showed Alex a skeleton of the Stack class. "I've given you the basic structure and clear instructions. Your job is to implement the five core methods that make a stack work."

🔓 **Your mission: Complete the Stack implementation below 👇**
- Implement the missing `push()`, `pop()`, `peek()`, `isEmpty()`, and `size()` methods
- Make sure your implementation follows LIFO (Last In, First Out) behavior
- Handle edge cases properly (like popping from an empty stack)
- **Click Run Code** to test your implementation
- **Check the test results** to see if your stack works correctly!

"Remember," Maya added, "you're not just writing code - you're building the foundation that will power real library systems. Every method you implement will be used by the book cart functions we've been working with."

Sam looked over Alex's shoulder. "And if you get it right, we'll have a bulletproof system for managing book returns!"

"Exactly," Maya smiled. "Let's see what you can build, Alex!"

## Key Takeaways

By the end of the day, Alex had learned:

- **Stack implementation using arrays** is natural and efficient
- **All stack operations are O(1)** when using array-based implementation
- **Method naming matters** - use domain-specific names for clarity
- **Error handling is crucial** - always check for edge cases
- **Real-world applications** include undo systems and browser history
- **Code should mirror physical behavior** for intuitive understanding
- **JavaScript arrays are perfect for stacks** due to built-in push/pop methods

The journey from understanding stacks conceptually to implementing them in code had been seamless. Alex now had both the theoretical knowledge and practical skills to build stack-based systems, setting the foundation for tackling the more complex queue implementation ahead.