Now that you know RAM is a numbered grid of boxes, the next question is: how does a program find its data?

## Variable Names vs. Addresses

When you write `let score = 42` in JavaScript, you use the name `score` for your own convenience. Internally, the computer reserves a location in RAM and stores the value `42` there. The variable name is just a human-readable label that the language maps to an address behind the scenes.

## Values vs. References

There are two ways a variable can relate to data in memory:

**Storing a value directly** — the variable's memory location contains the actual data. Changing one variable does not affect another.

```js
let a = 5;
let b = a;  // b gets its own copy of 5
b = 10;
console.log(a); // still 5
```

**Storing a reference** — the variable's memory location contains an *address* pointing to where the data actually lives elsewhere in memory.

```js
const a = [1, 2, 3];
const b = a;     // b holds the same address as a
b.push(4);
console.log(a);  // [1, 2, 3, 4]
```

`b.push(4)` changed `a` as well — because both variables were pointing to the *same location* in memory. There was only ever one array; `a` and `b` were just two different labels for the same address.

## What Is a Reference?

A **reference** is a value that stores a memory address rather than data. Instead of saying "the value is 42," it says "the value is at address 1042."

In JavaScript:
- **Primitive types** (numbers, strings, booleans, `null`, `undefined`) are stored by **value** — each variable gets its own copy.
- **Objects and arrays** are stored by **reference** — variables hold an address pointing to where the data lives.

This distinction comes up constantly in programming, and now you know exactly why it exists: copying a large object by duplicating every byte would be slow. Copying an address is always the same small size, and it allows the copied reference to modify the same data as the original (which we may or may not want)