import { TestResult } from "@nss-workshops/nss-core";

export default {
  id: 'e5f9b143',
  title: 'Module 7 - Group Exercise 3 of 3',
  sectionId: 'stacks-queues',
  previousChapterId: null,
  content: `
**Navigate:** [1](c3d7f921) | [2](d4e8a032) | 3

> 📖 Unfamiliar with classes? [Review the JS class syntax](https://javascript.info/class) before diving in.

## Exercise 3 of 3 — Build a Queue: TellerLine

Now build a queue. A \`TellerLine\` models customers waiting at a bank teller window. Customers join at the **back** and are served from the **front** — that's FIFO (First In, First Out).

## 🗣️ As a group:
- Each person implements their own solution independently
- After everyone finishes, compare — did you make the same choices?
- State the Big-O for each method
- Discuss: \`array.shift()\` is O(n) — why? How would you get O(1) dequeue?
- How does this compare to the \`PancakeStack\` you just built — what fundamentally changed?
- When would you reach for a queue over a stack in a real application?
`,
  exercises: [
    {
      starterCode: `/*
Exercise 3 — Build a Queue: TellerLine

Implement a TellerLine class that models customers waiting at a
bank teller window. Customers join at the back and are served
from the front (FIFO — First In, First Out).

Methods to implement:
  joinLine(customer)  — customer walks in and joins the back of the line
                        throws an Error if customer is not a non-empty string
  callNext()          — teller calls and removes the next customer from the front
  whoIsNext()         — see who is at the front without calling them
  isEmpty()           — return true if no customers are waiting
  lineLength()        — return how many people are waiting

Example:
  const line = new TellerLine();
  line.joinLine('Alice');
  line.joinLine('Bob');
  line.whoIsNext();   // 'Alice'
  line.callNext();    // 'Alice'
  line.whoIsNext();   // 'Bob'
  line.lineLength();  // 1

Discussion questions:
- What internal data structure are you using, and why?
- What is the Big-O of callNext() if you use array.shift()? Is there a way to do better?
- How does this compare to PancakeStack — what fundamentally changed?
- When might you prefer a queue over a stack in a real application?
*/

class TellerLine {
  constructor() {
    // Your setup here
  }

  joinLine(customer) {
    // Your code here
  }

  callNext() {
    // Your code here
  }

  whoIsNext() {
    // Your code here
  }

  isEmpty() {
    // Your code here
  }

  lineLength() {
    // Your code here
  }
}`,
      solution: `/*
Exercise 3 — Build a Queue: TellerLine

Note: array.shift() is O(n) because it re-indexes every element.
For a workshop exercise this is acceptable; in production you'd use a
linked list or a head-pointer trick to achieve O(1) dequeue.
*/

class TellerLine {
  constructor() {
    this._customers = [];
  }

  joinLine(customer) {
    if (typeof customer !== 'string' || customer.trim() === '') {
      throw new Error(\`"\${customer}" is not a valid customer name. Expected a non-empty string.\`);
    }
    this._customers.push(customer); // O(1) amortized — add to back
  }

  callNext() {
    return this._customers.shift(); // O(n) — removes from front, shifts all elements
    // O(1) alternative: track a head index instead of shifting
  }

  whoIsNext() {
    return this._customers[0]; // O(1) — peek at front, undefined if empty
  }

  isEmpty() {
    return this._customers.length === 0; // O(1)
  }

  lineLength() {
    return this._customers.length; // O(1)
  }

  // joinLine:    O(1) amortized
  // callNext:    O(n) with shift — O(1) amortized with head-pointer
  // whoIsNext:   O(1)
  // isEmpty:     O(1)
  // lineLength:  O(1)
  // Space:       O(n)
}`,
      tests: [
        {
          name: "joinLine / whoIsNext / callNext work together",
          test: (code) => {
            try {
              const TellerLine = new Function(`${code}; return TellerLine;`)();
              const line = new TellerLine();
              line.joinLine('Alice');

              const next = line.whoIsNext();
              const called = line.callNext();
              const empty = line.isEmpty();

              if (next === 'Alice' && called === 'Alice' && empty === true) {
                return new TestResult({ passed: true });
              }
              return new TestResult({
                passed: false,
                message: `Expected whoIsNext='Alice', callNext='Alice', isEmpty=true. Got ${next}, ${called}, ${empty}`
              });
            } catch (error) {
              return new TestResult({ passed: false, message: `Error: ${error.message}` });
            }
          },
          message: "whoIsNext should peek without removing; callNext should return and remove the front customer."
        },
        {
          name: "FIFO order is preserved",
          test: (code) => {
            try {
              const TellerLine = new Function(`${code}; return TellerLine;`)();
              const line = new TellerLine();
              line.joinLine('Alice');
              line.joinLine('Bob');
              line.joinLine('Charlie');

              const first = line.callNext();
              const second = line.callNext();
              const third = line.callNext();

              if (first === 'Alice' && second === 'Bob' && third === 'Charlie') {
                return new TestResult({ passed: true });
              }
              return new TestResult({
                passed: false,
                message: `Expected Alice → Bob → Charlie. Got ${first} → ${second} → ${third}`
              });
            } catch (error) {
              return new TestResult({ passed: false, message: `Error: ${error.message}` });
            }
          },
          message: "Customers should be served in the order they joined (FIFO)."
        },
        {
          name: "isEmpty reflects queue state",
          test: (code) => {
            try {
              const TellerLine = new Function(`${code}; return TellerLine;`)();
              const line = new TellerLine();
              const emptyAtStart = line.isEmpty();
              line.joinLine('Dana');
              const notEmptyAfterJoin = line.isEmpty();
              line.callNext();
              const emptyAfterCall = line.isEmpty();

              if (emptyAtStart === true && notEmptyAfterJoin === false && emptyAfterCall === true) {
                return new TestResult({ passed: true });
              }
              return new TestResult({
                passed: false,
                message: `isEmpty: start=${emptyAtStart}, afterJoin=${notEmptyAfterJoin}, afterCall=${emptyAfterCall}`
              });
            } catch (error) {
              return new TestResult({ passed: false, message: `Error: ${error.message}` });
            }
          },
          message: "isEmpty() should return true on a new or fully served line."
        },
        {
          name: "lineLength tracks the number of customers",
          test: (code) => {
            try {
              const TellerLine = new Function(`${code}; return TellerLine;`)();
              const line = new TellerLine();
              line.joinLine('Eve');
              line.joinLine('Frank');
              line.joinLine('Grace');
              const lengthAfterThree = line.lineLength();
              line.callNext();
              const lengthAfterCall = line.lineLength();

              if (lengthAfterThree === 3 && lengthAfterCall === 2) {
                return new TestResult({ passed: true });
              }
              return new TestResult({
                passed: false,
                message: `Expected 3 then 2. Got ${lengthAfterThree} then ${lengthAfterCall}`
              });
            } catch (error) {
              return new TestResult({ passed: false, message: `Error: ${error.message}` });
            }
          },
          message: "lineLength() should increment on joinLine and decrement on callNext."
        },
        {
          name: "callNext on an empty line returns undefined without crashing",
          test: (code) => {
            try {
              const TellerLine = new Function(`${code}; return TellerLine;`)();
              const line = new TellerLine();
              const result = line.callNext();
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
          message: "callNext() on an empty line should return undefined, not throw."
        },
        {
          name: "joinLine rejects invalid customer values",
          test: (code) => {
            try {
              const TellerLine = new Function(`${code}; return TellerLine;`)();
              const line = new TellerLine();
              let threw = false;
              try { line.joinLine(NaN); } catch (e) { threw = true; }
              if (threw) {
                return new TestResult({ passed: true });
              }
              return new TestResult({
                passed: false,
                message: "Expected joinLine(NaN) to throw an error, but it did not."
              });
            } catch (error) {
              return new TestResult({ passed: false, message: `Error: ${error.message}` });
            }
          },
          message: "joinLine should throw when passed a non-string value like NaN."
        }
      ]
    }
  ]
};
