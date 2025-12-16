// Test utilities for linked list tradeoffs exercises
class TestResult {
  constructor({ passed, message }) {
    this.passed = passed;
    this.message = message;
  }
}

// Test functions for the linked list tradeoffs exercises
const tests = [
  {
    name: "Test ArrayPlaylist and LinkedPlaylist basic functionality",
    test: (code) => {
      try {
        const testCode = code + `
        // Test both playlist types
        const arrayPL = new ArrayPlaylist();
        const linkedPL = new LinkedPlaylist();
        
        arrayPL.addSong("Test Song", "Test Artist", 180);
        linkedPL.addSong("Test Song", "Test Artist", 180);
        
        const arraySong = arrayPL.getSongAt(0);
        const linkedSong = linkedPL.getSongAt(0);
        
        const arrayWorks = arraySong && arraySong.title === "Test Song";
        const linkedWorks = linkedSong && linkedSong.title === "Test Song";
        
        return ({ arrayWorks, linkedWorks });
        `;
        
        const testResult = new Function(testCode)();
        
        if (!testResult.arrayWorks) {
          return new TestResult({ passed: false, message: "ArrayPlaylist not working correctly" });
        }
        
        if (!testResult.linkedWorks) {
          return new TestResult({ passed: false, message: "LinkedPlaylist not working correctly" });
        }
        
        return new TestResult({ passed: true });
      } catch (error) {
        return new TestResult({ passed: false, message: error.message });
      }
    },
    message: "Both ArrayPlaylist and LinkedPlaylist should work correctly for basic operations."
  },
  {
    name: "Test comparePerformance function",
    test: (code) => {
      try {
        const testCode = code + `
        const arrayPL = new ArrayPlaylist();
        const linkedPL = new LinkedPlaylist();
        
        let accessResult = null;
        let addEndResult = null;
        let addBeginResult = null;
        
        if (typeof comparePerformance === 'function') {
          accessResult = comparePerformance(arrayPL, linkedPL, "access");
          addEndResult = comparePerformance(arrayPL, linkedPL, "add_end");
          addBeginResult = comparePerformance(arrayPL, linkedPL, "add_beginning");
        }
        
        return ({ 
          accessResult: accessResult ? accessResult.arrayComplexity : null,
          addEndResult: addEndResult ? addEndResult.arrayComplexity : null,
          addBeginResult: addBeginResult ? addBeginResult.linkedComplexity : null
        });
        `;
        
        const testResult = new Function(testCode)();
        
        if (!testResult.accessResult) {
          return new TestResult({ passed: false, message: "comparePerformance function not found. Make sure to uncomment and implement it." });
        }
        
        if (testResult.accessResult !== "O(1)") {
          return new TestResult({ passed: false, message: "Array access should be O(1)" });
        }
        
        if (testResult.addEndResult !== "O(1)") {
          return new TestResult({ passed: false, message: "Array add to end should be O(1)" });
        }
        
        if (testResult.addBeginResult !== "O(1)") {
          return new TestResult({ passed: false, message: "Linked list add to beginning should be O(1)" });
        }
        
        return new TestResult({ passed: true });
      } catch (error) {
        return new TestResult({ passed: false, message: error.message });
      }
    },
    message: "comparePerformance should correctly analyze time complexities for different operations."
  }
];

export { tests, TestResult };