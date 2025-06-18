import image1 from "./images/image1.png";
import picture1 from "./images/Picture1.png";
import picture2 from "./images/Picture2.png";

export const bigONotationChapter = {
  id: 'big-o-notation',
  title: 'Big-O Notation: Time vs Space Complexity',
  sectionId: 'algorithmic-thinking',
  previousChapterId: 'problem-solving-process',
  content: `
## Lesson overview

There's no right or wrong way to code. There are often multiple ways to implement an algorithm or build a class. So how do we know which implementation to use? How do we know which is better?

In this lesson, we'll discuss what makes one code implementation better than another. We'll show how to determine this using Big O notation. We'll analyze code snippets to figure out just how efficient their usage of time and memory allocation is.

- In this reading, we'll introduce the term _Big O notation_ and some of the terminology that goes along with it. We'll also discuss the issues of time and space complexity and why they're important.
- In the second reading, we'll discuss polynomial complexity and how it fits in with Big O notation.  Additionally, we'll go over important steps for determining Big O and how different complexities compare to each other.
- In the third reading, we'll use what we've learned from the previous two readings to analyze code snippets and determine their complexity! We'll also discuss some common trade-offs and whether code optimization is necessary.

## Analyzing with Big O

When comparing algorithms that produce the same outcome, there are a few qualities that make one algorithm better than the other. If it's faster, less memory-intensive, and more readable, then it's better.  Readability is **always** an important consideration, but it can be a bit subjective. However, speed and memory usage are definitive measurements. 

To determine the speed and memory usage of an algorithm, we use Big O notation, which is a way to analyze and compare code.

Big O notation provides us with a precise vocabulary to talk about how code performs. We can analyze trade-offs between different approaches. With Big O notation, we can compare the speed of different algorithms and determine which uses less space (or memory).

When we discuss speed, we mean the time it takes to run an algorithm. But how do we measure time?

We could use a timer method to see how long it takes our code or a specific method to run. There are a few issues with this idea. First, different machines will record different times, depending on how fast the machine itself is. If we run an algorithm on an old computer from the year 2000, it will likely run slower than the same algorithm run on a brand-new computer. Second, the *same* machines often record different times! Timer methods aren't precise enough to get super accurate results, especially for algorithms that are fast. A few millisecond difference isn't that big of a deal if an algorithm takes a minute to run. However, it's a much bigger deal for an algorithm that only takes a half second to run. Overall, timers just aren't precise or reliable enough to compare algorithms. What else can we mean by _"time"_?

Instead of counting the seconds (or milliseconds) it takes to run an algorithm, we can count the _number of **operations**_ our computer has to run. By counting the operations, we don't have to account for the differences in machines. We don't have to rely on the preciseness of another method.  Counting the number of operations lets us understand the time complexity of code without ever having to run it! We can determine which algorithm or piece of code to use before we even implement it into our program.

We can also use Big O to calculate space complexity or the amount of memory used. Instead of the number of operations, we look at how much _memory space_ an algorithm is using instead. The space an algorithm uses is determined by the variables, which again we can analyze without even running the code.

## Big O terminology

Okay, so we can use Big O to help us analyze our code and determine the time and space complexity of an algorithm. But what does Big O actually look like?

Big O notation is represented in the following way: O(*blah blah* n *blah)*. The 'n' represents how much data is passed into or examined in our algorithm. The 'blah blah' refers to a mathematical expression.

The notation for Big O looks like a mathematical function call, but it's not! It's just notation for labeling the growth pattern of code. The 'O' stands for "Order of". Big O is really saying
the running time/memory growth of our code grows on the 'order of' some mathematical expression of n.

That sounds really complicated, but it's not. Let's look at a 'real world' example so we understand the terminology a bit better.

### Time complexity

Let's say we have a big jar full of beans. Our job is to count the number of beans in the jar. In this case, the beans are our data, so the number of beans = n.

If we're given a jar with 10 times the number of beans, it takes 10 times as long to count the beans. For example, if it takes us 10 seconds to count a jar with 10 beans, it would take us 100 seconds to count a jar with 100 beans. 10x the number of beans = 10x the amount of time!

Therefore, counting the beans has a time complexity of \`O(n)\` (pronounced "Big O of n"). \`O(n)\` means that the time it takes to complete a task grows as \`n\` (the input data) does, or that the time growth is to the *order of* \`n\`.

Now let's say the jars have labels on them that tell us how many beans are in the jar. No matter how many beans are in the jar, it takes the same amount of time for us to read the label on the jar and know how many beans are in them. This example represents \`O(1)\` (pronounced "Big O of 1", which we refer to as constant time). 

\`O(1)\` means that \`n\` (the input data) isn't involved at all
because no matter the value of \`n\`, the runtime is the same. It takes us 1 second to read the label of the jar with 10 beans and *still* takes 1 second to read the label of the jar with 100 beans!

\`O(1)\` is an ideal runtime for an algorithm. No matter how large our data is, the runtime remains the same. \`O(n)\` may be fine for smaller inputs (counting 10 beans only takes 10 seconds), but the time quickly grows as the input does (counting 10,000 beans takes 10,000 seconds, which is more than two and a half hours!).

### Space complexity

Instead of counting beans, let's say we're sorting them into individual bags. Each bean gets taken out of the large bag and placed into an individual bag. The beans are still \`n\`, and each bag is a new variable that we're storing data in.

This example has a space complexity of \`O(n)\` because the memory growth is to the order of \`n\`. If we have 10 beans, we need 10 bags, but if we have 100 beans, we need 100 bags. The memory used is directly related to the size of \`n\`.

Now let's go back to counting beans. When we finish counting the beans in a jar, we write down the number on a label that we're storing. This represents a space complexity of \`O(1)\`. No matter how many beans there are, the label is the same size and takes up the same amount of memory. The amount of memory used is constant and independent from the size of \`n\`.

Just as we discussed with time complexity, \`O(1)\` is overall better for \`O(n)\` for space complexity, too. If our space complexity is dependent on the size of our input, we can run out of memory if \`n\` becomes extremely large.  With a constant space complexity, we can ensure that we won't have memory issues if \`n\` becomes very large.

## Summary

In this reading, we introduced Big O notation and its use for analyzing code. Big O notation provides us with the terminology to objectively discuss what makes algorithms better or worse than others. We also discussed the concepts of time and space complexity as well as how they can affect performance.


---
How To Determine Big O
---

## Polynomial complexity

In the last reading, we discussed \`O(1)\` and \`O(n)\`. \`O(1)\` is also known as *constant*, because the time/space complexity is always the same and independent from the size of n. \`O(n)\` is also known as *linear*, because the time/space complexity is proportional to the size of \`n\`. This causes a linear relationship between the size of \`n\` and the time/memory taken by the algorithm. The other important notation to discuss is polynomial, which is denoted as \`O(n^c)\`.

> **NOTE:** It's common to write exponents with a \`^\` character. This means 5<sup>2</sup> would be written as 5^2.

A polynomial is a type of mathematical expression comprised of variables, numbers, and operations. In algebra, we see polynomial expressions all the time, such as \`4x + 2y\`. Another common polynomial is an exponent such as \`x^2\` ("x squared" or "x to the 2nd power"), which is equivalent to \`x * x\` (x times x). An exponent is really just a shortened way to write out a polynomial that multiplies the same number multiple times. \`x^8\` is a much quicker (and neater) way to write: "\`x * x * x * x * x * x * x * x\`" or "x times x times x times x times x times x times x times x".

When we're talking about polynomial time/space complexity, we mean an algorithm that runs to the order of \`n^c\`, where \`n\` is still our input size and \`c\` is some number. 

> **Note:** while 'n' is universally used to stand in for the size of the input, the variable used to stand in for the exponent in polynomial complexity varies. We use 'c' in this lesson, but you may also see 'k' or other letters.

It's important to understand that polynomial complexity is just a
general term for any time/space complexity where \`n\` is raised to any power. Common polynomial complexities are \`O(n^2)\` (pronounced "Big O of n squared") and \`O(n^3)\` (pronounced "Big O of n to the third *or* n cubed).

But what does it actually mean for an algorithm to have a polynomial time complexity? 

Let's start by looking at \`O(n^2)\`. If we write this out in its full form, it's: \`n * n\` (n times n). This means that the time complexity it takes to run the algorithm is the input value squared. If our input is 10, then it takes 100 steps to complete the algorithm because 10 * 10 is 100. Similarly, if we're talking about space complexity, then \`O(n^2)\` means that the amount of memory
taken by the algorithm is equal to the input value squared. If we have a complexity of \`O(n^3)\`, the complexity is the input value cubed, etc.

## How to determine Big O

We've discussed the usefulness of Big O notation. Now, how do we apply it to actually determine what the time/space complexity for an algorithm is? There are a few steps to determining Big O for both time and space complexity.

First, we identify which part of our code we want to analyze. This could be a whole class, but generally we're looking at a specific method or maybe even just part of a method. Maybe there's a certain loop inside a method where our code gets hung up and we want to understand why it's taking so long or running out of memory.

Once we've identified the code that we're analyzing, we need to determine what \`n\` is. In our bean counting example, \`n\` was the beans. In the packaging example above, \`n\` was the packages. To determine what \`n\` is, think about what the input data is for our code. 

Finally, we need to count the *steps* in a typical run.

What's a step? Well, there's no clear unit of measurement for Big O, so we think in terms of steps. Steps are very vague because it doesn't actually matter what a step is! When we're talking about Big O, we're looking at how the time or memory grows as n is increased. So, what a step is may change between different algorithms, but what's important is that a step remains consistent within the same algorithm, so we can see how the steps increase relative to n.

When determining the number of steps in an algorithm, we only need to keep the most **significant** part in the expression. For example, if we determine the number of steps is '\`n + 3\`', we can throw out the \`+ 3\` and say that \`O(n)\`.

Why? Well, we want to know what Big O is when \`n\` gets really large and when \`n\` is really large, we don't care about that \`+ 3\`. That \`+ 3\` may matter when \`n\` is 10, but when \`n\` is a billion, it's completely overshadowed.

What if we determine we have '\`3n\`' steps? Once again, we can throw out the '3' and just say \`O(n)\`. When determining Big O, we always want to throw out any lower coefficients and just keep the biggest. So, if our algorithm has '\`n^2 + n^3\`' we would say the algorithm has \`O(n^3)\`. 

Note that this is *not* true for exponents that are multiplied. If your algorithm is '\`n^2 * n^3\`' (n squared times n cubed), this algorithm has \`O(n^5)\`. This is easier to see if we replace n with a number (let's say 2), and then write out the full expression: \`(2 * 2) * (2 * 2 * 2)\`.  The first set of parentheses represents \`2^2\` and the second set represents \`2^3\`. It's easier to see now that we could write the above expression as \`2^5\`.

In the last reading we saw that \`O(1)\` is better than \`O(n)\`, but by how much? How do polynomial complexities fit in there? The best way to visualize the differences between complexities is with a graph.

<img width=700 src="${image1}"/>
[Figure 1]

*Figure 1: Graph displaying the complexities for \`O(n^n)\`, \`O(n^3)\`, \`O(n^2)\`, \`O(n)\`, \`O(log n)\`, and \`O(1)\`.*

*Figure 1* shows the time complexity for \`O(n^n)\`, \`O(n^3)\`, \`O(n^2)\`, \`O(n)\`, \`O(log n)\`, and \`O(1)\`. On the x-axis (horizontal axis) the data input (n) is increasing. On the y-axis (vertical axis) the time is increasing. (You could replace time with space and the graph would remain the same.) 

> **NOTE:** We haven't talked about \`O(n^n)\` or \`O(log n)\` so don't worry about those as much. 

In the graph we notice a few things. First, when \`n\` is really small, \`O(1)\` actually takes the most time, but as \`n\` gets larger, this quickly changes to \`O(1)\` taking the least amount of time (by a lot). Similarly, the polynomial complexities (\`O(n^2)\` and \`O(n^3)\`) take less time than \`O(n)\` when \`n\` is small, but as n gets larger, the time for the polynomial expressions also gets far greater.

It may seem odd to you that there are no units of measurement on the graph. Remember that the steps used to determine Big O don't matter. Calculating Big O is all about the general trend of time or space complexity as n gets larger. It doesn't matter if this graph starts at 0 or 100 and ends at 10 or a billion. It simply represents the general trend of the time complexity as n gets larger.

Something that's important to understand about Big O notation, is that there are a few different cases we may want to measure.

For example, let's say we're at the post office and there's a long table filled with 100 packages. The packages are in random order all addressed to different people. We need to find our package, so we would start at one end of the table and check each package to see if it had our name on it. If it does, we're done! If it doesn't, we move on to the next package. It's possible that we'll get lucky and our package will be the first package on the table. It might even be one of the first five. However, it's just as likely that our package is the *last* package, meaning that we have to check all 100 packages on the table before we find ours. This package sorting exercise has a _worst-case_ time complexity of \`O(n)\`, because the most amount of time we can take is looking at every package.

Instead of the worst case, sometimes we want to talk about the *best* case or the *average* case. It all depends on how we're using our algorithm and how likely we are to reach a certain case.

## Summary

In this reading, we discussed polynomial complexity and how it applies to Big O notation. We also discussed some guidelines for determining Big O, such as 'steps' in code and throwing out less significant coefficients. We also demonstrated how different complexities compare to each other with a visual representation.


---
Determining Big O In Code
---

In the last reading, we covered more details about determining Big O, but we have yet to see it in action. This reading will focus on determining Big O from actual code examples! 

One thing to remember is that Big O is **vague on purpose**. We're not talking about the runtime or memory of code directly, but instead we're using Big O notation to talk about how the runtime/memory *grows* as n does.

Also keep in mind that generally when we discuss Big O, we're concerned about what's happening in the *worst* case. Think back on the graph we showed in the last reading. The time was relatively similar when \`n\` was small. It's when \`n\` gets very large that we start to see significant differences in performance.

## Time complexity

There are a few shortcuts we can use when calculating the time complexity for code. First, arithmetic operations are constant. 

Let's look at the following line of code:

\`\`\`java
double sum = (8 * 4) / 3 + 9;
\`\`\`

All we're doing in this line of code are arithmetic operations, all of which are constant. So, the above line of code has \`O(1)\`. If we have multiple lines with \`O(1)\`, the overall Big O is still \`O(1)\`. 

For example:

\`\`\`java
double num1 = 8 * 4;
double num2 = num1 / 3;
double sum = num2 + 9;
\`\`\`

The above code yields the same result as the previous line of code, just separated into three different lines. Each line is an arithmetic operation, so each line is \`O(1)\`. If all our lines of code are \`O(1)\`, then the code snippet is \`O(1)\`.

Variable assignment is also constant. In the previous snippets of code, both the arithmetic operations and the variable assignment was constant. As we said previously, we can do _any number_ of constant operations in code, and it will still have a time complexity of \`O(1)\`.

Accessing elements in an array (by index) or object (by key) is also constant!

Let's look at the following code snippet:

\`\`\`java
int[] numArray = new int[]{4, 5, 6, 7};

int num1 = numArray[0];
\`\`\`

The code snippet initializes an array, \`numArray\`, and then assigns the value in index 0 to an \`int\`, \`num1\`. This is constant because we're giving the code the index and telling it exactly where to go. The code sees that we're telling it to go to index 0 and it goes right there. This is true no matter what index we give---we're telling it exactly where to look. Since the only other things we're doing in the code snippet are assigning variables, the code snippet has a time complexity of \`O(1)\`.

In a loop, however, the time complexity is the length of the loop times the complexity of whatever happens in the loop.

Let's look at some examples:

\`\`\`java
for(int = 0; i < numArray.length; i++) {
    System.out.println(numArray[i]);
}
\`\`\`

Looking at this loop, we see that \`n\` is the \`numArray\`. Now, there are two steps to finding the time complexity of the loop. First, we determine the length of the loop and determine the complexity of what's happening in the loop. Since the length of the loop is the length of \`numArray\`, the length of the loop is \`n\`.

Next, we look at what's happening in the loop. All we do in the loop is print out the value of the array. We already know that accessing an element in an array is constant, but what about the print statement? The complexity is all dependent on the expression's interaction with \`n\`. Since the print statement takes the same amount of time no matter what the value of \`n\` is, the print statement is also constant. Inside the loop therefore has a constant time complexity, or a complexity of 1.

So, the length of the loop is \`n\` and the complexity inside the loop is 1. If we multiply those two values together: \`n * 1\` (n times 1), we get \`n\`! Therefore, the time complexity of the above code snippet is \`O(n)\`.

Let's look at another loop:

\`\`\`java
for (int firstItem : items) {
    for (int secondItem : items) {
        System.out.println(firstItem + ", " + secondItem);
    }
}
\`\`\`

In the above code, we're nesting two loops. Let's start by determining the length of the first loop. The first loop is iterating through \`items\`, meaning that the length is \`n\`. But, inside that loop is another loop!

To determine the complexity of the inner loop, we once again calculate the length of the loop times the complexity of what's happening inside the loop. The second loop is also iterating through \`items\`, so it has a length of \`n\`. Inside the second loop, it's printing out \`firstItem\` and \`secondItem\`. As we discussed in the previous example, print statements are constant. The complexity of the second loop is therefore \`n * 1\` (n times 1), which equals \`n\`. 

To find Big O for the code snippet, we now multiply the length of the first loop (n) by the complexity inside the loop, which we just determined is also n: \`n * n\` (n times n) equals \`n^2\`. The above code snippet has a time complexity of \`O(n^2)\`!

So, if the array has 10 items, we end up with 100 print statements. If the array has 1,000 items, we end up with 1,000,000 print statements!

Let's look at some more examples and assess their time complexity!

Assess the time complexity of the following method:

\`\`\`java
public void printItemsTwice(int[] items) {
    for (int item : items) {
        System.out.println(item);
    }

    for (int i = 0; i < items.length; i++) {
        System.out.println(item);
    }
}
\`\`\`

The above method has two separate loops. There's for-each loop that prints out all the numbers in \`items\` and a for loop that also prints out all the numbers in \`items\`. The \`n\` is items. Therefore, the first loop has a length of \`n\`, and the complexity inside the loop is constant. Our first loop has a time complexity of \`n\`. But we want to know the time complexity of the entire method---not just the first loop. 

Let's look at the time complexity for our second loop. Once
again, the length of the loop is \`n\` and the complexity inside is constant. (These loops do the same exact thing!) The second loop has a time complexity of \`n\`. 

To determine the complexity of the entire method, we add the complexities of the loops together: \`n + n\` (n plus n), which equals \`2n\`. As we discussed in the last reading, we can always throw out constants. They don't matter when n gets really large.  If we throw out the 2, we're left with n. So, the time complexity for this method is \`O(n)\`!

Let's look at one more example:

\`\`\`java
public static void printAllNumbersThenAllPairSums(int[] numbers) {
    System.out.println("these are the numbers.");
    for (int number : numbers) {
        System.out.println(number);
    }

    System.out.println("and these are their sums.");
    for (int firstNumber : numbers) {
        for (int secondNumber : numbers) {
            System.out.println(firstNumber + secondNumber);
        }

    }
}
\`\`\`

In the above method, we have two separate loops. Let's start by figuring out the time complexity for the first one:

\`\`\`java
System.out.println("these are the numbers.");
for (int number : numbers) {
    System.out.println(number);
}
\`\`\`

The print statement outside of the loop has a constant time complexity. The loop has a length of \`n\` and the internal complexity is constant. The loop therefore has a time complexity of \`n * 1\` (n times 1), which equals \`n\`. Since the print statement outside the loop is constant, this first section has a time complexity of \`n\`.

Let's figure out the time complexity for the second loop:

\`\`\`java
System.out.println("and these are their sums.");
for (int firstNumber : numbers) {
    for (int secondNumber : numbers) {
        System.out.println(firstNumber + secondNumber);
    }
}
\`\`\`

The print statement outside the loop has a constant time complexity. The loop has a length of \`n\` and the internal complexity is another loop. The internal loop has a length of \`n\` and a constant internal complexity.  So, the inner loop has a complexity of \`n\`. We multiply the length of the first loop and its inner complexity: n * n \`(n times n)\`, which equals \`n^2\`.

Okay, so the first loop in our method has a time complexity of \`n\` and the second loop in our method has a time complexity of \`n^2\`. Since these two loops are independent from each other, we would add the two values together: \`n + n^2\`. As we discussed in the last reading, we're only interested in the most significant terms.  We can throw out the less significant terms. This means that we can get rid of the \`n\` and we're left with \`n^2\`. The time complexity for this method is \`O(n^2)\`.

## Space complexity

The previous examples were all about time complexity, but what about determining the space complexity of code?  Determining space complexity functions very similarly to time complexity, but we're looking at the total size of any new variables we're allocating. It's important to remember that when we're talking about space complexity, we're interested in how the memory usage changes as \`n\` does.

Let's look at an example:

\`\`\`java
public void sayHiNTimes(int n) {
    for (int i = 0; i < n; i++) {
        System.out.println("hi");
    }
}
\`\`\`

The above code has a loop that prints out "hi" a given number of times. Even though we have a loop, we're just printing out a statement. We're not allocating any additional memory. No matter what the size of n is, we're using the same amount of memory. Since the amount of space being used is independent of \`n\`, the above method has a constant space complexity: \`O(1)\`.

Other times, the amount of space used is directly dependent on \`n\`. 

Let's look at the following example:

\`\`\`java
public String[] arrayOfHiNTimes(int n) {
    String[] hiArray = new String[n];
    for (int i = 0; i < n; i++) {
        hiArray[i] = "hi";
    }

    return hiArray;
}
\`\`\`

In the above example, we're creating an array the size of \`n\`, setting the value of each index in the array to "hi", and then returning the array. The important line to look at here is the array initialization. The array's size is determined by \`n\`. This means that the memory used in this method is directly dependent upon the size of \`n\`. If we look at the rest of the method, there's nothing else that takes up any additional space.  (The loop is just setting the value of each index to "hi".) The space complexity for the above method is \`O(n)\`.

Let's consider one last example:

\`\`\`javascript
function getLargestItem(items) {
    let largest = Number.MIN_SAFE_INTEGER;
    for (let item of items) {
        if (item > largest) {
            largest = item;
        }
    }

    return largest;
}
\`\`\`

The above method finds and returns the largest value in an \`int\` array. The first line of the method uses the \`Integer.MIN_VALUE\` method to set a minimum value for largest as a default value. Next, we have a for loop that processes all the values in the \`items\` array and compares each value to the current largest number. Whichever number is largest at the end is returned.

It's important to understand that when we talk about space complexity, we're talking about *additional* space that's affected by our input. Even though the length of the loop is affected by the size of n, we're not allocating any additional space in the loop. We're just (potentially) changing the value of one variable, \`largest\`. The singular variable in the method is not affected by the size of \`n\`. It's constant. This method has a space complexity of \`O(1)\`.

## Common trade-offs

When considering Big O, there are sometimes trade-offs we must make. Sometimes we must decide between having a better optimized time complexity *or* a better optimized space complexity. There's no right answer for which is more important. It really depends on our code and its usage.

Additionally, sometimes to attain the best time and/or space complexity, we must give up other important features. To create Big O efficient code, we might sacrifice readability sometimes. Readability is very important, especially if we're working on a team who also needs to be able to utilize that code. We don't want to focus so much on optimizing time and space complexity that our code is barely legible to an outside eye.

It's also **very important** to understand that sometimes we'll never (or it's extremely unlikely) reach the worst case. Before we spend hours trying to optimize our method with a polynomial time complexity, think about whether \`n\` will ever get really large. If \`n\` will stay a reasonable size, it may not be worth the time, effort, and readability it will take to improve the time complexity. Sometimes it's worth it, **especially if we're running into issues with our code during testing**.

## Conclusion

In this reading, we analyzed several different pieces of code to determine their time and space complexities.  We went over some general rules for determining complexity, such as arithmetic operations and variable assignment being constant. We then discussed trade-offs that are important to consider when determining whether to optimize our code. Big O is an important concept to understand for code analysis, but not every piece of code needs to be optimized.

---
Introduction to Arrays
---

## JavaScript Arrays

At this point, we feel pretty familiar with arrays. They're useful ways of storing information in one variable. They provide quick and efficient access to elements with indexes.

Let's say we work in a coffee shop and we want to keep track of the orders in an array. In JavaScript, arrays are dynamic by default, meaning they can grow and shrink as needed. This makes them perfect for storing coffee orders without worrying about predefined sizes.

JavaScript arrays allow us to keep track of elements, access elements by index, *and* have a flexible length. We can create an array for our coffee orders like this:

\`\`\`javascript
let coffeeOrders = [];
\`\`\`

And store orders like "large Frappuccino".

### JavaScript Array Methods

JavaScript arrays come with many built-in methods that make working with them convenient. If a new element is added, the array automatically grows to accommodate it. This ensures we always have enough space for new elements without wasting memory.

To initialize an array, we can use several approaches:

\`\`\`javascript
let coffeeOrders = []; // Empty array
let coffeeOrders = new Array(); // Alternative syntax
let coffeeOrders = ["order1", "order2"]; // With initial values
\`\`\`

We will review some commonly used array methods below. You can find more information in the [MDN Array documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

### push() method

We can add new elements to our array using the \`push()\` method. The \`push()\` method adds an element to the end of the array.

For our coffee orders example, it makes the most sense to add orders to the end of the list:

\`\`\`javascript
coffeeOrders.push("small coffee");
\`\`\`

### splice() method for insertion

Let's say a customer comes up to our counter. She says she's waited for 10 minutes and her order hasn't come out yet (oh no!). We want to add her order higher up in the list to ensure she gets it sooner. We can use the \`splice()\` method:

\`\`\`javascript
coffeeOrders.splice(5, 0, "large latte");
\`\`\`

This adds her order, large latte, at index 5. The first parameter is the index, the second is how many elements to remove (0 in this case), and the third is the element to insert.

When we insert a value by index, the elements in the array have to move around a bit. For example, if we insert a value at index 5, the elements that are currently at index 5 and above are shifted to the right to make space for the new value we're inserting. This means the value that was at index 5 is moved to index 6, and the value that was at index 6 is moved to index 7, and so on... The new value is then inserted at index 5. Adding an element at a given index therefore has a runtime of \`O(n)\` because the worst case is we insert a value at index 0 and have to shift all \`n\` elements.

### Accessing elements by index

We can access elements in our array using bracket notation. This method functions by giving an index and returning the element stored at that index:

\`\`\`javascript
coffeeOrders[5];
\`\`\`

This returns the element stored in index 5, which we know is "large latte".

> **NOTE:** Arrays start at index \`0\` just like in other programming languages.

When we get a value, we're giving the index, which tells the code exactly where to look in memory. Just like accessing any array element by index, this has a runtime of \`O(1)\`. It doesn't matter how many elements are in the array, it always takes a constant time to retrieve the value.

### splice() method for removal

We can remove elements from our array using the \`splice()\` method. To remove an element, we give the method an index and specify how many elements to remove. Let's say we made a mistake on someone's order and want to remove the order from our list:

\`\`\`javascript
coffeeOrders.splice(10, 1);
\`\`\`

This removes 1 element at index 10 from the array and returns an array containing the removed element(s).

When we remove a value by index, there are a few steps we need to take. If we remove the value at index 10, that value is first removed. Then, all the values at index 11 and beyond (12, 13, etc.) are shifted to the left to fill in the gap left by the removed index. This means that the indexes for these values also changes. The value that previously had an index of 11 has an index of 10... etc. Just like adding an element by index, removing an element has a runtime of \`O(n)\`. At worst, we delete the value at index 0 and have to shift all \`n\` elements to the left to fill in the gap.

### Iterating over the Array

You can iterate over all the elements in an array and perform an operation on each element. To do this, it's useful to know the \`length\` property. The \`length\` property returns the current number of elements in the array. It's very useful when iterating over an array.

Let's say we want to print all the orders currently in our array. We can do this like the following:

\`\`\`javascript
for (let i = 0; i < coffeeOrders.length; i++) {
    console.log(coffeeOrders[i]);
}
\`\`\`

The above code iterates through and prints out all the elements in the array.

We can also use JavaScript's "for...of" loop:

\`\`\`javascript
for (let order of coffeeOrders) {
    console.log(order);
}
\`\`\`

## Conclusion

In this lesson, we discussed JavaScript arrays, which are data structures that keep track of elements, access elements by index, *and* have a flexible length. We learned about the \`push()\`, \`splice()\`, and bracket notation for accessing elements. We also saw how to iterate over arrays. Using our newfound knowledge about Big O, we also discussed the runtime complexity for these methods.


---
Using Arrays to Maintain an Ordered Collection of Objects
---

In this example we will look into a coffee shop example, where the orders for different type of coffee are coming in a specific sequence. We will see how we can use arrays to maintain the sequence of orders and make sure that the order that came in first is also the one that gets processed first.

To build the solution we will use two classes:

- An \`Order\` class, which will keep the information on the type of the coffee and table number
- A \`CoffeeShop\` class, which will keep the array of all orders, the methods to add a new order, and a method to process all the pending orders in the order that they were received.

\`\`\`javascript
class Order {
  constructor(type, table) {
    this.table = table;
    this.type = type;
  }

  serve() {
    console.log(\`Serving \${this.type} to table \${this.table}\`);
  }
}
\`\`\`

\`\`\`javascript
class CoffeeShop {
  constructor() {
    // Create new array to store orders
    this.orders = [];
  }

  takeOrder(type, table) {
    const order = new Order(type, table);
    this.orders.push(order);
  }

  processOrders() {
    for (let i = 0; i < this.orders.length; i++) {
      this.orders[i].serve();
    }
    // Now that we've served them, remove all Orders from the array.
    this.orders = [];
  }
}
\`\`\`

The important things to notice here are:

- When we take an order, it gets added to the end of the array: \`push()\` always adds the element to the end of the array
- When orders are processed, they are processed from the first received order to the last, keeping the original sequence unchanged.

Let's now see the \`CoffeeShop\` in action!

\`\`\`javascript
// Create a new coffee shop
const shop = new CoffeeShop();

shop.takeOrder("Cappuccino", 2);
shop.takeOrder("Frappe", 1);
shop.takeOrder("Espresso", 1);
shop.takeOrder("Frappe", 5);
shop.takeOrder("Cappuccino", 6);
shop.takeOrder("Frappe", 3);
shop.takeOrder("Espresso", 3);

shop.processOrders();
\`\`\`

The output produced by running the code:

\`\`\`text
Serving Cappuccino to table 2
Serving Frappe to table 1
Serving Espresso to table 1
Serving Frappe to table 5
Serving Cappuccino to table 6
Serving Frappe to table 3
Serving Espresso to table 3
\`\`\`

As we can see, the output produced matches what we wanted. The orders are processed in the sequence of arrival.

---
Array Runtime Complexity
---

In this section we're going to explore the runtime complexity of the most important JavaScript array operations in relation to number of elements present in the array. So the number of elements in the array will be our "N" in our Big-O notation.

## Accessing values by index

- JavaScript arrays are implemented as objects with numeric keys, but modern JavaScript engines optimize them to behave like traditional arrays for performance.
- The property of JavaScript arrays is that accessing an element by index runs in constant time O(1) regardless of the number of elements "N". By providing the index, you are telling the code exactly where to look in memory.
- Since JavaScript arrays are optimized for index-based access, accessing the value by index is achieved in constant time O(1), regardless of the number of elements "N" in the array.

## Insert or remove value by index

Both insertion and removal of a value by its index in JavaScript arrays run in linear time O(N), where N is the number of elements in the array. Let's see why!

### Insert value by index

Let's start with the following array:

\`\`\`javascript
let list = [11, 99, 0, 5, 14, 89, 23, 7, 1, 10];
\`\`\`

What happens if we now decide to insert the value of 55 at index 3?

\`\`\`javascript
list.splice(3, 0, 55);
\`\`\`

Two things will need to happen:

- All the values starting from index 3 will be shifted to the right to make space for the value we're inserting.
- New value is going to be inserted at index 3

Here's how that is going to look:

<img width=700 src="${picture1}"/>
[Inserting an element into an Array]

This shifting of values is exactly the reason why insertion of a value at a specific index runs in linear time O(N). In worst case we'll need to shift N values (inserting the value at the start), in best case we won't need to shift any value (insert the value at the end). On average we will still need to do N/2 shifts per insertion operation, and as we learned in previous lesson, N/2 operations = O(N), since we drop the constant scaling factor.

### Remove value by index

Starting from the same array as we did for insertion:

\`\`\`javascript
let list = [11, 99, 0, 5, 14, 89, 23, 7, 1, 10];
\`\`\`

But this time we'll remove the value 23 at index 6:

\`\`\`javascript
list.splice(6, 1);
\`\`\`

The result of this change is going to be similar to what we observed for insertion:

- The value at index 6 will be removed
- All other values are going to be shifted to the left

Here's how the removal is going to look:

<img width=700 src="${picture2}"/>
[Removing an element from an Array]

Similar to the insertion, the shifting of elements to the left is the reason why deletion runs in linear time. In the worst case, we will need to shift N-1 elements to the left (when we remove the first element from the array). In the best case we won't need to shift any elements (removing the last element from the array). On average we will still need to shift the same number of elements as we did for insertion (N/2). This means that the deletion is also going to run in linear time in relation to number of elements N, O(N).
  `,
  exercise: null
};