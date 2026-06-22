import { TestResult } from "@nss-workshops/nss-core";

export default {
  id: 'd4e8a032',
  title: 'Module 7 - Group Exercise 2 of 3',
  sectionId: 'stacks-queues',
  previousChapterId: null,
  content: `
**Navigate:** [1](c3d7f921) | 2 | [3](e5f9b143)

> 📖 Unfamiliar with classes? [Review the JS class syntax](https://javascript.info/class) before diving in.

## Exercise 2 of 3 — Build a Stack: PancakeStack

Now you're going to build the data structure itself. Implement a \`PancakeStack\` class that models a stack of pancakes on a plate. Pancakes are always added and eaten from the **top** — that's LIFO (Last In, First Out).

## 🗣️ As a group:
- Each person implements their own solution independently
- After everyone finishes, compare implementations — did you make the same choices?
- State the Big-O for each method in your solution
- Discuss: what would change if you used a linked list instead of an array?
- What happens if someone calls \`eatPancake()\` when the plate is empty?
`,
  exercises: [
    {
      starterCode: `/*
Exercise 2 — Build a Stack: PancakeStack

Implement a PancakeStack class that models a stack of pancakes
on a plate. Pancakes are always added and eaten from the top
(LIFO — Last In, First Out).

Methods to implement:
  addPancake(flavor) — place a pancake on top of the stack
  eatPancake()       — remove and return the top pancake
  topPancake()       — peek at the top pancake without removing it
  isEmpty()          — return true if no pancakes remain
  size()             — return how many pancakes are stacked

Example:
  const plate = new PancakeStack();
  plate.addPancake('blueberry');
  plate.addPancake('chocolate chip');
  plate.topPancake();  // 'chocolate chip'
  plate.eatPancake();  // 'chocolate chip'
  plate.topPancake();  // 'blueberry'
  plate.size();        // 1

Discussion questions:
- What internal data structure are you using, and why?
- What is the Big-O of each method?
- What happens if someone calls eatPancake() when the plate is empty?
- How would the implementation change if you used a linked list instead?
*/

class PancakeStack {
  constructor() {
    // Your setup here
  }

  addPancake(flavor) {
    // Your code here
  }

  eatPancake() {
    // Your code here
  }

  topPancake() {
    // Your code here
  }

  isEmpty() {
    // Your code here
  }

  size() {
    // Your code here
  }
}`,
      solution: `/*
Exercise 2 — Build a Stack: PancakeStack
*/

class PancakeStack {
  constructor() {
    this._pancakes = [];
  }

  addPancake(flavor) {
    this._pancakes.push(flavor);  // O(1) amortized
  }

  eatPancake() {
    return this._pancakes.pop();  // O(1) — returns undefined on empty, no crash
  }

  topPancake() {
    return this._pancakes[this._pancakes.length - 1]; // O(1) — undefined on empty
  }

  isEmpty() {
    return this._pancakes.length === 0; // O(1)
  }

  size() {
    return this._pancakes.length; // O(1)
  }

  // All operations: O(1) time
  // Space Complexity: O(n) — stores every pancake
}`,
      tests: [
        {
          name: "addPancake / topPancake / eatPancake work together",
          test: (code) => {
            try {
              const PancakeStack = new Function(`${code}; return PancakeStack;`)();
              const plate = new PancakeStack();
              plate.addPancake('blueberry');
              plate.addPancake('chocolate chip');

              const top = plate.topPancake();
              const eaten = plate.eatPancake();
              const topAfter = plate.topPancake();

              if (top === 'chocolate chip' && eaten === 'chocolate chip' && topAfter === 'blueberry') {
                return new TestResult({ passed: true });
              }
              return new TestResult({
                passed: false,
                message: `Expected top='chocolate chip', eaten='chocolate chip', topAfter='blueberry'. Got top=${top}, eaten=${eaten}, topAfter=${topAfter}`
              });
            } catch (error) {
              return new TestResult({ passed: false, message: `Error: ${error.message}` });
            }
          },
          message: "topPancake should peek without removing; eatPancake should return and remove the top."
        },
        {
          name: "isEmpty reflects stack state",
          test: (code) => {
            try {
              const PancakeStack = new Function(`${code}; return PancakeStack;`)();
              const plate = new PancakeStack();
              const emptyAtStart = plate.isEmpty();
              plate.addPancake('buttermilk');
              const notEmptyAfterAdd = plate.isEmpty();
              plate.eatPancake();
              const emptyAfterEat = plate.isEmpty();

              if (emptyAtStart === true && notEmptyAfterAdd === false && emptyAfterEat === true) {
                return new TestResult({ passed: true });
              }
              return new TestResult({
                passed: false,
                message: `isEmpty returned: start=${emptyAtStart}, afterAdd=${notEmptyAfterAdd}, afterEat=${emptyAfterEat}`
              });
            } catch (error) {
              return new TestResult({ passed: false, message: `Error: ${error.message}` });
            }
          },
          message: "isEmpty() should return true on a new or fully eaten stack."
        },
        {
          name: "size tracks the number of pancakes",
          test: (code) => {
            try {
              const PancakeStack = new Function(`${code}; return PancakeStack;`)();
              const plate = new PancakeStack();
              plate.addPancake('plain');
              plate.addPancake('banana');
              plate.addPancake('pecan');
              const sizeAfterThree = plate.size();
              plate.eatPancake();
              const sizeAfterEat = plate.size();

              if (sizeAfterThree === 3 && sizeAfterEat === 2) {
                return new TestResult({ passed: true });
              }
              return new TestResult({
                passed: false,
                message: `Expected size 3 then 2. Got ${sizeAfterThree} then ${sizeAfterEat}`
              });
            } catch (error) {
              return new TestResult({ passed: false, message: `Error: ${error.message}` });
            }
          },
          message: "size() should increment on addPancake and decrement on eatPancake."
        },
        {
          name: "eatPancake on an empty stack returns undefined without crashing",
          test: (code) => {
            try {
              const PancakeStack = new Function(`${code}; return PancakeStack;`)();
              const plate = new PancakeStack();
              const result = plate.eatPancake();
              if (result === undefined) {
                return new TestResult({ passed: true });
              }
              return new TestResult({
                passed: false,
                message: `Expected undefined, got ${result}`
              });
            } catch (error) {
              return new TestResult({ passed: false, message: `Error: ${error.message}` });
            }
          },
          message: "eatPancake() on an empty stack should return undefined, not throw."
        }
      ]
    }
  ]
};
