### Recommended Podcast Episode

**[A friendly intro to Big O Notation](https://www.codenewbie.org/basecs/8)**

### Visualization Tool
**N/A**

### Supplemental Reading
**[introduction to algorithms](https://www.geeksforgeeks.org/introduction-to-algorithms/)**
**[introduction to data structures](https://www.geeksforgeeks.org/dsa/data-structure-meaning/)**

### Use Big O Wisely: It's Not Always the Priority

Understanding Big O notation is a valuable skill — it helps you reason about how your code will scale as input sizes grow. But it's just as important to keep this knowledge in perspective. If you're working with an array that will only ever have 5 elements, it doesn't matter whether your solution is O(n) or O(n²).

So how do you know when performance actually matters? It matters when your input size can grow unpredictably — like when you're processing user data, large files, or anything in a real-world application where scale isn't capped. It matters when a slow solution leads to noticeable lag, wasted resources, or poor user experience. It also matters in interviews when you're asked to analyze and improve a naive solution.

But in many practice settings — don't obsess over squeezing out the most optimized version right away. Premature optimization can get in the way of understanding. Focus first on solving the problem clearly and correctly. Once you're confident in your logic, then start asking, "How can I make this more efficient?" You'll build deeper skills that way — and avoid getting lost in optimization rabbit holes that don't matter.

A great article that lays out why premature optimization often backfires is [**"Premature Optimization is (Still) the Root of All Evil" by Daniel Tunkelang**](https://dtunkelang.medium.com/premature-optimization-is-still-the-root-of-all-evil-a3502c2ea262). It builds on a famous computer scientists Donald Knuth's advice, explaining how rushing for performance without solid reasons often leads to complex, fragile code. The piece emphasizes that **you should first ship correct, well-tested code, then optimize using real data**—not guesswork.

Also check out this video discussion titled [**"Premature Optimization is the Root of All Evil | Donald Knuth and Lex Fridman."**](https://www.youtube.com/watch?v=74RdET79q40) It's a great refresher on why clarity should come before speed.