## Introduction

<iframe width="1120" height="630" src="https://www.youtube.com/embed/PzYOXuUS6Lg?si=miTudZKVKqmDBJHl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


### Reading

You are a member of a team of eight developers who frequently pair up to collaborate. Figure 1 below shows one possible arrangement of pairings:

<img width=700 src="assets/teams3.png"/>

**Figure 1:** Four pairs of developers. There are eight developers in total, labeled A through H.

One day, your manager begins a pair-programming initiative. In pair-programming, one developer in the pair, called the driver, uses the computer and writes code. The other developer, called the navigator, observes and makes suggestions. Because the navigator focuses on reviewing rather than writing code, finding errors in the code is easier. The resulting code has fewer mistakes than if it were written by a developer who was not pair-programming.

To make this initiative easier, your manager asks you to write a program that will print every possible pair of driver and navigator. By creating a program to both pair the developers and assign them their pair-programming roles, your manager hopes to reduce the time the team spends organizing their roles for the day.

Remember that there are two distinct pairs for each set of developers, because only one developer can drive at a time. For example, if Developer A is the driver and Developer B is a navigator, that's one pair. If Developer B is the driver and Developer A is the navigator, that's an entirely separate pair as shown by Figure 2 below:

<img width=400 src="assets/pair.png"/>

**Figure 2:** Two separate pairs of developers. In the first pair, Developer A is the driver and Developer B is the navigator. In the second pair, Developer B is the driver and Developer A is the navigator.

The order of the pair makes a difference because only one member of the pair can be the driver at a time.

Which is larger: the number of ways the team can collaborate in pairs (meaning they form pairs to work together without distinct roles), or the number of ways the team can be paired off to pair-program?

The answer may not be obvious, especially because the only difference between the two scenarios is whether the order of the pairing matters. Understanding this difference is important not just for counting the number of ways we can divide the team, but for estimating the time for calculating and generating the pairs. Beyond writing fast code, developers often write code to organize groups of data and count such groups. Ordering may be a requirement, or it could be irrelevant.

This reading establishes the basics of two types of organizing and counting groups of data: permutations and combinations.

## Permutations

A **permutation** is an arrangement of items in which the order of the items matters. For example, imagine you have three marbles, each a distinct color. How many permutations of three are there? That is, how many different ways are there to place three marbles in a row?

> **permutation** - an arrangement of items in which the order of the items matters.

We can start by placing each marble in a line, as shown in Figure 3:

<img width=500 src="assets/marbles1.png"/>

**Figure 3** Three marbles in a line. The marbles are red, blue, and green.

Then, by changing the order of the marbles, we can count out all the unique orderings of three, as shown in Figure 4:

<img width=400 src="assets/marbles2.png"/>

**Figure 4** All six permutations of three colored marbles.

There are six possible orderings of three, assuming the order of the marble colors makes a difference.

### Counting permutations

When we count the number of permutations in a small group, writing out and counting all the possibilities is easy. However, as the number of items grows, manual counting isn't always possible. In these cases, it is useful to have a method for calculating permutations mathematically.

We can think about permutations in terms of multiplication. In our marble example there are three positions and three differently colored marbles. We can fill the first position by any of the three marbles, so we mark down a 3 like so:

```
3 × _ × _
```

Now, because we have selected one of the three marbles to fill the gap, there are only two possible choices for the marble in the second position. We multiply 3 by 2 to represent the number of ways we can pick the first two marbles:

```
3 × 2 × _
```

3 × 2 = 6, so we know that there are six ways to select the first two marbles. Finally, we have only one marble left to fill the remaining slot. We multiply by one to represent the final marble:

```
3 × 2 × 1
```

The result of this multiplication is still 6, which is unsurprising because we had no choice but to place the remaining marble in the final position. In this way we verify there are 6 possible permutations by calculating 3 × 2 × 1, instead of calculating the answer manually.

In general, we can calculate a permutation by multiplying the number of possible choices at each position until we exhaust the number of positions. This method works even when the number of positions is less than the number of choices available.

### Step-by-step permutations

For example, imagine we now have five marbles, each distinctly colored, as before. How many ways are there to organize these five marbles into groups of three?

As before, we begin by calculating the number of possible choices we have.

**Step 1.** Because there are five marbles, we have five choices:
```
5 × _ × _
```

**Step 2.** Next, we have four remaining marbles, so we multiply by four:
```
5 × 4 × _
```

**Step 3.** Finally, we have three choices, so we multiply by three:
```
5 × 4 × 3
```

Because we are out of positions to fill with any more marbles, we can stop here. The result of 5 × 4 × 3 is 60, so there are 60 ways to arrange five colored marbles in groups of three.

If we return to our pair-programming example, we see that there are eight possibilities and two positions to fill. We have eight choices, so we begin by multiplying eight by an unknown choice:

```
8 × _
```

Followed by our choice of the remaining seven team members:

```
8 × 7
```

The result of this multiplication is 56, so there are 56 possible permutations of team members.

### Permutations with repetition

What happens when we are allowed to repeat items in a permutation? Like before, we start with 26 possibilities:

```
26 × _ × _ × _ × _ × _ = _
```

However, because we are allowed to repeat each letter as often as we like, we don't reduce the number of possibilities to 25 after the first position is filled. If we fill each of the positions with 26, we see that there are

```
26 × 26 × 26 × 26 × 26 × 26 = 308,915,776
```

possible passwords. If we increase the password length, the number of possibilities increases. A password of length 7 has

```
26 × 26 × 26 × 26 × 26 × 26 × 26 = 80,331,810,176
```

possible values.

Using permutations, we can calculate the security levels of passwords. The more possible passwords, the better, because the higher number decreases the chance that a malicious agent gains access to sensitive information.

## Combinations

When we arrange a group of items such that the ordering doesn't matter, we say we create a combination.

> **combination** - an arrangement of items in which the order of the items does not matter.

Recall the three marbles from earlier, as shown in Figure 5. How many combinations of three are there?


<img width=700 src="assets/marbles3.png"/>

**Figure 5** Three marbles arranged in a line. The marbles are red, blue, and green.

The marbles are distinct and colored differently. But when we determine the number of combinations, we don't care about the ordering of these colors. The arrangement shown in Figure 5 is one combination, and it's the same combination as a blue-green-red arrangement, or a green-red-blue arrangement. There is only one combination of three.

When we calculate combinations, we ignore differences in ordering. Imagine you are ordering fast food at a drive-thru. You place your order, perhaps for a burger, a drink, and some fries, then proceed to the pickup window. The order in which you receive these three items doesn't matter. All you care about is whether you receive all the food you paid for. If the restaurant employees give you your fries before your burger, it would be exactly the same as if you had received the burger before your fries.

### Counting combinations

When calculating combinations, we generally calculate the number of permutations and then remove all the "extra" arrangements by dividing. For example, in our marbles example, there are six possible permutations of the three colors:

```
3 × 2 × 1 = 6
```

But because all six permutations contain the same three items we know that they are part of the same combination. We need to divide out the number of ways to arrange three objects from the number of permutations. First, we calculate the number of unique orderings:

```
3 × 2 × 1 = 6
```

Which is also six. Then, we divide the number of permutations by the number of orderings:

```
6 / 6 = 1
```

So, the number of combinations is one, just like the marble example shown in Figure 5 above.

What if we had five marbles and needed to calculate the number of combinations of three? First, we calculate the number of permutations. Because there are five possible choices and three positions, the number of permutations is equal to:

```
5 × 4 × 3 = 60
```

But because we don't care about the ordering of the marbles, we can divide out the number of ways we can arrange three objects:

```
3 × 2 × 1 = 6
```

So, the number of ways we can pick three objects from a group of five without regard for order is equal to:

```
60 / 6 = 10
```

We see that there are 10 possible combinations of three, given five marbles. Figure 6 below shows every possible combination of red, blue, green, purple, and yellow marbles:

<img width=400 src="assets/marbles4.png"/>

**Figure 6** All possible three-marble combinations of five total marbles. The marbles are colored red, blue, green, purple, and yellow.

### Step-by-step combinations

Let's return to our introductory example. Your manager now asks you to write a program that will print every possible pair for collaborating (not pair programming). How many pairs of eight developers are there? Remember that order doesn't matter when you're just paired off for collaborating.

**Step 1.** First, we calculate the number of permutations:
```
8 × 7 = 56
```

**Step 2.** Then, we calculate the number of ways to arrange two people in a pair:
```
2 × 1 = 2
```

**Step 3.** Finally, we divide the number of permutations by the number of ways two people can be paired:
```
56 / 2 = 28
```

We see that there are just 28 possible combinations of developers. At last, we can answer our original question: the number of pair-programming pairs is larger than the number of collaborative pairs.

By adding the constraint of order, we increase the number of possible configurations. If we don't care about order, this increase is divided away. In general, the number of permutations is always larger than or equal to the number of combinations.

<iframe width="1120" height="630" src="https://www.youtube.com/embed/yXS-JnaCC78?si=UZ2KGu8l1l8OZ8dU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

**[Video: review of the above concepts. Figures are given to explain the differences between combinations and permutations. For example, we ask participants to consider the difference between the number of ways to arrange books on a shelf and the number of ways to toss books into a bag, disrupting the order].**

## I do

Let's review our understanding of combinations and permutations by exploring a few examples. Imagine you plan a garden. You can plant roses, pansies, tulips, violets, snapdragons, and poppies. However, your garden is only wide enough to allow four plants to grow side-by-side. How many ways are there to order your flowers?

In this problem, we know we deal with a permutation because the arrangement of the four flowers matters. We begin with an empty garden plot with four empty spots:

```
_ × _ × _ × _
```

In the first spot, there are six possible flowers:

```
6 × _ × _ × _
```

We can plant one of five possible flowers in the second slot:

```
6 × 5 × _ × _
```

And in the last two slots we can plant one of four and three possible flowers, respectively:

```
6 × 5 × 4 × 3
```

Multiplying all the possibilities together, we see that there are 360 ways to arrange the six flowers across four spaces.

What if order doesn't matter? That is, how many combinations are there? We know that there are 360 permutations, so all we need to do is calculate the number of ways to arrange four objects:

```
4 × 3 × 2 × 1 = 24
```

Then, we divide 360 by 24:

```
360 / 24 = 15
```

We calculate 15 different combinations of four, given six possible flowers.

## You do

Suppose a customer places an order for seven packages before leaving on a one-week vacation. When the customer returns, five of the seven packages have been delivered. How many possible ways are there for five of seven packages to arrive? Is this number larger or smaller than the number of ways five out of seven packages could be delivered if the arrival order was important?

**Hint:** Think about how the number of ways to arrange seven objects impacts your calculations. Where does it make sense to take this number into consideration?

## We do

<iframe width="1120" height="630" src="https://www.youtube.com/embed/_1wjsRZqUGU?si=_sVAab30v5AFJVkW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

**[Video: walk through the calculation of the above permutation and combination. Explain with visual aid how the ordering of the packages contributes to the larger number of possible selections].**

## Conclusion

In this reading we introduced the basics of combinations and permutations. We learned that by taking order into consideration, we increase the number of ways we can select items from a larger group. This relationship is important for developers trying to estimate the number of steps a program will take to complete a particular task. Generating and counting different groups of data a common task in software development. An understanding of these concepts will make you a more effective developer, and may even enable you to write more efficient code.