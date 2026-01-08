## Introduction

### Polynomials Explanatory Video
<iframe  width="1120" height="630" src="https://www.youtube.com/embed/gl5GAPA8XmQ?si=8C8f43MTgNPTiiuH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Reading

Imagine you and a coworker are preparing two equally sized rooms for a team party. Your coworker is covering the floor of one room with a single area rug, while you are covering the floor of the second room with several smaller carpets, as shown in Figure 1 below.

<img width=700 src="assets/rugs1.png"/>

**Figure 1:** Laying out rugs in two equally-sized rooms. One room contains a single large rug, while the other contains four thin carpets.

Although the two rooms have the same size floor space, it takes you significantly longer to decorate the room on the right as you have to spend time repeatedly taking the service elevator down to the storage closet to grab more carpets. And if the rooms were bigger, as we will look at in the next section, your task would take even more time. In other words, the growth rate of your task is larger than that of your coworker's.

Growth rate problems show up all the time in software development. Often, software engineers can implement a software feature by choosing between several algorithms. Even though the result of each algorithm is exactly the same, the time and memory the algorithm takes to do the task might vary wildly. Being able to assess the fastest and most memory efficient algorithm at a glance is extremely useful for writing efficient code. To do so, you'll often need some basic mathematical tools and concepts.

## Polynomial equations

Polynomials are among the most common tools we use to discuss and compare growth rates. Polynomials can describe a wide variety of tasks, including our introductory example of laying out carpet for an office party. A polynomial is a mathematical expression comprising variables, numbers, and operations, such as addition, subtraction, or multiplication.

**expression** -- a sequence of numbers, symbols, variables, and operations that can be evaluated to get a single result.

*Example: 2 + 3*

Recall our carpet example. Figure 1 shows that a single area rug decorates the same space as four thin carpets. If the rooms were twice as large, we would need two large area rugs and eight thin carpets. And if the rooms were four times as large, we would need four area rugs and 16 thin carpets, as shown in Figure 2.

<img width=700 src="assets/rugs2.png"/>

**Figure 2:** Laying out rugs in two equally sized rooms. The first room requires four area rugs, while the second room requires 16 thin carpets.

For every large area rug we add, we need four additional thin carpets. If we let r represent the number of rugs and c the number of carpets, then the formula to calculate the necessary number of carpets is:

```
c = 4r
```

Remember that when we write out multiplication, we often omit the multiplication sign; 4r is the same as writing 4 × r or 4 ⋅ r. This tells us that no matter the value of r, we always know how many carpets we'll need. We only have to multiply r by 4 to get our answer. So if r is 10, then we need 4 × 10 = 40 carpets.

The expression 4r in the example above is a polynomial. Even simple polynomials like 4r are useful for capturing problems like our carpet example, since they give us a way to produce an output (in this case, the number of carpets) given some input (the number of rugs).

As another example, consider the polynomial 2x. This polynomial always evaluates to twice the value of x. Think of it like a machine that converts any number into its double. If x is equal to 9, then the value of 2x is 2 × 9 = 18.

Let's look at another polynomial and identify its key parts:

<img width=700 src="assets/polynomial.png"/>

**Figure 3:** The polynomial 2x + 5. Arrows indicate the variable, operator, and coefficients in the expression.

In this example, the variable is x. We call x a variable because it varies, meaning its value is not a specific number but, instead, we use it to represent some numeric value. Any letter can represent a variable, though the most common are x, y, and z. Next, the plus sign + is an operator; it operates on 2x and 5 by adding them together. Don't forget your order of operations: multiplication comes first in expressions, so 2x + 5 tells us to multiply 2 by x first, and then add 5 to the result. If x is equal to 5, the polynomial evaluates to 2 × 5 + 5 = 10 + 5 = 15.

If the terms variable and operator seem familiar, it may be because JavaScript also has variables and operations. For example, the following JavaScript code prints the result of an expression containing one variable (y) and one operation (subtraction):

```javascript
console.log(y - 20);
```

The other two components of 2x + 5 are the numbers 2 and 5. We call these numbers coefficients when they are a part of a polynomial. The combination of a coefficient and a variable is called a term. A coefficient without a variable attached to it is also a term. In the polynomial above, there are two terms: 2x and 5.

**coefficient** -- any number that appears in a polynomial, either multiplied with a variable or on its own.

*Example: 3y - 2 includes the coefficients 3 and 2*

**term** -- a combination of coefficients and variables, or a number on its own.

*Examples: 4x, 12g, 100*

### Explore

Let's look at a second example:

```
4n - 10
```

There are two terms in this polynomial: 4n and 10. The variable is n, and the coefficients are 4 and 10.

If we return to our carpet example, we see that the polynomial to describe the number of smaller carpets contains one term, 4r:

```
c = 4r
```

A polynomial equation provides a concise way to write how values change in relation to one another. 

**In software engineering, the most common relationship we describe is the relationship between an input size and the number of steps it takes to complete a task.**

For example, imagine you are writing a program that displays the name, address, and userID for each account in an array. So, there are three pieces of information that you'll need to output for every user: name, address, and userID. If you have five users, you must output15 pieces of information in total (three pieces of information for each user). This takes 15 steps. If we let s represent the number of steps, the polynomial equation that describes this relationship is:

```
s = 3u
```

where u represents the number of users.

So, if we are have five users, we take 3 × 5 = 15 steps to complete our job, and if we are working with 100 users, the job will take 3 × 100 = 300 steps.

## Degree of polynomials

So far we have looked at polynomials that grow relatively slowly. Our carpeting polynomial (4r) adds four carpets for every rug, while our user display program polynomial (3u) adds three steps for every additional user. In real life, however, many problems have much faster growth rates.

Imagine you have a one foot by one foot square of fabric, as shown in Figure 4 below:

<img width=300 src="assets/degrees1.png"/>

**Figure 4:** One square foot of fabric. Each side of the square measures one foot.

The area of this square is one square foot, calculated by multiplying the length of each side: 1 × 1 = 1 square foot. Let's increase the length of each side to two feet, as shown in Figure 5 below:

<img width=300 src="assets/degrees2.png"/>

**Figure 5:** Four square feet of fabric. Each side of the square measures two feet.

You might expect the area of the square to also increase by one foot. After all, we only added a foot to the sides of the square. But if we calculate the new area, we see that 2 × 2 = 4 square feet, instead of the expected two. Figure 5 shows that our two square foot piece of fabric is made up of four squares identical to the size of the square in Figure 4. If we add another foot to the sides of the square, we get 3 × 3 = 9 square feet. The area of the square is growing at a faster rate than simple addition. To represent this rate of growth, we must look to another mathematical operation: exponents.

Let's think about how operations like multiplication work. When we multiply two numbers together, we just add a number to itself repeatedly. For example, 2 × 4 is the same as saying "take four 2s and add them all together." So 2 × 4 is equal to 2 + 2 + 2 + 2.

An exponent is an operation that works according to a similar rule. Instead of adding repeatedly, an exponent tells us to multiply repeatedly.

An exponent is written as a small number above another number or variable, like 3². The exponent in this example is 2, which tells us to multiply two 3s. So 3² = 3 × 3, which equals 9. The exponent in 4³ is 3, which tells us to multiply three 4s: 4³ = 4 × 4 × 4 = 64.

**exponent** -- a number written over another one indicating how many times the second number is multiplied by itself.

*Example: 2³ = 2 × 2 × 2 = 8*

Many polynomials have terms with exponents. These exponents are called the degree of the term. In term 2x, the degree is just 1. This is because it contains a hidden exponent and can be equivalently written 2x¹. The exponent 1 leaves the original number the same.

The polynomial

```
x² + x
```

contains two terms: x² (degree=2) and x (degree=1). Polynomial degree is the highest degree in the polynomial's terms. In the polynomial above, the polynomial degree is 2 because the term with the highest degree is x².

**degree** -- the size of the exponent operating on a term. In a polynomial, degree refers to the largest exponent of all the terms.

*Example: In the polynomial 2x + 10, the polynomial degree is just 1.*

The higher the degree of a polynomial, the faster the rate of growth.

### Explore

Returning to our square foot example, if we let s represent the length of the side in feet, we can write the polynomial to calculate the area of a square of fabric:

```
A = s²
```

The result will be in square feet. If the length of each side is three feet, the area is 3² = 3 × 3 = 9 square feet. If the length is four feet, the area is 4² = 4 × 4 = 16 square feet.

<img width=300 src="assets/degrees3.png"/>

**Figure 6:** A nine square feet room. The room contains nine one square foot tiles.

Imagine you are walking through a square room with a floor covered in one square foot tiles, as shown in Figure 6. If it takes you two seconds to walk across each tile, how many seconds will it take you to walk across a three by three room?

If we let n represent the length of each side of the room, and T the time in seconds it takes to walk across each of the tiles, the polynomial that describes this problem is:

```
T = 2n²
```

Plugging in 3 for n, we see that it takes 2 × 3² = 2 × 3 × 3 = 18 seconds to walk across each tile in a three by three foot room. And if the room were 10 feet by 10 feet, it would take 2 x 10² = 2 × 10 × 10 = 200 seconds to walk across all the tiles.

The following chart shows how this rate of growth compares to a polynomial of degree one:

| 2n | 2n² |
|----|-----|
| 2 × 2 = 4 | 2 × 2² = 8 |
| 2 × 4 = 8 | 2 × 4² = 32 |
| 2 × 8 = 16 | 2 × 8² = 128 |

> **Note**
> 
> Observe how quickly the polynomial 2n² grows in relation to 2n. Doing no more arithmetic than we absolutely need to, we can determine that if n = 100, 2n² will be significantly larger than 2n. We can say the same of algorithms: we don't always know how big a computational problem is, but we can use polynomials to estimate which algorithm will outperform another.

## I do

Writing out and evaluating polynomials is not the only way to determine how quickly they grow. If we represent each polynomial as a graph, we can gain a visual understanding of how the values change.

### 1-degree Polynomial graph

The equation y = x is represented by the graph in Figure 7.

<img width=700 src="assets/linear-curve.png"/>

**Figure 7:** Graph of the equation y = x. The graph is a straight line that intersects the x and y axes at 0.

The vertical line represents the values of y (rising from bottom to top), while the horizontal line represents the increasing values of x (moving from left to right). By tracing the diagonal line from left to right we see that for x = 0, y = 0; x = 2, y = 2; and so on. This polynomial's growth rate is a steady, linear increase.

### 2-degrees Polynomial graph

The graph in Figure 8 represents the polynomial y = x².

<img width=700 src="assets/exponential-curve.png"/>

**Figure 8:** Graph of y = x². The graph is an arc that meets the x and y axes at 0 and slopes upward.

This graph is more complicated than y = x. If we pay attention only to the values to the right of the vertical axis, we see that when x = 2, y = 4. The values of y increase so quickly that we can't even see the value of y = 25 when x = 5.

Figure 9 shows a graph of the tile-counting polynomial from before: y = 2x².

<img width=700 src="assets/exponential-curve2.png"/>

**Figure 9:** Graph of y = 2x². The graph is a narrow arc that meets both axes at 0 and slopes upwards.

This graph may look similar to the graph of y = x² but look closely at the width of the arc. The additional multiplication with 2 narrows the distance between the two sloping lines, which causes the value of y to increase even faster as the value of x increases. Note also that although the variable names have changed from T to y and n to x, the values remain the same.

By leveraging graphs, we can properly order several polynomial equations by their growth rates.

### Explore

Let's try to use graphs to estimate how long a particular job will take.

Suppose your manager asks you to help the members of your development team install an IDE plugin to make programming easier. You expect it will take about four minutes to help each team member complete the installation, plus one minute after all the installations are complete to walk back to your desk. However, you aren't sure how many people you need to help; you know some people have already installed the plugin. How many minutes do you expect to spend helping your team?

**Step 1.** Because we have an unknown quantity (the number of team members), we can let a variable stand in for the missing value. Let's pick x for simplicity, and let m represent the number of minutes spent on the task. So far, our polynomial equation looks like

```
m = x
```

**Step 2.** Next, we must account for the time spent helping each individual team member. Because we expect spending four minutes for every team member, we represent the time by multiplying x by 4. Now we have

```
m = 4x
```

**Step 3.** Finally, we account for the minute it takes to walk back to the desk after helping all the team members. We add 1 and have our final polynomial:

```
m = 4x + 1
```

Figure 10 presents the graph of this polynomial. Note how by adding 1, we shift the entire line up by one minute. This is because no matter how many team members need help, it will always take one minute to walk back to the desk.

<img width=700 src="assets/linear-curve2.png"/>

**Figure 10:** Graph of m = 4x + 1. The graph slopes upward and shows that m = 9 when x = 2.

From the graph we see that if x = 2 (meaning we help two team members), we can expect to spend nine minutes. We can also see that we can expect to spend more than 10 minutes once the number of team members reaches 3. Also note that although x is always positive for this problem, the graph is a general representation of m = 4x + 1 where x can also be a negative number.

### Video - I do

#### Polynomials I Do Video
<iframe  width="1120" height="630" src="https://www.youtube.com/embed/01jq1iZ2npo?si=DaiOMOSxC6SvyvqF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## You do

Imagine you are writing code to calculate the number of squares on different chessboards. Each chessboards is a large square consisting of equally sized small squares. Assume the size of each small square never changes.

How many squares exist on boards of different sizes, given the number of squares per side?

What is the degree of the polynomial that describes the number of steps taken to solve this problem?

### Hint

Think back to our work with square footage. How did we calculate the area of a square of fabric?

## We do

Compare your solution against this video.

### Polynomials We Do Video
<iframe width="1120" height="630" src="https://www.youtube.com/embed/aj2W3ablLVg?si=ocDmwCcgPQQfw4n2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Conclusion

In this lesson, we learned that a polynomial is a special type of mathematical expression made up of terms. Each term is made up of variables and numbers called coefficients. We saw how we can use polynomials to describe problems in terms of their growth rates. This is important for developers looking to improve the speed and efficiency of code. In your day-to-day activities as a software engineer, you make decisions about which problems to tackle, and which algorithms better solve these problems. With an understanding of polynomials, you will make informed decisions moving forward.