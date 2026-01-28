import { TestResult } from "@nss-workshops/nss-core";

export const tests = [
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
    }
];