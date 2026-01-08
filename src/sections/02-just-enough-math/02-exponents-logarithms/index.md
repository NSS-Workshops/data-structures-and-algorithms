# Introduction

<iframe width="1120" height="630" src="https://www.youtube.com/embed/RtsQtQZ8vXI?si=JnVU-RDqdaWnPwzi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Reading

Imagine you are working as a software development engineer when your manager asks you to find the contact information of an employee named Alejandro Rosalez in the company directory. Away from your computer, you flip open a copy of the printed directory and…what next? How do you find Alejandro Rosalez in this book? You know that the directory is ordered alphabetically by last name (Rosalez) followed by first name (Alejandro). You could start at the very beginning and work your way through each page in sequence, but it could take ages to find Alejandro's information. Instead, you open the book close to center, as shown in Figure 1.

<img width=700 src="assets/book1.png"/>

*Figure 1: Book open at the middle page. The pages on the left represent names that begin with A through M, while the pages on the right represent names beginning with N through Z.*

Because the book is alphabetized by last name, the pages to your left contain information for every employee whose last name begins with a letter between A and M. The pages to your right contain the information of every employee whose last name begins with a letter between N and Z. You know that Alejandro's last name begins with R, so their contact information must be in the right half of the book because R is between N and Z.

You flip to the middle of the N–Z section of the directory to continue your search, as shown in Figure 2 below. You end up in the section containing last names beginning with the letter T.

<img width=700 src="assets/book2.png"/>

*Figure 2: Book open to a page close to names beginning with T. The pages on the left represent names that begin with A through S, while the pages on the right represent names beginning with T through Z.*

Now, the pages to your right contain the last names beginning with a letter between T and Z, while the pages to the left contain names beginning with a letter between A and S. Because R is between A and S, you flip to the left, opening the book as close to the middle of the N–S section as you can, because you already know R was between N and Z on the first flip. You continue this task, choosing to go either left or right and subdividing the pages you need to check in half until you reach the page containing names beginning with R. Then, you start the process over for the second letter in Alejandro Rosalez's last name, "o". Eventually, you work your way through each letter in Rosalez and find Alejandro's information.

This procedure of dividing the amount of work for this task is exactly what a computer does when it searches for a specific data item in an organized list. Moving left and right, narrowing down the search space until you find the name you are looking for (or determining that the information you are looking for doesn't exist) is an effective and very efficient strategy. Without realizing, you have performed an algorithm called **binary search**.

## How efficient is binary search?

Algorithms like binary search work efficiently because they limit the time spent looking for data in places the data can't exist. In the alphabetized directory, we know that Alejandro Rosalez's information can't be in the first half of the book because the last name Rosalez is not in the first half of the alphabet. Even if the directory were twice as long, it wouldn't take us twice as much time to find Alejandro's name because we would never look in the first half of the book. On the other hand, if we had to find their name by flipping through each page in sequence, it would take us twice as much time. The binary search algorithm has a smaller **growth rate** than reading through the entire directory one name at a time.

A **growth rate** describes how the amount of time or memory it takes to do a task changes as the size of the input increases. You can find more information about growth rates in the *Polynomials* reading.

An understanding of the different growth rates of algorithms is important for writing efficient code. Often, software engineers can implement a software feature by choosing between several algorithms. Even though the result of each algorithm is the same, the time the algorithm takes to perform a task might vary wildly.

In this reading, we introduce two operations that describe how certain algorithms perform: **exponents** and **logarithms**. These operations will help us choose between different algorithms.

## Exponents and exponential growth

When we multiply two numbers together, we're really adding a number to itself repeatedly. For example:

> `2 x 4` is the same as `2 + 2 + 2 + 2`

**expression** - a sequence of numbers, symbols, and operations that can be evaluated to get a single result.  
*Example: 2 + 3*

Exponents work according to a similar rule. Instead of adding a number repeatedly, however, an exponent tells us to multiply a number by itself repeatedly. For example:

> `3² = 3 x 3 = 9`  
> `4³ = 4 x 4 x 4 = 64`

**exponent** - a number written over another one indicating how many times the second number is multiplied by itself.  
*Example: 2² = 2 x 2 = 4*

In JavaScript, we often use variables to stand in for values that can change. For example:

```javascript
console.log(x + y - z);
```

We also use variables in math. Consider:

> `n²` means `n x n`

If `n = 2`, then `n² = 4`; if `n = 3`, then `n² = 9`.

But what if the variable is the exponent?

> `2ⁿ`

If `n = 3`, then `2ⁿ = 8`; if `n = 4`, then `2ⁿ = 16`

So, each time `n` increases by one, the result **doubles**.

We often use expressions like `2ⁿ` to describe algorithms that take **exponentially longer** as input size increases.

## What does exponential growth look like?

Imagine you're writing an algorithm to list all teams of developers. If there are 2 developers:

- Team of 0
- Team of 1 (two ways)
- Team of 2

<img width=700 src="assets/teams1.png"/>

*Figure 3: The four possible teams of two developers.*

Now add one more developer:

- Total teams = 8

<img width=700 src="assets/teams2.png"/>

*Figure 4: The eight possible teams of three developers.*

Represented as:

| A | B | C | Team Number |
|---|---|---|-------------|
| 0 | 0 | 0 | 0           |
| 0 | 0 | 1 | 1           |
| 0 | 1 | 0 | 2           |
| 0 | 1 | 1 | 3           |
| 1 | 0 | 0 | 4           |
| 1 | 0 | 1 | 5           |
| 1 | 1 | 0 | 6           |
| 1 | 1 | 1 | 7           |

Where `1` = developer on the team.

For 5 developers → 32 teams  
For 15 developers → 32,768 teams  
So, **exponential growth** = very inefficient

## Choosing efficient strategies

Suppose you write a program to list all possible teams of 20 developers. That's:

> `2²⁰ = 1,048,576` teams

Your manager only wants teams of 19 developers. If your program still generates all teams and filters them later, it's doing **1,048,556** unnecessary steps.

Moral: Design efficient algorithms from the start.

## Logarithms and logarithmic growth

Now we reverse exponents. For example:

> `2ˣ = 16` → What is `x`?

This is:

> `log₂16 = x`

**logarithm** - an operation that calculates the exponent needed to get another number.  
*Example: log₂16 = 4*

**base** - the number an exponent is applied to.  
*Example: 2 is the base of 2ⁿ and log₂n*

Another example:

> `log₂32 = x`  
`2 x 2 x 2 x 2 x 2 = 32` → so `x = 5`

Logarithmic algorithms grow **much slower** than linear or exponential ones.

e.g.,  
`log₂32 = 5`,  
`log₂1024 = 10`

## Comparing logarithmic and exponential growth

In binary search, you do:

> `log₂p` steps (p = pages)

If `p = 64`, then `log₂64 = 6`  
If `p = 128`, then `log₂128 = 7`

Compare:

| Input | log₂input | 2ⁿ |
|-------|-----------|----|
| 2     | 1         | 4  |
| 4     | 2         | 16 |
| 8     | 3         | 256 |
| 16    | 4         | 65,536 |

After a few doublings, exponential growth skyrockets.

<img width=700 src="assets/log-vs-exp.png"/>

*Figure 5: Graph of logarithmic and exponential growth.*

**Rule of thumb**:  
- Output doubles for each input? → exponential  
- Output increases slightly with input? → logarithmic

**Note**: in ATA materials and CS, `log n` means `log₂n` unless stated otherwise.

---

## I do

You're debugging a program where binary search is done **after** duplicating files:

- File count doubles every time
- Even though search is logarithmic, duplication makes it **exponential**

> After 64 runs → `2⁶⁴` = 18,446,744,073,709,551,615 files 😱

<iframe width="1120" height="630" src="https://www.youtube.com/embed/wNVdfw4HnbQ?si=kSVkXRoSDMTrmiKJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

🎥 *[Video: worked example from a word problem. Demonstrate how to determine whether a given growth pattern is exponential or logarithmic.]*

---

## We do

Suppose a list of names must be alphabetized.

You divide the list until pairs form, then merge pairs into sorted groups:

- 2 → 4 → 8 → 16 → ...

**Is this logarithmic or exponential?**

💡 *Hint: think back to binary search…*

<iframe width="1120" height="630" src="https://www.youtube.com/embed/Gys_km8yVPg?si=m_ixbh0su-U7V-yf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

🎥 *[Video: walk through the above problem. Demonstrate how to check only part of the list by performing a binary search on the list of customers.]*

---

## Conclusion

In this lesson:

- **Exponents** = repeated multiplication  
- **Logarithms** = finding the exponent  
- **Exponential growth** = bad  
- **Logarithmic growth** = good  

These tools help you write **efficient** code. Use them wisely!