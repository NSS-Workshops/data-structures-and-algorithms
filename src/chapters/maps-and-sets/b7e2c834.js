import { TestResult } from "../../utils/test_utils";

export const inClassSetCode = {
  id: 'b7e2c834',
  title: 'Module 7 - In Class Code Exercise Two',
  sectionId: 'maps-and-sets',
  previousChapterId: null,
  content: `
Hi team — the currently provided code passes the tests but is inefficient and will not scale as input size grows. Your task is to refactor the code in the editor to a more efficient implementation.

## 🗣️ As a group, do the following:

- Discuss why the code is inefficient.
- State the time and space complexity (Big-O) of the provided solution.
- Decide when it’s worth refactoring (input sizes, performance measurement evidence, customer testimony etc..).
- Identify which data structure(s) from this weeks module can improve runtime and why.
- Estimate the complexity of your proposed solution.
- Implement the improved version and ensure all tests still pass.
- Be ready to present your process, trade-offs, and results to the class.

## Problem: Filter Allowed Players

Given an array of player names and an array of banned player names, return an array of unique allowed players in the order they first appear.

The function should exclude banned players and remove duplicates while preserving the first occurrence order.
`,
  exercise: {
    starterCode:`/*
Problem: Filter Allowed Players

Given an array of player names and an array of banned player names,
return an array of unique allowed players in the order they first appear.

Example:
Input:
  players = ["sam","lee","sam","ana","zoe","lee","max"]
  banned = ["lee","bot123","xX_hack_Xx"]

Output: ["sam","ana","zoe","max"]

Follow-up Questions:
- What is the time complexity of your solution?
- What is the space complexity?
- How does using a Set improve performance compared to array operations?
*/

// Inefficient: O(n*m + n^2) - nested scans + indexOf for deduplication
function allowedPlayers(all, bannedList) {
  const out = [];
  for (const p of all) {
    if (!bannedList.includes(p)) {        // O(m) - scan banned list
      if (out.indexOf(p) === -1) out.push(p); // O(n) - scan output array
    }
  }
  return out;
}`,
    solution:`/*
Problem: Filter Allowed Players

Given an array of player names and an array of banned player names,
return an array of unique allowed players in the order they first appear.
*/

// Optimized: O(n + m) - using Set for fast lookups
function allowedPlayers(all, bannedList) {
  const bannedSet = new Set(bannedList); // O(m) - create banned set
  const seen = new Set();                // Track seen players
  const out = [];

  for (const p of all) {                  // O(n) - single pass
    // Check if player is not banned AND not already seen
    if (!bannedSet.has(p) && !seen.has(p)) { // O(1) + O(1) average
      seen.add(p);                       // O(1) average
      out.push(p);
    }
  }
  return out; // preserves first-seen order
  
  // Time Complexity: O(n + m) - where n = players, m = banned list
  // Space Complexity: O(m + k) - where k = unique allowed players
}`,
    tests:[
      {
        name: "Basic player filtering",
        test: (code) => {
          try {
            const allowedPlayers = new Function(`${code}; return allowedPlayers;`)();
            
            const players = ["sam","lee","sam","ana","zoe","lee","max"];
            const banned = ["lee","bot123","xX_hack_Xx"];
            
            const result = allowedPlayers(players, banned);
            const expected = ["sam","ana","zoe","max"];
            
            const test1 = JSON.stringify(result) === JSON.stringify(expected);
            
            if (test1) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Failed basic filtering. Expected: ${JSON.stringify(expected)}. Got: ${JSON.stringify(result)}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should filter banned players and remove duplicates while preserving order."
      },
      {
        name: "Handle empty arrays",
        test: (code) => {
          try {
            const allowedPlayers = new Function(`${code}; return allowedPlayers;`)();
            
            const result1 = allowedPlayers([], ["banned"]);
            const result2 = allowedPlayers(["player"], []);
            const result3 = allowedPlayers([], []);
            
            const test1 = JSON.stringify(result1) === JSON.stringify([]);
            const test2 = JSON.stringify(result2) === JSON.stringify(["player"]);
            const test3 = JSON.stringify(result3) === JSON.stringify([]);
            
            if (test1 && test2 && test3) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Failed empty array tests. Results: ${JSON.stringify([result1, result2, result3])}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should handle empty player lists and empty banned lists."
      },
      {
        name: "All players banned",
        test: (code) => {
          try {
            const allowedPlayers = new Function(`${code}; return allowedPlayers;`)();
            
            const players = ["alice", "bob", "charlie"];
            const banned = ["alice", "bob", "charlie", "dave"];
            
            const result = allowedPlayers(players, banned);
            
            if (JSON.stringify(result) === JSON.stringify([])) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Failed all banned test. Expected: []. Got: ${JSON.stringify(result)}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should return empty array when all players are banned."
      },
      {
        name: "No duplicates and preserve order",
        test: (code) => {
          try {
            const allowedPlayers = new Function(`${code}; return allowedPlayers;`)();
            
            const players = ["a", "b", "a", "c", "b", "d", "a"];
            const banned = ["x", "y"];
            
            const result = allowedPlayers(players, banned);
            const expected = ["a", "b", "c", "d"]; // first occurrence order
            
            if (JSON.stringify(result) === JSON.stringify(expected)) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Failed deduplication test. Expected: ${JSON.stringify(expected)}. Got: ${JSON.stringify(result)}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should remove duplicates while preserving first occurrence order."
      },
      {
        name: "Case sensitivity",
        test: (code) => {
          try {
            const allowedPlayers = new Function(`${code}; return allowedPlayers;`)();
            
            const players = ["Alice", "alice", "ALICE"];
            const banned = ["alice"]; // only lowercase banned
            
            const result = allowedPlayers(players, banned);
            const expected = ["Alice", "ALICE"]; // case-sensitive matching
            
            if (JSON.stringify(result) === JSON.stringify(expected)) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Failed case sensitivity test. Expected: ${JSON.stringify(expected)}. Got: ${JSON.stringify(result)}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should handle case-sensitive player name matching."
      }
    ]
  }
};