import { TestResult } from "@nss-workshops/nss-core";

export default [
  {
    name: "Queue basic operations",
    test: (code) => {
      try {
        const Queue = new Function(`${code}; return Queue;`)();
        const queue = new Queue();
        
        // Test isEmpty on new queue
        const emptyResult = queue.isEmpty();
        const sizeResult = queue.size();
        
        // Test enqueue operation
        queue.enqueue("Request A");
        const notEmptyResult = queue.isEmpty();
        const sizeAfterEnqueue = queue.size();
        
        // Test peek operation
        const peekResult = queue.peek();
        const sizeAfterPeek = queue.size();
        
        // Test multiple enqueues
        queue.enqueue("Request B");
        queue.enqueue("Request C");
        const finalSize = queue.size();
        const finalPeek = queue.peek();
        
        if (emptyResult === true && sizeResult === 0 && notEmptyResult === false && 
            sizeAfterEnqueue === 1 && peekResult === "Request A" && sizeAfterPeek === 1 &&
            finalSize === 3 && finalPeek === "Request A") {
          return new TestResult({ passed: true });
        } else {
          return new TestResult({
            passed: false,
            message: `Basic operations failed. Empty: ${emptyResult}, Size: ${sizeResult}, NotEmpty: ${notEmptyResult}, SizeAfterEnqueue: ${sizeAfterEnqueue}, Peek: ${peekResult}, SizeAfterPeek: ${sizeAfterPeek}, FinalSize: ${finalSize}, FinalPeek: ${finalPeek}`
          });
        }
      } catch (error) {
        return new TestResult({
          passed: false,
          message: `Error: ${error.message}`
        });
      }
    },
    message: "Queue should handle basic operations correctly (enqueue, peek, isEmpty, size)."
  },
  {
    name: "Queue FIFO behavior",
    test: (code) => {
      try {
        const Queue = new Function(`${code}; return Queue;`)();
        const queue = new Queue();
        
        queue.enqueue("First");
        queue.enqueue("Second");
        queue.enqueue("Third");
        
        const dequeue1 = queue.dequeue();
        const dequeue2 = queue.dequeue();
        const sizeAfterDequeues = queue.size();
        const dequeue3 = queue.dequeue();
        const finalEmpty = queue.isEmpty();
        
        if (dequeue1 === "First" && dequeue2 === "Second" && sizeAfterDequeues === 1 && 
            dequeue3 === "Third" && finalEmpty === true) {
          return new TestResult({ passed: true });
        } else {
          return new TestResult({
            passed: false,
            message: `FIFO behavior failed. Dequeue1: ${dequeue1}, Dequeue2: ${dequeue2}, SizeAfterDequeues: ${sizeAfterDequeues}, Dequeue3: ${dequeue3}, FinalEmpty: ${finalEmpty}`
          });
        }
      } catch (error) {
        return new TestResult({
          passed: false,
          message: `Error: ${error.message}`
        });
      }
    },
    message: "Queue should follow FIFO (First In, First Out) behavior."
  },
  {
    name: "Empty queue operations",
    test: (code) => {
      try {
        const Queue = new Function(`${code}; return Queue;`)();
        const queue = new Queue();
        
        const dequeueResult = queue.dequeue();
        const peekResult = queue.peek();
        const isEmptyResult = queue.isEmpty();
        const sizeResult = queue.size();
        
        if (dequeueResult === null && peekResult === null && isEmptyResult === true && sizeResult === 0) {
          return new TestResult({ passed: true });
        } else {
          return new TestResult({
            passed: false,
            message: `Empty queue handling failed. Dequeue: ${dequeueResult}, Peek: ${peekResult}, isEmpty: ${isEmptyResult}, Size: ${sizeResult}`
          });
        }
      } catch (error) {
        return new TestResult({
          passed: false,
          message: `Error: ${error.message}`
        });
      }
    },
    message: "Queue should handle empty queue operations gracefully and return null."
  },
  {
    name: "Mixed queue operations",
    test: (code) => {
      try {
        const Queue = new Function(`${code}; return Queue;`)();
        const queue = new Queue();
        
        queue.enqueue(10);
        queue.enqueue(20);
        const first = queue.dequeue(); // Should be 10
        
        queue.enqueue(30);
        const second = queue.dequeue(); // Should be 20
        const peek = queue.peek(); // Should be 30
        const size = queue.size(); // Should be 1
        
        if (first === 10 && second === 20 && peek === 30 && size === 1) {
          return new TestResult({ passed: true });
        } else {
          return new TestResult({
            passed: false,
            message: `Mixed operations failed. First: ${first}, Second: ${second}, Peek: ${peek}, Size: ${size}`
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
  }
];