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
    name: "Test SongNode creation and playlist setup",
    test: (code) => {
      try {
        const testCode = code + `
        // Test song node creation
        const testSong = new SongNode("Test Song", "Test Artist", 180);
        const songString = testSong.toString();
        const hasDuration = testSong.duration === 180;
        
        // Test playlist linking
        const hasNext = song1.next === song2;
        const chainWorks = song1.next.next === song3;
        
        return ({ songString, hasDuration, hasNext, chainWorks });
        `;
        
        const testResult = new Function(testCode)();
        
        if (!testResult.songString.includes("Test Song - Test Artist (3:00)")) {
          return new TestResult({ passed: false, message: "SongNode toString() not formatting correctly" });
        }
        
        if (!testResult.hasDuration) {
          return new TestResult({ passed: false, message: "SongNode duration not stored correctly" });
        }
        
        if (!testResult.hasNext) {
          return new TestResult({ passed: false, message: "Playlist linking not working correctly" });
        }
        
        if (!testResult.chainWorks) {
          return new TestResult({ passed: false, message: "Playlist chain not connected properly" });
        }
        
        return new TestResult({ passed: true });
      } catch (error) {
        return new TestResult({ passed: false, message: error.message });
      }
    },
    message: "SongNode should work correctly with duration formatting and playlist linking."
  },
  {
    name: "Test calculatePlaylistDuration function",
    test: (code) => {
      try {
        const testCode = code + `
        let totalDuration = 0;
        
        if (typeof calculatePlaylistDuration === 'function') {
          totalDuration = calculatePlaylistDuration(song1);
        }
        
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
  },
  {
    name: "Test removeSongByTitle function",
    test: (code) => {
      try {
        const testCode = code + `
        // Create a test playlist
        const testSong1 = new SongNode("Song A", "Artist A", 180);
        const testSong2 = new SongNode("Song B", "Artist B", 200);
        const testSong3 = new SongNode("Song C", "Artist C", 220);
        
        testSong1.next = testSong2;
        testSong2.next = testSong3;
        
        let newHead = testSong1;
        let removedMiddle = false;
        let removedFirst = false;
        
        if (typeof removeSongByTitle === 'function') {
          // Remove middle song
          newHead = removeSongByTitle(newHead, "Song B");
          removedMiddle = newHead.next && newHead.next.title === "Song C";
          
          // Remove first song
          newHead = removeSongByTitle(newHead, "Song A");
          removedFirst = newHead && newHead.title === "Song C";
        }
        
        return ({ removedMiddle, removedFirst });
        `;
        
        const testResult = new Function(testCode)();
        
        if (typeof testResult.removedMiddle === 'undefined') {
          return new TestResult({ passed: false, message: "removeSongByTitle function not found. Make sure to uncomment and implement it." });
        }
        
        if (!testResult.removedMiddle) {
          return new TestResult({ passed: false, message: "removeSongByTitle should properly remove songs from the middle" });
        }
        
        if (!testResult.removedFirst) {
          return new TestResult({ passed: false, message: "removeSongByTitle should properly remove the first song and return new head" });
        }
        
        return new TestResult({ passed: true });
      } catch (error) {
        return new TestResult({ passed: false, message: error.message });
      }
    },
    message: "removeSongByTitle should remove songs from any position in the playlist."
  },
  {
    name: "Test reversePlaylist function",
    test: (code) => {
      try {
        const testCode = code + `
        // Create a test playlist
        const testSong1 = new SongNode("First", "Artist", 180);
        const testSong2 = new SongNode("Second", "Artist", 200);
        const testSong3 = new SongNode("Third", "Artist", 220);
        
        testSong1.next = testSong2;
        testSong2.next = testSong3;
        
        let reversedHead = null;
        let firstIsThird = false;
        let secondIsSecond = false;
        let thirdIsFirst = false;
        
        if (typeof reversePlaylist === 'function') {
          reversedHead = reversePlaylist(testSong1);
          
          if (reversedHead) {
            firstIsThird = reversedHead.title === "Third";
            secondIsSecond = reversedHead.next && reversedHead.next.title === "Second";
            thirdIsFirst = reversedHead.next && reversedHead.next.next && reversedHead.next.next.title === "First";
          }
        }
        
        return ({ firstIsThird, secondIsSecond, thirdIsFirst });
        `;
        
        const testResult = new Function(testCode)();
        
        if (typeof testResult.firstIsThird === 'undefined') {
          return new TestResult({ passed: false, message: "reversePlaylist function not found. Make sure to uncomment and implement it." });
        }
        
        if (!testResult.firstIsThird) {
          return new TestResult({ passed: false, message: "After reversal, first song should be 'Third'" });
        }
        
        if (!testResult.secondIsSecond) {
          return new TestResult({ passed: false, message: "After reversal, second song should be 'Second'" });
        }
        
        if (!testResult.thirdIsFirst) {
          return new TestResult({ passed: false, message: "After reversal, third song should be 'First'" });
        }
        
        return new TestResult({ passed: true });
      } catch (error) {
        return new TestResult({ passed: false, message: error.message });
      }
    },
    message: "reversePlaylist should correctly reverse the order of all songs."
  },
];

export { tests, TestResult };