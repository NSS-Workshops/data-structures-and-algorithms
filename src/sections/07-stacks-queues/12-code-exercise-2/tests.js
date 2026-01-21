import { TestResult } from "@nss-workshops/nss-core";

export default [
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
];