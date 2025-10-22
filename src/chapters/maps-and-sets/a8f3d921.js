import { TestResult } from "@nss-workshops/nss-core";

export const inClassMapCode = {
  id: 'a8f3d921',
  title: 'Module 7 - In Class Code Exercise One',
  sectionId: 'maps-and-sets',
  previousChapterId: null,
  content: `
Hi team — the currently provided code passes the tests but is inefficient and will not scale as input size grows. Your task is to refactor the code in the editor to a more efficient implementation.

## 🗣️ As a group, do the following:

- Discuss why the code is inefficient.
- State the time and space complexity (Big-O) of the provided solution.
- Decide when it’s worth refactoring (input sizes, performance measurement evidence, customer testimony etc..).
- Identify which data structure(s) from this week module can improve runtime and why.
- Estimate the complexity of your proposed solution.
- Implement the improved version and ensure all tests still pass.
- Be ready to present your process, trade-offs, and results to the class.

## Problem: Aggregate Purchase Quantities

Given an array of purchase objects with \`id\` and \`qty\` properties, aggregate the total quantity for each product ID.

The function should return an array of objects in the same format: \`[{id, qty}]\`.`,
  exercise: {
    starterCode:`/*
Problem: Aggregate Purchase Quantities

Given an array of purchase objects with id and qty properties,
aggregate the total quantity for each product ID.

Example:
Input: [
  { id: "A12", qty: 2 },
  { id: "B07", qty: 1 },
  { id: "A12", qty: 3 },
  { id: "C99", qty: 5 },
  { id: "B07", qty: 2 }
]

Output: [
  { id: "A12", qty: 5 },
  { id: "B07", qty: 3 },
  { id: "C99", qty: 5 }
]

Follow-up Questions:
- What is the time complexity of your solution?
- What is the space complexity?
- How does using a Map improve performance compared to array operations?
*/

// Inefficient: O(n^2) - uses array.find() which is O(n) for each item
function aggregateQuantities(items) {
  const totals = []; // [{id, qty}]
  for (const { id, qty } of items) {
    const entry = totals.find(e => e.id === id); // O(n)
    if (entry) entry.qty += qty;
    else totals.push({ id, qty });
  }
  return totals;
}`,
    solution:`/*
Problem: Aggregate Purchase Quantities

Given an array of purchase objects with id and qty properties,
aggregate the total quantity for each product ID.
*/

// Optimized: O(n) - uses Map for O(1) average lookup time
function aggregateQuantities(items) {
  const m = new Map(); // id -> qty
  
  // Iterate through items once, using Map for fast lookups
  for (const { id, qty } of items) {
    // Get current quantity (or 0 if not exists) and add new quantity
    m.set(id, (m.get(id) ?? 0) + qty);
  }
  
  // Convert Map back to array format matching the input structure
  return Array.from(m, ([id, qty]) => ({ id, qty }));
  
  // Time Complexity: O(n) - single pass through items
  // Space Complexity: O(k) - where k is number of unique product IDs
}`,
    tests:[
      {
        name: "Basic quantity aggregation",
        test: (code) => {
          try {
            const aggregateQuantities = new Function(`${code}; return aggregateQuantities;`)();
            
            const purchases = [
              { id: "A12", qty: 2 },
              { id: "B07", qty: 1 },
              { id: "A12", qty: 3 },
              { id: "C99", qty: 5 },
              { id: "B07", qty: 2 }
            ];
            
            const result = aggregateQuantities(purchases);
            
            // Convert to Map for easier testing (order doesn't matter)
            const resultMap = new Map(result.map(item => [item.id, item.qty]));
            
            const test1 = resultMap.get("A12") === 5;
            const test2 = resultMap.get("B07") === 3;
            const test3 = resultMap.get("C99") === 5;
            const test4 = result.length === 3;
            
            if (test1 && test2 && test3 && test4) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Failed basic aggregation. Expected A12:5, B07:3, C99:5. Got: ${JSON.stringify(result)}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should correctly aggregate quantities for duplicate IDs."
      },
      {
        name: "Handle single items",
        test: (code) => {
          try {
            const aggregateQuantities = new Function(`${code}; return aggregateQuantities;`)();
            
            const purchases = [
              { id: "X01", qty: 10 }
            ];
            
            const result = aggregateQuantities(purchases);
            
            const test1 = result.length === 1;
            const test2 = result[0].id === "X01";
            const test3 = result[0].qty === 10;
            
            if (test1 && test2 && test3) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Failed single item test. Expected [{id:"X01",qty:10}]. Got: ${JSON.stringify(result)}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should handle arrays with single items."
      },
      {
        name: "Handle empty array",
        test: (code) => {
          try {
            const aggregateQuantities = new Function(`${code}; return aggregateQuantities;`)();
            
            const result = aggregateQuantities([]);
            
            if (Array.isArray(result) && result.length === 0) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Failed empty array test. Expected empty array. Got: ${JSON.stringify(result)}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should handle empty arrays."
      },
      {
        name: "Return correct object structure",
        test: (code) => {
          try {
            const aggregateQuantities = new Function(`${code}; return aggregateQuantities;`)();
            
            const purchases = [
              { id: "TEST", qty: 5 },
              { id: "TEST", qty: 3 }
            ];
            
            const result = aggregateQuantities(purchases);
            
            const isArray = Array.isArray(result);
            const hasCorrectStructure = result.every(item => 
              typeof item === 'object' && 
              typeof item.id === 'string' && 
              typeof item.qty === 'number'
            );
            
            if (isArray && hasCorrectStructure && result.length === 1 && result[0].qty === 8) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Incorrect structure. Expected array of {id, qty} objects. Got: ${JSON.stringify(result)}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should return array of objects with correct {id, qty} structure."
      }
    ]
  }
};