// ==============================
// Exercise 1: Help Eleanor Find Book Pairs
// ==============================
// Task: Find two books whose publication years sum to a target year

function findBookPairForTargetYear(bookYears, targetYear) {
  let leftBookmark = 0;
  let rightBookmark = bookYears.length - 1;
  
  while (leftBookmark < rightBookmark) {
    const leftYear = bookYears[leftBookmark];
    const rightYear = bookYears[rightBookmark];
    const combinedYear = leftYear + rightYear;
    
    if (combinedYear === targetYear) {
      return {
        leftBook: { position: leftBookmark, year: leftYear },
        rightBook: { position: rightBookmark, year: rightYear },
        message: `Perfect! Books from ${leftYear} and ${rightYear} sum to ${targetYear}`
      };
    } else if (combinedYear < targetYear) {
      leftBookmark++;
    } else {
      rightBookmark--;
    }
  }
  
  return null;
}

const libraryBooks = [1920, 1945, 1960, 1975, 1980, 1995, 2000, 2010];
console.log("Finding pair for 1995:", findBookPairForTargetYear(libraryBooks, 1995));
console.log("Finding pair for 2020:", findBookPairForTargetYear(libraryBooks, 2020));

// ==============================
// Exercise 2: Help Eleanor Detect Patterns
// ==============================
// Task: Find the middle book in a reading list and detect if a list has cycles

function findMiddleBookInList(bookList) {
  if (bookList.length === 0) {
    return { message: "Empty list has no middle!" };
  }
  
  let slowPointer = 0;
  let fastPointer = 0;
  
  while (fastPointer + 1 < bookList.length) {
    slowPointer++;
    fastPointer += 2;
  }
  
  return {
    middleBook: bookList[slowPointer],
    position: slowPointer,
    totalBooks: bookList.length,
    message: `Middle book is "${bookList[slowPointer]}" at position ${slowPointer}`
  };
}

function hasDuplicateInSortedList(sortedBooks) {
  if (sortedBooks.length <= 1) {
    return false;
  }
  
  for (let i = 1; i < sortedBooks.length; i++) {
    if (sortedBooks[i] === sortedBooks[i - 1]) {
      return true;
    }
  }
  
  return false;
}

const readingList = ["Book A", "Book B", "Book C", "Book D", "Book E"];
const sortedBooks = ["Animal Farm", "Animal Farm", "Dune", "Foundation"];
console.log("Middle book:", findMiddleBookInList(readingList));
console.log("Has duplicates:", hasDuplicateInSortedList(sortedBooks));

// ==============================
// Exercise 3: Help Eleanor Analyze Book Sequences
// ==============================
// Task: Find the best consecutive sequence of books based on popularity scores

function findBestBookSequence(popularityScores, sequenceLength) {
  if (sequenceLength > popularityScores.length) {
    return { message: "Sequence length larger than array!" };
  }
  
  let windowSum = 0;
  let maxSum = 0;
  let bestWindowStart = 0;
  
  // Calculate sum of first window
  for (let i = 0; i < sequenceLength; i++) {
    windowSum += popularityScores[i];
  }
  maxSum = windowSum;
  
  // Slide the window across the array
  for (let windowEnd = sequenceLength; windowEnd < popularityScores.length; windowEnd++) {
    windowSum = windowSum - popularityScores[windowEnd - sequenceLength] + popularityScores[windowEnd];
    
    if (windowSum > maxSum) {
      maxSum = windowSum;
      bestWindowStart = windowEnd - sequenceLength + 1;
    }
  }
  
  return {
    startIndex: bestWindowStart,
    totalPopularity: maxSum,
    sequence: popularityScores.slice(bestWindowStart, bestWindowStart + sequenceLength)
  };
}

function findShortestSequenceAboveThreshold(scores, threshold) {
  let windowStart = 0;
  let windowSum = 0;
  let minLength = Infinity;
  let bestStart = 0;
  let bestLength = 0;
  
  for (let windowEnd = 0; windowEnd < scores.length; windowEnd++) {
    windowSum += scores[windowEnd];
    
    while (windowSum >= threshold && windowStart <= windowEnd) {
      const currentLength = windowEnd - windowStart + 1;
      
      if (currentLength < minLength) {
        minLength = currentLength;
        bestStart = windowStart;
        bestLength = currentLength;
      }
      
      windowSum -= scores[windowStart];
      windowStart++;
    }
  }
  
  if (minLength === Infinity) {
    return { message: `No sequence found with sum above ${threshold}` };
  }
  
  return {
    length: minLength,
    startPosition: bestStart,
    sequence: scores.slice(bestStart, bestStart + bestLength),
    totalSum: scores.slice(bestStart, bestStart + bestLength).reduce((a, b) => a + b, 0)
  };
}

const bookPopularity = [2, 1, 4, 9, 3, 7, 5, 8, 6];
console.log("Best sequence of 3:", findBestBookSequence(bookPopularity, 3));
console.log("Shortest above 15:", findShortestSequenceAboveThreshold(bookPopularity, 15));

// ==============================
// Exercise 4: Help Eleanor Solve Palindrome Mysteries
// ==============================
// Task: Check if book titles are palindromes and find the longest palindromic substring

function isPalindrome(text) {
  // Clean the text: remove spaces and convert to lowercase
  const cleanText = text.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
  let leftBookmark = 0;
  let rightBookmark = cleanText.length - 1;
  
  while (leftBookmark < rightBookmark) {
    if (cleanText[leftBookmark] !== cleanText[rightBookmark]) {
      return false;
    }
    leftBookmark++;
    rightBookmark--;
  }
  
  return true;
}

function longestPalindromicSubstring(text) {
  const cleanText = text.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let longest = "";
  
  // Check for odd-length palindromes (center is a single character)
  for (let center = 0; center < cleanText.length; center++) {
    let left = center;
    let right = center;
    
    while (left >= 0 && right < cleanText.length && cleanText[left] === cleanText[right]) {
      const currentPalindrome = cleanText.slice(left, right + 1);
      if (currentPalindrome.length > longest.length) {
        longest = currentPalindrome;
      }
      left--;
      right++;
    }
  }
  
  // Check for even-length palindromes (center is between two characters)
  for (let center = 0; center < cleanText.length - 1; center++) {
    let left = center;
    let right = center + 1;
    
    while (left >= 0 && right < cleanText.length && cleanText[left] === cleanText[right]) {
      const currentPalindrome = cleanText.slice(left, right + 1);
      if (currentPalindrome.length > longest.length) {
        longest = currentPalindrome;
      }
      left--;
      right++;
    }
  }
  
  return longest;
}

const mysteryTitles = ["A Santa at NASA", "Racecar", "Hello World", "Madam"];
mysteryTitles.forEach(title => {
  console.log(`"${title}" is palindrome: ${isPalindrome(title)}`);
});
console.log("Longest palindrome in 'A Santa at NASA':", longestPalindromicSubstring("A Santa at NASA"));