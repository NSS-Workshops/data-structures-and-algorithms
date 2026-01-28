export const tests = [
  {
    name: "Test Queue class implementation & functionality",
    test: (code) => {
      try {
        
        const testCode = code + `
        // Test the provided Queue class
        const queue = new Queue();
        
        // Test basic operations
        queue.enqueue("test1");
        queue.enqueue("test2");
        
        const peekResult = queue.peek();
        const dequeueResult = queue.dequeue();
        const sizeResult = queue.size();
        const isEmptyResult = queue.isEmpty();
        
        return ({ peekResult, dequeueResult, sizeResult, isEmptyResult });
        `;
        
        const testResult = new Function(testCode)();
        
        if (testResult.peekResult !== "test1") {
          return { passed: false, message: "Queue peek() not working correctly - should return first item" };
        }
        
        if (testResult.dequeueResult !== "test1") {
          return { passed: false, message: "Queue dequeue() not working correctly - should return first item" };
        }
        
        if (testResult.sizeResult !== 1) {
          return { passed: false, message: "Queue size() not working correctly" };
        }
        
        if (testResult.isEmptyResult !== false) {
          return { passed: false, message: "Queue isEmpty() not working correctly" };
        }
        
        return { passed: true };
      } catch (error) {
        return { passed: false, message: error.message };
      }
    },
    message: "The provided Queue class should work correctly for all basic operations."
  },
  {
    name: "Test processAllHoldRequests function",
      test: (code) => {
        try {
          // Execute the code to get the functions
          const testCode = code + `
          // Test processAllHoldRequests
          const testQueue = new Queue();
          testQueue.enqueue("Mrs. Patterson");
          testQueue.enqueue("Dr. Williams");
          testQueue.enqueue("Sarah Kim");
          
          let result = [];
          if (typeof processAllHoldRequests === 'function') {
            result = processAllHoldRequests(testQueue);
          }
          return ({ result, queueEmpty: testQueue.isEmpty() });
          `;
          const testResult = new Function(testCode)();
          if (typeof testResult.result === 'undefined') {
            return { passed: false, message: "processAllHoldRequests function not found. Make sure to uncomment and implement it." };
          }
          
          if (!Array.isArray(testResult.result)) {
            return { passed: false, message: "processAllHoldRequests should return an array" };
          }
          
          if (testResult.result.length !== 3) {
            return { passed: false, message: "processAllHoldRequests should return all 3 patrons" };
          }
          
          if (!testResult.queueEmpty) {
            return { passed: false, message: "Queue should be empty after processing all hold requests" };
          }
          
          // Check FIFO order
          const expected = ["Mrs. Patterson", "Dr. Williams", "Sarah Kim"];
          for (let i = 0; i < expected.length; i++) {
            if (testResult.result[i] !== expected[i]) {
              return { passed: false, message: `Expected ${expected[i]} at position ${i}, got ${testResult.result[i]}` };
            }
          }
          
          return { passed: true };
        } catch (error) {
          return { passed: false, message: error.message };
        }
      },
      message: "processAllHoldRequests should process all patrons in FIFO order and empty the queue."
    },
    {
      name: "Test findPatronInQueue function",
      test: (code) => {
        try {
          // Inject Queue class and execute the code
          const testCode = code + `
          // Test findPatronInQueue
          const testQueue = new Queue();
          testQueue.enqueue("Mrs. Patterson");
          testQueue.enqueue("Dr. Williams");
          testQueue.enqueue("Sarah Kim");
          
          let foundResult = false;
          let notFoundResult = false;
          let queueSizeAfter = 0;
          
          if (typeof findPatronInQueue === 'function') {
            foundResult = findPatronInQueue(testQueue, "Dr. Williams");
            notFoundResult = findPatronInQueue(testQueue, "Mr. Johnson");
            queueSizeAfter = testQueue.size();
          }
          
          return ({ foundResult, notFoundResult, queueSizeAfter });
          `;
          
          const testResult = new Function(testCode)();
          
          if (typeof testResult.foundResult === 'undefined') {
            return { passed: false, message: "findPatronInQueue function not found. Make sure to uncomment and implement it." };
          }
          
          if (testResult.foundResult !== true) {
            return { passed: false, message: "findPatronInQueue should return true when patron is found" };
          }
          
          if (testResult.notFoundResult !== false) {
            return { passed: false, message: "findPatronInQueue should return false when patron is not found" };
          }
          
          if (testResult.queueSizeAfter !== 3) {
            return { passed: false, message: "Queue should still have all 3 patrons after searching (non-destructive search)" };
          }
          
          return { passed: true };
        } catch (error) {
          return { passed: false, message: error.message };
        }
      },
      message: "findPatronInQueue should search without permanently removing patrons from the queue."
    },
    {
      name: "Test processUntilTargetPatron function",
      test: (code) => {
        try {
          const testCode = code + `
          // Test processUntilTargetPatron
          const testQueue = new Queue();
          testQueue.enqueue("Mrs. Patterson");
          testQueue.enqueue("Dr. Williams");
          testQueue.enqueue("Sarah Kim");
          testQueue.enqueue("Mr. Rodriguez");
          
          let result = [];
          let remainingSize = 0;
          
          if (typeof processUntilTargetPatron === 'function') {
            result = processUntilTargetPatron(testQueue, "Sarah Kim");
            remainingSize = testQueue.size();
          }
          
          return ({ result, remainingSize });
          `;
          
          const testResult = new Function(testCode)();
          
          if (typeof testResult.result === 'undefined') {
            return { passed: false, message: "processUntilTargetPatron function not found. Make sure to uncomment and implement it." };
          }
          
          if (!Array.isArray(testResult.result)) {
            return { passed: false, message: "processUntilTargetPatron should return an array" };
          }
          
          // Should process Mrs. Patterson, Dr. Williams, Sarah Kim (in that order due to FIFO)
          const expected = ["Mrs. Patterson", "Dr. Williams", "Sarah Kim"];
          if (testResult.result.length !== expected.length) {
            return { passed: false, message: `Expected ${expected.length} processed patrons, got ${testResult.result.length}` };
          }
          
          for (let i = 0; i < expected.length; i++) {
            if (testResult.result[i] !== expected[i]) {
              return { passed: false, message: `Expected ${expected[i]} at position ${i}, got ${testResult.result[i]}` };
            }
          }
          
          if (testResult.remainingSize !== 1) {
            return { passed: false, message: "Should have 1 patron remaining in queue (Mr. Rodriguez)" };
          }
          
          return { passed: true };
        } catch (error) {
          return { passed: false, message: error.message };
        }
      },
      message: "processUntilTargetPatron should process patrons until target is found and stop."
    },
    {
      name: "Test processUntilTargetPatron with missing target",
      test: (code) => {
        try {
          const testCode = code + `
          // Test processUntilTargetPatron with missing target
          const testQueue = new Queue();
          testQueue.enqueue("Mrs. Patterson");
          testQueue.enqueue("Dr. Williams");
          testQueue.enqueue("Sarah Kim");
          
          let result = [];
          let remainingSize = 0;
          
          if (typeof processUntilTargetPatron === 'function') {
            result = processUntilTargetPatron(testQueue, "Mr. Unknown");
            remainingSize = testQueue.size();
          }
          
          return ({ result, remainingSize });
          `;
          
          const testResult = new Function(testCode)();
          
          if (typeof testResult.result === 'undefined') {
            return { passed: false, message: "processUntilTargetPatron function not found" };
          }
          
          // Should process all patrons when target not found
          const expected = ["Mrs. Patterson", "Dr. Williams", "Sarah Kim"];
          if (testResult.result.length !== expected.length) {
            return { passed: false, message: `When target not found, should process all patrons. Expected ${expected.length}, got ${testResult.result.length}` };
          }
          
          if (testResult.remainingSize !== 0) {
            return { passed: false, message: "Queue should be empty when target not found and all patrons processed" };
          }
          
          return { passed: true };
        } catch (error) {
          return { passed: false, message: error.message };
        }
      },
      message: "processUntilTargetPatron should process all patrons when target is not found."
    }
];