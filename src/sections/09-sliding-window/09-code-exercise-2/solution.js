/*
Problem: Longest Substring Without Repeating Characters

Given a string, find the length of the longest substring without repeating characters.
*/

function lengthOfLongestSubstring(s) {
  // Handle edge case
  if (!s || s.length === 0) {
    return 0;
  }
  
  // Use Set to track characters in current window
  const charSet = new Set();
  let left = 0;  // Left pointer of sliding window
  let maxLength = 0;  // Maximum length found so far
  
  // Expand window with right pointer
  for (let right = 0; right < s.length; right++) {
    // If character is already in window, contract from left
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }
    
    // Add current character to window
    charSet.add(s[right]);
    
    // Update maximum length
    maxLength = Math.max(maxLength, right - left + 1);
  }
  
  return maxLength;
  
  // Time Complexity: O(n) - each character visited at most twice
  // Space Complexity: O(min(m, n)) where m is charset size, n is string length
  // In worst case, we store all unique characters in the set
}