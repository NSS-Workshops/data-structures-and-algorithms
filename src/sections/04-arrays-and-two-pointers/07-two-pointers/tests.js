export const tests = [
  {
    name: "Test Exercise 1: findBookPairForTargetYear function",
    test: (code) => {
      try {
        const testCode = code + `
        // Test findBookPairForTargetYear function
        if (typeof findBookPairForTargetYear === 'function') {
          const bookYears = [1920, 1945, 1960, 1975, 1980, 1995, 2000, 2010];
          
          const result1 = findBookPairForTargetYear(bookYears, 1995);
          const result2 = findBookPairForTargetYear(bookYears, 3955);
          const result3 = findBookPairForTargetYear(bookYears, 1800);
          const result4 = findBookPairForTargetYear([], 2000);
          const result5 = findBookPairForTargetYear([2000], 2000);
          
          return { result1, result2, result3, result4, result5, hasFunction: true };
        }
        return { hasFunction: false };
        `;
        
        const testResult = new Function(testCode)();
        
        if (!testResult.hasFunction) {
          return { passed: false, message: "findBookPairForTargetYear function not found. Make sure to uncomment and implement it." };
        }
        
        if (!testResult.result1 || testResult.result1.leftBook.year + testResult.result1.rightBook.year !== 1995) {
          return { passed: false, message: "Should find a pair for 1995" };
        }
        if (!testResult.result2 || testResult.result2.leftBook.year + testResult.result2.rightBook.year !== 3955) {
          return { passed: false, message: "Should find a pair for 3955" };
        }
        if (testResult.result3 !== null) {
          return { passed: false, message: "Should return null when no pair found" };
        }
        if (testResult.result4 !== null) {
          return { passed: false, message: "Should return null for empty array" };
        }
        if (testResult.result5 !== null) {
          return { passed: false, message: "Should return null for single element array" };
        }
        
        return { passed: true };
      } catch (error) {
        return { passed: false, message: error.message };
      }
    },
    message: "findBookPairForTargetYear should find pairs that sum to target year using converging pointers"
  },
  {
    name: "Test Exercise 2a: findMiddleBookInList function",
    test: (code) => {
      try {
        const testCode = code + `
        // Test findMiddleBookInList function
        if (typeof findMiddleBookInList === 'function') {
          const oddList = ["Book A", "Book B", "Book C", "Book D", "Book E"];
          const evenList = ["Book A", "Book B", "Book C", "Book D"];
          const singleList = ["Only Book"];
          const emptyList = [];
          
          const result1 = findMiddleBookInList(oddList);
          const result2 = findMiddleBookInList(evenList);
          const result3 = findMiddleBookInList(singleList);
          const result4 = findMiddleBookInList(emptyList);
          
          return { result1, result2, result3, result4, hasFunction: true };
        }
        return { hasFunction: false };
        `;
        
        const testResult = new Function(testCode)();
        
        if (!testResult.hasFunction) {
          return { passed: false, message: "findMiddleBookInList function not found. Make sure to uncomment and implement it." };
        }
        
        if (testResult.result1.middleBook !== "Book C" || testResult.result1.position !== 2) {
          return { passed: false, message: 'Middle of odd list should be "Book C" at position 2' };
        }
        if (testResult.result2.middleBook !== "Book B" || testResult.result2.position !== 1) {
          return { passed: false, message: 'Middle of even list should be "Book B" at position 1' };
        }
        if (testResult.result3.middleBook !== "Only Book" || testResult.result3.position !== 0) {
          return { passed: false, message: 'Single element should be the middle at position 0' };
        }
        if (!testResult.result4.message || !testResult.result4.message.includes("Empty")) {
          return { passed: false, message: "Should handle empty list" };
        }
        
        return { passed: true };
      } catch (error) {
        return { passed: false, message: error.message };
      }
    },
    message: "findMiddleBookInList should find middle element using fast and slow pointers"
  },
  {
    name: "Test Exercise 2b: hasDuplicateInSortedList function",
    test: (code) => {
      try {
        const testCode = code + `
        // Test hasDuplicateInSortedList function
        if (typeof hasDuplicateInSortedList === 'function') {
          const withDuplicates = ["Animal Farm", "Animal Farm", "Dune", "Foundation"];
          const withoutDuplicates = ["Animal Farm", "Dune", "Foundation", "The Hobbit"];
          const emptyList = [];
          const singleList = ["Book"];
          const allSame = ["Book", "Book", "Book"];
          
          const result1 = hasDuplicateInSortedList(withDuplicates);
          const result2 = hasDuplicateInSortedList(withoutDuplicates);
          const result3 = hasDuplicateInSortedList(emptyList);
          const result4 = hasDuplicateInSortedList(singleList);
          const result5 = hasDuplicateInSortedList(allSame);
          
          return { result1, result2, result3, result4, result5, hasFunction: true };
        }
        return { hasFunction: false };
        `;
        
        const testResult = new Function(testCode)();
        
        if (!testResult.hasFunction) {
          return { passed: false, message: "hasDuplicateInSortedList function not found. Make sure to uncomment and implement it." };
        }
        
        if (testResult.result1 !== true) {
          return { passed: false, message: "Should detect duplicates" };
        }
        if (testResult.result2 !== false) {
          return { passed: false, message: "Should not detect duplicates when none exist" };
        }
        if (testResult.result3 !== false) {
          return { passed: false, message: "Empty list should have no duplicates" };
        }
        if (testResult.result4 !== false) {
          return { passed: false, message: "Single element should have no duplicates" };
        }
        if (testResult.result5 !== true) {
          return { passed: false, message: "Should detect duplicates in all-same list" };
        }
        
        return { passed: true };
      } catch (error) {
        return { passed: false, message: error.message };
      }
    },
    message: "hasDuplicateInSortedList should detect consecutive duplicates in sorted arrays"
  },
  {
    name: "Test Exercise 3a: findBestBookSequence function",
    test: (code) => {
      try {
        const testCode = code + `
        // Test findBestBookSequence function
        if (typeof findBestBookSequence === 'function') {
          const popularity = [2, 1, 4, 9, 3, 7, 5, 8, 6];
          
          const result1 = findBestBookSequence(popularity, 3);
          const result2 = findBestBookSequence(popularity, 1);
          const result3 = findBestBookSequence(popularity, 15);
          const result4 = findBestBookSequence(popularity, popularity.length);
          
          return { result1, result2, result3, result4, hasFunction: true };
        }
        return { hasFunction: false };
        `;
        
        const testResult = new Function(testCode)();
        
        if (!testResult.hasFunction) {
          return { passed: false, message: "findBestBookSequence function not found. Make sure to uncomment and implement it." };
        }
        
        if (testResult.result1.totalPopularity !== 20 || testResult.result1.startIndex !== 5) {
          return { passed: false, message: "Best sequence of 3 should have sum 20 starting at index 5" };
        }
        if (testResult.result2.totalPopularity !== 9 || testResult.result2.startIndex !== 3) {
          return { passed: false, message: "Best single element should be 9 at index 3" };
        }
        if (!testResult.result3.message || !testResult.result3.message.includes("larger")) {
          return { passed: false, message: "Should handle sequence longer than array" };
        }
        
        const expectedSum = [2, 1, 4, 9, 3, 7, 5, 8, 6].reduce((a, b) => a + b, 0);
        if (testResult.result4.totalPopularity !== expectedSum) {
          return { passed: false, message: "Full array should sum to total" };
        }
        
        return { passed: true };
      } catch (error) {
        return { passed: false, message: error.message };
      }
    },
    message: "findBestBookSequence should find maximum sum subarray of fixed size using sliding window"
  },
  {
    name: "Test Exercise 3b: findShortestSequenceAboveThreshold function",
    test: (code) => {
      try {
        const testCode = code + `
        // Test findShortestSequenceAboveThreshold function
        if (typeof findShortestSequenceAboveThreshold === 'function') {
          const scores = [2, 1, 4, 9, 3, 7, 5, 8, 6];
          
          const result1 = findShortestSequenceAboveThreshold(scores, 15);
          const result2 = findShortestSequenceAboveThreshold(scores, 25);
          const totalSum = scores.reduce((a, b) => a + b, 0);
          const result3 = findShortestSequenceAboveThreshold(scores, totalSum + 1);
          const result4 = findShortestSequenceAboveThreshold(scores, 0);
          
          return { result1, result2, result3, result4, hasFunction: true };
        }
        return { hasFunction: false };
        `;
        
        const testResult = new Function(testCode)();
        
        if (!testResult.hasFunction) {
          return { passed: false, message: "findShortestSequenceAboveThreshold function not found. Make sure to uncomment and implement it." };
        }
        
        if (testResult.result1.length < 1 || testResult.result1.totalSum < 15) {
          return { passed: false, message: "Should find a sequence with sum >= 15" };
        }
        if (testResult.result2.length < 3 || testResult.result2.totalSum < 25) {
          return { passed: false, message: "Should need at least 3 elements for sum >= 25" };
        }
        if (!testResult.result3.message || !testResult.result3.message.includes("No sequence")) {
          return { passed: false, message: "Should handle impossible threshold" };
        }
        if (testResult.result4.length !== 1) {
          return { passed: false, message: "Threshold 0 should return single element" };
        }
        
        return { passed: true };
      } catch (error) {
        return { passed: false, message: error.message };
      }
    },
    message: "findShortestSequenceAboveThreshold should find minimum length subarray with sum above threshold"
  },
  {
    name: "Test Exercise 4a: isPalindrome function",
    test: (code) => {
      try {
        const testCode = code + `
        // Test isPalindrome function
        if (typeof isPalindrome === 'function') {
          const tests = [
            { text: "Racecar", expected: true },
            { text: "Madam", expected: true },
            { text: "A Santa at NASA", expected: true },
            { text: "A man a plan a canal Panama", expected: true },
            { text: "Hello World", expected: false },
            { text: "The Great Gatsby", expected: false },
            { text: "", expected: true },
            { text: "a", expected: true },
            { text: "aa", expected: true },
            { text: "ab", expected: false }
          ];
          
          const results = tests.map(test => ({
            text: test.text,
            result: isPalindrome(test.text),
            expected: test.expected
          }));
          
          return { results, hasFunction: true };
        }
        return { hasFunction: false };
        `;
        
        const testResult = new Function(testCode)();
        
        if (!testResult.hasFunction) {
          return { passed: false, message: "isPalindrome function not found. Make sure to uncomment and implement it." };
        }
        
        for (const test of testResult.results) {
          if (test.result !== test.expected) {
            return { passed: false, message: `"${test.text}" should ${test.expected ? 'be' : 'not be'} a palindrome` };
          }
        }
        
        return { passed: true };
      } catch (error) {
        return { passed: false, message: error.message };
      }
    },
    message: "isPalindrome should detect palindromes using converging pointers, ignoring spaces and case"
  },
  {
    name: "Test Exercise 4b: longestPalindromicSubstring function",
    test: (code) => {
      try {
        const testCode = code + `
        // Test longestPalindromicSubstring function
        if (typeof longestPalindromicSubstring === 'function') {
          const result1 = longestPalindromicSubstring("A Santa at NASA");
          const result2 = longestPalindromicSubstring("abcdef");
          const result3 = longestPalindromicSubstring("racecar");
          const result4 = longestPalindromicSubstring("");
          const result5 = longestPalindromicSubstring("abccba");
          
          return { result1, result2, result3, result4, result5, hasFunction: true };
        }
        return { hasFunction: false };
        `;
        
        const testResult = new Function(testCode)();
        
        if (!testResult.hasFunction) {
          return { passed: false, message: "longestPalindromicSubstring function not found. Make sure to uncomment and implement it." };
        }
        
        if (testResult.result1.length < 3) {
          return { passed: false, message: "Should find a palindrome of at least length 3 in 'A Santa at NASA'" };
        }
        if (testResult.result2.length !== 1) {
          return { passed: false, message: "Should find single character palindrome in 'abcdef'" };
        }
        if (testResult.result3 !== "racecar") {
          return { passed: false, message: "Should find the entire string as palindrome in 'racecar'" };
        }
        if (testResult.result4 !== "") {
          return { passed: false, message: "Empty string should return empty string" };
        }
        if (testResult.result5 !== "abccba") {
          return { passed: false, message: "Should find even-length palindrome in 'abccba'" };
        }
        
        return { passed: true };
      } catch (error) {
        return { passed: false, message: error.message };
      }
    },
    message: "longestPalindromicSubstring should find the longest palindromic substring"
  }
];