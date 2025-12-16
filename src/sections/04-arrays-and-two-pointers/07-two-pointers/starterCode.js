// ==============================
// Exercise 1: Help Eleanor Find Book Pairs
// ==============================
// Uncomment this block and click "Run Code" to complete the exercise
// Task: Find two books whose publication years sum to a target year

// function findBookPairForTargetYear(bookYears, targetYear) {
//   // Use converging pointers to find a pair that sums to targetYear
//   // Return an object with the pair information or null if not found
// }

// const libraryBooks = [1920, 1945, 1960, 1975, 1980, 1995, 2000, 2010];
// console.log("Finding pair for 1995:", findBookPairForTargetYear(libraryBooks, 1995));
// console.log("Finding pair for 2020:", findBookPairForTargetYear(libraryBooks, 2020));

// ==============================
// Exercise 2: Help Eleanor Detect Patterns
// ==============================
// Uncomment this block and click "Run Code" to complete the exercise
// Task: Find the middle book in a reading list and detect if a list has cycles

// function findMiddleBookInList(bookList) {
//   // Use fast and slow pointers to find the middle book
//   // Return the middle book and its position
// }

// function hasDuplicateInSortedList(sortedBooks) {
//   // Use two pointers to detect if there are consecutive duplicates
//   // Return true if duplicates found, false otherwise
// }

// const readingList = ["Book A", "Book B", "Book C", "Book D", "Book E"];
// const sortedBooks = ["Animal Farm", "Animal Farm", "Dune", "Foundation"];
// console.log("Middle book:", findMiddleBookInList(readingList));
// console.log("Has duplicates:", hasDuplicateInSortedList(sortedBooks));

// ==============================
// Exercise 3: Help Eleanor Analyze Book Sequences
// ==============================
// Uncomment this block and click "Run Code" to complete the exercise
// Task: Find the best consecutive sequence of books based on popularity scores

// function findBestBookSequence(popularityScores, sequenceLength) {
//   // Use sliding window to find the sequence with highest total popularity
//   // Return the starting index and total popularity score
// }

// function findShortestSequenceAboveThreshold(scores, threshold) {
//   // Use dynamic sliding window to find shortest sequence above threshold
//   // Return the length and starting position of the shortest sequence
// }

// const bookPopularity = [2, 1, 4, 9, 3, 7, 5, 8, 6];
// console.log("Best sequence of 3:", findBestBookSequence(bookPopularity, 3));
// console.log("Shortest above 15:", findShortestSequenceAboveThreshold(bookPopularity, 15));

// ==============================
// Exercise 4: Help Eleanor Solve Palindrome Mysteries
// ==============================
// Uncomment this block and click "Run Code" to complete the exercise
// Task: Check if book titles are palindromes and find the longest palindromic substring

// function isPalindrome(text) {
//   // Use converging pointers to check if text reads the same forwards and backwards
//   // Ignore spaces, punctuation, and case
//   // Return true if palindrome, false otherwise
// }

// function longestPalindromicSubstring(text) {
//   // Find the longest substring that is a palindrome
//   // Return the palindromic substring
// }

// const mysteryTitles = ["A Santa at NASA", "Racecar", "Hello World", "Madam"];
// mysteryTitles.forEach(title => {
//   console.log(`"${title}" is palindrome: ${isPalindrome(title)}`);
// });
// console.log("Longest palindrome in 'A Santa at NASA':", longestPalindromicSubstring("A Santa at NASA"));