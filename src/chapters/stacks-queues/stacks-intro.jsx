import { useAutoGradeQuiz } from "../../components/useAutoGradeQuiz";
import { TestResult } from "../../utils/test_utils";

export const stacksIntroChapter = {
  id: "stacks-intro",
  title: "Introduction to Stacks - The Book Return System",
  sectionId: "stacks-queues",
  previousChapterId: "stacks-queues-learning-objectives",
  content: `
## Alex's First Day at Willowbrook Library

The morning sun streamed through the tall windows of Willowbrook Public Library as Alex Rivera nervously adjusted their name tag. It was their first day as a library assistant, and they were about to meet Maya Chen, the head librarian who had a reputation for being both brilliant and patient with new staff.

"You must be Alex!" Maya's warm voice carried across the circulation desk. She was a woman in her forties with kind eyes behind wire-rimmed glasses, her dark hair pulled back in a practical bun. "Welcome to Willowbrook. I'm Maya, and I'm excited to show you how we keep this place running smoothly."

Alex smiled, feeling some of their nervousness fade. "Thank you, Maya. I'm really looking forward to learning from you."

"Perfect attitude," Maya said with a grin. "Let's start with something fundamental - our book return system. It might seem simple, but it's actually a perfect example of an important computer science concept called a **stack**."

## The Mystery of the Book Cart

Maya led Alex to a corner near the main entrance where a wheeled cart sat beside the book return slot. The cart was already half-full with books that had been returned overnight through the exterior drop box.

"Here's what I want you to notice," Maya said, gesturing to the cart. "See how the books are piled up? The book on top - this mystery novel - was the last one returned last night. But when we start processing returns this morning, which book do you think we'll handle first?"

Alex looked at the stack of books, thinking. "Well... the one on top? It's the easiest to reach."

"Exactly!" Maya's eyes lit up. "And that's the key insight. The **last book in** becomes the **first book out**. We call this principle **LIFO** - Last In, First Out. This pile of books is behaving exactly like what computer scientists call a **stack**."

\`\`\`
    ┌─────────────────────┐
    │   Mystery Novel     │ ← Top (last returned, first processed)
    ├─────────────────────┤
    │   Cookbook          │
    ├─────────────────────┤
    │   History Book      │
    ├─────────────────────┤
    │   Romance Novel     │ ← Bottom (first returned, last processed)
    └─────────────────────┘
\`\`\`

Alex nodded slowly. "So it's like... we can only work with the book on top?"

"That's right," Maya confirmed. "Just like you can't pull a book from the middle of this stack without first removing all the books above it. This constraint - only being able to access the top element - is what makes a stack so useful in certain situations."

## Understanding Stack Operations

As the morning progressed, Maya showed Alex how their book return system naturally demonstrated the core operations of a stack data structure.

### Push: Adding Books to the Stack

Around 10 AM, Sam Thompson, a enthusiastic college student who volunteered at the library, came rushing in with an armload of books from the outdoor return box.

"Morning, Maya! Morning, Alex!" Sam called out cheerfully, then proceeded to place each book on top of the cart's existing pile. "Got about six more returns from the night drop."

"Perfect timing, Sam," Maya said. "Alex, watch what Sam is doing. In stack terminology, we call this operation **push** - adding an element to the top of the stack."

Alex watched as Sam placed each book:
- First, a cookbook went on top
- Then a children's book
- Then a biography
- And so on...

"Each time Sam adds a book," Maya explained, "that book becomes the new 'top' of our stack. The push operation always adds to the top, and it's very fast - we don't need to move any other books around."

### Pop: Processing Returns

"Now comes the fun part," Maya said, pulling on a pair of work gloves. "Time to process these returns. Alex, I want you to help me, but remember - we can only take books from the top."

Maya reached for the topmost book - the biography that Sam had just placed. "This is called **pop** - removing and working with the top element of the stack."

As they worked through the stack, Alex began to see the pattern:
1. Take the top book (pop)
2. Scan its barcode to check it back into the system
3. Place it in the appropriate reshelving cart
4. Move to the next book (which is now on top)

"Notice something interesting?" Maya asked as they worked. "The biography Sam just put on top was the first one we processed, even though it was returned after all these other books. That's LIFO in action."

### Peek: Checking Without Removing

Halfway through processing, Maya paused and pointed to the current top book without picking it up. "Oh, this is interesting - it's the new bestseller everyone's been waiting for. Alex, what I just did is called **peek** or **top** - looking at the top element without removing it from the stack."

"Why would you want to do that?" Alex asked.

"Great question! Sometimes you need to know what's next without actually processing it yet. Maybe I want to check if we have any overdue books in the stack, or see if there are any books that need special handling. Peek lets me look ahead without disturbing the stack's order."

## ⏱️ Alex's First Challenge!

Maya pulled out a tablet and opened a coding environment. "Alex, I want you to try something. I've created a digital version of our book return system using a stack. Let's see if you can use the stack operations we just learned about."

"You mean... I get to actually code with stacks?" Alex's eyes lit up.

"Exactly! But here's the thing - you don't need to build the stack from scratch. I've already created one for you. Your job is to **use** the stack operations to solve real library problems."

🔓 **Uncomment the below code section in the editor 👉:**
- Implement \`processAllReturns()\` to process all books in a return cart
- Use \`stack.pop()\` and \`stack.isEmpty()\` operations
- **Click Run Code**
- **Inspect 📋 Console Output window and run test to check for correctness!**

"This first challenge simulates what we just did manually," Maya explained. "You need to process all the books in the return cart, one by one, until it's empty."

## The Power of LIFO

After Alex completed the first challenge, Maya smiled approvingly. "Great work! Now you've experienced firsthand how stack operations work. Let's reflect on what you've learned."

"So Alex, why do you think our book return system works so well as a stack?" Maya asked.

Alex thought for a moment. "Well, it's natural - books pile up, and the top one is always the easiest to grab. Plus, it doesn't really matter what order we process them in, as long as they all get checked back in."

"Excellent observation," Maya said. "The order doesn't matter for our goal, so LIFO is perfectly fine. But imagine if this were a line of people waiting for help - would LIFO be fair then?"

"Oh no!" Alex laughed. "The person who just arrived would get helped first, while the person who'd been waiting longest would be last. That wouldn't be fair at all."

"Exactly. That's why we use different data structures for different problems. Stacks are perfect when the order doesn't matter or when you specifically want LIFO behavior."

## ⏱️ Alex's Second Challenge!

"Now let's try something more complex," Maya said, pulling up another coding challenge. "Sometimes we need to search through our return cart to see if a specific book is there, but we can't just dump all the books out."

"How do we do that?" Alex asked, intrigued.

"Great question! We need to temporarily move books to another stack while we search, then put them all back. This preserves the original order while letting us peek at every book."

🔓 **Uncomment the below code section in the editor 👉:**
- Implement \`findSpecialBook()\` to search for a book without permanently removing books
- Use \`stack.pop()\`, \`stack.push()\`, and a temporary stack
- **Click Run Code**
- **Inspect 📋 Console Output window and run test to check for correctness!**

"This challenge teaches you that sometimes you need to use multiple stacks together to solve a problem," Maya explained.

## ⏱️ Alex's Third Challenge!

"One more challenge," Maya said with a smile. "Sometimes we only want to process books until we find a specific one. Maybe there's a book with special handling instructions, and we want to stop when we reach it."

🔓 **Uncomment the below code section in the editor 👉:**
- Implement \`processUntilTarget()\` to process books until finding a target book
- Use \`stack.pop()\` and \`stack.isEmpty()\` with conditional logic
- **Click Run Code**
- **Inspect 📋 Console Output window and run test to check for correctness!**

"Excellent work, Alex!" Maya said as Alex completed the challenges. "You've now experienced how to use stacks to solve real-world problems."

## Real-World Stack Applications

Maya pulled out her laptop and opened a text editor. "Let me show you some other places where stacks are essential," she said, typing a few lines of code.

"See this 'Undo' button? Every time you make a change to a document, that change gets pushed onto a stack. When you hit 'Undo', it pops the most recent change off the stack and reverses it. The last change you made is the first one that gets undone - LIFO again!"

She opened the library's catalog system. "And here's something really cool - when I made a mistake earlier updating a book record, I used Ctrl+Z to undo it. That undo system works exactly like our book return cart."

Alex's eyes widened. "So the same principle that helps us organize returned books is also helping us fix mistakes in computer programs?"

"That's the beauty of understanding data structures," Maya said. "Once you recognize the pattern, you start seeing it everywhere."

## Stack Operations Summary

Maya pulled out a notepad and sketched out the key operations they'd learned:

### Core Stack Operations

**Push (Adding a book to the cart)**
- Adds an element to the top of the stack
- Time Complexity: O(1) - always fast, no matter how many books are already there
- Example: Sam placing returned books on the cart

**Pop (Processing the top book)**
- Removes and returns the top element from the stack
- Time Complexity: O(1) - always fast
- Returns an error if the stack is empty (no books to process)
- Example: Taking the top book to scan and reshelve

**Peek/Top (Checking the top book without removing it)**
- Returns the top element without removing it
- Time Complexity: O(1) - just a quick look
- Returns an error if the stack is empty
- Example: Seeing what book is next without picking it up

**isEmpty (Checking if the cart is empty)**
- Checks if the stack has any elements
- Time Complexity: O(1) - quick check
- Example: Seeing if there are any more books to process

**Size (Counting the books)**
- Returns the number of elements in the stack
- Time Complexity: O(1) - if we keep track as we go
- Example: Knowing how many books are left to process

## Why Stacks Are So Efficient

"Here's something important to understand," Maya said, tapping her pen on the notepad. "All of these operations are **O(1)** - constant time. Do you know what that means?"

Alex shook their head.

"It means that whether we have 5 books in our cart or 500 books, these operations take the same amount of time. Adding a book to the top? Same speed. Taking a book from the top? Same speed. The size of the stack doesn't slow us down."

"That's because we only ever work with the top," Alex realized. "We never have to dig through the middle or move other books around."

"Exactly! That's what makes stacks so powerful for certain applications. When you need LIFO behavior and you want it to be fast, stacks are your best friend."

## Key Takeaways

By the end of their first day, Alex had learned that:

- **Stacks follow LIFO (Last In, First Out)** - like books piling up in a return cart
- **Stack operations are all O(1)** - fast and efficient regardless of size
- **Using stacks effectively** requires understanding when to apply push, pop, peek, isEmpty, and size operations
- **Multiple stacks can work together** - like using a temporary stack to search without destroying the original
- **Conditional processing** with stacks allows you to stop when certain conditions are met
- **Stacks are perfect when order doesn't matter** or when you specifically want LIFO behavior
- **Real-world applications include** undo systems, function calls in programming, and browser history
- **You don't always need to implement stacks from scratch** - focus on using them to solve problems

Through hands-on coding challenges, Alex discovered that understanding how to **use** data structures is just as important as knowing how they work internally. The simple act of processing returned books had revealed one of computer science's most fundamental and useful data structures. And this was just the beginning of Alex's journey into the organized, logical world of library systems and the data structures that power them.`,
  exercise: {
    starterCode: `// ✅ Prebuilt Stack class - intentionally compressed to a single line — all methods (push, pop, peek, isEmpty, size) are implemented correctly.
// 🔒 You can trust it works. Focus on how to use it, not how it’s built in this exercise.
class Stack{constructor(){this.items=[]}push(item){this.items.push(item)}pop(){if(this.isEmpty())throw new Error("Stack is empty - cannot pop");return this.items.pop()}peek(){if(this.isEmpty())throw new Error("Stack is empty - cannot peek");return this.items[this.items.length-1]}isEmpty(){return this.items.length===0}size(){return this.items.length}}
    /*
Problem: Using Stack Operations to Process Library Returns

Maya has provided you with a Stack class to help process returned books.
Your job is to USE the stack operations to solve real library problems!

Available Stack Operations:
- stack.push(item): Add a book to the top of the return cart
- stack.pop(): Remove and return the top book from the cart
- stack.peek(): Look at the top book without removing it
- stack.isEmpty(): Check if the cart is empty
- stack.size(): Get the number of books in the cart

Complete the functions below to help Alex process library returns!
*/

// The Stack class is (already implemented for you!)

// ⏱️ Alex's First Challenge!
// 🔓 Uncomment the below code section and implement the required logic:

/*
function processAllReturns(returnCart) {
  // Process all books in the return cart (stack)
  // Return an array of processed books in the order they were processed
  const processedBooks = [];
  
  // TODO: Use stack operations to process all books
  // Hint: Keep popping books until the cart is empty
  
  return processedBooks;
}
*/

// ⏱️ Alex's Second Challenge!
// 🔓 Uncomment the below code section and implement the required logic:

/*
function findSpecialBook(returnCart, targetTitle) {
  // Look through the return cart to see if a specific book is there
  // WITHOUT permanently removing books from the cart
  // Return true if found, false if not found
  
  const tempStack = new Stack();
  let found = false;
  
  // TODO: Use stack operations to search through books
  // Hint: You'll need to temporarily move books to search, then put them back
  
  return found;
}
*/

// ⏱️ Alex's Third Challenge!
// 🔓 Uncomment the below code section and implement the required logic:

/*
function processUntilTarget(returnCart, targetTitle) {
  // Process books from the cart until you find the target book
  // Return an array of all processed books (including the target)
  // If target not found, process all books
  
  const processedBooks = [];
  
  // TODO: Use stack operations to process books until target is found
  // Hint: Keep popping and checking each book
  
  return processedBooks;
}
*/`,
solution: `
// ✅ Prebuilt Stack class - intentionally compressed to a single line — all methods (push, pop, peek, isEmpty, size) are implemented correctly.
// 🔒 You can trust it works. Focus on how to use it, not how it’s built in this exercise.
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
  }`,
  tests: [
    {
      name: "Test Stack class implementation & functionality",
      test: (code) => {
        try {
          
          const testCode = code + `
          // Test the provided Stack class
          const stack = new Stack();
          
          // Test basic operations
          stack.push("test1");
          stack.push("test2");
          
          const peekResult = stack.peek();
          const popResult = stack.pop();
          const sizeResult = stack.size();
          const isEmptyResult = stack.isEmpty();
          
          return ({ peekResult, popResult, sizeResult, isEmptyResult });
          `;
          
          const testResult = new Function(testCode)();
          
          if (testResult.peekResult !== "test2") {
            return new TestResult({ passed: false, message: "Stack peek() not working correctly" });
          }
          
          if (testResult.popResult !== "test2") {
            return new TestResult({ passed: false, message: "Stack pop() not working correctly" });
          }
          
          if (testResult.sizeResult !== 1) {
            return new TestResult({ passed: false, message: "Stack size() not working correctly" });
          }
          
          if (testResult.isEmptyResult !== false) {
            return new TestResult({ passed: false, message: "Stack isEmpty() not working correctly" });
          }
          
          return new TestResult({ passed: true });
        } catch (error) {
          return new TestResult({ passed: false, message: error.message });
        }
      },
      message: "The provided Stack class should work correctly for all basic operations."
    },
    {
      name: "Test processAllReturns function",
        test: (code) => {
          try {
            // Execute the code to get the functions
            const testCode = code + `
            // Test processAllReturns
            const testCart = new Stack();
            testCart.push("Book A");
            testCart.push("Book B");
            testCart.push("Book C");
            
            let result = [];
            if (typeof processAllReturns === 'function') {
              result = processAllReturns(testCart);
            }
            return ({ result, cartEmpty: testCart.isEmpty() });
            `;
            const testResult = new Function(testCode)();
            if (typeof testResult.result === 'undefined') {
              return new TestResult({ passed: false, message: "processAllReturns function not found. Make sure to uncomment and implement it." });
            }
            
            if (!Array.isArray(testResult.result)) {
              return new TestResult({ passed: false, message: "processAllReturns should return an array" });
            }
            
            if (testResult.result.length !== 3) {
              return new TestResult({ passed: false, message: "processAllReturns should return all 3 books" });
            }
            
            if (!testResult.cartEmpty) {
              return new TestResult({ passed: false, message: "Cart should be empty after processing all returns" });
            }
            
            // Check LIFO order
            const expected = ["Book C", "Book B", "Book A"];
            for (let i = 0; i < expected.length; i++) {
              if (testResult.result[i] !== expected[i]) {
                return new TestResult({ passed: false, message: `Expected ${expected[i]} at position ${i}, got ${testResult.result[i]}` });
              }
            }
            
            return new TestResult({ passed: true });
          } catch (error) {
            return new TestResult({ passed: false, message: error.message });
          }
        },
        message: "processAllReturns should process all books in LIFO order and empty the cart."
      },
      {
        name: "Test findSpecialBook function",
        test: (code) => {
          try {
            // Inject Stack class and execute the code
            const testCode = code + `
            // Test findSpecialBook
            const testCart = new Stack();
            testCart.push("Mystery Novel");
            testCart.push("Cookbook");
            testCart.push("History Book");
            
            let foundResult = false;
            let notFoundResult = false;
            let cartSizeAfter = 0;
            
            if (typeof findSpecialBook === 'function') {
              foundResult = findSpecialBook(testCart, "Cookbook");
              notFoundResult = findSpecialBook(testCart, "Science Book");
              cartSizeAfter = testCart.size();
            }
            
            return ({ foundResult, notFoundResult, cartSizeAfter });
            `;
            
            const testResult = new Function(testCode)();
            
            if (typeof testResult.foundResult === 'undefined') {
              return new TestResult({ passed: false, message: "findSpecialBook function not found. Make sure to uncomment and implement it." });
            }
            
            if (testResult.foundResult !== true) {
              return new TestResult({ passed: false, message: "findSpecialBook should return true when book is found" });
            }
            
            if (testResult.notFoundResult !== false) {
              return new TestResult({ passed: false, message: "findSpecialBook should return false when book is not found" });
            }
            
            if (testResult.cartSizeAfter !== 3) {
              return new TestResult({ passed: false, message: "Cart should still have all 3 books after searching (non-destructive search)" });
            }
            
            return new TestResult({ passed: true });
          } catch (error) {
            return new TestResult({ passed: false, message: error.message });
          }
        },
        message: "findSpecialBook should search without permanently removing books from the cart."
      },
      {
        name: "Test processUntilTarget function",
        test: (code) => {
          try {
            const testCode = code + `
            // Test processUntilTarget
            const testCart = new Stack();
            testCart.push("Book A");
            testCart.push("Book B");
            testCart.push("Book C");
            testCart.push("Book D");
            
            let result = [];
            let remainingSize = 0;
            
            if (typeof processUntilTarget === 'function') {
              result = processUntilTarget(testCart, "Book B");
              remainingSize = testCart.size();
            }
            
            return ({ result, remainingSize });
            `;
            
            const testResult = new Function(testCode)();
            
            if (typeof testResult.result === 'undefined') {
              return new TestResult({ passed: false, message: "processUntilTarget function not found. Make sure to uncomment and implement it." });
            }
            
            if (!Array.isArray(testResult.result)) {
              return new TestResult({ passed: false, message: "processUntilTarget should return an array" });
            }
            
            // Should process Book D, Book C, Book B (in that order due to LIFO)
            const expected = ["Book D", "Book C", "Book B"];
            if (testResult.result.length !== expected.length) {
              return new TestResult({ passed: false, message: `Expected ${expected.length} processed books, got ${testResult.result.length}` });
            }
            
            for (let i = 0; i < expected.length; i++) {
              if (testResult.result[i] !== expected[i]) {
                return new TestResult({ passed: false, message: `Expected ${expected[i]} at position ${i}, got ${testResult.result[i]}` });
              }
            }
            
            if (testResult.remainingSize !== 1) {
              return new TestResult({ passed: false, message: "Should have 1 book remaining in cart (Book A)" });
            }
            
            return new TestResult({ passed: true });
          } catch (error) {
            return new TestResult({ passed: false, message: error.message });
          }
        },
        message: "processUntilTarget should process books until target is found and stop."
      },
      {
        name: "Test processUntilTarget with missing target",
        test: (code) => {
          try {
            const testCode = code + `
            // Test processUntilTarget with missing target
            const testCart = new Stack();
            testCart.push("Book A");
            testCart.push("Book B");
            testCart.push("Book C");
            
            let result = [];
            let remainingSize = 0;
            
            if (typeof processUntilTarget === 'function') {
              result = processUntilTarget(testCart, "Book X");
              remainingSize = testCart.size();
            }
            
            return ({ result, remainingSize });
            `;
            
            const testResult = new Function(testCode)();
            
            if (typeof testResult.result === 'undefined') {
              return new TestResult({ passed: false, message: "processUntilTarget function not found" });
            }
            
            // Should process all books when target not found
            const expected = ["Book C", "Book B", "Book A"];
            if (testResult.result.length !== expected.length) {
              return new TestResult({ passed: false, message: `When target not found, should process all books. Expected ${expected.length}, got ${testResult.result.length}` });
            }
            
            if (testResult.remainingSize !== 0) {
              return new TestResult({ passed: false, message: "Cart should be empty when target not found and all books processed" });
            }
            
            return new TestResult({ passed: true });
          } catch (error) {
            return new TestResult({ passed: false, message: error.message });
          }
        },
        message: "processUntilTarget should process all books when target is not found."
      },
    ]
  },
  quiz: {
    component: () => {
      const CheckpointComponent = () => {
        useAutoGradeQuiz();

        return (
          <main>
            <h2>Stacks Introduction Questions</h2>
            <form className="auto-graded-quiz">
              <div
                className="question"
                data-answers="Undo feature that reverses the most recent user action,Browser back button navigation,Function call management in programming"
              >
                <p>
                  Which of the following scenarios are best implemented using a
                  Stack (LIFO) data structure?
                </p>

                <label>
                  <input
                    type="checkbox"
                    value="Undo feature that reverses the most recent user action"
                  />{" "}
                  ↩️ Undo feature that reverses the most recent user action
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    value="Hold request system for library books"
                  />{" "}
                  📚 Hold request system for library books
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    value="Browser back button navigation"
                  />{" "}
                  🌐 Browser back button navigation
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    value="Print job queue at the library"
                  />{" "}
                  🖨️ Print job queue at the library
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    value="Function call management in programming"
                  />{" "}
                  💻 Function call management in programming
                </label>
                <br />
                <label>
                  <input type="checkbox" value="Customer service line" /> ☎️
                  Customer service line
                </label>
                <div className="feedback"></div>
                <div className="explanation">
                  <ul>
                    <li>
                      <strong>Undo feature:</strong> ✅ Correct — Perfect LIFO
                      use case where the last action is the first to be undone.
                    </li>
                    <li>
                      <strong>Hold request system:</strong> ❌ Incorrect — This
                      requires FIFO (Queue) for fairness.
                    </li>
                    <li>
                      <strong>Browser back button:</strong> ✅ Correct — Last
                      visited page is first to return to (LIFO).
                    </li>
                    <li>
                      <strong>Print job queue:</strong> ❌ Incorrect — Print
                      jobs should be processed in order (FIFO).
                    </li>
                    <li>
                      <strong>Function call management:</strong> ✅ Correct —
                      Function calls follow LIFO pattern in call stack.
                    </li>
                    <li>
                      <strong>Customer service line:</strong> ❌ Incorrect —
                      Should be first-come, first-served (FIFO).
                    </li>
                  </ul>
                </div>
              </div>

              <div className="question" data-answer="O(1)">
                <p>
                  What is the time complexity of push, pop, and peek operations
                  in an array-based stack implementation?
                </p>
                <input type="text" required />
                <span className="feedback" />
                <div className="explanation">
                  All stack operations (push, pop, peek) are O(1) constant time
                  because they only work with the top element. No shifting or
                  searching through other elements is required.
                </div>
              </div>

              <div className="question" data-answer="LIFO">
                <p>
                  What does the acronym that describes stack behavior stand for?
                  (Enter the 4-letter acronym)
                </p>
                <input type="text" required />
                <span className="feedback" />
                <div className="explanation">
                  LIFO stands for Last In, First Out - the fundamental
                  principle of stack behavior where the most recently added
                  element is the first one to be removed.
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
