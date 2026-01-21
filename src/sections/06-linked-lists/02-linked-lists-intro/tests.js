// Test utilities for linked lists introduction exercises
class TestResult {
  constructor({ passed, message }) {
    this.passed = passed;
    this.message = message;
  }
}

// Test functions for the linked lists introduction exercises
const tests = [
  {
    name: "Test SongNode class and playlist creation",
    test: (code) => {
      try {
        const testCode = code + `
        // Test SongNode creation and linking
        const testSong1 = new SongNode("Test Song 1", "Test Artist 1");
        const testSong2 = new SongNode("Test Song 2", "Test Artist 2");
        testSong1.next = testSong2;
        
        const song1String = testSong1.toString();
        const song2String = testSong2.toString();
        const hasNext = testSong1.next === testSong2;
        const nextIsNull = testSong2.next === null;
        
        return ({ song1String, song2String, hasNext, nextIsNull });
        `;
        
        const testResult = new Function(testCode)();
        
        if (testResult.song1String !== "Test Song 1 - Test Artist 1") {
          return new TestResult({ passed: false, message: "SongNode toString() not working correctly" });
        }
        
        if (!testResult.hasNext) {
          return new TestResult({ passed: false, message: "Song linking not working correctly" });
        }
        
        if (!testResult.nextIsNull) {
          return new TestResult({ passed: false, message: "Last song should have next = null" });
        }
        
        return new TestResult({ passed: true });
      } catch (error) {
        return new TestResult({ passed: false, message: error.message });
      }
    },
    message: "SongNode class should work correctly with title, artist, and next properties."
  },
  {
    name: "Test playNextSong function",
    test: (code) => {
      try {
        const testCode = code + `
        let result1 = "";
        let result2 = "";
        let result3 = "";
        
        if (typeof playNextSong === 'function') {
          result1 = playNextSong(song1, "Hotel California - Eagles");
          result2 = playNextSong(song1, "Sweet Child O' Mine - Guns N' Roses");
          result3 = playNextSong(song1, "Nonexistent Song - Unknown");
        }
        
        return ({ result1, result2, result3 });
        `;
        
        const testResult = new Function(testCode)();
        
        if (typeof testResult.result1 === 'undefined') {
          return new TestResult({ passed: false, message: "playNextSong function not found. Make sure to uncomment and implement it." });
        }
        
        if (testResult.result1 !== "Stairway to Heaven - Led Zeppelin") {
          return new TestResult({ passed: false, message: "playNextSong should return the song after Hotel California" });
        }
        
        if (testResult.result2 !== "End of playlist") {
          return new TestResult({ passed: false, message: "playNextSong should return 'End of playlist' when target is the last song" });
        }
        
        if (testResult.result3 !== "Song not found") {
          return new TestResult({ passed: false, message: "playNextSong should return 'Song not found' for nonexistent songs" });
        }
        
        return new TestResult({ passed: true });
      } catch (error) {
        return new TestResult({ passed: false, message: error.message });
      }
    },
    message: "playNextSong should find a song and return the next song in the playlist."
  },
  {
    name: "Test removeSong function",
    test: (code) => {
      try {
        const testCode = code + `
        // Create a test playlist
        const testSong1 = new SongNode("Song A", "Artist A");
        const testSong2 = new SongNode("Song B", "Artist B");
        const testSong3 = new SongNode("Song C", "Artist C");
        testSong1.next = testSong2;
        testSong2.next = testSong3;
        
        let newHead = testSong1;
        let removedMiddle = false;
        let removedFirst = false;
        
        if (typeof removeSong === 'function') {
          // Remove middle song
          newHead = removeSong(newHead, "Song B");
          removedMiddle = newHead.next && newHead.next.title === "Song C";
          
          // Remove first song
          newHead = removeSong(newHead, "Song A");
          removedFirst = newHead && newHead.title === "Song C";
        }
        
        return ({ removedMiddle, removedFirst });
        `;
        
        const testResult = new Function(testCode)();
        
        if (typeof testResult.removedMiddle === 'undefined') {
          return new TestResult({ passed: false, message: "removeSong function not found. Make sure to uncomment and implement it." });
        }
        
        if (!testResult.removedMiddle) {
          return new TestResult({ passed: false, message: "removeSong should properly remove songs from the middle of the playlist" });
        }
        
        if (!testResult.removedFirst) {
          return new TestResult({ passed: false, message: "removeSong should properly remove the first song and return new head" });
        }
        
        return new TestResult({ passed: true });
      } catch (error) {
        return new TestResult({ passed: false, message: error.message });
      }
    },
    message: "removeSong should remove songs from any position in the playlist."
  },
  {
    name: "Test countSongs function",
    test: (code) => {
      try {
        const testCode = code + `
        let count1 = 0;
        let count2 = 0;
        
        if (typeof countSongs === 'function') {
          count1 = countSongs(song1); // Should count 4 songs
          count2 = countSongs(null); // Should count 0 songs (empty playlist)
        }
        
        return ({ count1, count2 });
        `;
        
        const testResult = new Function(testCode)();
        
        if (typeof testResult.count1 === 'undefined') {
          return new TestResult({ passed: false, message: "countSongs function not found. Make sure to uncomment and implement it." });
        }
        
        if (testResult.count1 !== 4) {
          return new TestResult({ passed: false, message: "countSongs should return 4 for the sample playlist" });
        }
        
        if (testResult.count2 !== 0) {
          return new TestResult({ passed: false, message: "countSongs should return 0 for an empty playlist" });
        }
        
        return new TestResult({ passed: true });
      } catch (error) {
        return new TestResult({ passed: false, message: error.message });
      }
    },
    message: "countSongs should correctly count all songs in the playlist."
  },
];

export { tests, TestResult };