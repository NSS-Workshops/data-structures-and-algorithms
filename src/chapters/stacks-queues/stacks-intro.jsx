import { useAutoGradeQuiz } from "../../components/useAutoGradeQuiz";

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

## The Power of LIFO

As they finished processing the morning returns, Maya sat down with Alex to reflect on what they'd learned.

"So Alex, why do you think our book return system works so well as a stack?" Maya asked.

Alex thought for a moment. "Well, it's natural - books pile up, and the top one is always the easiest to grab. Plus, it doesn't really matter what order we process them in, as long as they all get checked back in."

"Excellent observation," Maya said. "The order doesn't matter for our goal, so LIFO is perfectly fine. But imagine if this were a line of people waiting for help - would LIFO be fair then?"

"Oh no!" Alex laughed. "The person who just arrived would get helped first, while the person who'd been waiting longest would be last. That wouldn't be fair at all."

"Exactly. That's why we use different data structures for different problems. Stacks are perfect when the order doesn't matter or when you specifically want LIFO behavior."

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

## Looking Ahead

As their first lesson wound down, Maya smiled at Alex's obvious enthusiasm. "Tomorrow, we'll explore a different system - our hold request process. That one works completely differently from our book return stack."

"How so?" Alex asked, curious.

"Well, imagine if someone requested a popular book first, but we gave it to the person who requested it last. That wouldn't be very fair, would it?"

Alex laughed. "No, definitely not! So we need... the opposite of LIFO?"

"Exactly - First In, First Out, or FIFO. We call that a **queue**, and it's perfect for situations where fairness and order matter. But that's tomorrow's lesson."

As Alex helped Maya tidy up the circulation desk, they felt a sense of accomplishment. What had started as a simple task - processing returned books - had revealed a fundamental principle of computer science. The stack wasn't just a pile of books; it was a powerful tool for organizing information and solving problems.

"Maya," Alex said as they prepared to leave, "I never thought organizing books could teach me about programming."

Maya's smile was warm and knowing. "That's the wonderful thing about working in a library, Alex. Everything here has a story to tell - even the way we stack books. Tomorrow, we'll discover what stories our queues have to share."

## Key Takeaways

By the end of their first day, Alex had learned that:

- **Stacks follow LIFO (Last In, First Out)** - like books piling up in a return cart
- **Stack operations are all O(1)** - fast and efficient regardless of size
- **Push adds to the top** - like placing returned books on the cart
- **Pop removes from the top** - like taking books to process them
- **Peek looks at the top without removing** - like checking what's next
- **Stacks are perfect when order doesn't matter** or when you specifically want LIFO behavior
- **Real-world applications include** undo systems, function calls in programming, and browser history

The simple act of processing returned books had revealed one of computer science's most fundamental and useful data structures. And this was just the beginning of Alex's journey into the organized, logical world of library systems and the data structures that power them.`,
  exercise: {
    starterCode: `/*
Problem: Implement Basic Stack Operations

You need to implement a Stack class with the following operations:
- push(item): Add an item to the top of the stack
- pop(): Remove and return the top item from the stack
- peek(): Return the top item without removing it
- isEmpty(): Check if the stack is empty
- size(): Return the number of items in the stack

The stack should follow LIFO (Last In, First Out) principle.

Examples:
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek()); // 3
console.log(stack.pop());  // 3
console.log(stack.size()); // 2
console.log(stack.isEmpty()); // false

Requirements:
- All operations should be O(1) time complexity
- Handle edge cases (empty stack operations)
- Use an array as the underlying data structure
*/

class Stack {
  constructor() {
    // Initialize your stack here
    // Your code here
  }
  
  push(item) {
    // Add item to the top of the stack
    // Your code here
  }
  
  pop() {
    // Remove and return the top item
    // Handle empty stack case
    // Your code here
  }
  
  peek() {
    // Return the top item without removing it
    // Handle empty stack case
    // Your code here
  }
  
  isEmpty() {
    // Check if the stack is empty
    // Your code here
  }
  
  size() {
    // Return the number of items in the stack
    // Your code here
  }
}`,
    solution: `/*
Problem: Implement Basic Stack Operations

Complete implementation of a Stack class with all core operations.
*/

class Stack {
  constructor() {
    // Use an array to store stack elements
    this.items = [];
  }
  
  push(item) {
    // Add item to the end of array (top of stack)
    this.items.push(item);
  }
  
  pop() {
    // Check if stack is empty
    if (this.isEmpty()) {
      throw new Error("Stack is empty - cannot pop");
    }
    // Remove and return the last item (top of stack)
    return this.items.pop();
  }
  
  peek() {
    // Return the last item without removing it
    if (this.isEmpty()) {
      throw new Error("Stack is empty - cannot peek");
    }
    return this.items[this.items.length - 1];
  }
  
  isEmpty() {
    // Stack is empty if array has no elements
    return this.items.length === 0;
  }
  
  size() {
    // Return the length of the array
    return this.items.length;
  }
  
  // Time Complexities:
  // push(): O(1) - adding to end of array
  // pop(): O(1) - removing from end of array
  // peek(): O(1) - accessing array element by index
  // isEmpty(): O(1) - checking array length
  // size(): O(1) - returning array length
  
  // Space Complexity: O(n) where n is the number of elements
}`,
    tests: [
      {
        name: "Basic push and peek operations",
        test: (code) => {
          try {
            const Stack = new Function(`${code}; return Stack;`)();
            const stack = new Stack();
            
            // Test empty stack
            if (!stack.isEmpty()) {
              return { passed: false, message: "New stack should be empty" };
            }
            
            if (stack.size() !== 0) {
              return { passed: false, message: "New stack should have size 0" };
            }
            
            // Test push and peek
            stack.push(1);
            stack.push(2);
            stack.push(3);
            
            if (stack.peek() !== 3) {
              return { passed: false, message: "peek() should return the last pushed item (3)" };
            }
            
            if (stack.size() !== 3) {
              return { passed: false, message: "Stack should have size 3 after pushing 3 items" };
            }
            
            if (stack.isEmpty()) {
              return { passed: false, message: "Stack with items should not be empty" };
            }
            
            return { passed: true };
          } catch (error) {
            return { passed: false, message: `Error: ${error.message}` };
          }
        },
        message: "Stack should handle push, peek, isEmpty, and size operations correctly."
      },
      {
        name: "LIFO behavior with pop operations",
        test: (code) => {
          try {
            const Stack = new Function(code + "; return Stack;")();
            const stack = new Stack();
            
            // Push items in order
            stack.push("first");
            stack.push("second");
            stack.push("third");
            
            // Pop should return items in reverse order (LIFO)
            const third = stack.pop();
            const second = stack.pop();
            const first = stack.pop();
            
            if (third !== "third" || second !== "second" || first !== "first") {
              return {
                passed: false,
                message: "LIFO order incorrect. Expected: third, second, first. Got: " + third + ", " + second + ", " + first
              };
            }
            
            if (!stack.isEmpty()) {
              return { passed: false, message: "Stack should be empty after popping all items" };
            }
            
            if (stack.size() !== 0) {
              return { passed: false, message: "Empty stack should have size 0" };
            }
            
            return { passed: true };
          } catch (error) {
            return { passed: false, message: `Error: ${error.message}` };
          }
        },
        message: "Stack should follow LIFO (Last In, First Out) principle."
      },
      {
        name: "Edge cases and error handling",
        test: (code) => {
          try {
            const Stack = new Function(code + "; return Stack;")();
            const stack = new Stack();
            
            // Test pop on empty stack
            try {
              stack.pop();
              return { passed: false, message: "pop() on empty stack should throw an error" };
            } catch {
              // Expected behavior
            }
            
            // Test peek on empty stack
            try {
              stack.peek();
              return { passed: false, message: "peek() on empty stack should throw an error" };
            } catch {
              // Expected behavior
            }
            
            // Test mixed operations
            stack.push(42);
            if (stack.peek() !== 42) {
              return { passed: false, message: "peek() should return 42" };
            }
            
            const popped = stack.pop();
            if (popped !== 42) {
              return { passed: false, message: "pop() should return 42" };
            }
            
            if (!stack.isEmpty()) {
              return { passed: false, message: "Stack should be empty after popping the only item" };
            }
            
            return { passed: true };
          } catch (error) {
            return { passed: false, message: `Error: ${error.message}` };
          }
        },
        message: "Stack should handle edge cases and throw appropriate errors for invalid operations."
      },
      {
        name: "Performance and data types",
        test: (code) => {
          try {
            const Stack = new Function(code + "; return Stack;")();
            const stack = new Stack();
            
            // Test with different data types
            stack.push(1);
            stack.push("string");
            stack.push([1, 2, 3]);
            stack.push({ key: "value" });
            stack.push(null);
            stack.push(undefined);
            
            if (stack.size() !== 6) {
              return { passed: false, message: "Stack should handle 6 different data types" };
            }
            
            // Test order preservation
            const items = [];
            while (!stack.isEmpty()) {
              items.push(stack.pop());
            }
            
            const expected = [undefined, null, { key: "value" }, [1, 2, 3], "string", 1];
            
            // Compare items (simplified comparison for objects and arrays)
            for (let i = 0; i < expected.length; i++) {
              if (JSON.stringify(items[i]) !== JSON.stringify(expected[i])) {
                return {
                  passed: false,
                  message: "Order incorrect at position " + i + ". Expected: " + JSON.stringify(expected[i]) + ", Got: " + JSON.stringify(items[i])
                };
              }
            }
            
            return { passed: true };
          } catch (error) {
            return { passed: false, message: `Error: ${error.message}` };
          }
        },
        message: "Stack should work with different data types and maintain correct order."
      },
      {
        name: "Large scale operations",
        test: (code) => {
          try {
            const Stack = new Function(code + "; return Stack;")();
            const stack = new Stack();
            
            // Test with larger number of operations
            const testSize = 1000;
            
            // Push many items
            for (let i = 0; i < testSize; i++) {
              stack.push(i);
            }
            
            if (stack.size() !== testSize) {
              return { passed: false, message: "Stack should have size " + testSize };
            }
            
            if (stack.peek() !== testSize - 1) {
              return { passed: false, message: "peek() should return " + (testSize - 1) };
            }
            
            // Pop half the items
            for (let i = 0; i < testSize / 2; i++) {
              const expected = testSize - 1 - i;
              const actual = stack.pop();
              if (actual !== expected) {
                return {
                  passed: false,
                  message: "pop() returned " + actual + ", expected " + expected
                };
              }
            }
            
            if (stack.size() !== testSize / 2) {
              return { passed: false, message: "Stack should have size " + (testSize / 2) };
            }
            
            return { passed: true };
          } catch (error) {
            return { passed: false, message: `Error: ${error.message}` };
          }
        },
        message: "Stack should handle large numbers of operations efficiently."
      }
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
