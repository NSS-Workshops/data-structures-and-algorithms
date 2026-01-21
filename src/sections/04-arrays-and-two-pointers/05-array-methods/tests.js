export const tests = [
  {
    name: "Test Exercise 1a: buildSetlistWithPush function",
    test: (code) => {
      try {
        const testCode = code + `
        // Test buildSetlistWithPush function
        if (typeof buildSetlistWithPush === 'function') {
          const songs = ["Song A", "Song B", "Song C"];
          const result = buildSetlistWithPush(songs);
          const emptyResult = buildSetlistWithPush([]);
          return { result, emptyResult, hasFunction: true };
        }
        return { hasFunction: false };
        `;
        
        const testResult = new Function(testCode)();
        
        if (!testResult.hasFunction) {
          return { passed: false, message: "buildSetlistWithPush function not found. Make sure to uncomment and implement it." };
        }
        
        if (!Array.isArray(testResult.result)) {
          return { passed: false, message: "Should return an array" };
        }
        if (testResult.result.length !== 3) {
          return { passed: false, message: "Should have 3 songs" };
        }
        if (testResult.result[0] !== "Song A") {
          return { passed: false, message: 'First song should be "Song A"' };
        }
        if (testResult.result[1] !== "Song B") {
          return { passed: false, message: 'Second song should be "Song B"' };
        }
        if (testResult.result[2] !== "Song C") {
          return { passed: false, message: 'Third song should be "Song C"' };
        }
        if (testResult.emptyResult.length !== 0) {
          return { passed: false, message: "Should handle empty array" };
        }
        
        return { passed: true };
      } catch (error) {
        return { passed: false, message: error.message };
      }
    },
    message: "buildSetlistWithPush should build a setlist using push method and handle empty arrays"
  },
  {
    name: "Test Exercise 1b: managePerformanceQueue function",
    test: (code) => {
      try {
        const testCode = code + `
        // Test managePerformanceQueue function
        if (typeof managePerformanceQueue === 'function') {
          const initialLineup = ["Main Act"];
          const newOpeners = ["Opener A", "Opener B"];
          const finishedActs = 1;
          const result = managePerformanceQueue(initialLineup, newOpeners, finishedActs);
          
          const noRemovalResult = managePerformanceQueue(["Act"], ["New Act"], 0);
          return { result, noRemovalResult, hasFunction: true };
        }
        return { hasFunction: false };
        `;
        
        const testResult = new Function(testCode)();
        
        if (!testResult.hasFunction) {
          return { passed: false, message: "managePerformanceQueue function not found. Make sure to uncomment and implement it." };
        }
        
        if (!Array.isArray(testResult.result)) {
          return { passed: false, message: "Should return an array" };
        }
        if (testResult.result.length !== 2) {
          return { passed: false, message: "Should have 2 acts remaining" };
        }
        if (testResult.result[0] !== "Opener B") {
          return { passed: false, message: 'First act should be "Opener B"' };
        }
        if (testResult.result[1] !== "Main Act") {
          return { passed: false, message: 'Second act should be "Main Act"' };
        }
        if (testResult.noRemovalResult.length !== 2) {
          return { passed: false, message: "Should add without removing when finishedActs is 0" };
        }
        if (testResult.noRemovalResult[0] !== "New Act") {
          return { passed: false, message: "New act should be first" };
        }
        
        return { passed: true };
      } catch (error) {
        return { passed: false, message: error.message };
      }
    },
    message: "managePerformanceQueue should manage lineup with unshift and splice operations"
  },
  {
    name: "Test Exercise 2a: createVenueVersions function",
    test: (code) => {
      try {
        const testCode = code + `
        // Test createVenueVersions function
        if (typeof createVenueVersions === 'function') {
          const songs = [
            { title: "Test Song", genre: "original", duration: 4.0 }
          ];
          
          const rockVersions = createVenueVersions(songs, "rock");
          const jazzVersions = createVenueVersions(songs, "jazz");
          const electronicVersions = createVenueVersions(songs, "electronic");
          
          return { rockVersions, jazzVersions, electronicVersions, hasFunction: true };
        }
        return { hasFunction: false };
        `;
        
        const testResult = new Function(testCode)();
        
        if (!testResult.hasFunction) {
          return { passed: false, message: "createVenueVersions function not found. Make sure to uncomment and implement it." };
        }
        
        // Test rock versions
        if (testResult.rockVersions[0].genre !== "rock") {
          return { passed: false, message: "Rock version should have rock genre" };
        }
        if (testResult.rockVersions[0].duration !== 4.5) {
          return { passed: false, message: "Rock version should have increased duration" };
        }
        if (testResult.rockVersions[0].venue !== "Rock Venue") {
          return { passed: false, message: "Should have rock venue" };
        }
        
        // Test jazz versions
        if (testResult.jazzVersions[0].genre !== "jazz") {
          return { passed: false, message: "Jazz version should have jazz genre" };
        }
        if (testResult.jazzVersions[0].duration !== 5.2) {
          return { passed: false, message: "Jazz version should have significantly increased duration" };
        }
        if (testResult.jazzVersions[0].venue !== "Jazz Venue") {
          return { passed: false, message: "Should have jazz venue" };
        }
        
        // Test electronic versions
        if (testResult.electronicVersions[0].genre !== "electronic") {
          return { passed: false, message: "Electronic version should have electronic genre" };
        }
        if (testResult.electronicVersions[0].duration !== 6.0) {
          return { passed: false, message: "Electronic version should have 1.5x duration" };
        }
        if (testResult.electronicVersions[0].venue !== "Electronic Venue") {
          return { passed: false, message: "Should have electronic venue" };
        }
        
        return { passed: true };
      } catch (error) {
        return { passed: false, message: error.message };
      }
    },
    message: "createVenueVersions should create venue-specific versions using map method"
  },
  {
    name: "Test Exercise 2b: filterSongsForEvent function",
    test: (code) => {
      try {
        const testCode = code + `
        // Test filterSongsForEvent function
        if (typeof filterSongsForEvent === 'function') {
          const repertoire = [
            { title: "Romantic Song", mood: "romantic", duration: 3.0 },
            { title: "Energetic Song", mood: "energetic", duration: 4.0 },
            { title: "Peaceful Song", mood: "peaceful", duration: 5.0 },
            { title: "Long Energetic Song", mood: "energetic", duration: 6.0 },
            { title: "Rock Song", genre: "rock", mood: "aggressive", duration: 4.0 }
          ];
          
          const weddingSongs = filterSongsForEvent(repertoire, "wedding");
          const corporateSongs = filterSongsForEvent(repertoire, "corporate");
          const festivalSongs = filterSongsForEvent(repertoire, "festival");
          
          return { weddingSongs, corporateSongs, festivalSongs, hasFunction: true };
        }
        return { hasFunction: false };
        `;
        
        const testResult = new Function(testCode)();
        
        if (!testResult.hasFunction) {
          return { passed: false, message: "filterSongsForEvent function not found. Make sure to uncomment and implement it." };
        }
        
        // Test wedding songs
        if (testResult.weddingSongs.length !== 2) {
          return { passed: false, message: "Should find 2 wedding-appropriate songs" };
        }
        if (!testResult.weddingSongs.some(song => song.mood === "romantic")) {
          return { passed: false, message: "Should include romantic songs" };
        }
        if (!testResult.weddingSongs.some(song => song.mood === "peaceful")) {
          return { passed: false, message: "Should include peaceful songs" };
        }
        
        // Test corporate songs
        if (testResult.corporateSongs.length !== 1) {
          return { passed: false, message: "Should find 1 corporate-appropriate song" };
        }
        if (testResult.corporateSongs[0].mood !== "energetic") {
          return { passed: false, message: "Should be energetic" };
        }
        if (testResult.corporateSongs[0].duration >= 5.0) {
          return { passed: false, message: "Should be under 5 minutes" };
        }
        
        // Test festival songs
        if (testResult.festivalSongs.length < 2) {
          return { passed: false, message: "Should find at least 2 festival songs" };
        }
        if (!testResult.festivalSongs.some(song => song.mood === "energetic" || song.genre === "rock")) {
          return { passed: false, message: "Should include energetic or rock songs" };
        }
        
        return { passed: true };
      } catch (error) {
        return { passed: false, message: error.message };
      }
    },
    message: "filterSongsForEvent should filter songs based on event type using filter method"
  },
  {
    name: "Test Exercise 3a: generatePerformanceReport function",
    test: (code) => {
      try {
        const testCode = code + `
        // Test generatePerformanceReport function
        if (typeof generatePerformanceReport === 'function') {
          const performances = [
            { venue: "Test Venue", date: "2024-01-01", audience: 100, revenue: 500 }
          ];
          
          const originalLog = console.log;
          let logOutput = [];
          console.log = (...args) => {
            logOutput.push(args.join(' '));
          };
          
          try {
            generatePerformanceReport(performances);
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
          return { passed: false, message: "generatePerformanceReport function not found. Make sure to uncomment and implement it." };
        }
        
        const hasVenue = testResult.logOutput.some(line => line.includes("Test Venue"));
        const hasDate = testResult.logOutput.some(line => line.includes("2024-01-01"));
        const hasAudience = testResult.logOutput.some(line => line.includes("100 people"));
        const hasRevenue = testResult.logOutput.some(line => line.includes("$500"));
        
        if (!hasVenue) {
          return { passed: false, message: "Should include venue information" };
        }
        if (!hasDate) {
          return { passed: false, message: "Should include date information" };
        }
        if (!hasAudience) {
          return { passed: false, message: "Should include audience information" };
        }
        if (!hasRevenue) {
          return { passed: false, message: "Should include revenue information" };
        }
        
        return { passed: true };
      } catch (error) {
        return { passed: false, message: error.message };
      }
    },
    message: "generatePerformanceReport should output formatted performance data using forEach"
  },
  {
    name: "Test Exercise 3b: calculateBusinessMetrics function",
    test: (code) => {
      try {
        const testCode = code + `
        // Test calculateBusinessMetrics function
        if (typeof calculateBusinessMetrics === 'function') {
          const performances = [
            { venue: "Venue A", date: "2024-01-01", audience: 100, revenue: 500 },
            { venue: "Venue B", date: "2024-01-02", audience: 200, revenue: 800 },
            { venue: "Venue A", date: "2024-01-03", audience: 150, revenue: 600 }
          ];
          
          const metrics = calculateBusinessMetrics(performances);
          return { metrics, hasFunction: true };
        }
        return { hasFunction: false };
        `;
        
        const testResult = new Function(testCode)();
        
        if (!testResult.hasFunction) {
          return { passed: false, message: "calculateBusinessMetrics function not found. Make sure to uncomment and implement it." };
        }
        
        const metrics = testResult.metrics;
        
        if (metrics.totalRevenue !== 1900) {
          return { passed: false, message: "Total revenue should be 1900" };
        }
        if (metrics.totalAudience !== 450) {
          return { passed: false, message: "Total audience should be 450" };
        }
        if (metrics.performanceCount !== 3) {
          return { passed: false, message: "Should count 3 performances" };
        }
        if (parseFloat(metrics.averageRevenue) !== 633.33) {
          return { passed: false, message: "Average revenue should be 633.33" };
        }
        if (parseFloat(metrics.averageAudience) !== 150.0) {
          return { passed: false, message: "Average audience should be 150.0" };
        }
        if (!metrics.venueStats["Venue A"]) {
          return { passed: false, message: "Should have stats for Venue A" };
        }
        if (metrics.venueStats["Venue A"].count !== 2) {
          return { passed: false, message: "Venue A should have 2 performances" };
        }
        if (metrics.venueStats["Venue A"].revenue !== 1100) {
          return { passed: false, message: "Venue A should have total revenue 1100" };
        }
        if (!metrics.venueStats["Venue B"]) {
          return { passed: false, message: "Should have stats for Venue B" };
        }
        if (metrics.venueStats["Venue B"].count !== 1) {
          return { passed: false, message: "Venue B should have 1 performance" };
        }
        
        return { passed: true };
      } catch (error) {
        return { passed: false, message: error.message };
      }
    },
    message: "calculateBusinessMetrics should calculate comprehensive business metrics using reduce"
  },
  {
    name: "Test Exercise 3c: extractRecentPerformances function",
    test: (code) => {
      try {
        const testCode = code + `
        // Test extractRecentPerformances function
        if (typeof extractRecentPerformances === 'function') {
          const performances = [
            { venue: "Venue A", date: "2024-01-01" },
            { venue: "Venue B", date: "2024-01-02" },
            { venue: "Venue C", date: "2024-01-03" },
            { venue: "Venue D", date: "2024-01-04" }
          ];
          
          const recent2 = extractRecentPerformances(performances, 2);
          const recent1 = extractRecentPerformances(performances, 1);
          const recentAll = extractRecentPerformances(performances, 10);
          
          return { recent2, recent1, recentAll, hasFunction: true };
        }
        return { hasFunction: false };
        `;
        
        const testResult = new Function(testCode)();
        
        if (!testResult.hasFunction) {
          return { passed: false, message: "extractRecentPerformances function not found. Make sure to uncomment and implement it." };
        }
        
        if (testResult.recent2.length !== 2) {
          return { passed: false, message: "Should extract 2 recent performances" };
        }
        if (testResult.recent2[0].venue !== "Venue C") {
          return { passed: false, message: "First recent should be Venue C" };
        }
        if (testResult.recent2[1].venue !== "Venue D") {
          return { passed: false, message: "Second recent should be Venue D" };
        }
        if (testResult.recent1.length !== 1) {
          return { passed: false, message: "Should extract 1 recent performance" };
        }
        if (testResult.recent1[0].venue !== "Venue D") {
          return { passed: false, message: "Most recent should be Venue D" };
        }
        if (testResult.recentAll.length !== 4) {
          return { passed: false, message: "Should not exceed array length" };
        }
        
        return { passed: true };
      } catch (error) {
        return { passed: false, message: error.message };
      }
    },
    message: "extractRecentPerformances should extract recent performances using slice method"
  },
  {
    name: "Test Exercise 4a: createOptimalSetlist function",
    test: (code) => {
      try {
        const testCode = code + `
        // Test createOptimalSetlist function
        if (typeof createOptimalSetlist === 'function') {
          const songDatabase = [
            { title: "Song A", mood: "energetic", duration: 4.0, popularity: 90 },
            { title: "Song B", mood: "energetic", duration: 3.0, popularity: 95 },
            { title: "Song C", mood: "calm", duration: 4.0, popularity: 85 },
            { title: "Song D", mood: "energetic", duration: 6.0, popularity: 100 }
          ];
          
          const criteria = { maxDuration: 5.0, preferredMood: "energetic", maxSongs: 2 };
          const result = createOptimalSetlist(songDatabase, criteria);
          
          const noCriteria = { maxDuration: 10.0, maxSongs: 5 };
          const allResult = createOptimalSetlist(songDatabase, noCriteria);
          
          return { result, allResult, hasFunction: true };
        }
        return { hasFunction: false };
        `;
        
        const testResult = new Function(testCode)();
        
        if (!testResult.hasFunction) {
          return { passed: false, message: "createOptimalSetlist function not found. Make sure to uncomment and implement it." };
        }
        
        if (testResult.result.length !== 2) {
          return { passed: false, message: "Should return exactly 2 songs" };
        }
        if (!testResult.result.every(song => song.duration <= 5.0)) {
          return { passed: false, message: "All songs should be under max duration" };
        }
        if (!testResult.result.every(song => song.mood === "energetic")) {
          return { passed: false, message: "All songs should match preferred mood" };
        }
        if (testResult.result[0].popularity < testResult.result[1].popularity) {
          return { passed: false, message: "Should be sorted by popularity descending" };
        }
        if (!testResult.result.every(song => song.performanceNote)) {
          return { passed: false, message: "Should add performance notes" };
        }
        if (testResult.allResult.length !== 4) {
          return { passed: false, message: "Should return all songs when no mood preference" };
        }
        
        return { passed: true };
      } catch (error) {
        return { passed: false, message: error.message };
      }
    },
    message: "createOptimalSetlist should create optimized setlists using filter, sort, slice, and map"
  },
  {
    name: "Test Exercise 4b: restructureFestivalLineup function",
    test: (code) => {
      try {
        const testCode = code + `
        // Test restructureFestivalLineup function
        if (typeof restructureFestivalLineup === 'function') {
          let lineup = ["Opening", "Band A", "Band B", "Headliner", "Closing"];
          const changes = { removeAt: 1, removeCount: 2, addActs: ["Jazz Ensemble", "Rock Band"] };
          
          const removed = restructureFestivalLineup(lineup, changes);
          
          return { removed, lineup, hasFunction: true };
        }
        return { hasFunction: false };
        `;
        
        const testResult = new Function(testCode)();
        
        if (!testResult.hasFunction) {
          return { passed: false, message: "restructureFestivalLineup function not found. Make sure to uncomment and implement it." };
        }
        
        if (testResult.removed.length !== 2) {
          return { passed: false, message: "Should return 2 removed acts" };
        }
        if (testResult.removed[0] !== "Band A") {
          return { passed: false, message: "First removed should be Band A" };
        }
        if (testResult.removed[1] !== "Band B") {
          return { passed: false, message: "Second removed should be Band B" };
        }
        if (testResult.lineup.length !== 5) {
          return { passed: false, message: "Lineup should still have 5 acts" };
        }
        if (testResult.lineup[1] !== "Jazz Ensemble") {
          return { passed: false, message: "Jazz Ensemble should be at position 1" };
        }
        if (testResult.lineup[2] !== "Rock Band") {
          return { passed: false, message: "Rock Band should be at position 2" };
        }
        if (testResult.lineup[0] !== "Opening") {
          return { passed: false, message: "Opening should remain at position 0" };
        }
        if (testResult.lineup[3] !== "Headliner") {
          return { passed: false, message: "Headliner should be at position 3" };
        }
        if (testResult.lineup[4] !== "Closing") {
          return { passed: false, message: "Closing should be at position 4" };
        }
        
        return { passed: true };
      } catch (error) {
        return { passed: false, message: error.message };
      }
    },
    message: "restructureFestivalLineup should restructure lineup using splice method"
  }
];