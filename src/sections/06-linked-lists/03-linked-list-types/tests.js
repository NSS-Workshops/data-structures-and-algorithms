// Test utilities for linked list types exercises
class TestResult {
  constructor({ passed, message }) {
    this.passed = passed;
    this.message = message;
  }
}

// Test functions for the linked list types exercises
const tests = [
  {
    name: "Test DoublySongNode creation and linking",
    test: (code) => {
      try {
        const testCode = code + `
        // Test doubly linked node creation
        const testSong1 = new DoublySongNode("Test Song 1", "Test Artist 1");
        const testSong2 = new DoublySongNode("Test Song 2", "Test Artist 2");
        
        testSong1.next = testSong2;
        testSong2.prev = testSong1;
        
        const hasNext = testSong1.next === testSong2;
        const hasPrev = testSong2.prev === testSong1;
        const song1String = testSong1.toString();
        
        return ({ hasNext, hasPrev, song1String });
        `;
        
        const testResult = new Function(testCode)();
        
        if (!testResult.hasNext) {
          return new TestResult({ passed: false, message: "DoublySongNode next linking not working correctly" });
        }
        
        if (!testResult.hasPrev) {
          return new TestResult({ passed: false, message: "DoublySongNode prev linking not working correctly" });
        }
        
        if (testResult.song1String !== "Test Song 1 - Test Artist 1") {
          return new TestResult({ passed: false, message: "DoublySongNode toString() not working correctly" });
        }
        
        return new TestResult({ passed: true });
      } catch (error) {
        return new TestResult({ passed: false, message: error.message });
      }
    },
    message: "DoublySongNode should support bidirectional linking with next and prev pointers."
  },
  {
    name: "Test navigatePlaylist function",
    test: (code) => {
      try {
        const testCode = code + `
        let forwardResult = null;
        let backwardResult = null;
        let multiStepResult = null;
        
        if (typeof navigatePlaylist === 'function') {
          // Test forward navigation
          forwardResult = navigatePlaylist(song2, "forward", 1);
          
          // Test backward navigation
          backwardResult = navigatePlaylist(song3, "backward", 1);
          
          // Test multi-step navigation
          multiStepResult = navigatePlaylist(song1, "forward", 2);
        }
        
        return ({ 
          forwardResult: forwardResult ? forwardResult.title : null,
          backwardResult: backwardResult ? backwardResult.title : null,
          multiStepResult: multiStepResult ? multiStepResult.title : null
        });
        `;
        
        const testResult = new Function(testCode)();
        
        if (typeof testResult.forwardResult === 'undefined') {
          return new TestResult({ passed: false, message: "navigatePlaylist function not found. Make sure to uncomment and implement it." });
        }
        
        if (testResult.forwardResult !== "Stairway to Heaven") {
          return new TestResult({ passed: false, message: "Forward navigation should move from Hotel California to Stairway to Heaven" });
        }
        
        if (testResult.backwardResult !== "Hotel California") {
          return new TestResult({ passed: false, message: "Backward navigation should move from Stairway to Heaven to Hotel California" });
        }
        
        if (testResult.multiStepResult !== "Stairway to Heaven") {
          return new TestResult({ passed: false, message: "Multi-step navigation should move 2 steps forward from Bohemian Rhapsody" });
        }
        
        return new TestResult({ passed: true });
      } catch (error) {
        return new TestResult({ passed: false, message: error.message });
      }
    },
    message: "navigatePlaylist should handle forward, backward, and multi-step navigation."
  }
];

export { tests, TestResult };