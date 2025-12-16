export const tests = [
  {
    name: "Test Exercise 1: addOrders function",
    test: (code) => {
      try {
        const testCode = code + `
        // Test addOrders function
        if (typeof addOrders === 'function') {
          const testOrders = ["Latte", "Cappuccino"];
          const result = addOrders(testOrders);
          return { result, length: result.length };
        }
        return { result: null, length: 0 };
        `;
        
        const testResult = new Function(testCode)();
        
        if (!testResult.result) {
          return { passed: false, message: "addOrders function not found. Make sure to uncomment and implement it." };
        }
        
        if (testResult.length !== 5) {
          return { passed: false, message: `Expected 5 orders total, got ${testResult.length}` };
        }
        
        const expected = ["Latte", "Cappuccino", "Flat White", "Cold Brew", "Double Espresso"];
        for (let i = 0; i < expected.length; i++) {
          if (testResult.result[i] !== expected[i]) {
            return { passed: false, message: `Expected "${expected[i]}" at position ${i}, got "${testResult.result[i]}"` };
          }
        }
        
        return { passed: true };
      } catch (error) {
        return { passed: false, message: error.message };
      }
    },
    message: "addOrders should add three specific orders to Maya's array"
  },
  {
    name: "Test Exercise 2: Priority order insertion",
    test: (code) => {
      try {
        const testCode = code + `
        // Test priority order insertion
        let testQueue = ["Americano", "Latte", "Mocha", "Espresso"];
        testQueue.splice(0, 0, "VIP: Affogato");
        testQueue.splice(1, 0, "VIP: Cortado");
        return { result: testQueue, length: testQueue.length };
        `;
        
        const testResult = new Function(testCode)();
        
        if (testResult.length !== 6) {
          return { passed: false, message: `Expected 6 orders total after insertions, got ${testResult.length}` };
        }
        
        if (testResult.result[0] !== "VIP: Affogato") {
          return { passed: false, message: `Expected "VIP: Affogato" at position 0, got "${testResult.result[0]}"` };
        }
        
        if (testResult.result[1] !== "VIP: Cortado") {
          return { passed: false, message: `Expected "VIP: Cortado" at position 1, got "${testResult.result[1]}"` };
        }
        
        return { passed: true };
      } catch (error) {
        return { passed: false, message: error.message };
      }
    },
    message: "Should correctly insert VIP orders at the beginning of the queue"
  },
  {
    name: "Test Exercise 3: Fix order mistakes",
    test: (code) => {
      try {
        const testCode = code + `
        // Test fixing order mistakes
        let testOrders = ["Large Latter", "Cappuccino", "Wrong Order 1", "Wrong Order 2", "Espresso"];
        testOrders[0] = "Large Latte";
        testOrders.splice(2, 2);
        return { result: testOrders, length: testOrders.length };
        `;
        
        const testResult = new Function(testCode)();
        
        if (testResult.length !== 3) {
          return { passed: false, message: `Expected 3 orders after fixes, got ${testResult.length}` };
        }
        
        if (testResult.result[0] !== "Large Latte") {
          return { passed: false, message: `Expected "Large Latte" at position 0, got "${testResult.result[0]}"` };
        }
        
        const expected = ["Large Latte", "Cappuccino", "Espresso"];
        for (let i = 0; i < expected.length; i++) {
          if (testResult.result[i] !== expected[i]) {
            return { passed: false, message: `Expected "${expected[i]}" at position ${i}, got "${testResult.result[i]}"` };
          }
        }
        
        return { passed: true };
      } catch (error) {
        return { passed: false, message: error.message };
      }
    },
    message: "Should fix the typo and remove the wrong orders"
  },
  {
    name: "Test Exercise 4: processOrders function",
    test: (code) => {
      try {
        const testCode = code + `
        // Test processOrders function
        let output = [];
        const originalLog = console.log;
        console.log = (...args) => output.push(args.join(' '));
        
        if (typeof processOrders === 'function') {
          const testOrders = ["Cappuccino", "Iced Latte"];
          processOrders(testOrders);
        }
        
        console.log = originalLog;
        return { output, hasFunction: typeof processOrders === 'function' };
        `;
        
        const testResult = new Function(testCode)();
        
        if (!testResult.hasFunction) {
          return { passed: false, message: "processOrders function not found. Make sure to uncomment and implement it." };
        }
        
        if (testResult.output.length !== 2) {
          return { passed: false, message: `Expected 2 console.log outputs, got ${testResult.output.length}` };
        }
        
        const expectedPattern1 = /Making order 1 of 2: Cappuccino/;
        const expectedPattern2 = /Making order 2 of 2: Iced Latte/;
        
        if (!expectedPattern1.test(testResult.output[0])) {
          return { passed: false, message: `First output should match "Making order 1 of 2: Cappuccino", got "${testResult.output[0]}"` };
        }
        
        if (!expectedPattern2.test(testResult.output[1])) {
          return { passed: false, message: `Second output should match "Making order 2 of 2: Iced Latte", got "${testResult.output[1]}"` };
        }
        
        return { passed: true };
      } catch (error) {
        return { passed: false, message: error.message };
      }
    },
    message: "processOrders should loop through orders and print progress"
  }
];