import { TestResult } from "@nss-workshops/nss-core";

export default {
  id: 'f9e4b2a7',
  title: 'DSA Challenge 6 - Stack: use it to reverse',
  sectionId: 'combining-patterns',
  previousChapterId: null,
  content: `

**Navigate:** [1](9b8a8427) | [2](a4b7c9d2) | [3](e8f1a5b3) | [4](c6d9e2f4) | [5](b3a8d7c1) | 6 | [7](d1c5f8e3) | [8](a7b2e9f6) | [9](c4f7a1d8)

## 👥 Pair Programming Instructions

**Work in pairs for this challenge!** One person should be the **Driver** (writing code) and the other the **Navigator** (reviewing and guiding). **Switch roles for each function** you implement.

<iframe width="560" height="315" src="https://www.youtube.com/embed/jqGmL6Hf23k?si=qXmQcnQigfo1adTb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

**Why it matters:** Stacks model LIFO. Reversing with a stack demonstrates push/pop mechanics and O(1) operations without building the data structure yourself.

**Objectives:**
- Use a provided Stack (already implemented).
- Implement functions that reverse a string and an array using the stack.
- Explain why stack ops are O(1) and overall reversal is O(n).

**Time Estimate:** 20 minutes

## Problems to Solve:

1. **reverseStringWithStack(s)** - Use Stack to reverse and return a new string
   - Example: \`reverseStringWithStack('abc')\` → \`'cba'\`
   - Example: \`reverseStringWithStack('hello')\` → \`'olleh'\`
   - Example: \`reverseStringWithStack('')\` → \`''\` (empty string)

2. **reverseArrayWithStack(arr)** - Use Stack to return a NEW reversed array (do not mutate input)
   - Example: \`reverseArrayWithStack([1, 2, 3])\` → \`[3, 2, 1]\`
   - Example: \`reverseArrayWithStack(['a', 'b'])\` → \`['b', 'a']\`
   - Example: \`reverseArrayWithStack([])\` → \`[]\` (empty array)

## Algorithm:
1. Push all elements onto stack
2. Pop all elements to get reversed order
3. Return new string/array

## Big-O Analysis:
- **Stack ops are O(1)** - push and pop are constant time
- **Each element is pushed and popped once => O(n) time, O(n) space**`,

  exercise: {
    starterCode: `/*
Challenge 6: Stack — use it to reverse

Use the provided Stack class to implement string and array reversal.

The Stack class has these methods:
- push(x) - add element to top
- pop() - remove and return top element
- peek() - return top element without removing
- size - get number of elements
*/

// ✅ Provided Stack implementation — do NOT modify
class Stack{
  constructor(){ this._a=[]; }
  push(x){ this._a.push(x); }
  pop(){ return this._a.pop(); }
  peek(){ return this._a[this._a.length-1]; }
  get size(){ return this._a.length; }
}

// TODO: Implement using the provided Stack
function reverseStringWithStack(s){
  // Use Stack to reverse and return a new string
  // Your code here
}

function reverseArrayWithStack(arr){
  // Use Stack to return a NEW reversed array (do not mutate input)
  // Your code here
}`,

    solution: `/*
Challenge 6: Stack — use it to reverse
*/

// ✅ Provided Stack implementation — do NOT modify
class Stack{
  constructor(){ this._a=[]; }
  push(x){ this._a.push(x); }
  pop(){ return this._a.pop(); }
  peek(){ return this._a[this._a.length-1]; }
  get size(){ return this._a.length; }
}

// TODO: Implement using the provided Stack
function reverseStringWithStack(s){
  // Use Stack to reverse and return a new string
  const st = new Stack();
  
  // Push all characters onto stack
  for (const ch of s) {
    st.push(ch);
  }
  
  // Pop all characters to build reversed string
  let out = '';
  while (st.size) {
    out += st.pop();
  }
  
  return out;
}

function reverseArrayWithStack(arr){
  // Use Stack to return a NEW reversed array (do not mutate input)
  const st = new Stack();
  
  // Push all elements onto stack
  for (const x of arr) {
    st.push(x);
  }
  
  // Pop all elements to build reversed array
  const out = [];
  while (st.size) {
    out.push(st.pop());
  }
  
  return out;
}

// Stack ops are O(1). Each element is pushed and popped once => O(n) time, O(n) space.`,

    tests: [
      {
        name: "reverseStringWithStack works correctly",
        test: (code) => {
          try {
            const func = new Function(`${code}; \n return { reverseStringWithStack, reverseArrayWithStack };`)();
            
            const result1 = func.reverseStringWithStack('abc');
            const result2 = func.reverseStringWithStack('');
            
            if (result1 === 'cba' && result2 === '') {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `'abc' -> '${result1}', '' -> '${result2}'`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should reverse strings correctly."
      },
      {
        name: "reverseArrayWithStack works correctly",
        test: (code) => {
          try {
            const func = new Function(`${code}; \n return { reverseStringWithStack, reverseArrayWithStack };`)();
            
            const result1 = func.reverseArrayWithStack([1, 2, 3]);
            const result2 = func.reverseArrayWithStack([]);
            
            const test1 = JSON.stringify(result1) === JSON.stringify([3, 2, 1]);
            const test2 = JSON.stringify(result2) === JSON.stringify([]);
            
            if (test1 && test2) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `[1,2,3] -> ${JSON.stringify(result1)}, [] -> ${JSON.stringify(result2)}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should reverse arrays correctly."
      },
      {
        name: "Does not mutate input array",
        test: (code) => {
          try {
            const func = new Function(`${code}; \n return { reverseStringWithStack, reverseArrayWithStack };`)();
            
            const original = [1, 2, 3];
            const originalCopy = [...original];
            const result = func.reverseArrayWithStack(original);
            
            const inputUnchanged = JSON.stringify(original) === JSON.stringify(originalCopy);
            const resultCorrect = JSON.stringify(result) === JSON.stringify([3, 2, 1]);
            
            if (inputUnchanged && resultCorrect) {
              return new TestResult({ passed: true });
            } else {
              return new TestResult({
                passed: false,
                message: `Input changed: ${!inputUnchanged}, Result: ${JSON.stringify(result)}`
              });
            }
          } catch (error) {
            return new TestResult({
              passed: false,
              message: `Error: ${error.message}`
            });
          }
        },
        message: "Function should not mutate input array."
      }
    ]
  }
};