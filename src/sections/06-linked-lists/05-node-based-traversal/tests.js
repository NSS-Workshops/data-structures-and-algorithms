// Test utilities for node-based traversal exercises
class TestResult {
  constructor({ passed, message }) {
    this.passed = passed;
    this.message = message;
  }
}

// Test functions for the node-based traversal exercises
const tests = [
  {
    name: "Test calculatePlaylistDuration function",
    test: (code) => {
      try {
        const testCode = code + `
        let totalDuration = 0;
        // Create a test playlist
        const testSong1 = new SongNode("Song A", "Artist A", 355);
        const testSong2 = new SongNode("Song B", "Artist B", 391);
        const testSong3 = new SongNode("Song C", "Artist C", 482);
        const testSong4 = new SongNode("Song D", "Artist D", 356);
        
        testSong1.next = testSong2;
        testSong2.next = testSong3;
        testSong3.next = testSong4;
        
        totalDuration = calculatePlaylistDuration(testSong1);
        
        return ({ totalDuration });
        `;
        const testResult = new Function(testCode)();
        if (typeof testResult.totalDuration === 'undefined') {
          return new TestResult({ passed: false, message: "calculatePlaylistDuration function not found. Make sure to uncomment and implement it." });
        }
        // Expected total: 355 + 391 + 482 + 356 = 1584 seconds
        if (testResult.totalDuration !== 1584) {
          return new TestResult({ passed: false, message: `Expected total duration of 1584 seconds, got ${testResult.totalDuration}` });
        }
        
        return new TestResult({ passed: true });
      } catch (error) {
        return new TestResult({ passed: false, message: error.message });
      }
    },
    message: "calculatePlaylistDuration should correctly sum all song durations."
  }
];

export { tests, TestResult };