## Lesson overview

There's no right or wrong way to code. There are often multiple ways to implement an algorithm or build a class. So how do we know which implementation to use? How do we know which is better?

In this lesson, we'll discuss what makes one code implementation better than another. We'll show how to determine this using Big O notation. We'll analyze code snippets to figure out just how efficient their usage of time and memory allocation is.

- In this reading, we'll introduce the term _Big O notation_ and some of the terminology that goes along with it. We'll also discuss the issues of time and space complexity and why they're important.
- In the second reading, we'll discuss polynomial complexity and how it fits in with Big O notation.  Additionally, we'll go over important steps for determining Big O and how different complexities compare to each other.
- In the third reading, we'll use what we've learned from the previous two readings to analyze code snippets and determine their complexity! We'll also discuss some common trade-offs and whether code optimization is necessary.

## Analyzing with Big O

<iframe width="1120" height="630" src="https://www.youtube.com/embed/itn09C2ZB9Y?si=4KFSGFsEsmV31njH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

When comparing algorithms that produce the same outcome, there are a few qualities that make one algorithm better than the other. If it's faster, less memory-intensive, and more readable, then it's better.  Readability is **always** an important consideration, but it can be a bit subjective. However, speed and memory usage are definitive measurements. 

To determine the speed and memory usage of an algorithm, we use Big O notation, which is a way to analyze and compare code.

Big O notation provides us with a precise vocabulary to talk about how code performs. We can analyze trade-offs between different approaches. With Big O notation, we can compare the speed of different algorithms and determine which uses less space (or memory).

When we discuss speed, we mean the time it takes to run an algorithm. But how do we measure time?

We could use a timer method to see how long it takes our code or a specific method to run. There are a few issues with this idea. First, different machines will record different times, depending on how fast the machine itself is. If we run an algorithm on an old computer from the year 2000, it will likely run slower than the same algorithm run on a brand-new computer. Second, the *same* machines often record different times! Timer methods aren't precise enough to get super accurate results, especially for algorithms that are fast. A few millisecond difference isn't that big of a deal if an algorithm takes a minute to run. However, it's a much bigger deal for an algorithm that only takes a half second to run. Overall, timers just aren't precise or reliable enough to compare algorithms. What else can we mean by _"time"_?

Instead of counting the seconds (or milliseconds) it takes to run an algorithm, we can count the _number of **operations**_ our computer has to run. By counting the operations, we don't have to account for the differences in machines. We don't have to rely on the preciseness of another method.  Counting the number of operations lets us understand the time complexity of code without ever having to run it! We can determine which algorithm or piece of code to use before we even implement it into our program.

We can also use Big O to calculate space complexity or the amount of memory used. Instead of the number of operations, we look at how much _memory space_ an algorithm is using instead. The space an algorithm uses is determined by the variables, which again we can analyze without even running the code.

## Operations aka Primitive operations
Operation aka Primitive operations (also called basic operations or elementary steps) 
are the low-level steps a computer performs during the execution of an algorithm. These are the building blocks we **count** when analyzing time complexity using Big-O.

### 🧱 Common Primitive Operations in Code:

| Type             | Example       | Description                          |
|------------------|---------------|--------------------------------------|
| Assignment        | `x = 5`       | Store a value in memory              |
| Arithmetic        | `a + b`, `c * d` | Add, subtract, multiply, divide   |
| Comparison        | `x === y`, `a > b` | Equality or relational check     |
| Logical ops       | `a && b`, `!flag` | AND, OR, NOT operations           |
| Variable access   | `let z = x`   | Read the value of a variable         |
| Function call     | `print(x)`    | Call a function (with no loops inside) |
| Array access      | `arr[3]`      | Get or set a value by index          |
| Return statement  | `return x + y`| Send a result back from a function   |

#### ✅ Why they matter:
When we say something runs in O(n) or O(1), we're really counting how many primitive operations the computer performs as input size grows.

#### 🧠 Rule of thumb:
If it looks like "one step" in code and doesn't involve a loop, it's probably a primitive operation.

## Big O terminology

Okay, so we can use Big O to help us analyze our code and determine the time and space complexity of an algorithm. But what does Big O actually look like?

Big O notation is represented in the following way: O(*blah blah* n *blah)*. The 'n' represents how much data is passed into or examined in our algorithm. The 'blah blah' refers to a mathematical expression.

The notation for Big O looks like a mathematical function call, but it's not! It's just notation for labeling the growth pattern of code. The 'O' stands for "Order of". Big O is really saying
the running time/memory growth of our code grows on the 'order of' some mathematical expression of n.

That sounds really complicated, but it's not. Let's look at a 'real world' example so we understand the terminology a bit better.

### Time complexity

Let's say we have a big jar full of beans. Our job is to count the number of beans in the jar. In this case, the beans are our data, so the number of beans = n.

If we're given a jar with 10 times the number of beans, it takes 10 times as long to count the beans. For example, if it takes us 10 seconds to count a jar with 10 beans, it would take us 100 seconds to count a jar with 100 beans. 10x the number of beans = 10x the amount of time!

Therefore, counting the beans has a time complexity of `O(n)` (pronounced "Big O of n"). `O(n)` means that the time it takes to complete a task grows as `n` (the input data) does, or that the time growth is to the *order of* `n`.

Now let's say the jars have labels on them that tell us how many beans are in the jar. No matter how many beans are in the jar, it takes the same amount of time for us to read the label on the jar and know how many beans are in them. This example represents `O(1)` (pronounced "Big O of 1", which we refer to as constant time). 

`O(1)` means that `n` (the input data) isn't involved at all
because no matter the value of `n`, the runtime is the same. It takes us 1 second to read the label of the jar with 10 beans and *still* takes 1 second to read the label of the jar with 100 beans!

`O(1)` is an ideal runtime for an algorithm. No matter how large our data is, the runtime remains the same. `O(n)` may be fine for smaller inputs (counting 10 beans only takes 10 seconds), but the time quickly grows as the input does (counting 10,000 beans takes 10,000 seconds, which is more than two and a half hours!).

### Space complexity

Instead of counting beans, let's say we're sorting them into individual bags. Each bean gets taken out of the large bag and placed into an individual bag. The beans are still `n`, and each bag is a new variable that we're storing data in.

This example has a space complexity of `O(n)` because the memory growth is to the order of `n`. If we have 10 beans, we need 10 bags, but if we have 100 beans, we need 100 bags. The memory used is directly related to the size of `n`.

Now let's go back to counting beans. When we finish counting the beans in a jar, we write down the number on a label that we're storing. This represents a space complexity of `O(1)`. No matter how many beans there are, the label is the same size and takes up the same amount of memory. The amount of memory used is constant and independent from the size of `n`.

Just as we discussed with time complexity, `O(1)` is overall better for `O(n)` for space complexity, too. If our space complexity is dependent on the size of our input, we can run out of memory if `n` becomes extremely large.  With a constant space complexity, we can ensure that we won't have memory issues if `n` becomes very large.

### Space Complexity Explained, It's About Peak Memory, Not Total Usage
When we analyze space complexity, we're talking about the maximum amount of additional memory an algorithm uses at any single point during its execution — not the total memory used over time.

This means if your algorithm creates a temporary array of size n once, the space complexity is O(n) — even if that happens multiple times or in different phases. It's about the peak memory usage, not the cumulative memory used across all steps.

#### The example below illustrates the difference between Peak Memory vs. Cumulative Memory

```javascript

function processArray(arr, times) {
  for (let i = 0; i < times; i++) {
    // Create a temporary array the size of the input
    let temp = arr.slice(); // O(n) space at this moment
    // Do something trivial with it, like reverse
    temp.reverse();
    // Then we drop 'temp' and move to the next iteration
  }
  return true;
}
```

**🧠 Why the space complexity is O(n), not O(n × times)**
On each iteration, the function allocates a temporary array temp of size n.
However, as soon as one iteration finishes, temp goes out of scope and is freed up to be used by other programs.
Memory is never used for more than one temporary array at the same time.
Therefore, the peak temporary memory usage during execution is O(n) — no matter how many times the loop runs.
This illustrates that space complexity measures the maximum additional memory used at any moment, not the total allocated over time.

Also, it's important to know that space complexity excludes the input and output. For example, if a method takes an array and sorts it in place, without allocating extra memory, its space complexity is O(1) — constant space — because it's not using additional memory proportional to the input size.
Here's a JavaScript example with an explanation that highlights how space complexity excludes input and output, and only considers additional memory used during execution:

```javascript
function reverseInPlace(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    // Swap elements
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr;
}
```

**Space Complexity: O(1)** 
Even though this function operates on an array of size n, the space complexity is O(1) — constant space. 
**Why?**
It doesn't create any new data structures that scale with the input size.
It uses only two variables (left and right) regardless of the length of the array.
The input array is modified in place, and no extra memory is allocated for output.

**✅ Reminder: Space complexity does not count the input or output — only the additional memory used during execution.**

## Summary

In this reading, we introduced Big O notation and its use for analyzing code. Big O notation provides us with the terminology to objectively discuss what makes algorithms better or worse than others. We also discussed the concepts of time and space complexity as well as how they can affect performance.

## Common trade-offs

When considering Big O, there are sometimes trade-offs we must make. Sometimes we must decide between having a better optimized time complexity *or* a better optimized space complexity. There's no right answer for which is more important. It really depends on our code and its usage.

Additionally, sometimes to attain the best time and/or space complexity, we must give up other important features. To create Big O efficient code, we might sacrifice readability sometimes. Readability is very important, especially if we're working on a team who also needs to be able to utilize that code. We don't want to focus so much on optimizing time and space complexity that our code is barely legible to an outside eye.

It's also **very important** to understand that sometimes we'll never (or it's extremely unlikely) reach the worst case. Before we spend hours trying to optimize our method with a polynomial time complexity, think about whether `n` will ever get really large. If `n` will stay a reasonable size, it may not be worth the time, effort, and readability it will take to improve the time complexity. Sometimes it's worth it, **especially if we're running into issues with our code during testing**.

## Conclusion

In this reading, we analyzed several different pieces of code to determine their time and space complexities.  We went over some general rules for determining complexity, such as arithmetic operations and variable assignment being constant. We then discussed trade-offs that are important to consider when determining whether to optimize our code. Big O is an important concept to understand for code analysis, but not every piece of code needs to be optimized.
