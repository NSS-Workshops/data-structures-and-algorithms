export const tests = [
  {
    name: "Test Exercise 1: getSongAtPosition function",
    test: (code) => {
      try {
        const testCode = code + `
        // Test getSongAtPosition function
        if (typeof getSongAtPosition === 'function') {
          const testSetlist = ["Song A", "Song B", "Song C"];
          const result1 = getSongAtPosition(testSetlist, 1);
          const result2 = getSongAtPosition(testSetlist, 5);
          return { result1, result2, hasFunction: true };
        }
        return { hasFunction: false };
        `;
        
        const testResult = new Function(testCode)();
        
        if (!testResult.hasFunction) {
          return { passed: false, message: "getSongAtPosition function not found. Make sure to uncomment and implement it." };
        }
        
        if (testResult.result1 !== "Song B") {
          return { passed: false, message: `Expected "Song B" at position 1, got "${testResult.result1}"` };
        }
        
        if (testResult.result2 !== "Position out of bounds") {
          return { passed: false, message: `Expected "Position out of bounds" for invalid position, got "${testResult.result2}"` };
        }
        
        return { passed: true };
      } catch (error) {
        return { passed: false, message: error.message };
      }
    },
    message: "getSongAtPosition should return the correct song and handle invalid positions"
  },
  {
    name: "Test Exercise 2: updateSetlistBasedOnFeedback function",
    test: (code) => {
      try {
        const testCode = code + `
        // Test updateSetlistBasedOnFeedback function
        if (typeof updateSetlistBasedOnFeedback === 'function') {
          const testSetlist = ["A", "B", "C", "D"];
          const updates = { 0: "X", 2: "Y" };
          updateSetlistBasedOnFeedback(testSetlist, updates);
          return { result: testSetlist, hasFunction: true };
        }
        return { hasFunction: false };
        `;
        
        const testResult = new Function(testCode)();
        
        if (!testResult.hasFunction) {
          return { passed: false, message: "updateSetlistBasedOnFeedback function not found. Make sure to uncomment and implement it." };
        }
        
        const expected = ["X", "B", "Y", "D"];
        if (JSON.stringify(testResult.result) !== JSON.stringify(expected)) {
          return { passed: false, message: `Expected ${JSON.stringify(expected)}, got ${JSON.stringify(testResult.result)}` };
        }
        
        return { passed: true };
      } catch (error) {
        return { passed: false, message: error.message };
      }
    },
    message: "updateSetlistBasedOnFeedback should update songs at specified positions"
  },
  {
    name: "Test Exercise 3: addSongStrategically function",
    test: (code) => {
      try {
        const testCode = code + `
        // Test addSongStrategically function
        if (typeof addSongStrategically === 'function') {
          let testSetlist = ["A", "B"];
          addSongStrategically(testSetlist, "X", "beginning");
          addSongStrategically(testSetlist, "Y", "end");
          addSongStrategically(testSetlist, "Z", 2);
          return { result: testSetlist, hasFunction: true };
        }
        return { hasFunction: false };
        `;
        
        const testResult = new Function(testCode)();
        
        if (!testResult.hasFunction) {
          return { passed: false, message: "addSongStrategically function not found. Make sure to uncomment and implement it." };
        }
        
        const expected = ["X", "A", "Z", "B", "Y"];
        if (JSON.stringify(testResult.result) !== JSON.stringify(expected)) {
          return { passed: false, message: `Expected ${JSON.stringify(expected)}, got ${JSON.stringify(testResult.result)}` };
        }
        
        return { passed: true };
      } catch (error) {
        return { passed: false, message: error.message };
      }
    },
    message: "addSongStrategically should add songs at beginning, end, and specific positions"
  },
  {
    name: "Test Exercise 4: removeSongStrategically function",
    test: (code) => {
      try {
        const testCode = code + `
        // Test removeSongStrategically function
        if (typeof removeSongStrategically === 'function') {
          let testSetlist = ["A", "B", "C", "D"];
          const removed1 = removeSongStrategically(testSetlist, "end");
          const removed2 = removeSongStrategically(testSetlist, "beginning");
          const removed3 = removeSongStrategically(testSetlist, 0);
          return { 
            result: testSetlist, 
            removed: [removed1, removed2, removed3],
            hasFunction: true 
          };
        }
        return { hasFunction: false };
        `;
        
        const testResult = new Function(testCode)();
        
        if (!testResult.hasFunction) {
          return { passed: false, message: "removeSongStrategically function not found. Make sure to uncomment and implement it." };
        }
        
        const expectedArray = ["C"];
        const expectedRemoved = ["D", "A", "B"];
        
        if (JSON.stringify(testResult.result) !== JSON.stringify(expectedArray)) {
          return { passed: false, message: `Expected final array ${JSON.stringify(expectedArray)}, got ${JSON.stringify(testResult.result)}` };
        }
        
        if (JSON.stringify(testResult.removed) !== JSON.stringify(expectedRemoved)) {
          return { passed: false, message: `Expected removed songs ${JSON.stringify(expectedRemoved)}, got ${JSON.stringify(testResult.removed)}` };
        }
        
        return { passed: true };
      } catch (error) {
        return { passed: false, message: error.message };
      }
    },
    message: "removeSongStrategically should remove songs from end, beginning, and specific positions"
  },
  {
    name: "Test Exercise 5: findSongsForRequest function",
    test: (code) => {
      try {
        const testCode = code + `
        // Test findSongsForRequest function
        if (typeof findSongsForRequest === 'function') {
          const testRepertoire = [
            { title: "Song A", genre: "rock", mood: "energetic" },
            { title: "Song B", genre: "rock", mood: "calm" },
            { title: "Song C", genre: "jazz", mood: "energetic" }
          ];
          const result1 = findSongsForRequest(testRepertoire, { genre: "rock" });
          const result2 = findSongsForRequest(testRepertoire, { genre: "rock", mood: "energetic" });
          return { 
            result1: result1.map(s => s.title), 
            result2: result2.map(s => s.title),
            hasFunction: true 
          };
        }
        return { hasFunction: false };
        `;
        
        const testResult = new Function(testCode)();
        
        if (!testResult.hasFunction) {
          return { passed: false, message: "findSongsForRequest function not found. Make sure to uncomment and implement it." };
        }
        
        const expected1 = ["Song A", "Song B"];
        const expected2 = ["Song A"];
        
        if (JSON.stringify(testResult.result1) !== JSON.stringify(expected1)) {
          return { passed: false, message: `Expected rock songs ${JSON.stringify(expected1)}, got ${JSON.stringify(testResult.result1)}` };
        }
        
        if (JSON.stringify(testResult.result2) !== JSON.stringify(expected2)) {
          return { passed: false, message: `Expected energetic rock songs ${JSON.stringify(expected2)}, got ${JSON.stringify(testResult.result2)}` };
        }
        
        return { passed: true };
      } catch (error) {
        return { passed: false, message: error.message };
      }
    },
    message: "findSongsForRequest should filter songs based on multiple criteria"
  }
];