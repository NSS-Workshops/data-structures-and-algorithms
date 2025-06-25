import { TestResult } from "../../utils/test_utils";

export const codeExcerciseTwoChapter = {
  id: 'a90586a1',
  title: 'Module 5 - Code Excercise 2',
  sectionId: 'stacks-queues',
  previousChapterId: null,
  content: `
  Hi 👋,
You'll be guiding your partner through the coding problem on the right side of your screen. 

⚠️ **Please do not share this URL / problem before class.**  
Revealing the question early defeats the purpose of simulating a real-world interview, where candidates do not know the problem in advance. Let's give your partner the chance to experience the challenge authentically.

🧠 **Before class:**  
Take time to study the problem. During the session, you'll have 90 minutes in your breakout room to run a mock interview with your partner. Be sure to take turns acting as the interviewer and interviewee.

🗣️ **As the interviewer, your responsibilities are:**
- Send this URL to your partner (copy and past the whole url and slack it directly to you partner)
- Briefly introduce the problem
- Never give away the answer
- Take notes and provide feedback
- Fill out this [feedback form](https://forms.gle/sXK3tJaGNEk52jm4A)

🗣️ **As the interviewee, your responsibilities are:**
- Ask clarifying questions
- Follow the steps in the [solving guide](https://forms.gle/sXK3tJaGNEk52jm4A):
    Step 1: Clarify
    Step 2: Plan
    Step 3: Implement
    Step 4: Test
    Step 5: Optimize

🪞 **After the first interview:**  
Leave 10–15 minutes to reflect, share feedback, and then switch roles.

Best of luck, and enjoy the practice! 🚀

## Problem: Implement Queue using Two Stacks

Implement a first-in-first-out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (enqueue, dequeue, peek, empty).

Implement the MyQueue constructor function:
- \`enqueue(x)\` - Pushes element x to the back of the queue
- \`dequeue()\` - Removes the element from the front of the queue and returns it
- \`peek()\` - Returns the element at the front of the queue
- \`empty()\` - Returns true if the queue is empty, false otherwise

### Follow-up Questions:
- What are the time complexities of each operation?
- What is the space complexity?
- How does this compare to a queue implemented with a linked list?`,
  exercise: {
    starterCode:`/*
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
};`,
    solution:`/*
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

// Space Complexity: O(n) - where n is the number of elements in queue`,
    tests:[
      {
        name: "Basic queue operations",
        test: (code) => {
          try {
            const MyQueue = new Function(`${code}\n; return MyQueue;`)();
            
            const queue = new MyQueue();
            
            // Test enqueue and peek
            queue.enqueue(1);
            queue.enqueue(2);
            
            const peek1 = queue.peek();
            const dequeue1 = queue.dequeue();
            const peek2 = queue.peek();
            const dequeue2 = queue.dequeue();
            const isEmpty = queue.empty();
            
            if (peek1 === 1 && dequeue1 === 1 && peek2 === 2 && dequeue2 === 2 && isEmpty === true) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Expected FIFO behavior. Got peek1=${peek1}, dequeue1=${dequeue1}, peek2=${peek2}, dequeue2=${dequeue2}, isEmpty=${isEmpty}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Queue should follow FIFO (First-In-First-Out) behavior."
      },
      {
        name: "Empty queue operations",
        test: (code) => {
          try {
            const MyQueue = new Function(`${code}\n; return MyQueue;`)();
            
            const queue = new MyQueue();
            
            const isEmpty1 = queue.empty();
            
            queue.enqueue(1);
            const isEmpty2 = queue.empty();
            
            queue.dequeue();
            const isEmpty3 = queue.empty();
            
            if (isEmpty1 === true && isEmpty2 === false && isEmpty3 === true) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Empty check failed. Got isEmpty1=${isEmpty1}, isEmpty2=${isEmpty2}, isEmpty3=${isEmpty3}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Queue should correctly identify when it's empty."
      },
      {
        name: "Mixed operations",
        test: (code) => {
          try {
            const MyQueue = new Function(`${code}\n; return MyQueue;`)();
            
            const queue = new MyQueue();
            
            // Mix enqueue and dequeue operations
            queue.enqueue(1);
            queue.enqueue(2);
            const first = queue.dequeue(); // Should be 1
            
            queue.enqueue(3);
            const second = queue.dequeue(); // Should be 2
            const third = queue.dequeue();  // Should be 3
            
            const isEmpty = queue.empty();
            
            if (first === 1 && second === 2 && third === 3 && isEmpty === true) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Mixed operations failed. Got first=${first}, second=${second}, third=${third}, isEmpty=${isEmpty}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Queue should handle mixed enqueue/dequeue operations correctly."
      },
      {
        name: "Peek without dequeue",
        test: (code) => {
          try {
            const MyQueue = new Function(`${code}\n; return MyQueue;`)();
            
            const queue = new MyQueue();
            
            queue.enqueue(5);
            queue.enqueue(10);
            
            const peek1 = queue.peek();
            const peek2 = queue.peek(); // Should be same as peek1
            const dequeue1 = queue.dequeue();
            const peek3 = queue.peek(); // Should be different now
            
            if (peek1 === 5 && peek2 === 5 && dequeue1 === 5 && peek3 === 10) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Peek operations failed. Got peek1=${peek1}, peek2=${peek2}, dequeue1=${dequeue1}, peek3=${peek3}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Peek should return front element without removing it."
      }
    ]
  }
};