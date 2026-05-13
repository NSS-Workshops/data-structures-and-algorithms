Now that you understand how memory works, you can see *why* data structures are designed the way they are — not just *what* they do.

## Arrays: Contiguous Memory

When you create an array, the computer reserves a **contiguous** block of memory — boxes that are sequential and adjacent, with no gaps.

Because all elements sit right next to each other and each element is the same size, the computer can calculate any element's exact address with a single formula:

```
address of element = start address + (index × element size)
```

That is one arithmetic operation, regardless of how large the array is. This is why array index access is constant time.

```js
const scores = [88, 92, 75, 100];
console.log(scores[2]);
```

Note that this formula depends on every element being the same size. Typed arrays (like `Int32Array`) guarantee this. Regular JavaScript arrays are more loosely typed — you can mix numbers, strings, and objects in the same array — so the engine handles the memory layout internally. This is complicated and not important for now. What matters is we can still access any element immediately based on its index.

## References Enable Flexibility

Not every data structure packs its elements together. Some use **references** to link elements that can live anywhere in memory. Each element holds its data plus the address of the next element — a chain rather than a block.

This is the foundation of data structures you will encounter later in the course, such as linked lists. The elements do not need to be adjacent; they just need to know where the next one is.

## The Trade-Off You Will Keep Seeing

| Approach | Strength | Limitation |
|----------|----------|------------|
| **Contiguous storage** (arrays) | Direct access by index, calculated immediately | Inserting or removing elements can be expensive |
| **Reference-based storage** | Flexible structure, efficient insertion | Must follow the chain to reach any element |

Every data structure you study in this course is an answer to the question: *given how memory actually works, what is the best way to organize this type of data?* The answer always involves this trade-off. You now have the mental model to understand why.
