import { TestResult } from "@nss-workshops/nss-core";

export const codeExcerciseEightChapter = {
  id: 'a7b2e9f6',
  title: 'DSA Challenge 8 - Sorting: built-in compare & O(n log n)',
  sectionId: 'combining-patterns',
  previousChapterId: null,
  content: `
# Challenge 8: Sorting — built-in compare & O(n log n)

**Navigate:** [1](9b8a8427) | [2](a4b7c9d2) | [3](e8f1a5b3) | [4](c6d9e2f4) | [5](b3a8d7c1) | [6](f9e4b2a7) | [7](d1c5f8e3) | 8 | [9](c4f7a1d8)

## 👥 Pair Programming Instructions

**Work in pairs for this challenge!** One person should be the **Driver** (writing code) and the other the **Navigator** (reviewing and guiding). **Switch roles for each function** you implement.

<iframe width="560" height="315" src="https://www.youtube.com/embed/jqGmL6Hf23k?si=qXmQcnQigfo1adTb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

**Why it matters:** Real work is often sorting records by one or more fields.

**Objectives:**
- Sort objects by natural vs custom order with a comparator.
- Recognize built-in sort is typically O(n log n).

**Time Estimate:** 20 minutes

## Problem to Solve:

**sortTasks(tasks)** - Given an array of task objects, return new array sorted by:
1. Ascending priority (lower numbers first)
2. Then by earliest due date

Task object format: \`{id: number, title: string, priority: number, due: string}\`

**Examples:**
   - Input: \`[{id:1, priority:2, due:'2025-09-10'}, {id:2, priority:1, due:'2025-09-15'}]\`
   - Output: \`[{id:2, priority:1, due:'2025-09-15'}, {id:1, priority:2, due:'2025-09-10'}]\` (priority 1 first)
   
   - Input: \`[{id:3, priority:1, due:'2025-09-01'}, {id:4, priority:1, due:'2025-08-31'}]\`
   - Output: \`[{id:4, priority:1, due:'2025-08-31'}, {id:3, priority:1, due:'2025-09-01'}]\` (earlier date first)

## Algorithm:
1. Use Array.sort() with custom comparator
2. First compare by priority
3. If priorities equal, compare by due date
4. Return new sorted array (don't mutate original)

## Big-O Analysis:
- **Typical O(n log n)** due to sort algorithm
- **Comparator is O(1)** per comparison`,

  exercise: {
    starterCode: `/*
Challenge 8: Sorting — built-in compare & O(n log n)

Given an array of tasks with this format:
{id: number, title: string, priority: number, due: string (ISO date)}

Return new array sorted by:
1. Ascending priority (lower numbers first)  
2. Then by earliest due date

Example:
[
  {id:1, title:'a', priority:2, due:'2025-09-10'},
  {id:2, title:'b', priority:1, due:'2025-09-15'},
  {id:3, title:'c', priority:1, due:'2025-09-01'},
  {id:4, title:'d', priority:2, due:'2025-08-31'}
]

Should return tasks in order: [3, 2, 4, 1] (by id)
*/

function sortTasks(tasks){
  // Return new array sorted by ascending priority, then by earliest due date
  // Your code here
}`,

    solution: `/*
Challenge 8: Sorting — built-in compare & O(n log n)
*/

function sortTasks(tasks){
  // Return new array sorted by ascending priority, then by earliest due date
  return [...tasks].sort((a, b) => {
    // First compare by priority (ascending)
    if (a.priority !== b.priority) {
      return a.priority - b.priority;
    }
    
    // If priorities are equal, compare by due date (earliest first)
    const ad = new Date(a.due).getTime();
    const bd = new Date(b.due).getTime();
    return ad - bd;
  });
}

// Typical O(n log n) due to sort; comparator O(1) per compare.`,

    tests: [
      {
        name: "sortTasks works correctly",
        test: (code) => {
          try {
            const func = new Function(`${code}; \n return sortTasks;`)();
            
            const tasks = [
              {id:1, title:'a', priority:2, due:'2025-09-10'},
              {id:2, title:'b', priority:1, due:'2025-09-15'},
              {id:3, title:'c', priority:1, due:'2025-09-01'},
              {id:4, title:'d', priority:2, due:'2025-08-31'},
            ];
            
            const result = func(tasks);
            const ids = result.map(t => t.id);
            
            if (JSON.stringify(ids) === JSON.stringify([3, 2, 4, 1])) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Expected [3,2,4,1], got ${JSON.stringify(ids)}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should sort by priority then by due date."
      },
      {
        name: "Does not mutate original array",
        test: (code) => {
          try {
            const func = new Function(`${code}; \n return sortTasks;`)();
            
            const tasks = [
              {id:1, title:'a', priority:2, due:'2025-09-10'},
              {id:2, title:'b', priority:1, due:'2025-09-15'}
            ];
            
            const originalIds = tasks.map(t => t.id);
            const result = func(tasks);
            const afterIds = tasks.map(t => t.id);
            
            const unchanged = JSON.stringify(originalIds) === JSON.stringify(afterIds);
            const sorted = result.map(t => t.id);
            
            if (unchanged && JSON.stringify(sorted) === JSON.stringify([2, 1])) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Original unchanged: ${unchanged}, Sorted: ${JSON.stringify(sorted)}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should not mutate the original array."
      },
      {
        name: "Handles edge cases",
        test: (code) => {
          try {
            const func = new Function(`${code}; \n return sortTasks;`)();
            
            // Empty array
            const result1 = func([]);
            
            // Single task
            const result2 = func([{id:1, title:'a', priority:1, due:'2025-01-01'}]);
            
            // Same priority and date
            const result3 = func([
              {id:1, title:'a', priority:1, due:'2025-01-01'},
              {id:2, title:'b', priority:1, due:'2025-01-01'}
            ]);
            
            const test1 = result1.length === 0;
            const test2 = result2.length === 1 && result2[0].id === 1;
            const test3 = result3.length === 2;
            
            if (test1 && test2 && test3) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Empty: ${test1}, Single: ${test2}, Same: ${test3}`
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
      }
    ]
  }
};