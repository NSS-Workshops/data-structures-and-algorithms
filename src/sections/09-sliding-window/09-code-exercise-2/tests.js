import { TestResult } from "@nss-workshops/nss-core";

export default [
  {
    name: "Basic substring cases",
    test: (code) => {
      try {
        const lengthOfLongestSubstring = new Function(`${code}; return lengthOfLongestSubstring;`)();
        
        const test1 = lengthOfLongestSubstring("abcabcbb") === 3; // "abc"
        const test2 = lengthOfLongestSubstring("bbbbb") === 1; // "b"
        const test3 = lengthOfLongestSubstring("pwwkew") === 3; // "wke"
        
        if (test1 && test2 && test3) {
          return new TestResult({ passed: true });
        } else {
          return new TestResult({
            passed: false,
            message: `Basic cases failed. "abcabcbb": ${lengthOfLongestSubstring("abcabcbb")}, "bbbbb": ${lengthOfLongestSubstring("bbbbb")}, "pwwkew": ${lengthOfLongestSubstring("pwwkew")}`
          });
        }
      } catch (error) {
        return new TestResult({
          passed: false,
          message: `Error: ${error.message}`
        });
      }
    },
    message: "Function should find length of longest substring without repeating characters."
  },
  {
    name: "Handle edge cases",
    test: (code) => {
      try {
        const lengthOfLongestSubstring = new Function(`${code}; return lengthOfLongestSubstring;`)();
        
        const test1 = lengthOfLongestSubstring("") === 0; // Empty string
        const test2 = lengthOfLongestSubstring("a") === 1; // Single character
        const test3 = lengthOfLongestSubstring("au") === 2; // Two unique chars
        const test4 = lengthOfLongestSubstring("aab") === 2; // "ab"
        
        if (test1 && test2 && test3 && test4) {
          return new TestResult({ passed: true });
        } else {
          return new TestResult({
            passed: false,
            message: `Edge cases failed. "": ${lengthOfLongestSubstring("")}, "a": ${lengthOfLongestSubstring("a")}, "au": ${lengthOfLongestSubstring("au")}, "aab": ${lengthOfLongestSubstring("aab")}`
          });
        }
      } catch (error) {
        return new TestResult({
          passed: false,
          message: `Error: ${error.message}`
        });
      }
    },
    message: "Function should handle edge cases correctly."
  },
  {
    name: "Handle all unique characters",
    test: (code) => {
      try {
        const lengthOfLongestSubstring = new Function(`${code}; return lengthOfLongestSubstring;`)();
        
        const test1 = lengthOfLongestSubstring("abcdef") === 6; // All unique
        const test2 = lengthOfLongestSubstring("abcdefg") === 7; // All unique
        
        if (test1 && test2) {
          return new TestResult({ passed: true });
        } else {
          return new TestResult({
            passed: false,
            message: `All unique cases failed. "abcdef": ${lengthOfLongestSubstring("abcdef")}, "abcdefg": ${lengthOfLongestSubstring("abcdefg")}`
          });
        }
      } catch (error) {
        return new TestResult({
          passed: false,
          message: `Error: ${error.message}`
        });
      }
    },
    message: "Function should handle strings with all unique characters."
  },
  {
    name: "Complex patterns",
    test: (code) => {
      try {
        const lengthOfLongestSubstring = new Function(`${code}; return lengthOfLongestSubstring;`)();
        
        const test1 = lengthOfLongestSubstring("dvdf") === 3; // "vdf"
        const test2 = lengthOfLongestSubstring("anviaj") === 5; // "nviaj"
        const test3 = lengthOfLongestSubstring("abba") === 2; // "ab" or "ba"
        
        if (test1 && test2 && test3) {
          return new TestResult({ passed: true });
        } else {
          return new TestResult({
            passed: false,
            message: `Complex cases failed. "dvdf": ${lengthOfLongestSubstring("dvdf")}, "anviaj": ${lengthOfLongestSubstring("anviaj")}, "abba": ${lengthOfLongestSubstring("abba")}`
          });
        }
      } catch (error) {
        return new TestResult({
          passed: false,
          message: `Error: ${error.message}`
        });
      }
    },
    message: "Function should handle complex repeating patterns."
  }
];