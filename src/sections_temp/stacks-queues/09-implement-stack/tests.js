import { TestResult } from "@nss-workshops/nss-core";

export default [
  {
    name: "Stack basic operations",
    test: (code) => {
      try {
        const Stack = new Function(`${code}; return Stack;`)();
        const stack = new Stack();
        
        // Test push and size
        const pushResult1 = stack.push(1);
        const pushResult2 = stack.push(2);
        const pushResult3 = stack.push(3);
        
        const size = stack.size();
        const isEmpty = stack.isEmpty();
        
        if (pushResult1 === 1 && pushResult2 === 2 && pushResult3 === 3 && size === 3 && isEmpty === false) {
          return new TestResult({ passed: true });
        } else {
          return new TestResult({
            passed: false,
            message: `Push/size/isEmpty failed. Push results: ${pushResult1}, ${pushResult2}, ${pushResult3}. Size: ${size}, isEmpty: ${isEmpty}`
          });
        }
      } catch (error) {
        return new TestResult({
          passed: false,
          message: `Error: ${error.message}`
        });
      }
    },
    message: "Stack should support push, size, and isEmpty operations."
  },
  {
    name: "Stack LIFO behavior",
    test: (code) => {
      try {
        const Stack = new Function(`${code}; return Stack;`)();
        const stack = new Stack();
        
        stack.push("first");
        stack.push("second");
        stack.push("third");
        
        const peek1 = stack.peek();
        const pop1 = stack.pop();
        const peek2 = stack.peek();
        const pop2 = stack.pop();
        const pop3 = stack.pop();
        
        if (peek1 === "third" && pop1 === "third" && peek2 === "second" && pop2 === "second" && pop3 === "first") {
          return new TestResult({ passed: true });
        } else {
          return new TestResult({
            passed: false,
            message: `LIFO behavior failed. peek1: ${peek1}, pop1: ${pop1}, peek2: ${peek2}, pop2: ${pop2}, pop3: ${pop3}`
          });
        }
      } catch (error) {
        return new TestResult({
          passed: false,
          message: `Error: ${error.message}`
        });
      }
    },
    message: "Stack should follow LIFO (Last In, First Out) behavior."
  },
  {
    name: "Empty stack operations",
    test: (code) => {
      try {
        const Stack = new Function(`${code}; return Stack;`)();
        const stack = new Stack();
        
        const isEmpty1 = stack.isEmpty();
        const size1 = stack.size();
        
        let popError = false;
        let peekError = false;
        
        try {
          stack.pop();
        } catch (e) {
          popError = true;
        }
        
        try {
          stack.peek();
        } catch (e) {
          peekError = true;
        }
        
        if (isEmpty1 === true && size1 === 0 && popError === true && peekError === true) {
          return new TestResult({ passed: true });
        } else {
          return new TestResult({
            passed: false,
            message: `Empty stack handling failed. isEmpty: ${isEmpty1}, size: ${size1}, popError: ${popError}, peekError: ${peekError}`
          });
        }
      } catch (error) {
        return new TestResult({
          passed: false,
          message: `Error: ${error.message}`
        });
      }
    },
    message: "Stack should handle empty stack operations correctly and throw errors when appropriate."
  },
  {
    name: "Stack state after operations",
    test: (code) => {
      try {
        const Stack = new Function(`${code}; return Stack;`)();
        const stack = new Stack();
        
        stack.push(10);
        stack.push(20);
        stack.pop();
        stack.push(30);
        
        const finalSize = stack.size();
        const finalPeek = stack.peek();
        const finalIsEmpty = stack.isEmpty();
        
        if (finalSize === 2 && finalPeek === 30 && finalIsEmpty === false) {
          return new TestResult({ passed: true });
        } else {
          return new TestResult({
            passed: false,
            message: `Final state incorrect. Size: ${finalSize}, Peek: ${finalPeek}, isEmpty: ${finalIsEmpty}`
          });
        }
      } catch (error) {
        return new TestResult({
          passed: false,
          message: `Error: ${error.message}`
        });
      }
    },
    message: "Stack should maintain correct state after mixed operations."
  }
];