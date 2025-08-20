import { useAutoGradeQuiz } from "../../components/useAutoGradeQuiz";
import { TestResult } from "../../utils/test_utils";

export const implementStackChapter = {
  id: "implement-stack",
  title: "Implement a Stack Class - Building the Book Cart System",
  sectionId: "stacks-queues",
  previousChapterId: "implementation-tradeoffs",
  content: `
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

\`\`\`javascript
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
\`\`\`

"Now," Maya said, "what should we use to store the books inside our class?"

Alex thought for a moment. "An array? We can add to the end and remove from the end?"

"Exactly! JavaScript arrays are perfect for implementing stacks because they have built-in methods that work just like our cart operations."

## Building the BookCart Implementation

Maya guided Alex through implementing each method:

\`\`\`javascript
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
    console.log(\`📖 Added "\${book}" to the cart\`);
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
    console.log(\`✅ Processed "\${book}"\`);
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
    console.log(\`👀 Top book is: "\${topBook}"\`);
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
    
    let display = "📚 Book Cart:\\n";
    // Show books from top to bottom (end to beginning of array)
    for (let i = this.books.length - 1; i >= 0; i--) {
      const isTop = i === this.books.length - 1;
      display += \`  \${isTop ? "🔝" : "  "} "\${this.books[i]}"\\n\`;
    }
    return display;
  }
  
  /**
   * Remove all books from the cart
   */
  clearCart() {
    const count = this.books.length;
    this.books = [];
    console.log(\`🧹 Cleared cart - removed \${count} books\`);
  }
}
\`\`\`

"Wow," Alex said, studying the code. "It's like we're recreating exactly what we did with the physical cart, but in code!"

"That's the beauty of good abstractions," Maya replied. "The code mirrors the real-world behavior we already understand."

## Testing Our BookCart

"Let's test our implementation," Maya said. "Sam, want to help us simulate a busy morning?"

Sam nodded eagerly. Maya created a new instance of their BookCart class:

\`\`\`javascript
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
console.log("\\n=== Processing Returns ===");
morningReturns.processNextBook(); // Should process "Pride and Prejudice"
morningReturns.processNextBook(); // Should process "1984"

// Check the cart again
console.log(morningReturns.displayCart());

// Check how many books are left
console.log(\`📊 Books remaining: \${morningReturns.getBookCount()}\`);
\`\`\`

When they ran the code, the output showed:

\`\`\`
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
\`\`\`

"Perfect!" Alex exclaimed. "It's working exactly like our physical cart. The last book we added was the first one we processed."

## Understanding the Performance

Maya pulled up a whiteboard. "Now let's talk about why this implementation is so efficient. Alex, how long does it take to add a book to our cart?"

"Well, we just put it on top, so... it's always the same amount of time?"

"Exactly! Whether we have 1 book or 1000 books, adding to the top takes the same amount of time. That's **O(1)** - constant time."

She drew a diagram:

\`\`\`
Array Implementation of Stack:

[Book1][Book2][Book3][Book4] ← Add/Remove here (end of array)
                        ↑
                    Always O(1)

Why it's fast:
- push() adds to end of array: O(1)
- pop() removes from end of array: O(1)
- peek() looks at last element: O(1)
- No shifting of other elements needed!
\`\`\`

"The key insight," Maya explained, "is that we only ever work with one end of the array. We never need to move other books around."

Sam raised his hand. "What if we tried to remove books from the bottom of the stack?"

"Great question! Let's see what would happen:" Maya wrote on the whiteboard:

\`\`\`
If we removed from the beginning of array:

[Book1][Book2][Book3][Book4]
   ↑ Remove here
   
After removal:
[Book2][Book3][Book4][     ]
   ↑       ↑       ↑
All these books had to shift left!

This would be O(n) - slow!
\`\`\`

"That's why stacks only allow access to the top," Maya concluded. "It keeps all operations fast."

## Real-World Applications in the Library

"Now that you understand how to implement a stack," Maya said, "let's see where else we use this pattern in our library systems."

### 1. Catalog Undo System

Maya opened the library's catalog system. "Remember when I made a mistake updating a book record and used Ctrl+Z to undo it? That's a stack!"

\`\`\`javascript
class CatalogEditor {
  constructor() {
    this.undoStack = new BookCart(); // Reusing our BookCart as a stack!
    this.currentRecord = "";
  }
  
  updateRecord(newContent) {
    // Save current state before making changes
    this.undoStack.addBook(this.currentRecord);
    this.currentRecord = newContent;
    console.log(\`Updated record to: "\${newContent}"\`);
  }
  
  undo() {
    if (this.undoStack.isEmpty()) {
      console.log("Nothing to undo!");
      return;
    }
    
    const previousState = this.undoStack.processNextBook();
    console.log(\`Undoing... restored to: "\${previousState}"\`);
    this.currentRecord = previousState;
  }
}

// Test the undo system
const editor = new CatalogEditor();
editor.updateRecord("Title: The Great Gatsby");
editor.updateRecord("Title: The Great Gatsby, Author: F. Scott Fitzgerald");
editor.updateRecord("Title: The Great Gatsby, Author: F. Scott Fitzgerald, Year: 1925");

console.log("Current record:", editor.currentRecord);
editor.undo(); // Goes back to previous version
editor.undo(); // Goes back further
\`\`\`

### 2. Browser History Simulation

"And here's how a simplified browser history might work," Maya continued:

\`\`\`javascript
class LibraryBrowserHistory {
  constructor() {
    this.historyStack = new BookCart();
    this.currentPage = "Library Home";
  }
  
  visitPage(pageName) {
    // Save current page before navigating
    this.historyStack.addBook(this.currentPage);
    this.currentPage = pageName;
    console.log(\`Navigated to: \${pageName}\`);
  }
  
  goBack() {
    if (this.historyStack.isEmpty()) {
      console.log("No previous page to go back to!");
      return;
    }
    
    const previousPage = this.historyStack.processNextBook();
    console.log(\`Going back to: \${previousPage}\`);
    this.currentPage = previousPage;
  }
}

// Test browser history
const browser = new LibraryBrowserHistory();
browser.visitPage("Catalog Search");
browser.visitPage("Book Details: 1984");
browser.visitPage("Author: George Orwell");

console.log("Current page:", browser.currentPage);
browser.goBack(); // Back to Book Details
browser.goBack(); // Back to Catalog Search
\`\`\`

## Error Handling and Edge Cases

"One important aspect of good programming," Maya said, "is handling edge cases. What happens if someone tries to process a book from an empty cart?"

Alex looked at their code. "We check if the cart is empty first, and return null if it is."

"Exactly! Let's test that:"

\`\`\`javascript
// Test edge cases
const emptyCart = new BookCart();

console.log("=== Testing Empty Cart ===");
emptyCart.peekAtTopBook();     // Should handle gracefully
emptyCart.processNextBook();   // Should handle gracefully
console.log("Is empty?", emptyCart.isEmpty()); // Should be true
console.log("Book count:", emptyCart.getBookCount()); // Should be 0
\`\`\`

Output:
\`\`\`
📚 New book cart created!
=== Testing Empty Cart ===
👀 Cart is empty - nothing to peek at
❌ Cannot process book - cart is empty!
Is empty? true
Book count: 0
\`\`\`

"Perfect error handling!" Maya said. "The system doesn't crash - it gives helpful feedback instead."

## Comparing with Physical Operations

Sam had been quietly thinking. "You know what's cool? Our code operations match exactly with what we do physically."

Maya nodded. "Let's make that comparison explicit:"

| Physical Action | Code Method | Time Complexity |
|----------------|-------------|-----------------|
| Place book on top of cart | \`addBook(book)\` | O(1) |
| Take book from top of cart | \`processNextBook()\` | O(1) |
| Look at top book | \`peekAtTopBook()\` | O(1) |
| Check if cart is empty | \`isEmpty()\` | O(1) |
| Count books in cart | \`getBookCount()\` | O(1) |

"The beauty of this implementation," Maya explained, "is that it's both intuitive and efficient. The code does exactly what you'd expect, and it does it fast."

## Key Insights About Stack Implementation

As their coding session wrapped up, Maya summarized the key points:

### Why Arrays Work Well for Stacks
- **Natural LIFO behavior**: Adding/removing from the end is natural
- **Efficient operations**: All stack operations are O(1)
- **Simple implementation**: JavaScript arrays have built-in push/pop methods
- **Memory efficient**: No extra pointers or complex structures needed

### Best Practices
- **Always check for empty stack** before popping or peeking
- **Provide clear error messages** for edge cases
- **Use descriptive method names** that match the domain (addBook vs push)
- **Include helpful logging** for debugging and understanding

### When to Use This Implementation
- **Known maximum size**: When you have a rough idea of how big the stack will get
- **Memory efficiency matters**: Arrays use less memory than linked structures
- **Simple operations**: When you only need basic stack functionality

## 💻 Alex's Implementation Challenge!

"Now comes the exciting part," Maya said, pulling out her laptop. "Alex, you've seen how stacks work conceptually and you've used them to solve problems. But now I want you to build your own Stack class from scratch!"

Alex's eyes widened with excitement. "Really? I get to implement the actual data structure?"

"Absolutely! You understand the theory, you've seen the applications, and now it's time to write the code that makes it all work. This is where computer science theory meets practical programming."

Maya opened a code editor and showed Alex a skeleton of the Stack class. "I've given you the basic structure and clear instructions. Your job is to implement the five core methods that make a stack work."

🔓 **Your mission: Complete the Stack implementation below 👇**
- Implement the missing \`push()\`, \`pop()\`, \`peek()\`, \`isEmpty()\`, and \`size()\` methods
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

The journey from understanding stacks conceptually to implementing them in code had been seamless. Alex now had both the theoretical knowledge and practical skills to build stack-based systems, setting the foundation for tackling the more complex queue implementation ahead.`,
  exercise: {
    starterCode: `// Complete the Stack implementation below
// You need to implement the missing methods to make the tests pass

class Stack {
  constructor() {
    this.items = [];
  }
  
  // TODO: Implement push method
  // Add an item to the top of the stack
  push(item) {
    // Your code here
  }
  
  // TODO: Implement pop method
  // Remove and return the top item from the stack
  // Throw an error if stack is empty
  pop() {
    // Your code here
  }
  
  // TODO: Implement peek method
  // Return the top item without removing it
  // Throw an error if stack is empty
  peek() {
    // Your code here
  }
  
  // TODO: Implement isEmpty method
  // Return true if stack is empty, false otherwise
  isEmpty() {
    // Your code here
  }
  
  // TODO: Implement size method
  // Return the number of items in the stack
  size() {
    // Your code here
  }
}`,
    solution: `// Complete Stack implementation
class Stack {
  constructor() {
    this.items = [];
  }
  
  // Add an item to the top of the stack
  push(item) {
    this.items.push(item);
  }
  
  // Remove and return the top item from the stack
  // Throw an error if stack is empty
  pop() {
    if (this.isEmpty()) {
      throw new Error('Stack is empty - cannot pop');
    }
    return this.items.pop();
  }
  
  // Return the top item without removing it
  // Throw an error if stack is empty
  peek() {
    if (this.isEmpty()) {
      throw new Error('Stack is empty - cannot peek');
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
}`,
    tests: [
      {
        name: "Test Stack basic operations",
        test: (code) => {
          try {
            const testCode = code + `
            // Test Stack basic operations
            const stack = new Stack();
            
            // Test isEmpty on new stack
            const emptyResult = stack.isEmpty();
            const sizeResult = stack.size();
            
            // Test push operation
            stack.push("Book A");
            const notEmptyResult = stack.isEmpty();
            const sizeAfterPush = stack.size();
            
            // Test peek operation
            const peekResult = stack.peek();
            const sizeAfterPeek = stack.size();
            
            // Test multiple pushes
            stack.push("Book B");
            stack.push("Book C");
            const finalSize = stack.size();
            const finalPeek = stack.peek();
            
            return ({ emptyResult, sizeResult, notEmptyResult, sizeAfterPush, peekResult, sizeAfterPeek, finalSize, finalPeek });
            `;
            
            const testResult = new Function(testCode)();
            
            if (testResult.emptyResult !== true) {
              return new TestResult({ passed: false, message: "New stack should be empty" });
            }
            
            if (testResult.sizeResult !== 0) {
              return new TestResult({ passed: false, message: "New stack should have size 0" });
            }
            
            if (testResult.notEmptyResult !== false) {
              return new TestResult({ passed: false, message: "Stack should not be empty after push" });
            }
            
            if (testResult.sizeAfterPush !== 1) {
              return new TestResult({ passed: false, message: "Stack should have size 1 after one push" });
            }
            
            if (testResult.peekResult !== "Book A") {
              return new TestResult({ passed: false, message: "Peek should return the top item" });
            }
            
            if (testResult.sizeAfterPeek !== 1) {
              return new TestResult({ passed: false, message: "Peek should not change stack size" });
            }
            
            if (testResult.finalSize !== 3) {
              return new TestResult({ passed: false, message: "Stack should have size 3 after three pushes" });
            }
            
            if (testResult.finalPeek !== "Book C") {
              return new TestResult({ passed: false, message: "Peek should return the last pushed item" });
            }
            
            return new TestResult({ passed: true });
          } catch (error) {
            return new TestResult({ passed: false, message: error.message });
          }
        },
        message: "Stack should handle basic operations correctly (push, pop, peek, isEmpty, size)."
      },
      {
        name: "Test Stack LIFO behavior",
        test: (code) => {
          try {
            const testCode = code + `
            // Test LIFO behavior
            const stack = new Stack();
            stack.push("First");
            stack.push("Second");
            stack.push("Third");
            
            const pop1 = stack.pop();
            const pop2 = stack.pop();
            const sizeAfterPops = stack.size();
            const pop3 = stack.pop();
            const finalEmpty = stack.isEmpty();
            
            return ({ pop1, pop2, sizeAfterPops, pop3, finalEmpty });
            `;
            
            const testResult = new Function(testCode)();
            
            if (testResult.pop1 !== "Third") {
              return new TestResult({ passed: false, message: "Pop should return last pushed item (Third)" });
            }
            
            if (testResult.pop2 !== "Second") {
              return new TestResult({ passed: false, message: "Pop should return second-to-last pushed item (Second)" });
            }
            
            if (testResult.sizeAfterPops !== 1) {
              return new TestResult({ passed: false, message: "Stack should have size 1 after two pops" });
            }
            
            if (testResult.pop3 !== "First") {
              return new TestResult({ passed: false, message: "Pop should return first pushed item (First)" });
            }
            
            if (testResult.finalEmpty !== true) {
              return new TestResult({ passed: false, message: "Stack should be empty after popping all items" });
            }
            
            return new TestResult({ passed: true });
          } catch (error) {
            return new TestResult({ passed: false, message: error.message });
          }
        },
        message: "Stack should follow LIFO (Last In, First Out) behavior."
      },
      {
        name: "Test Stack error handling",
        test: (code) => {
          try {
            const testCode = code + `
            // Test error handling
            const stack = new Stack();
            
            let popError = null;
            let peekError = null;
            
            try {
              stack.pop();
            } catch (error) {
              popError = error.message;
            }
            
            try {
              stack.peek();
            } catch (error) {
              peekError = error.message;
            }
            
            return ({ popError, peekError });
            `;
            
            const testResult = new Function(testCode)();
            
            if (!testResult.popError || !testResult.popError.includes("empty")) {
              return new TestResult({ passed: false, message: "Pop on empty stack should throw error mentioning 'empty'" });
            }
            
            if (!testResult.peekError || !testResult.peekError.includes("empty")) {
              return new TestResult({ passed: false, message: "Peek on empty stack should throw error mentioning 'empty'" });
            }
            
            return new TestResult({ passed: true });
          } catch (error) {
            return new TestResult({ passed: false, message: error.message });
          }
        },
        message: "Stack should throw appropriate errors when operations are performed on empty stack."
      },
    ],
  },
  quiz: {
    component: () => {
      const CheckpointComponent = () => {
        useAutoGradeQuiz();

        return (
          <main>
            <h2>Implement Stack Questions</h2>
            <form className="auto-graded-quiz">
              <div
                className="question"
                data-answers="push() adds to end of array,pop() removes from end of array,No shifting of elements needed"
              >
                <p>
                  Why is an array-based stack implementation efficient in
                  JavaScript?
                </p>

                <label>
                  <input type="checkbox" value="push() adds to end of array" />{" "}
                  ➕ push() adds to end of array
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    value="Arrays automatically sort elements"
                  />{" "}
                  🔄 Arrays automatically sort elements
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    value="pop() removes from end of array"
                  />{" "}
                  ➖ pop() removes from end of array
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    value="Arrays have unlimited capacity"
                  />{" "}
                  ♾️ Arrays have unlimited capacity
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    value="No shifting of elements needed"
                  />{" "}
                  🚫 No shifting of elements needed
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    value="JavaScript optimizes array operations"
                  />{" "}
                  ⚡ JavaScript optimizes array operations
                </label>
                <div className="feedback"></div>
                <div className="explanation">
                  <ul>
                    <li>
                      <strong>push() adds to end:</strong> ✅ Correct — Adding
                      to end is O(1) operation.
                    </li>
                    <li>
                      <strong>Arrays sort automatically:</strong> ❌ Incorrect —
                      Arrays don't automatically sort.
                    </li>
                    <li>
                      <strong>pop() removes from end:</strong> ✅ Correct —
                      Removing from end is O(1) operation.
                    </li>
                    <li>
                      <strong>Unlimited capacity:</strong> ❌ Incorrect — Arrays
                      have memory limits.
                    </li>
                    <li>
                      <strong>No shifting needed:</strong> ✅ Correct — Only
                      working with one end eliminates shifting.
                    </li>
                    <li>
                      <strong>JavaScript optimization:</strong> ❌ Incorrect —
                      Efficiency comes from algorithm, not language
                      optimization.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="question" data-answer="null">
                <p>
                  In the BookCart implementation, what does the
                  processNextBook() method return when the cart is empty?
                </p>
                <input type="text" required />
                <span className="feedback" />
                <div className="explanation">
                  The processNextBook() method returns <strong>null</strong>{" "}
                  when the cart is empty, providing a clear indication that no
                  book was available to process while avoiding errors.
                </div>
              </div>

              <div className="question" data-answer="peek">
                <p>
                  What is the name of the stack operation that allows you to
                  look at the top element without removing it?
                </p>
                <input type="text" required />
                <span className="feedback" />
                <div className="explanation">
                  The <strong>peek</strong> operation (also called "top") allows
                  you to examine the top element of the stack without removing
                  it, useful for checking what's next without disturbing the
                  stack's state.
                </div>
              </div>

              <button className="code-button test-button" type="submit">
                Submit
              </button>
            </form>
          </main>
        );
      };

      return <CheckpointComponent />;
    },
  },
};
