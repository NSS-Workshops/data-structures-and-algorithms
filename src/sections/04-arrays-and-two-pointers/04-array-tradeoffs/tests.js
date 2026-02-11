export const tests = [
  {
    name: "Test Exercise 1: measureInsertionScale function",
    test: (code) => {
      try {
        const testCode = code + `
        // Test measureInsertionScale function
        if (typeof measureInsertionScale === 'function') {
          // Capture console output to verify it's working
          const originalLog = console.log;
          let logOutput = [];
          console.log = (...args) => {
            logOutput.push(args.join(' '));
          };
          
          try {
            measureInsertionScale();
            console.log = originalLog;
            return { logOutput, hasFunction: true };
          } catch (error) {
            console.log = originalLog;
            throw error;
          }
        }
        return { hasFunction: false };
        `;
        
        const testResult = new Function(testCode)();
        
        if (!testResult.hasFunction) {
          return { passed: false, message: "measureInsertionScale function not found. Make sure to uncomment and implement it." };
        }
        
        // Verify that output was generated for different array sizes
        const hasSize10 = testResult.logOutput.some(line => line.includes('10 orders'));
        const hasSize10000 = testResult.logOutput.some(line => line.includes('10000 orders'));
        const hasSize1000000 = testResult.logOutput.some(line => line.includes('1000000 orders'));
        
        if (!hasSize10) {
          return { passed: false, message: "Should test with 10 orders" };
        }
        if (!hasSize10000) {
          return { passed: false, message: "Should test with 10,000 orders" };
        }
        if (!hasSize1000000) {
          return { passed: false, message: "Should test with 1,000,000 orders" };
        }
        
        // Verify timing information is included
        const hasTimingInfo = testResult.logOutput.some(line => line.includes('ms'));
        if (!hasTimingInfo) {
          return { passed: false, message: "Should include timing information" };
        }
        
        return { passed: true };
      } catch (error) {
        return { passed: false, message: error.message };
      }
    },
    message: "measureInsertionScale should test insertion performance at different scales and include timing information"
  },
  {
    name: "Test Exercise 2: analyzeDeletionPatterns function",
    test: (code) => {
      try {
        const testCode = code + `
        // Test analyzeDeletionPatterns function
        if (typeof analyzeDeletionPatterns === 'function') {
          // Capture console output
          const originalLog = console.log;
          let logOutput = [];
          console.log = (...args) => {
            logOutput.push(args.join(' '));
          };
          
          try {
            analyzeDeletionPatterns();
            console.log = originalLog;
            return { logOutput, hasFunction: true };
          } catch (error) {
            console.log = originalLog;
            throw error;
          }
        }
        return { hasFunction: false };
        `;
        
        const testResult = new Function(testCode)();
        
        if (!testResult.hasFunction) {
          return { passed: false, message: "analyzeDeletionPatterns function not found. Make sure to uncomment and implement it." };
        }
        
        // Verify that all three deletion patterns are tested
        const hasBeginningDeletion = testResult.logOutput.some(line => line.includes('Delete from beginning'));
        const hasMiddleDeletion = testResult.logOutput.some(line => line.includes('Delete from middle'));
        const hasEndDeletion = testResult.logOutput.some(line => line.includes('Delete from end'));
        
        if (!hasBeginningDeletion) {
          return { passed: false, message: "Should test deletion from beginning" };
        }
        if (!hasMiddleDeletion) {
          return { passed: false, message: "Should test deletion from middle" };
        }
        if (!hasEndDeletion) {
          return { passed: false, message: "Should test deletion from end" };
        }
        
        // Verify shift count information is included
        const hasShiftInfo = testResult.logOutput.some(line => line.includes('Elements shifted'));
        if (!hasShiftInfo) {
          return { passed: false, message: "Should include information about elements shifted" };
        }
        
        return { passed: true };
      } catch (error) {
        return { passed: false, message: error.message };
      }
    },
    message: "analyzeDeletionPatterns should test deletion from beginning, middle, and end with shift information"
  },
  {
    name: "Test Exercise 3: EfficientOrderManager class",
    test: (code) => {
      try {
        const testCode = code + `
        // Test EfficientOrderManager class
        if (typeof EfficientOrderManager === 'function') {
          const manager = new EfficientOrderManager();
          
          // Test initial state
          const initialCompleted = manager.completedCount;
          const initialOperations = manager.operationCount;
          
          // Test adding regular orders
          manager.addRegularOrder('Test Latte');
          const afterRegularCompleted = manager.completedCount;
          const afterRegularOperations = manager.operationCount;
          const regularOrdersLength = manager.regularOrders.length;
          const regularOrderContent = manager.regularOrders[0];
          
          // Test adding priority orders
          manager.addPriorityOrder('Urgent Espresso');
          const afterPriorityOperations = manager.operationCount;
          const priorityOrdersLength = manager.priorityOrders.length;
          const priorityOrderContent = manager.priorityOrders[0];
          
          // Test processing orders (priority first)
          const processedOrder = manager.processNextOrder();
          const afterProcessCompleted = manager.completedCount;
          const priorityOrdersAfterProcess = manager.priorityOrders.length;
          
          // Test processing regular order
          const regularOrder = manager.processNextOrder();
          const finalCompleted = manager.completedCount;
          const regularOrdersAfterProcess = manager.regularOrders.length;
          
          // Test empty queue
          const emptyResult = manager.processNextOrder();
          
          // Test showStatus method exists
          const hasShowStatus = typeof manager.showStatus === 'function';
          
          return {
            initialCompleted,
            initialOperations,
            afterRegularCompleted,
            afterRegularOperations,
            regularOrdersLength,
            regularOrderContent,
            afterPriorityOperations,
            priorityOrdersLength,
            priorityOrderContent,
            processedOrder,
            afterProcessCompleted,
            priorityOrdersAfterProcess,
            regularOrder,
            finalCompleted,
            regularOrdersAfterProcess,
            emptyResult,
            hasShowStatus,
            hasFunction: true
          };
        }
        return { hasFunction: false };
        `;
        
        const testResult = new Function(testCode)();
        
        if (!testResult.hasFunction) {
          return { passed: false, message: "EfficientOrderManager class not found. Make sure to uncomment and implement it." };
        }
        
        if (testResult.initialCompleted !== 0) {
          return { passed: false, message: "Initial completed count should be 0" };
        }
        if (testResult.initialOperations !== 0) {
          return { passed: false, message: "Initial operation count should be 0" };
        }
        if (testResult.afterRegularOperations !== 1) {
          return { passed: false, message: "Operation count should increment when adding regular order" };
        }
        if (testResult.regularOrdersLength !== 1) {
          return { passed: false, message: "Regular orders array should have one item" };
        }
        if (testResult.regularOrderContent !== 'Test Latte') {
          return { passed: false, message: "Regular order should be stored correctly" };
        }
        if (testResult.afterPriorityOperations !== 2) {
          return { passed: false, message: "Operation count should increment when adding priority order" };
        }
        if (testResult.priorityOrdersLength !== 1) {
          return { passed: false, message: "Priority orders array should have one item" };
        }
        if (!testResult.priorityOrderContent.includes('Urgent Espresso')) {
          return { passed: false, message: "Priority order should be stored with priority marker" };
        }
        if (!testResult.processedOrder) {
          return { passed: false, message: "Should return processed order" };
        }
        if (!testResult.processedOrder.includes('PRIORITY')) {
          return { passed: false, message: "Should process priority order first" };
        }
        if (testResult.afterProcessCompleted !== 1) {
          return { passed: false, message: "Completed count should increment" };
        }
        if (testResult.priorityOrdersAfterProcess !== 0) {
          return { passed: false, message: "Priority queue should be empty after processing" };
        }
        if (testResult.regularOrder !== 'Test Latte') {
          return { passed: false, message: "Should process regular order next" };
        }
        if (testResult.finalCompleted !== 2) {
          return { passed: false, message: "Completed count should be 2" };
        }
        if (testResult.regularOrdersAfterProcess !== 0) {
          return { passed: false, message: "Regular queue should be empty" };
        }
        if (testResult.emptyResult !== null) {
          return { passed: false, message: "Should return null when no orders to process" };
        }
        if (!testResult.hasShowStatus) {
          return { passed: false, message: "showStatus should be a method" };
        }
        
        return { passed: true };
      } catch (error) {
        return { passed: false, message: error.message };
      }
    },
    message: "EfficientOrderManager should manage regular and priority orders with proper state tracking"
  },
  {
    name: "Test Exercise 4: compareOrderProcessingStrategies function",
    test: (code) => {
      try {
        const testCode = code + `
        // Test compareOrderProcessingStrategies function
        if (typeof compareOrderProcessingStrategies === 'function') {
          // Capture console output
          const originalLog = console.log;
          let logOutput = [];
          console.log = (...args) => {
            logOutput.push(args.join(' '));
          };
          
          try {
            compareOrderProcessingStrategies();
            console.log = originalLog;
            return { logOutput, hasFunction: true };
          } catch (error) {
            console.log = originalLog;
            throw error;
          }
        }
        return { hasFunction: false };
        `;
        
        const testResult = new Function(testCode)();
        
        if (!testResult.hasFunction) {
          return { passed: false, message: "compareOrderProcessingStrategies function not found. Make sure to uncomment and implement it." };
        }
        
        // Verify that both strategies are tested
        const hasNaiveStrategy = testResult.logOutput.some(line => line.includes('Strategy 1') || line.includes('Naive'));
        const hasOptimizedStrategy = testResult.logOutput.some(line => line.includes('Strategy 2') || line.includes('Optimized'));
        
        if (!hasNaiveStrategy) {
          return { passed: false, message: "Should test naive strategy" };
        }
        if (!hasOptimizedStrategy) {
          return { passed: false, message: "Should test optimized strategy" };
        }
        
        // Verify performance comparison is included
        const hasPerformanceComparison = testResult.logOutput.some(line => line.includes('Performance Comparison') || line.includes('improvement'));
        if (!hasPerformanceComparison) {
          return { passed: false, message: "Should include performance comparison" };
        }
        
        // Verify timing information is included
        const hasTimingInfo = testResult.logOutput.some(line => line.includes('ms'));
        if (!hasTimingInfo) {
          return { passed: false, message: "Should include timing information" };
        }
        
        return { passed: true };
      } catch (error) {
        return { passed: false, message: error.message };
      }
    },
    message: "compareOrderProcessingStrategies should compare naive and optimized strategies with performance metrics"
  }
];